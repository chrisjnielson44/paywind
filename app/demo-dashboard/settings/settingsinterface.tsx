
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


const navigation = [
    { name: 'General', href: '/demo-dashboard/settings/general', icon: UserCircleIcon, current: true },
    { name: 'Security', href: '/demo-dashboard/settings/security', icon: FingerPrintIcon, current: false },
    { name: 'Notifications', href: '/demo-dashboard/settings/notifications', icon: BellIcon, current: false },
    { name: 'Plan', href: '/demo-dashboard/settings/plans', icon: CubeIcon, current: false },
    { name: 'Billing', href: '/demo-dashboard/settings/billing', icon: CreditCardIcon, current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function SettingInterface() {
    const pathname = usePathname();

    return (
        <aside className="flex overflow-x-auto border-b border-gray-900/5 py-4 lg:block lg:w-64 lg:flex-none lg:border-0 lg:py-20">
        <nav className="flex-none px-4 sm:px-6 lg:px-0">
          <ul role="list" className="flex gap-x-3 gap-y-1 whitespace-nowrap lg:flex-col">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-50 text-green-600'
                      : 'text-gray-700 hover:text-green-600 hover:bg-gray-50',
                    'group flex gap-x-3 rounded-md py-2 pl-2 pr-3 text-sm leading-6 font-semibold'
                  )}
                >
                  <item.icon
                    className={classNames(
                      item.current ? 'text-green-600' : 'text-gray-400 group-hover:text-green-600',
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
      </aside>
        
        
    )
}
