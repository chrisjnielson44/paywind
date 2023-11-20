'use client'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { signOut } from 'next-auth/react'



export default function AppInterface() {
  const pathname = usePathname();
  return (
    <Disclosure as="nav" className="bg-white shadow sticky top-0 z-50 dark:bg-gray-900 dark:shadow-sm dark:shadow-gray-500 ">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-0">
            <div className="relative flex h-16 justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center pr-5 pb-2">
                  <a href="/" className="flex items-center py-4">
                    <svg className="h-8 w-auto fill-green-500 dark:fill-white" viewBox="0 0 350.00000000000006 110.0053045131987"><g transform="matrix(4.640678977689433,0,0,4.640678977689433,-2.5987810683883894,0.7637259811136552)"><path d="M6.1 12.16 c-1.6 0 -2.8 1.22 -2.8 2.76 c0 1.52 1.24 2.76 2.8 2.76 c1.52 0 2.7 -1.24 2.7 -2.76 c0 -1.54 -1.18 -2.76 -2.7 -2.76 z M6.34 20.14 c-1.16 0 -2.28 -0.36 -3 -0.92 l0 4.3 l-2.78 0 l0 -13.78 l2.78 0 l0 0.8 c0.72 -0.56 1.84 -0.9 3 -0.9 c2.8 0 5.18 2.26 5.18 5.22 s-2.38 5.28 -5.18 5.28 z M17.7 12.16 c-1.52 0 -2.7 1.24 -2.7 2.76 c0 1.54 1.18 2.76 2.7 2.76 c1.6 0 2.8 -1.22 2.8 -2.76 c0 -1.52 -1.24 -2.76 -2.8 -2.76 z M20.46 20 l0 -0.76 c-0.72 0.56 -1.84 0.9 -3 0.9 c-2.8 0 -5.18 -2.26 -5.18 -5.22 s2.38 -5.28 5.18 -5.28 c1.16 0 2.28 0.36 3 0.92 l0 -0.82 l2.78 0 l0 10.26 l-2.78 0 z M34.22 9.74 l-3.44 9.9 c-0.96 2.74 -2.2 3.9 -4.72 3.9 l-1 0 l0 -2.5 l0.84 0 c0.92 0 1.52 -0.52 1.9 -1.32 l-3.82 -9.98 l3.18 0 l2.1 6.32 l2.08 -6.32 l2.88 0 z M43.54 20 l-1.4 -5.86 l-1.4 5.86 l-3.52 0 l-2.62 -10.26 l2.8 0 l1.68 7.06 l1.74 -7.06 l2.8 0 l1.72 7.1 l1.7 -7.1 l2.7 0 l-2.64 10.26 l-3.56 0 z M53.28 8.86 l-2.78 0 l0 -2.56 l2.78 0 l0 2.56 z M53.28 20 l-2.78 0 l0 -10.26 l2.78 0 l0 10.26 z M57.13999999999999 9.74 l0 1.04 c0.5 -0.58 1.56 -1.22 2.98 -1.22 c2.4 0 3.96 1.66 3.96 4.14 l0 6.3 l-2.76 0 l0 -5.82 c0 -1.22 -0.7 -2.06 -1.88 -2.06 c-1.36 0 -2.26 0.86 -2.26 2.28 l0 5.6 l-2.78 0 l0 -10.26 l2.74 0 z M70.44 17.68 c1.6 0 2.8 -1.22 2.8 -2.76 c0 -1.52 -1.24 -2.76 -2.8 -2.76 c-1.52 0 -2.7 1.24 -2.7 2.76 c0 1.54 1.18 2.76 2.7 2.76 z M73.2 20 l0 -0.76 c-0.72 0.56 -1.84 0.9 -3 0.9 c-2.8 0 -5.18 -2.26 -5.18 -5.22 s2.38 -5.28 5.18 -5.28 c1.16 0 2.28 0.36 3 0.92 l0 -4.26 l2.78 0 l0 13.7 l-2.78 0 z"></path></g></svg>
                  </a>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <Link
                    href="/dashboard/"
                    className={`link inline-flex items-center font-medium border-b-2 ${pathname === '/dashboard' ? 'border-green-500 text-gray-900 dark:text-green-500' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-white dark:hover:text-gray-400'}`}>
                    Dashboard
                  </Link>
                  <Link
                    href="/dashboard/spending"
                    className={`link inline-flex items-center font-medium border-b-2 ${pathname === '/dashboard/spending' ? 'border-green-500 text-gray-900 dark:text-green-500' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-white dark:hover:text-gray-400'}`}>
                    Spending
                  </Link>
                  <Link
                    href="/dashboard/transactions"
                    className={`link inline-flex items-center font-medium border-b-2 ${pathname === '/dashboard/transactions' ? 'border-green-500 text-gray-900 dark:text-green-500' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-white dark:hover:text-gray-400'}`}>
                    Transactions
                  </Link>
                  <Link
                    href="/dashboard/crypto"
                    className={`link inline-flex items-center font-medium border-b-2 ${pathname === '/dashboard/crypto' ? 'border-green-500 text-gray-900 dark:text-green-500' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-white dark:hover:text-gray-400'}`}>
                    Crypto
                  </Link>
                  <Link
                    href="/dashboard/transfer"
                    className={`link inline-flex items-center font-medium border-b-2 ${pathname === '/dashboard/transfer' ? 'border-green-500 text-gray-900 dark:text-green-500' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-white dark:hover:text-gray-400'}`}>
                    Transfer
                  </Link>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-4 flex-shrink-0">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        src='https://i.stack.imgur.com/l60Hf.png'
                        className="h-8 w-auto  rounded-full ring-1 ring-gray-300 "
                        alt=""
                      />
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
                     
                      </div>

                      <Menu.Item>
                        <Link
                          href="/dashboard/settings/general"
                          className={`block px-4 py-2 text-sm text-gray-700  hover:bg-gray-100 hover:text-gray-800 dark:text-gray-200 ${pathname === '/dashboard/settings/general' ? 'ring-green-500' : ''}`}
                        >
                          Settings
                        </Link>
                      </Menu.Item>
                      <Menu.Item>
                        <button  onClick={() =>  {
                                    signOut();
                                }} className='text-gray-700 block w-full px-4 py-2 text-left text-sm hover:bg-gray-100 hover:text-gray-800 dark:text-gray-200'>Logout</button>
                      </Menu.Item>
                      <div className="px-4 py-3">
                        <p className="text-sm text-black dark:text-gray-200">Signed in as</p>
                      
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-3 pt-2">
              <Disclosure.Button
                as="a"
                href="/dashboard"
                className={`block border-l-4 py-2 pl-3 pr-4 text-base font-medium ${pathname === '/dashboard' ? 'bg-green-50 border-green-500 text-green-700' : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 dark:text-white'}`}>
                Dashboard
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/dashboard/spending"
                className={`block border-l-4 py-2 pl-3 pr-4 text-base font-medium ${pathname === '/dashboard/spending' ? 'bg-green-50 border-green-500 text-green-700' : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 dark:text-white'}`}>
                Spending
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/dashboard/transactions"
                className={`block border-l-4 py-2 pl-3 pr-4 text-base font-medium ${pathname === '/dashboard/transactions' ? 'bg-green-50 border-green-500 text-green-700' : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 dark:text-white'}`}>
                Transactions
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/dashboard/crypto"
                className={`block border-l-4 py-2 pl-3 pr-4 text-base font-medium ${pathname === '/dashboard/crypto' ? 'bg-green-50 border-green-500 text-green-700' : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 dark:text-white'}`}>
                Crypto
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/dashboard/transfer"
                className={`block border-l-4 py-2 pl-3 pr-4 text-base font-medium ${pathname === '/dashboard/transfer' ? 'bg-green-50 border-green-500 text-green-700' : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 dark:text-white'}`}>
                Transfer
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
