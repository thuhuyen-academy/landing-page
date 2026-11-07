// Component Table hiển thị bảng thông tin khóa học và cấp độ
import * as React from "react";
import { cn } from "@/lib/utils";

export function Table({
  className,
  ...props
}: React.TableHTMLAttributes<HTMLTableElement>) {
  return (
    <div className="relative w-full overflow-auto">
      <table
        className={cn("w-full caption-bottom text-sm text-left", className)}
        {...props}
      />
    </div>
  );
}

