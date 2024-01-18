'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";


export function DashboardNav() {
    const pathname = usePathname();
    return (
        <div className="flex items-center justify-center">
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



    )
}