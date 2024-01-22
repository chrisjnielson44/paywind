import { cookies } from "next/headers"
import Image from "next/image"
import { Metadata } from "next"

import { Mail } from "./components/mail"
import { accounts, mails } from "./data"
import { FullNav } from "../components/nav/full-nav"

export const metadata: Metadata = {
  title: "Inbox",
}

export default function MailPage() {
  const layout = cookies().get("react-resizable-panels:layout")
  const collapsed = cookies().get("react-resizable-panels:collapsed")

  const defaultLayout = layout ? JSON.parse(layout.value) : undefined
  // const defaultCollapsed = collapsed ? JSON.parse(collapsed.value) : undefined

  return (
    <>
      <FullNav/>
        <Mail
          accounts={accounts}
          mails={mails}
          defaultLayout={defaultLayout}
          // defaultCollapsed={defaultCollapsed}
          navCollapsedSize={4}
        />
    </>
  )
}
