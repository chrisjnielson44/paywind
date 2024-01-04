"use client"

import * as React from "react"
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
import { PlusSmallIcon } from "@heroicons/react/24/outline"
import { useRouter } from "next/navigation"

export function CommandLine() {
    const [open, setOpen] = React.useState(false)

    const router = useRouter();

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "s" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                router.push('/demo-dashboard/settings/general');
            }
        };

        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, []);

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }

        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])

    return (
        <>
            <p className="text-sm text-muted-foreground">
                Press{" "}
                <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                    <span className="text-xs">⌘</span>J
                </kbd>
            </p>
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
                            <CreditCard className="mr-2 h-4 w-4" />
                            <span>Stocks</span>
                            <CommandShortcut>⌘B</CommandShortcut>
                        </CommandItem>
                        <CommandItem>
                            <Settings className="mr-2 h-4 w-4" />
                            <span>Crypto</span>
                            <CommandShortcut>⌘S</CommandShortcut>

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
                </CommandList>
            </CommandDialog>
        </>
    )
}
