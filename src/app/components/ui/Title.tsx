import { cn } from "@/app/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes, ReactNode, forwardRef } from "react";

const title = cva([" text-zinc-50"], {
  variants: {
    intent: {
      title: "text-md",
      subtitle: "",
    },
  },
  defaultVariants: {
    intent: "title",
  },
});

interface TitleProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof title> {
  children?: ReactNode;
}

const Title = forwardRef<HTMLHeadingElement, TitleProps>(
  ({ children, className, intent, ...props }, ref) => {
    return (
      <h1 ref={ref} {...props} className={cn(title({ intent, className }))}>
        {children}
      </h1>
    );
  }
);

Title.displayName = "Title";

export default Title;
