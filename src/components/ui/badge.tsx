import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "template-ds-inline-flex template-ds-items-center template-ds-rounded-full template-ds-border template-ds-px-2.5 template-ds-py-0.5 template-ds-text-xs template-ds-font-semibold template-ds-transition-colors focus:template-ds-outline-none focus:template-ds-ring-2 focus:template-ds-ring-ring focus:template-ds-ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "template-ds-border-transparent template-ds-bg-primary template-ds-text-primary-foreground hover:template-ds-bg-primary/80",
        secondary:
          "template-ds-border-transparent template-ds-bg-secondary template-ds-text-secondary-foreground hover:template-ds-bg-secondary/80",
        destructive:
          "template-ds-border-transparent template-ds-bg-destructive template-ds-text-destructive-foreground hover:template-ds-bg-destructive/80",
        outline: "template-ds-text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }