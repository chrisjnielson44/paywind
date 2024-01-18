'use client'
import Link from "next/link";
import { MainNav } from "./main-nav";
import { Search } from "./search";
import { UserNav } from "./user-nav";
import Image from "next/image";

import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Bars3Icon, BellIcon, InboxIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ModeToggle } from '@/app/old-dashboard/components/DarkModeToggle'
import { CommandMenu } from "./command-menu";
import { Notifications } from "./notifications";
import { Button } from "@/components/ui/button";
import { Inbox } from "./inbox";


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}


export function Nav() {
  const pathname = usePathname();

  return (
    <Disclosure as="nav" className="bg-white shadow-lg dark:shadow-none dark:bg-background dark:border-b dark:border-zinc-700 sticky top-0 z-50">
      {({ open }) => (
        <>
          <div className="mx-auto px-4 ">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="100 0 300 500" className="fill-green-500 dark:fill-white" height={75} width={75}><path d="M170.4 215.3c-18.8 0-32.7 13.9-32.7 31.8s14.7 31.8 32.7 31.8 31.8-14.7 31.8-31.8c-.8-17.9-14.7-31.8-31.8-31.8zm3.2 93.1c-14.2 0-27.6-4.1-35.9-10.6v49.6h-33.4V187.3h33.4v8.9c8.4-6.5 21.7-10.6 35.9-10.6 33.4 0 61.8 26 61.8 60.9s-28.4 61.9-61.8 61.9zm163.2-1.5-16.3-68.4-16.3 68.4h-40.7l-30.1-119.6h32.5l19.5 82.2 20.3-82.2h32.5l20.3 82.2 18.7-82.2h31.7l-31.7 119.6h-40.4z" /></svg>
                </div>
                <div className="hidden lg:ml-6 lg:block">
                  <div className="flex space-x-4">
                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                    <Link href="/dashboard" className={`rounded-md px-3 py-2 text-sm font-medium ${pathname === '/dashboard' ? 'bg-zinc-200 dark:bg-zinc-800 text-black dark:text-white' : 'text-black dark:text-gray-300 hover:bg-zinc-200 dark:hover:bg-zinc-800 dark:hover:text-white'}`}>
                      Overview
                    </Link>
                    <Link href="/dashboard/stocks" className={`rounded-md px-3 py-2 text-sm font-medium ${pathname === '/dashboard/stocks' ? 'bg-zinc-200 dark:bg-zinc-800 text-black dark:text-white' : 'text-black dark:text-gray-300 hover:bg-zinc-200 dark:hover:bg-zinc-800 dark:hover:text-white'}`}>
                      Investments
                    </Link>
                    <Link href="/dashboard/crypto" className={`rounded-md px-3 py-2 text-sm font-medium ${pathname === '/dashboard/crypto' ? 'bg-zinc-200 dark:bg-zinc-800 text-black dark:text-white' : 'text-black dark:text-gray-300 hover:bg-zinc-200 dark:hover:bg-zinc-800 dark:hover:text-white'}`}>
                      Crypto
                    </Link>
                    <Link href="/dashboard/crypto" className={`rounded-md px-3 py-2 text-sm font-medium ${pathname === '/dashboard/crypto' ? 'bg-zinc-200 dark:bg-zinc-800 text-black dark:text-white' : 'text-black dark:text-gray-300 hover:bg-zinc-200 dark:hover:bg-zinc-800 dark:hover:text-white'}`}>
                      Retirement
                    </Link>
                    <Link href="/dashboard/crypto" className={`rounded-md px-3 py-2 text-sm font-medium ${pathname === '/dashboard/crypto' ? 'bg-zinc-200 dark:bg-zinc-800 text-black dark:text-white' : 'text-black dark:text-gray-300 hover:bg-zinc-200 dark:hover:bg-zinc-800 dark:hover:text-white'}`}>
                      Insurance
                    </Link>
                    <Link href="/dashboard/crypto" className={`rounded-md px-3 py-2 text-sm font-medium ${pathname === '/dashboard/crypto' ? 'bg-zinc-200 dark:bg-zinc-800 text-black dark:text-white' : 'text-black dark:text-gray-300 hover:bg-zinc-200 dark:hover:bg-zinc-800 dark:hover:text-white'}`}>
                      Education
                    </Link>
                    <Link href="/dashboard/crypto" className={`rounded-md px-3 py-2 text-sm font-medium ${pathname === '/dashboard/crypto' ? 'bg-zinc-200 dark:bg-zinc-800 text-black dark:text-white' : 'text-black dark:text-gray-300 hover:bg-zinc-200 dark:hover:bg-zinc-800 dark:hover:text-white'}`}>
                      Tax
                    </Link>
                    <Link href="/dashboard/crypto" className={`rounded-md px-3 py-2 text-sm font-medium ${pathname === '/dashboard/crypto' ? 'bg-zinc-200 dark:bg-zinc-800 text-black dark:text-white' : 'text-black dark:text-gray-300 hover:bg-zinc-200 dark:hover:bg-zinc-800 dark:hover:text-white'}`}>
                      Estate
                    </Link>
                    <Link href="/dashboard/settings" className={`rounded-md px-3 py-2 text-sm font-medium ${pathname === '/dashboard/settings' ? 'bg-zinc-200 dark:bg-zinc-800 text-black dark:text-white' : 'text-black dark:text-gray-300 hover:bg-zinc-200 dark:hover:bg-zinc-800 dark:hover:text-white'}`}>
                      Profile
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 justify-center px-2 lg:ml-2 lg:justify-end">
                <div className="w-full max-w-lg md:max-w-xs lg:hidden">
                    <CommandMenu />
                </div>
              </div>
              <div className="flex lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 dark:text-gray-200 hover:bg-gray-200 hover:text-gray-400 dark:hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white dark:ring-zinc-800">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden lg:ml-4 lg:block ">
                <div className="flex items-center space-x-3">
                <CommandMenu />

                  {/* <button
                    type="button"
                    className="relative flex-shrink-0 rounded-full  p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                  </button> */}
                  <Notifications/>
                  <Inbox/>
                  <ModeToggle/>

                  {/* Profile dropdown */}
                  <div className="mx-2">
                    <UserNav />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
              <Disclosure.Button
                as={Link}
                href="/dashboard"
                className={`block rounded-md px-3 py-2 font-medium ${pathname === '/dashboard' ? 'bg-gray-200 dark:bg-zinc-800 ' : 'hover:bg-gray-200 dark:hover:bg-zinc-800 '}`}>
                Overview
              </Disclosure.Button>
              <Disclosure.Button
                as={Link}
                href="/dashboard/stocks"
                className={`block rounded-md px-3 py-2 text-base font-medium  ${pathname === '/dashboard/stocks' ? 'bg-gray-200 dark:bg-zinc-800 ' : 'hover:bg-gray-200 dark:hover:bg-zinc-800 '}`}>

                Stocks
              </Disclosure.Button>
              <Disclosure.Button
                as={Link}
                href="/dashboard/crypto"
                className={`block rounded-md px-3 py-2 text-base font-medium ${pathname === '/dashboard/crypto' ? 'bg-gray-200 dark:bg-zinc-800 ' : ' hover:bg-gray-200 dark:hover:bg-zinc-800'}`}>

                Crypto
              </Disclosure.Button>
              <Disclosure.Button
                as={Link}
                href="/dashboard/settings"
                className={`block rounded-md px-3 py-2 text-base font-medium ${pathname === '/dashboard/settings' ? 'bg-gray-200 dark:bg-zinc-800 ' : ' hover:bg-gray-200 dark:hover:bg-zinc-800'}`}>

                Settings
              </Disclosure.Button>
            </div>
            <div className="border-t border-gray-300 dark:border-gray-700 pb-3 pt-4">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>JA</AvatarFallback>
                  </Avatar>
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium">Jhonny Appleseed</div>
                  <div className="text-sm font-medium text-gray-600 dark:text-gray-300">johnnyappleseed@example.com</div>
                </div>
                {/* <button
                  type="button"
                  className="relative ml-auto flex-shrink-0 rounded-full  p-1 text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                </button> */}
                <div>
                <Notifications/>
                </div>
              

              </div>
              <div className="mt-3 space-y-1 px-2">
                <Disclosure.Button
                  as={Link}
                  href="#"
                  className={`block rounded-md px-3 py-2 text-base font-medium ${pathname === '/dashboard/settings' ? 'bg-gray-200 dark:bg-zinc-800 ' : ' hover:bg-gray-200 dark:hover:bg-zinc-800'}`}>

                  Your Profile
                </Disclosure.Button>
                <Disclosure.Button
                  as={Link}
                  href="/dashboard/settings"
                  className={`block rounded-md px-3 py-2 text-base font-medium ${pathname === '/dashboard/settings' ? 'bg-gray-200 dark:bg-zinc-800 ' : ' hover:bg-gray-200 dark:hover:bg-zinc-800'}`}>
                  Settings
                </Disclosure.Button>
                <Disclosure.Button
                  as={Link}
                  href="#"
                  className="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-700 hover:text-white"
                >
                  Sign out
                </Disclosure.Button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}