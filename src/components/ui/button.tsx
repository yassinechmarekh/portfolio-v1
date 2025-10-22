import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-xs xs:text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",

        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary !px-0 !py-0 hover:text-cyan-600 dark:hover:text-cyan-300 underline-offset-4 hover:underline",
        primary:
          "bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 border border-cyan-600 dark:border-cyan-500/30 rounded-full font-semibold tracking-wide transition-all duration-300 ease-in-out hover:bg-cyan-500/20 dark:hover:shadow-[0_0_20px_theme(colors.cyan.500/50%)] focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black",
        secondary:
          "bg-gray-200/20 dark:bg-transparent text-black dark:text-gray-400 border border-gray-400 dark:border-gray-700 rounded-full font-semibold tracking-wide transition-all duration-300 ease-in-out hover:text-black dark:hover:text-white hover:border-gray-400 dark:hover:border-gray-500 hover:bg-white dark:hover:bg-gray-800/20 dark:hover:shadow-[0_0_15px_theme(colors.gray.700/50%)] focus:outline-none focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-8 xs:h-10 px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
