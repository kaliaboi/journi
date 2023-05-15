import { cn } from "@/app/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes, ReactNode, forwardRef } from "react";

const paragraph = cva(["text-md mt-2 leading-relaxed"], {
  variants: {
    intent: {
      normal: "text-zinc-400",
      muted: "",
    },
  },
  defaultVariants: {
    intent: "normal",
  },
});

interface ParagraphProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraph> {
  children?: ReactNode;
}

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ children, intent, className }, ref) => {
    return (
      <p ref={ref} className={cn(paragraph({ intent, className }))}>
        {children}
      </p>
    );
  }
);

export default Paragraph;
