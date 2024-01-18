import { Metadata } from "next"
import Image from "next/image"

import { Separator } from "@/components/ui/separator"
import { SidebarNav } from "./components/sidebar-nav"
import { Nav } from "../components/nav"

export const metadata: Metadata = {
  title: "Settings",
  description: "",
}

const sidebarNavItems = [
  {
    title: "Profile",
    href: "/demo-dashboard/settings",
  },
  {
    title: "Account",
    href: "/demo-dashboard/settings/account",
  },
  {
    title: "Appearance",
    href: "/demo-dashboard/settings/appearance",
  },
  {
    title: "Notifications",
    href: "/demo-dashboard/settings/notifications",
  },
  {
    title: "Display",
    href: "/demo-dashboard/settings/display",
  },
]

interface SettingsLayoutProps {
  children: React.ReactNode
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <>
      <Nav />
      <div className=" space-y-4 p-8 pb-16 ">
        <div className="space-y-0.5">
          <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground">
            Manage your account settings and set e-mail preferences.
          </p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex-1 lg:max-w-2xl">{children}</div>
        </div>
      </div>
    </>
  )
}
