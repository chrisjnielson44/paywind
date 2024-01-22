"use client"

import * as React from "react"
import { Check, ChevronsUpDown, PlusIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"

const frameworks = [
  {
    value: "Dashboard-1",
    label: "Dashboard 1",
  },
  {
    value: "Dashboard-2",
    label: "Dashboard 2",
  },
  {
    value: "stocksfocused",
    label: "Stocks Focused",
  },
  {
    value: "cryptofocused",
    label: "Crypto Focused",
  },

]

export function SelectDashboard() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("Dashboard-1")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className=" w-[150px] md:w-[200px] justify-between"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Select Dashboard..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search Dashboard..." />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {frameworks.map((framework) => (
              <CommandItem
                key={framework.value}
                value={framework.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue)
                  setOpen(false)
                }}
                className="md:text-sm"
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === framework.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {framework.label}
              </CommandItem>
            ))}
            <Separator/>
            <CommandItem>
                <div className="pt-1 flex items-center justify-center">
                <PlusIcon className="mr-2 h-4 w-4" /> 
                <p className="text-sm">New Dashboard</p>
                </div>
            </CommandItem>
          </CommandGroup>

        </Command>
      
      </PopoverContent>
    </Popover>
  )
}
