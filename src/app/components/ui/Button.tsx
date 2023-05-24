import { cn } from "@/app/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { FC, HTMLAttributes, ReactNode, forwardRef } from "react";

const button = cva(
  ["rounded-md flex flex-row justify-center  w-full bg-[#111827] text-white"],
  {
    variants: {
      intent: {
        primary: "",
        secondary: "",
        success: "bg-green-600",
      },
      size: {
        normal: "py-4 px-4",
        tiny: "py-2 px-4",
      },
      activity: {
        loading: "opacity-30",
        active: "",
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "normal",
    },
  }
);

interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  children: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, intent, size, activity, ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        className={cn(button({ intent, size, activity, className }))}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
