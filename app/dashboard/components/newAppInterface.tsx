
'use client'
import React, { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {DarkModeBtn} from './DarkModeToggle'
import {
    Bars3Icon,
    BellIcon,
    CalendarIcon,
    ChartPieIcon,
    Cog6ToothIcon,
    DocumentDuplicateIcon,
    FolderIcon,
    HomeIcon,
    UsersIcon,
    XMarkIcon,
    CurrencyDollarIcon,
    InboxIcon
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { signOut } from 'next-auth/react'


const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: HomeIcon, current: true },
    { name: 'Crypto', href: '/dashboard/crypto', icon: CurrencyDollarIcon, current: false },
    { name: 'Transactions', href: '/dashboard/transactions', icon: FolderIcon, current: false },
    { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
    { name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false },
    { name: 'Reports', href: '#', icon: ChartPieIcon, current: false },
]
const teams = [
    { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
    { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
    { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
]
const userNavigation = [
    { name: 'Your profile', href: '/dashboard/settings/general' },
    { name: 'Sign out', href: '#' },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

interface AppInterfaceProps {
    userEmail: string | null | undefined;
    userName: string | null | undefined;
    profileImageUrl: string;
    children: React.ReactNode
}

const NewAppInterface: React.FC<AppInterfaceProps> = ({ userEmail, userName, profileImageUrl, children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const pathname = usePathname();

    const updatedNavigation = navigation.map(item => ({
        ...item,
        current: pathname === item.href,
    }));

    return (
        <div>
            <Transition.Root show={sidebarOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-900/80" />
                    </Transition.Child>

                    <div className="fixed inset-0 flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-in-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in-out duration-300"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                                        <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                                            <span className="sr-only">Close sidebar</span>
                                            <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                        </button>
                                    </div>
                                </Transition.Child>
                                {/* Sidebar component, swap this element with another sidebar if you like */}
                                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white dark:bg-gray-900 px-6 pb-4 ring-1 ring-white/10">
                                    <div className="flex h-16 shrink-0 items-center">
                                        <Link href="/" className="flex items-center py-4">
                                            <svg className="h-8 w-auto fill-green-500 dark:fill-white" viewBox="0 0 350.00000000000006 110.0053045131987"><g transform="matrix(4.640678977689433,0,0,4.640678977689433,-2.5987810683883894,0.7637259811136552)"><path d="M6.1 12.16 c-1.6 0 -2.8 1.22 -2.8 2.76 c0 1.52 1.24 2.76 2.8 2.76 c1.52 0 2.7 -1.24 2.7 -2.76 c0 -1.54 -1.18 -2.76 -2.7 -2.76 z M6.34 20.14 c-1.16 0 -2.28 -0.36 -3 -0.92 l0 4.3 l-2.78 0 l0 -13.78 l2.78 0 l0 0.8 c0.72 -0.56 1.84 -0.9 3 -0.9 c2.8 0 5.18 2.26 5.18 5.22 s-2.38 5.28 -5.18 5.28 z M17.7 12.16 c-1.52 0 -2.7 1.24 -2.7 2.76 c0 1.54 1.18 2.76 2.7 2.76 c1.6 0 2.8 -1.22 2.8 -2.76 c0 -1.52 -1.24 -2.76 -2.8 -2.76 z M20.46 20 l0 -0.76 c-0.72 0.56 -1.84 0.9 -3 0.9 c-2.8 0 -5.18 -2.26 -5.18 -5.22 s2.38 -5.28 5.18 -5.28 c1.16 0 2.28 0.36 3 0.92 l0 -0.82 l2.78 0 l0 10.26 l-2.78 0 z M34.22 9.74 l-3.44 9.9 c-0.96 2.74 -2.2 3.9 -4.72 3.9 l-1 0 l0 -2.5 l0.84 0 c0.92 0 1.52 -0.52 1.9 -1.32 l-3.82 -9.98 l3.18 0 l2.1 6.32 l2.08 -6.32 l2.88 0 z M43.54 20 l-1.4 -5.86 l-1.4 5.86 l-3.52 0 l-2.62 -10.26 l2.8 0 l1.68 7.06 l1.74 -7.06 l2.8 0 l1.72 7.1 l1.7 -7.1 l2.7 0 l-2.64 10.26 l-3.56 0 z M53.28 8.86 l-2.78 0 l0 -2.56 l2.78 0 l0 2.56 z M53.28 20 l-2.78 0 l0 -10.26 l2.78 0 l0 10.26 z M57.13999999999999 9.74 l0 1.04 c0.5 -0.58 1.56 -1.22 2.98 -1.22 c2.4 0 3.96 1.66 3.96 4.14 l0 6.3 l-2.76 0 l0 -5.82 c0 -1.22 -0.7 -2.06 -1.88 -2.06 c-1.36 0 -2.26 0.86 -2.26 2.28 l0 5.6 l-2.78 0 l0 -10.26 l2.74 0 z M70.44 17.68 c1.6 0 2.8 -1.22 2.8 -2.76 c0 -1.52 -1.24 -2.76 -2.8 -2.76 c-1.52 0 -2.7 1.24 -2.7 2.76 c0 1.54 1.18 2.76 2.7 2.76 z M73.2 20 l0 -0.76 c-0.72 0.56 -1.84 0.9 -3 0.9 c-2.8 0 -5.18 -2.26 -5.18 -5.22 s2.38 -5.28 5.18 -5.28 c1.16 0 2.28 0.36 3 0.92 l0 -4.26 l2.78 0 l0 13.7 l-2.78 0 z"></path></g></svg>
                                        </Link>
                                    </div>
                                    <nav className="flex flex-1 flex-col">
                                        <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                            <li>
                                                <ul role="list" className="-mx-2 space-y-1">
                                                    {navigation.map((item) => (
                                                         <li key={item.name}>
                                                         <a
                                                             href={item.href}
                                                             className={classNames(
                                                                 item.current
                                                                     ? 'dark:bg-gray-800 bg-gray-200 dark:text-white'
                                                                     : 'dark:text-gray-400 text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-800',
                                                                 'group flex gap-x-3 rounded-md p-2 text-base leading-6 font-semibold'
                                                             )}
                                                         >
                                                             <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                                                             {item.name}
                                                         </a>
                                                     </li>
                                                    ))}
                                                </ul>
                                            </li>
                                            {/* <li>
                                                <div className="text-xs font-semibold leading-6 text-gray-400">Your teams</div>
                                                <ul role="list" className="-mx-2 mt-2 space-y-1">
                                                    {teams.map((team) => (
                                                        <li key={team.name}>
                                                            <a
                                                                href={team.href}
                                                                className={classNames(
                                                                    team.current
                                                                        ? 'dark:bg-gray-800 bg-white text-white'
                                                                        : 'text-gray-400 hover:text-white hover:bg-gray-800',
                                                                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                                                )}
                                                            >
                                                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
                                                                    {team.initial}
                                                                </span>
                                                                <span className="truncate">{team.name}</span>
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </li> */}
                                            <li className="mt-auto">
                                                <Link
                                                    href="/dashboard/settings"
                                                    className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                                                >
                                                    <Cog6ToothIcon className="h-6 w-6 shrink-0" aria-hidden="true" />
                                                    Settings
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>

            {/* Static sidebar for desktop */}
            <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col border-r border-gray-300 dark:border-gray-500">
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white dark:bg-gray-900 px-6 pb-4">
                    <div className="flex h-16 shrink-0 items-center">
                        <Link href="/" className="flex items-center py-4">
                            <svg className="h-8 w-auto fill-green-500 dark:fill-white" viewBox="0 0 350.00000000000006 110.0053045131987"><g transform="matrix(4.640678977689433,0,0,4.640678977689433,-2.5987810683883894,0.7637259811136552)"><path d="M6.1 12.16 c-1.6 0 -2.8 1.22 -2.8 2.76 c0 1.52 1.24 2.76 2.8 2.76 c1.52 0 2.7 -1.24 2.7 -2.76 c0 -1.54 -1.18 -2.76 -2.7 -2.76 z M6.34 20.14 c-1.16 0 -2.28 -0.36 -3 -0.92 l0 4.3 l-2.78 0 l0 -13.78 l2.78 0 l0 0.8 c0.72 -0.56 1.84 -0.9 3 -0.9 c2.8 0 5.18 2.26 5.18 5.22 s-2.38 5.28 -5.18 5.28 z M17.7 12.16 c-1.52 0 -2.7 1.24 -2.7 2.76 c0 1.54 1.18 2.76 2.7 2.76 c1.6 0 2.8 -1.22 2.8 -2.76 c0 -1.52 -1.24 -2.76 -2.8 -2.76 z M20.46 20 l0 -0.76 c-0.72 0.56 -1.84 0.9 -3 0.9 c-2.8 0 -5.18 -2.26 -5.18 -5.22 s2.38 -5.28 5.18 -5.28 c1.16 0 2.28 0.36 3 0.92 l0 -0.82 l2.78 0 l0 10.26 l-2.78 0 z M34.22 9.74 l-3.44 9.9 c-0.96 2.74 -2.2 3.9 -4.72 3.9 l-1 0 l0 -2.5 l0.84 0 c0.92 0 1.52 -0.52 1.9 -1.32 l-3.82 -9.98 l3.18 0 l2.1 6.32 l2.08 -6.32 l2.88 0 z M43.54 20 l-1.4 -5.86 l-1.4 5.86 l-3.52 0 l-2.62 -10.26 l2.8 0 l1.68 7.06 l1.74 -7.06 l2.8 0 l1.72 7.1 l1.7 -7.1 l2.7 0 l-2.64 10.26 l-3.56 0 z M53.28 8.86 l-2.78 0 l0 -2.56 l2.78 0 l0 2.56 z M53.28 20 l-2.78 0 l0 -10.26 l2.78 0 l0 10.26 z M57.13999999999999 9.74 l0 1.04 c0.5 -0.58 1.56 -1.22 2.98 -1.22 c2.4 0 3.96 1.66 3.96 4.14 l0 6.3 l-2.76 0 l0 -5.82 c0 -1.22 -0.7 -2.06 -1.88 -2.06 c-1.36 0 -2.26 0.86 -2.26 2.28 l0 5.6 l-2.78 0 l0 -10.26 l2.74 0 z M70.44 17.68 c1.6 0 2.8 -1.22 2.8 -2.76 c0 -1.52 -1.24 -2.76 -2.8 -2.76 c-1.52 0 -2.7 1.24 -2.7 2.76 c0 1.54 1.18 2.76 2.7 2.76 z M73.2 20 l0 -0.76 c-0.72 0.56 -1.84 0.9 -3 0.9 c-2.8 0 -5.18 -2.26 -5.18 -5.22 s2.38 -5.28 5.18 -5.28 c1.16 0 2.28 0.36 3 0.92 l0 -4.26 l2.78 0 l0 13.7 l-2.78 0 z"></path></g></svg>
                        </Link>
                    </div>
                    <nav className="flex flex-1 flex-col">
                        <ul role="list" className="flex flex-1 flex-col gap-y-7">
                            <li>
                                <ul role="list" className="-mx-2 space-y-1">
                                    {updatedNavigation.map((item) => (
                                        <li key={item.name}>
                                            <a
                                                href={item.href}
                                                className={classNames(
                                                    item.current
                                                        ? 'dark:bg-gray-800 bg-gray-200 dark:text-white'
                                                        : 'dark:text-gray-400 text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-800',
                                                    'group flex gap-x-3 rounded-md p-2 text-lg leading-6 font-semibold'
                                                )}
                                            >
                                                <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            {/* <li>
                                <div className="text-xs font-semibold leading-6 text-gray-400">Your teams</div>
                                <ul role="list" className="-mx-2 mt-2 space-y-1">
                                    {teams.map((team) => (
                                        <li key={team.name}>
                                            <a
                                                href={team.href}
                                                className={classNames(
                                                    team.current
                                                        ? 'bg-gray-800 text-white'
                                                        : 'text-gray-400 hover:text-white hover:bg-gray-800',
                                                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                                )}
                                            >
                                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
                                                    {team.initial}
                                                </span>
                                                <span className="truncate">{team.name}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </li> */}
                            <li className="mt-auto">
                                <Link
                                    href="/dashboard/settings/general"
                                    className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-white"
                                >
                                    <Cog6ToothIcon className="h-6 w-6 shrink-0 text-black dark:text-white" aria-hidden="true" />
                                    <p className='text-black dark:text-white'>Settings</p>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div className="lg:pl-72 ">
                <div className="sticky top-0 z-40  flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-500 bg-white dark:bg-gray-900 px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
                    <button type="button" className="-m-2.5 p-2.5 text-gray-700 lg:hidden" onClick={() => setSidebarOpen(true)}>
                        <span className="sr-only">Open sidebar</span>
                        <Bars3Icon className="text-black dark:text-white h-6 w-6" aria-hidden="true" />
                    </button>

                    {/* Separator */}
                    <div className="h-6 w-px bg-gray-300 lg:hidden" aria-hidden="true" />

                    <div className="overscroll-none flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
                        <form className="relative flex flex-1" action="#" method="GET">
                            <label htmlFor="search-field" className="sr-only">
                                Search
                            </label>
                            <MagnifyingGlassIcon
                                className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-black dark:text-white"
                                aria-hidden="true"
                            />
                            <input
                                id="search-field"
                                className="text-black dark:text-white bg-white dark:bg-gray-900 block h-full w-full border-0 py-0 pl-8 pr-0 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                                placeholder="Quick Search..."
                                type="search"
                                name="search"
                            />
                        </form>
                        <div className="flex items-center gap-x-4 lg:gap-x-6">
                            <Menu as="div" className="relative ml-2 flex-shrink-0">
                                <DarkModeBtn/>
                                <button className="mr-3 p-2.5 text-gray-400 hover:text-gray-500">
                                    <span className="sr-only">View Inbox</span>
                                    <InboxIcon className="text-black dark:text-white h-6 w-6 " aria-hidden="true" />
                                </button>

                                <Menu.Button className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
                                    <span className="sr-only">View notifications</span>
                                    <BellIcon className="text-black dark:text-white h-6 w-6  " aria-hidden="true" />
                                </Menu.Button>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800">
                                        {/* Add your dropdown items here */}
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={`${active ? 'bg-gray-200 dark:bg-gray-800' : ''} block px-4 py-2 text-sm text-black dark:text-white`}
                                                >
                                                    No New Notifications
                                                </a>
                                            )}
                                        </Menu.Item>
                                        {/* Repeat for other items */}
                                    </Menu.Items>
                                </Transition>
                            </Menu>

                            {/* Separator */}
                            <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-500" aria-hidden="true" />

                            {/* Profile dropdown */}
                            <Menu as="div" className="relative ml-2 flex-shrink-0">
                                <div>
                                    <Menu.Button className="-m-1.5 flex items-center p-1.5">
                                        <span className="sr-only">Open user menu</span>
                                        <img
                                            className="h-8 w-8 rounded-full bg-gray-50 ring-1 ring-black dark:ring-white"
                                            src={profileImageUrl}
                                            alt=""
                                        />
                                        <span className="hidden lg:flex lg:items-center">
                                            <span className="text-black dark:text-white ml-4 text-sm font-semibold leading-6 text-gray-900" aria-hidden="true">
                                                {userName}
                                            </span>
                                            <ChevronDownIcon className="ml-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                                        </span>
                                    </Menu.Button>
                                </div>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-900 dark:ring-1 dark:ring-white dark:ring-opacity-5 dark:shadow-gray-700 dark:shadow-md">
                                        <div className="px-4 py-3">
                                            <p className="text-sm text-black dark:text-gray-200">Signed in as</p>
                                            <p className='text-sm font-semibold'>{userEmail}</p>
                                        </div>
                                        <Menu.Item>
                                            <Link href={"/dashboard/settings/general"} className='font-semibold text-gray-700 block w-full px-4 py-2 text-left text-sm hover:bg-gray-100 hover:text-gray-800  dark:text-gray-200'>View Profile</Link>
                                        </Menu.Item>
                                        <Menu.Item>
                                            <button onClick={() => {
                                                signOut();
                                            }} className='font-semibold text-gray-700 block w-full px-4 py-2 text-left text-sm hover:bg-gray-100 hover:text-gray-800  dark:text-gray-200'>Logout</button>
                                        </Menu.Item>

                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </div>
                    </div>
                </div>
                <main>
                    {children}
                </main>
            </div>
        </div>
    )
}
export default NewAppInterface;
