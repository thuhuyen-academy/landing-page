// Component Badge hiển thị nhãn trạng thái và cấp độ khóa học
import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "yellow" | "navy" | "outline";
}

export function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  const variants: Record<NonNullable<BadgeProps["variant"]>, string> = {
    default: "bg-[#eaf2fb] text-[var(--blue)] border-[var(--line)]",
    yellow: "bg-[#f7e9aa] text-[var(--navy)] border-transparent",
    navy: "bg-[var(--navy)] text-white border-transparent",
    outline: "bg-white text-[var(--ink)] border-[var(--line)]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-bold",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}

