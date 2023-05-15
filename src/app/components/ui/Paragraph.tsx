import { cn } from "@/app/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes, ReactNode, forwardRef } from "react";

const paragraph = cva(
  ["text-[#6b7280] font-[400] text-[18px] mt-2 leading-normal"],
  {
    variants: {
      intent: {
        normal: "",
        muted: "",
      },
      alignment: {
        left: "text-left",
        centered: "text-center",
      },
    },
    defaultVariants: {
      intent: "normal",
      alignment: "left",
    },
  }
);

interface ParagraphProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraph> {
  children?: ReactNode;
}

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ children, intent, className, alignment }, ref) => {
    return (
      <p ref={ref} className={cn(paragraph({ intent, alignment, className }))}>
        {children}
      </p>
    );
  }
);

export default Paragraph;
