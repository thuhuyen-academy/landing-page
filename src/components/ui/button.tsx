// Component Button theo chuẩn thiết kế của Landing Page Huyền Hannah
import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "yellow" | "outline";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", type = "button", ...props }, ref) => {
    const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
      default: "btn",
      yellow: "btn btn-yellow",
      outline: "btn btn-outline",
    };

    return (
      <button
        ref={ref}
        type={type}
        className={cn(variantClasses[variant], className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

