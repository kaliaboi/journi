import { cn } from "@/app/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { FC, HTMLAttributes, ReactNode, forwardRef } from "react";

const button = cva(
  [
    "rounded-md flex flex-row justify-center p-4 w-full bg-[#111827] text-white",
  ],
  {
    variants: {
      intent: {
        primary: "",
        secondary: "",
      },
    },
  }
);

interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  children: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, intent, ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        className={cn(button({ intent, className }))}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
