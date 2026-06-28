import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "bg-foreground text-background shadow-soft hover:shadow-card hover:-translate-y-0.5",
        primary:
          "bg-primary text-primary-foreground shadow-soft hover:bg-primary/92 hover:shadow-card hover:-translate-y-0.5",
        pink: "text-white shadow-[0_10px_30px_-10px_rgba(236,72,153,0.5)] bg-[linear-gradient(135deg,#F9A8D4_0%,#F472B6_38%,#EC4899_100%)] hover:-translate-y-0.5 hover:brightness-[1.03] hover:shadow-[0_16px_40px_-12px_rgba(236,72,153,0.55)]",
        secondary:
          "bg-secondary text-secondary-foreground shadow-soft hover:bg-secondary/92 hover:-translate-y-0.5",
        accent: "bg-accent text-accent-foreground shadow-soft hover:bg-accent/92",
        outline:
          "bg-white/60 text-foreground backdrop-blur-md ring-1 ring-foreground/[0.08] shadow-soft hover:bg-white hover:ring-foreground/[0.12] hover:-translate-y-0.5",
        ghost: "text-foreground hover:bg-black/[0.04]",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-5 py-2 text-sm",
        sm: "h-9 px-4 text-[13px]",
        lg: "h-12 px-7 text-[15px]",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
