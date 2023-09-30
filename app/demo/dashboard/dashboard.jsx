'use client'
import DropDown from './components/dropdown'
import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
  ArrowDownCircleIcon,
  ArrowPathIcon,
  ArrowUpCircleIcon,
  EllipsisHorizontalIcon,
  PlusSmallIcon,

} from '@heroicons/react/20/solid'

import Link from "next/link"

const secondaryNavigation = [
  { name: 'Last 7 days', href: '#', current: true },
  { name: 'Last 30 days', href: '#', current: false },
  { name: 'All-time', href: '#', current: false },
]
const stats = [
  { name: 'Revenue', value: '$405,091.00', change: '+4.75%', changeType: 'positive' },
  { name: 'Overdue invoices', value: '$12,787.00', change: '+54.02%', changeType: 'negative' },
  { name: 'Outstanding invoices', value: '$245,988.00', change: '-1.39%', changeType: 'positive' },
  { name: 'Expenses', value: '$30,156.00', change: '+10.18%', changeType: 'negative' },
]
const statuses = {
  Paid: 'text-green-700 bg-green-50 ring-green-600/20',
  Withdraw: 'text-gray-600 bg-gray-50 ring-gray-500/10',
  Overdue: 'text-red-700 bg-red-50 ring-red-600/10',
}
const days = [
  {
    date: 'Today',
    dateTime: '2023-03-22',
    transactions: [
      {
        id: 1,
        invoiceNumber: '00012',
        href: '#',
        amount: '$7,600.00 USD',
        tax: '$500.00',
        status: 'Paid',
        client: 'Reform',
        description: 'Website redesign',
        icon: ArrowUpCircleIcon,
      },
      {
        id: 2,
        invoiceNumber: '00011',
        href: '#',
        amount: '$10,000.00 USD',
        status: 'Withdraw',
        client: 'Tom Cook',
        description: 'Salary',
        icon: ArrowDownCircleIcon,
      },
      {
        id: 3,
        invoiceNumber: '00009',
        href: '#',
        amount: '$2,000.00 USD',
        tax: '$130.00',
        status: 'Overdue',
        client: 'Tuple',
        description: 'Logo design',
        icon: ArrowPathIcon,
      },
    ],
  },
  {
    date: 'Yesterday',
    dateTime: '2023-03-21',
    transactions: [
      {
        id: 4,
        invoiceNumber: '00010',
        href: '#',
        amount: '$14,000.00 USD',
        tax: '$900.00',
        status: 'Paid',
        client: 'SavvyCal',
        description: 'Website redesign',
        icon: ArrowUpCircleIcon,
      },
    ],
  },
]
const clients = [
  {
    id: 1,
    name: 'Tuple',
    imageUrl: 'https://tailwindui.com/img/logos/48x48/tuple.svg',
    lastInvoice: { date: 'December 13, 2022', dateTime: '2022-12-13', amount: '$2,000.00', status: 'Overdue' },
  },
  {
    id: 2,
    name: 'SavvyCal',
    imageUrl: 'https://tailwindui.com/img/logos/48x48/savvycal.svg',
    lastInvoice: { date: 'January 22, 2023', dateTime: '2023-01-22', amount: '$14,000.00', status: 'Paid' },
  },
  {
    id: 3,
    name: 'Reform',
    imageUrl: 'https://tailwindui.com/img/logos/48x48/reform.svg',
    lastInvoice: { date: 'January 23, 2023', dateTime: '2023-01-23', amount: '$7,600.00', status: 'Paid' },
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Dashboard() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <main id="dashboard" className='top-0 bg-white'>
        <div className='mx-auto max-w-7xl'>
          <div className="relative isolate overflow-hidden pt-20">
            {/* Secondary navigation */}
            <div className='pb-20'>
              <h3 class="text-3xl font-semibold leading-6 text-gray-900 sm:text-center md:text-left">Accounts</h3>
              <dl class="mt-10 grid grid-cols-1 grid-rows-2 gap-5 sm:grid-cols-3">
                <div class="overflow-hidden rounded-lg bg-white px-4 py-5 shadow-md border-2 sm:p-6">
                  <div className='py-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='h-7 w-auto' viewBox="0 0 561.578 104.369"><path d="M494.525 0a3.69 3.69 0 0 0-3.691 3.686v25.83h68.244L528 .008 494.525 0M561.578 37.33a3.677 3.677 0 0 0-3.688-3.68h-25.828v68.242l29.504-31.086.012-33.476M524.236 104.369a3.688 3.688 0 0 0 3.678-3.688V74.854h-68.241l31.073 29.508 33.49.007M457.18 67.043a3.687 3.687 0 0 0 3.686 3.688h25.83V2.484l-29.512 31.078-.004 33.481" fill="#0659a5" /><path fill="#010101" d="M144.379 12.453v31.514h-43.91V12.453l-15.987-.006v79.461h15.987V57.771h43.91v34.137h16.016V12.453h-16.016M357.123 12.453v79.441l70.164-.004-8.891-13.98h-45.23V57.771h43.797V44.299h-43.797V26.111h45.156l8.711-13.658h-69.91M25.043 12.443C8.404 12.443 0 22.549 0 37.266v29.665C0 83.957 10.824 91.91 24.957 91.91l50.164-.01-9.293-14.521H28.053c-8.021 0-11.515-2.899-11.515-11.881v-26.91c0-8.684 2.939-12.072 11.729-12.072h37.955l8.928-14.072-50.107-.001M286.947 12.42c-9.613 0-19.451 5.771-19.451 20.625v3.816c0 15.475 9.476 21.389 18.949 21.432h33.275c3.455 0 6.264.572 6.264 6.416l-.004 6.754c-.086 5.236-2.711 6.447-6.379 6.447H275.83l-8.967 13.979h53.762c12.972 0 21.773-6.447 21.773-21.353V65.06c0-14.408-8.176-21.207-20.859-21.207h-31.77c-3.525 0-5.976-.967-5.976-6.184l-.004-5.492c0-4.443 1.688-6.066 5.791-6.066l41.683-.016 8.715-13.69-53.031.015M206.863 12.465L169.184 91.9h17.811l7.338-16.405h40.941l7.315 16.405h17.882l-37.765-79.436-15.843.001m7.896 16.488l14.479 33.021h-28.867l14.388-33.021z" /></svg>
                  </div>
                  <dt class="truncate py-2 text-lg font-medium text-gray-500">Checking</dt>
                  <dd class="mt-1 text-2xl font-semibold tracking-tight text-gray-900 md:text-3xl">$23,234.00</dd>
                </div>
                <div class="overflow-hidden rounded-lg bg-white px-4 py-5 shadow-md border-2 sm:p-6">
                  <div className='py-2'>
                  <img src='https://www.timlewis.com/wp-content/uploads/2018/03/PNGPIX-COM-US-Bank-Logo-PNG-Transparent.png' alt='' className='h-7 w-auto'></img>
                  </div>
                  <dt class="truncate py-2 text-lg font-medium text-gray-500">Savings</dt>
                  <dd class="mt-1 text-2xl font-semibold tracking-tight text-gray-900 md:text-3xl">$125,243.00</dd>
                </div>
                <div class="overflow-hidden rounded-lg bg-white px-4 py-5 shadow-md border-2 sm:p-6">
                  <div className='py-2'>
                  <img src='https://www.ironwoodwm.com/wp-content/uploads/2019/10/charles-schwab-logo-1.png' alt='' className='h-7 w-auto'></img>
                  </div>
                  <dt class="truncate py-2 text-lg font-medium text-gray-500">Investments</dt>
                  <dd class="mt-1 text-2xl font-semibold tracking-tight text-gray-900  md:text-3xl">$90,234.00</dd>
                </div>
                
                <button type="button" class="overflow-hidden rounded-lg bg-white px-4 py-5  border-2 sm:p-6 border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 ">
                  <Link href="/demo/settings">
                    <span class="mt-2 block text-2xl font-semibold text-gray-900">Add Bank +</span>
                  </Link>
                </button>
              </dl>
            </div>
          </div>

          <div>
            <h3 class="text-3xl font-semibold leading-6 text-gray-900 pb-5">Transactions</h3>
            <DropDown />
            <ul role="list" class="divide-y divide-gray-100 mt-5 border-2 rounded-lg px-4 shadow-lg">
              <li class="flex justify-between gap-x-6 py-5">
                <div class="flex min-w-0 gap-x-4">
                  <div class="min-w-0 flex-auto">
                    <p class="text-sm font-semibold leading-6 text-gray-900">Ms. Piggy Birthday Present</p>
                    <p class="mt-1 truncate text-md leading-5 text-gray-500 text-red-500">- $999.00</p>
                  </div>
                </div>
                <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                  <p class="text-sm leading-6 text-gray-900">Completed</p>
                  <p class="mt-1 text-xs leading-5 text-gray-500"><time datetime="2023-01-23T13:23Z">2023-01-23 13:23</time></p>
                </div>
              </li>

              <li class="flex justify-between gap-x-6 py-5">
                <div class="flex min-w-0 gap-x-4">
                  <div class="min-w-0 flex-auto">
                    <p class="text-sm font-semibold leading-6 text-gray-900">Monthly Streaming Service</p>
                    <p class="mt-1 truncate text-md leading-5 text-gray-500 text-red-500">- $14.99</p>
                  </div>
                </div>
                <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                  <p class="text-sm leading-6 text-gray-900">Pending</p>
                  <p class="mt-1 text-xs leading-5 text-gray-500"><time datetime="2023-01-23T14:00Z">2023-01-23 14:00</time></p>
                </div>
              </li>

              <li class="flex justify-between gap-x-6 py-5">
                <div class="flex min-w-0 gap-x-4">
                  <div class="min-w-0 flex-auto">
                    <p class="text-sm font-semibold leading-6 text-gray-900">Zelle Payment from Fozzie Bear</p>
                    <p class="mt-1 truncate text-md leading-5 text-gray-500 text-green-500">+ $200</p>
                  </div>
                </div>
                <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                  <p class="text-sm leading-6 text-gray-900">Pending</p>
                  <p class="mt-1 text-xs leading-5 text-gray-500"><time datetime="2023-01-23T14:00Z">2023-01-23 23:00</time></p>
                </div>
              </li>
            </ul>
          </div>

          <div className="space-y-16 py-16 xl:space-y-20">
            {/* Recent activity table */}
            <div>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="mx-auto max-w-2xl text-base font-semibold leading-6 text-gray-900 lg:mx-0 lg:max-w-none">
                  Recent activity
                </h2>
              </div>
              <div className="mt-6 overflow-hidden border-t border-gray-100">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                    <table className="w-full text-left">
                      <thead className="sr-only">
                        <tr>
                          <th>Amount</th>
                          <th className="hidden sm:table-cell">Client</th>
                          <th>More details</th>
                        </tr>
                      </thead>
                      <tbody>
                        {days.map((day) => (
                          <Fragment key={day.dateTime}>
                            <tr className="text-sm leading-6 text-gray-900">
                              <th scope="colgroup" colSpan={3} className="relative isolate py-2 font-semibold">
                                <time dateTime={day.dateTime}>{day.date}</time>
                                <div className="absolute inset-y-0 right-full -z-10 w-screen border-b border-gray-200 bg-gray-50" />
                                <div className="absolute inset-y-0 left-0 -z-10 w-screen border-b border-gray-200 bg-gray-50" />
                              </th>
                            </tr>
                            {day.transactions.map((transaction) => (
                              <tr key={transaction.id}>
                                <td className="relative py-5 pr-6">
                                  <div className="flex gap-x-6">
                                    <transaction.icon
                                      className="hidden h-6 w-5 flex-none text-gray-400 sm:block"
                                      aria-hidden="true"
                                    />
                                    <div className="flex-auto">
                                      <div className="flex items-start gap-x-3">
                                        <div className="text-sm font-medium leading-6 text-gray-900">
                                          {transaction.amount}
                                        </div>
                                        <div
                                          className={classNames(
                                            statuses[transaction.status],
                                            'rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset'
                                          )}
                                        >
                                          {transaction.status}
                                        </div>
                                      </div>
                                      {transaction.tax ? (
                                        <div className="mt-1 text-xs leading-5 text-gray-500">{transaction.tax} tax</div>
                                      ) : null}
                                    </div>
                                  </div>
                                  <div className="absolute bottom-0 right-full h-px w-screen bg-gray-100" />
                                  <div className="absolute bottom-0 left-0 h-px w-screen bg-gray-100" />
                                </td>
                                <td className="hidden py-5 pr-6 sm:table-cell">
                                  <div className="text-sm leading-6 text-gray-900">{transaction.client}</div>
                                  <div className="mt-1 text-xs leading-5 text-gray-500">{transaction.description}</div>
                                </td>
                                <td className="py-5 text-right">
                                  <div className="flex justify-end">
                                    <a
                                      href={transaction.href}
                                      className="text-sm font-medium leading-6 text-indigo-600 hover:text-indigo-500"
                                    >
                                      View<span className="hidden sm:inline"> transaction</span>
                                      <span className="sr-only">
                                        , invoice #{transaction.invoiceNumber}, {transaction.client}
                                      </span>
                                    </a>
                                  </div>
                                  <div className="mt-1 text-xs leading-5 text-gray-500">
                                    Invoice <span className="text-gray-900">#{transaction.invoiceNumber}</span>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </Fragment>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent client list*/}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                <div className="flex items-center justify-between">
                  <h2 className="text-base font-semibold leading-7 text-gray-900">Recent clients</h2>
                  <a href="#" className="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                    View all<span className="sr-only">, clients</span>
                  </a>
                </div>
                <ul role="list" className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8">
                  {clients.map((client) => (
                    <li key={client.id} className="overflow-hidden rounded-xl border border-gray-200">
                      <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
                        <img
                          src={client.imageUrl}
                          alt={client.name}
                          className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10"
                        />
                        <div className="text-sm font-medium leading-6 text-gray-900">{client.name}</div>
                        <Menu as="div" className="relative ml-auto">
                          <Menu.Button className="-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Open options</span>
                            <EllipsisHorizontalIcon className="h-5 w-5" aria-hidden="true" />
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
                            <Menu.Items className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      active ? 'bg-gray-50' : '',
                                      'block px-3 py-1 text-sm leading-6 text-gray-900'
                                    )}
                                  >
                                    View<span className="sr-only">, {client.name}</span>
                                  </a>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      active ? 'bg-gray-50' : '',
                                      'block px-3 py-1 text-sm leading-6 text-gray-900'
                                    )}
                                  >
                                    Edit<span className="sr-only">, {client.name}</span>
                                  </a>
                                )}
                              </Menu.Item>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </div>
                      <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
                        <div className="flex justify-between gap-x-4 py-3">
                          <dt className="text-gray-500">Last invoice</dt>
                          <dd className="text-gray-700">
                            <time dateTime={client.lastInvoice.dateTime}>{client.lastInvoice.date}</time>
                          </dd>
                        </div>
                        <div className="flex justify-between gap-x-4 py-3">
                          <dt className="text-gray-500">Amount</dt>
                          <dd className="flex items-start gap-x-2">
                            <div className="font-medium text-gray-900">{client.lastInvoice.amount}</div>
                            <div
                              className={classNames(
                                statuses[client.lastInvoice.status],
                                'rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset'
                              )}
                            >
                              {client.lastInvoice.status}
                            </div>
                          </dd>
                        </div>
                      </dl>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}