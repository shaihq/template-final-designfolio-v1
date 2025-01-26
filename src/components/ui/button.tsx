import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "template-ds-inline-flex template-ds-items-center template-ds-justify-center template-ds-whitespace-nowrap template-ds-rounded-md template-ds-text-sm template-ds-font-medium template-ds-ring-offset-background template-ds-transition-colors focus-visible:template-ds-outline-none focus-visible:template-ds-ring-2 focus-visible:template-ds-ring-ring focus-visible:template-ds-ring-offset-2 disabled:template-ds-pointer-events-none disabled:template-ds-opacity-50",
  {
    variants: {
      variant: {
        default: "template-ds-bg-primary template-ds-text-primary-foreground hover:template-ds-bg-primary/90",
        destructive:
          "template-ds-bg-destructive template-ds-text-destructive-foreground hover:template-ds-bg-destructive/90",
        outline:
          "template-ds-border template-ds-border-input template-ds-bg-background hover:template-ds-bg-accent hover:template-ds-text-accent-foreground",
        secondary:
          "template-ds-bg-secondary template-ds-text-secondary-foreground hover:template-ds-bg-secondary/80",
        ghost: "hover:template-ds-bg-accent hover:template-ds-text-accent-foreground",
        link: "template-ds-text-primary template-ds-underline-offset-4 hover:template-ds-underline",
      },
      size: {
        default: "template-ds-h-10 template-ds-px-4 template-ds-py-2",
        sm: "template-ds-h-9 template-ds-rounded-md template-ds-px-3",
        lg: "template-ds-h-11 template-ds-rounded-md template-ds-px-8",
        icon: "template-ds-h-10 template-ds-w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }