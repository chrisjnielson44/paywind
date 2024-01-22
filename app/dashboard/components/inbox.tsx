import {
    // Import an icon suitable for Inbox/Messages
    InboxIcon, // Assuming EnvelopeIcon is your inbox icon
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
  import { Button } from "@/components/ui/button";
import Link from "next/link";
  
  export function Inbox() {
    return (
        <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"outline"} size={"icon"}><InboxIcon className="h-6 w-6 fill-currentColor" /></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Inbox</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {/* Example Message Items with Red Ping for Unread Messages */}
          <DropdownMenuItem>
            <div className="flex items-center">
              <span className="h-2 w-2 pr-2 bg-red-500 rounded-full mr-2" /> {/* Red Ping */}
              <span>Message from John Doe about Portfolio Update</span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuSeparator/>
          <DropdownMenuItem>
            <div className="flex items-center">
              <span className="h-2 w-2 bg-red-500 rounded-full mr-2 pr-2" /> {/* Red Ping */}
              <span>Reminder: Meeting with Jane Smith Tomorrow</span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuSeparator/>
          <DropdownMenuItem>
            <div className="flex items-center">
              <span className="h-2 w-2 bg-red-500 rounded-full mr-2 pr-2" /> {/* Red Ping */}
              <span>Alert: New Investment Opportunity</span>
            </div>
          </DropdownMenuItem>
          {/* Add more messages as needed */}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href='/dashboard/inbox'>See all messages</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    )
  }