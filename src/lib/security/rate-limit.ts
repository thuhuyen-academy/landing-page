// Bộ giới hạn tần suất gọi API (Rate Limiter) theo IP để chống spam biểu mẫu đăng ký học thử
import { NextRequest } from "next/server";

interface RateLimitEntry {
  count: number;
  resetAt: number;
}

const rateLimitStore = new Map<string, RateLimitEntry>();
const MAX_STORE_ENTRIES = 5000;

// Dọn dẹp các bản ghi đã hết hạn khi bộ nhớ đệm vượt ngưỡng để tránh tràn RAM khi bị flood
function cleanupRateLimitStore(now: number) {
  if (rateLimitStore.size < MAX_STORE_ENTRIES) return;
  for (const [key, entry] of rateLimitStore.entries()) {
    if (now > entry.resetAt) {
      rateLimitStore.delete(key);
    }
  }
  if (rateLimitStore.size >= MAX_STORE_ENTRIES) {
    const firstKey = rateLimitStore.keys().next().value;
    if (firstKey) rateLimitStore.delete(firstKey);
  }
}

// Lấy địa chỉ IP của client từ request header
export function getClientIp(request: NextRequest): string {
  const cfConnectingIp = request.headers.get("cf-connecting-ip");
  if (cfConnectingIp) return cfConnectingIp.trim();

  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }

  return "127.0.0.1";
}

// Kiểm tra xem client có vượt ngưỡng số lượng request cho phép trong khoảng thời gian hay không
export function checkRateLimit(
  identifier: string,
  maxRequests: number,
  windowMs: number
): { allowed: boolean; remaining: number; resetInSeconds: number } {
  const now = Date.now();
  cleanupRateLimitStore(now);
  const existing = rateLimitStore.get(identifier);

  if (!existing || now > existing.resetAt) {
    rateLimitStore.set(identifier, {
      count: 1,
      resetAt: now + windowMs,
    });
    return {
      allowed: true,
      remaining: maxRequests - 1,
      resetInSeconds: Math.ceil(windowMs / 1000),
    };
  }

  if (existing.count >= maxRequests) {
    return {
      allowed: false,
      remaining: 0,
      resetInSeconds: Math.max(1, Math.ceil((existing.resetAt - now) / 1000)),
    };
  }

  existing.count += 1;
  rateLimitStore.set(identifier, existing);

  return {
    allowed: true,
    remaining: maxRequests - existing.count,
    resetInSeconds: Math.max(1, Math.ceil((existing.resetAt - now) / 1000)),
  };
}

