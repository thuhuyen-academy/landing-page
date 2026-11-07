// Middleware tích hợp Auth0 (/auth/login, /auth/logout, /auth/callback, /auth/profile) và bảo vệ Rate Limit cho /api/*
import { NextRequest, NextResponse } from "next/server";
import { auth0 } from "@/lib/auth0";
import { checkRateLimit, getClientIp } from "@/lib/security/rate-limit";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/api/")) {
    // Chặn các request gửi body quá lớn (> 64KB) để tránh tấn công làm nghẽn bộ phân tích JSON
    const contentLength = Number(request.headers.get("content-length") || "0");
    if (contentLength > 65536) {
      return NextResponse.json(
        { error: "Dữ liệu gửi lên vượt quá kích thước cho phép" },
        { status: 413 }
      );
    }

    // Giới hạn tổng số lệnh gọi API từ 1 IP: tối đa 30 request mỗi phút
    const ip = getClientIp(request);
    const rate = checkRateLimit(`global-api:${ip}`, 30, 60 * 1000);
    if (!rate.allowed) {
      return NextResponse.json(
        {
          error: `Too many requests from your IP. Please try again in ${rate.resetInSeconds} seconds.`,
        },
        {
          status: 429,
          headers: {
            "Retry-After": String(rate.resetInSeconds),
          },
        }
      );
    }
  }

  // Nếu đã cấu hình biến môi trường Auth0, tự động gắn các route /auth/login, /auth/logout, /auth/callback, /auth/profile
  if (auth0) {
    return await auth0.middleware(request);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
