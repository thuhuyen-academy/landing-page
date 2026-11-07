// Các hàm tiện ích định dạng tiền tệ, ngày tháng và gộp class Tailwind CSS
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Gộp các class CSS và xử lý xung đột Tailwind
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

// Định dạng số tiền sang chuẩn USD
export function formatUsd(amount: number): string {
  return `$${Number(amount).toFixed(2)}`;
}

// Định dạng thời gian sang chuẩn hiển thị Việt Nam
export function formatDateTime(isoString: string | null | undefined): string {
  if (!isoString) return "—";
  try {
    return new Intl.DateTimeFormat("vi-VN", {
      dateStyle: "short",
      timeStyle: "medium",
    }).format(new Date(isoString));
  } catch {
    return isoString;
  }
}

// Chuyển chuỗi tiếng Việt thành đường dẫn tĩnh (slug)
export function slugify(input: string): string {
  return input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

