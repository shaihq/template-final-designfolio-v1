import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("template-ds-animate-pulse template-ds-rounded-md template-ds-bg-muted", className)}
      {...props}
    />
  )
}

export { Skeleton }