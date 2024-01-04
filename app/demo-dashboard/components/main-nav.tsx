import Link from "next/link"

import { cn } from "@/lib/utils"

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/demo-dashboard"
        className="text-sm font-semibold transition-colors hover:text-primary"
      >
        Overview
      </Link>
      <Link
        href="/demo-dashboard"
        className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
      >
        Stocks
      </Link>
      <Link
        href="/demo-dashboard"
        className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
      >
        Crypto
      </Link>
      <Link
        href="/demo-dashboard/settings/general"
        className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
      >
        Settings
      </Link>
    </nav>
  )
}