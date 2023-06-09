import * as React from "react"
import Link from "next/link"
import { SignedIn, SignedOut } from "@clerk/nextjs"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

interface MainNavProps {
  privateNav?: NavItem[]
  publicNav?: NavItem[]
}

export const MainNav = ({ privateNav, publicNav }: MainNavProps) => {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="inline-block font-bold">{siteConfig.name}</span>
      </Link>
      <SignedIn>
        <nav className="flex gap-6"></nav>
        {privateNav?.map(
          (item, index) =>
            item.href && (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  "flex items-center text-sm font-medium text-muted-foreground",
                  item.disabled && "cursor-not-allowed opacity-80"
                )}
              >
                {item.title}
              </Link>
            )
        )}
      </SignedIn>
    </div>
  )
}
