import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  {
    variants: {
      variant: {
        default: "",
        sticker: [
          "relative inline-block isolate z-0 select-none",
          "before:content-[''] before:absolute before:inset-0 before:-z-10 before:rounded-[0px]",
          "before:bg-[#6C2EB9] before:border-2 before:border-black",
          "before:rotate-[-3deg] before:translate-x-[2px] before:-translate-y-[1px]",
        ].join(" "),
      },
      size: { sm: "text-sm", md: "text-lg", lg: "text-2xl" },
    },
    defaultVariants: { variant: "default", size: "md" },
  }
);

type LabelProps = React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
  VariantProps<typeof labelVariants>;

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  LabelProps
>(({ className, variant, size, children, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants({ variant, size }), className)}
    {...props}
  >
    {}
    <span
      className={cn(
        "relative z-10 inline-block rounded-[0px] border-2 border-black bg-[#C4F015] font-semibold text-[#12151a]",
        "px-5 py-1",
        "rotate-[3deg] translate-x-[2px] -translate-y-[1px]"
      )}
    >
      {children}
    </span>
  </LabelPrimitive.Root>
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
