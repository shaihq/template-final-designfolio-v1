import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "template-ds-flex template-ds-h-10 template-ds-w-full template-ds-rounded-md template-ds-border template-ds-border-input template-ds-bg-background template-ds-px-3 template-ds-py-2 template-ds-text-sm template-ds-ring-offset-background file:template-ds-border-0 file:template-ds-bg-transparent file:template-ds-text-sm file:template-ds-font-medium placeholder:template-ds-text-muted-foreground focus-visible:template-ds-outline-none focus-visible:template-ds-ring-2 focus-visible:template-ds-ring-ring focus-visible:template-ds-ring-offset-2 disabled:template-ds-cursor-not-allowed disabled:template-ds-opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }