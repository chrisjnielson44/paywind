'use client'
import { Button } from "@/components/ui/button"
import { DropdownMenuShortcut } from "@/components/ui/dropdown-menu"
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu"
import { signOut } from "next-auth/react"


export function SignOutButton() {
    return(
        <button onClick={() => signOut()}>
        Log out
      </button>
    )
}