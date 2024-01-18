import {
    BellIcon,
    ArrowTrendingUpIcon,
    ArrowTrendingDownIcon,
    CurrencyDollarIcon,
    CheckCircleIcon,
    CheckBadgeIcon,
  } from "@heroicons/react/24/outline";
  
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
import { Check, XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
  
  export function Notifications() {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"outline"} size={"icon"}><BellIcon className="h-6 w-6 fill-currentColor" /> </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Notifications</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
          <DropdownMenuItem>
            <Check className="mr-2 h-4 w-4 text-green-500" />
            <span>Order for NVDA placed successfully</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <XIcon className="mr-2 h-4 w-4 text-red-500" />
            <span>Order for NVDA placed successfully</span>
          </DropdownMenuItem>
            <DropdownMenuItem>
              <ArrowTrendingUpIcon className="mr-2 h-4 w-4 text-green-500" />
              <span>Apple up by 5%</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <ArrowTrendingDownIcon className="mr-2 h-4 w-4 text-red-500" />
              <span>ETH down by 3%</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CurrencyDollarIcon className="mr-2 h-4 w-4 text-blue-500" />
              <span>Market Update: Indices climb</span>
            </DropdownMenuItem>
            {/* Add more notifications as needed */}
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <span>See all notifications</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }
  