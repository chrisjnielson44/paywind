"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { DialogProps } from "@radix-ui/react-alert-dialog"
import {
    CircleIcon,
    FileIcon,
    LaptopIcon,
    MoonIcon,
    SunIcon,
} from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"

import {
    Calculator,
    Calendar,
    CoinsIcon,
    ConeIcon,
    CreditCard,
    LineChartIcon,
    Settings,
    Smile,
    User,
} from "lucide-react"
import { PlusSmallIcon } from "@heroicons/react/20/solid"

export function CommandMenu({ ...props }: DialogProps) {
    const router = useRouter()
    const [open, setOpen] = React.useState(false)
    const { setTheme } = useTheme()

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
                if (
                    (e.target instanceof HTMLElement && e.target.isContentEditable) ||
                    e.target instanceof HTMLInputElement ||
                    e.target instanceof HTMLTextAreaElement ||
                    e.target instanceof HTMLSelectElement
                ) {
                    return
                }

                e.preventDefault()
                setOpen((open) => !open)
            }
        }

        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])

    const runCommand = React.useCallback((command: () => unknown) => {
        setOpen(false)
        command()
    }, [])

    return (
        <>
            <Button
                variant="outline"
                className={cn(
                    "relative w-full justify-start rounded-[0.5rem] bg-background text-sm font-normal text-muted-foreground shadow-none sm:pr-5 lg:w-64"
                )}
                onClick={() => setOpen(true)}
                {...props}
            >
                <span className="hidden lg:inline-flex">Type a command or search...</span>
                <span className="inline-flex lg:hidden">Search...</span>
                <kbd className="pointer-events-none absolute right-[0.3rem] mt-1 top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                    <span className="text-xs">⌘</span>K
                </kbd>
            </Button>
            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                        <CommandEmpty>No results found.</CommandEmpty>
                        <CommandGroup heading="Suggestions">
                            <CommandItem>
                                <PlusSmallIcon className="mr-2 h-4 w-4" />
                                <span>Add New Widget</span>
                            </CommandItem>
                            <CommandItem>
                                <LineChartIcon className="mr-2 h-4 w-4" />
                                <span>Trade</span>
                            </CommandItem>
                            <CommandItem>
                                <CoinsIcon className="mr-2 h-4 w-4" />
                                <span>View Crypto</span>
                            </CommandItem>
                        </CommandGroup>

                        <CommandSeparator />

                        <CommandGroup heading="Pages">
                            <CommandItem>
                                <User className="mr-2 h-4 w-4" />
                                <span>Overview</span>
                                <CommandShortcut>⌘P</CommandShortcut>
                            </CommandItem>
                            <CommandItem>
                                <LineChartIcon className="mr-2 h-4 w-4" />
                                <span>Stocks</span>
                                <CommandShortcut>⌘B</CommandShortcut>
                            </CommandItem>
                            <CommandItem>
                                <CoinsIcon className="mr-2 h-4 w-4" />
                                <span>Crypto</span>
                                <CommandShortcut>⌘H</CommandShortcut>

                            </CommandItem>
                         
                        </CommandGroup>

                        <CommandSeparator />

                        <CommandGroup heading="Settings">
                            <CommandItem>
                                <User className="mr-2 h-4 w-4" />
                                <span>Profile</span>
                                <CommandShortcut>⌘P</CommandShortcut>
                            </CommandItem>
                            <CommandItem>
                                <CreditCard className="mr-2 h-4 w-4" />
                                <span>Manage Subscription</span>
                                <CommandShortcut>⌘B</CommandShortcut>
                            </CommandItem>
                            <CommandItem>
                                <Settings className="mr-2 h-4 w-4" />
                                <span>Settings</span>
                                <CommandShortcut>⌘S</CommandShortcut>

                            </CommandItem>
                        </CommandGroup>

                    <CommandSeparator />
                    <CommandGroup heading="Theme">
                        <CommandItem onSelect={() => runCommand(() => setTheme("light"))}>
                            <SunIcon className="mr-2 h-4 w-4" />
                            Light
                        </CommandItem>
                        <CommandItem onSelect={() => runCommand(() => setTheme("dark"))}>
                            <MoonIcon className="mr-2 h-4 w-4" />
                            Dark
                        </CommandItem>
                        <CommandItem onSelect={() => runCommand(() => setTheme("system"))}>
                            <LaptopIcon className="mr-2 h-4 w-4" />
                            System
                        </CommandItem>
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </>
    )
}
