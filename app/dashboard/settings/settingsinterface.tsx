
'use client'
import {
    BellIcon,
    CreditCardIcon,
    CubeIcon,
    FingerPrintIcon,
    UserCircleIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation';


const secondaryNavigation = [
    { name: 'General', href: '/dashboard/settings/general', icon: UserCircleIcon, current: true },
    { name: 'Security', href: '/dashboard/settings/security', icon: FingerPrintIcon, current: false },
    { name: 'Notifications', href: '/dashboard/settings/notifications', icon: BellIcon, current: false },
    { name: 'Plan', href: '/dashboard/settings/plans', icon: CubeIcon, current: false },
    { name: 'Billing', href: '/dashboard/settings/billing', icon: CreditCardIcon, current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}


export default function SettingInterface() {
    const pathname = usePathname();

    return (
        <div className='fixed w-full' >
        <header className="border-b dark:border-gray-500 border-gray-300 bg-white dark:bg-gray-900 ">
              {/* Secondary navigation */}
              <nav className="flex overflow-x-auto py-4 ">
                <ul
                  role="list"
                  className="flex min-w-full flex-none gap-x-6 px-4 text-sm font-semibold leading-6 text-gray-400 sm:px-6 lg:px-8"
                >
                  {secondaryNavigation.map((item) => (
                   <li key={item.name}>
                   <Link
                       href={item.href}
                       className={classNames(
                           pathname === item.href
                               ? 'dark:bg-gray-700 text-green-600 dark:text-white'
                               : 'text-gray-700 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-500 dark:text-white',
                           'group flex gap-x-3 rounded-md py-2 pl-2 pr-3 text-sm leading-6 font-semibold'
                       )}
                   >
                       <item.icon
                           className={classNames(
                              pathname == item.href 
                               ? 'text-green-600' : 'text-gray-400 group-hover:text-green-600',
                               'h-6 w-6 shrink-0'
                           )}
                           aria-hidden="true"
                       />
                       {item.name}
                   </Link>
               </li>
                  ))}
                </ul>
              </nav>
            </header>
            
       
        </div>
        
        
    )
}
