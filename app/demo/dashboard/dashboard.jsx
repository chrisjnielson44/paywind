'use client'
import DropDown from '../components/dropdown'
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




export default function Dashboard() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <main id="dashboard" className='top-0 bg-white dark:bg-gray-900'>
        <div className='mx-auto max-w-7xl'>
          <div className="relative isolate overflow-hidden pt-20">
            {/* Secondary navigation */}
            <div className='pb-20'>
              <h3 class="text-3xl font-semibold leading-6 text-gray-900 sm:text-center md:text-left dark:text-white">Accounts</h3>
              <dl class="mt-10 grid grid-cols-1 grid-rows-2 gap-5 sm:grid-cols-3">
                <div class="overflow-hidden rounded-lg bg-white px-4 py-5 shadow-md border-2 sm:p-6 dark:bg-gray-900 dark:border-gray-400">
                  <div className='py-2 dark:bg-gray-400 rounded-lg'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='h-7 w-auto ' viewBox="0 0 561.578 104.369"><path d="M494.525 0a3.69 3.69 0 0 0-3.691 3.686v25.83h68.244L528 .008 494.525 0M561.578 37.33a3.677 3.677 0 0 0-3.688-3.68h-25.828v68.242l29.504-31.086.012-33.476M524.236 104.369a3.688 3.688 0 0 0 3.678-3.688V74.854h-68.241l31.073 29.508 33.49.007M457.18 67.043a3.687 3.687 0 0 0 3.686 3.688h25.83V2.484l-29.512 31.078-.004 33.481" fill="#0659a5" /><path fill="#010101" d="M144.379 12.453v31.514h-43.91V12.453l-15.987-.006v79.461h15.987V57.771h43.91v34.137h16.016V12.453h-16.016M357.123 12.453v79.441l70.164-.004-8.891-13.98h-45.23V57.771h43.797V44.299h-43.797V26.111h45.156l8.711-13.658h-69.91M25.043 12.443C8.404 12.443 0 22.549 0 37.266v29.665C0 83.957 10.824 91.91 24.957 91.91l50.164-.01-9.293-14.521H28.053c-8.021 0-11.515-2.899-11.515-11.881v-26.91c0-8.684 2.939-12.072 11.729-12.072h37.955l8.928-14.072-50.107-.001M286.947 12.42c-9.613 0-19.451 5.771-19.451 20.625v3.816c0 15.475 9.476 21.389 18.949 21.432h33.275c3.455 0 6.264.572 6.264 6.416l-.004 6.754c-.086 5.236-2.711 6.447-6.379 6.447H275.83l-8.967 13.979h53.762c12.972 0 21.773-6.447 21.773-21.353V65.06c0-14.408-8.176-21.207-20.859-21.207h-31.77c-3.525 0-5.976-.967-5.976-6.184l-.004-5.492c0-4.443 1.688-6.066 5.791-6.066l41.683-.016 8.715-13.69-53.031.015M206.863 12.465L169.184 91.9h17.811l7.338-16.405h40.941l7.315 16.405h17.882l-37.765-79.436-15.843.001m7.896 16.488l14.479 33.021h-28.867l14.388-33.021z" /></svg>
                  </div>
                  <dt class="truncate py-2 text-lg font-medium text-gray-500 dark:text-gray-200 ">Checking</dt>
                  <dd class="mt-1 text-2xl font-semibold tracking-tight text-gray-900 md:text-3xl dark:text-white">$23,234.00</dd>
                </div>
                <div class="overflow-hidden rounded-lg bg-white px-4 py-5 shadow-md border-2 sm:p-6 dark:bg-gray-900 dark:border-gray-400">
                  <div className='py-2 dark:bg-gray-400 rounded-lg'>
                  <img src='https://www.timlewis.com/wp-content/uploads/2018/03/PNGPIX-COM-US-Bank-Logo-PNG-Transparent.png' alt='' className='h-7 w-auto'></img>
                  </div>
                  <dt class="truncate py-2 text-lg font-medium text-gray-500">Savings</dt>
                  <dd class="mt-1 text-2xl font-semibold tracking-tight text-gray-900 md:text-3xl dark:text-white">$125,243.00</dd>
                </div>
                <div class="overflow-hidden rounded-lg bg-white px-4 py-5 shadow-md border-2 sm:p-6 dark:bg-gray-900 dark:border-gray-400">
                  <div className='py-2 dark:bg-gray-400 rounded-lg'>
                  <img src='https://www.ironwoodwm.com/wp-content/uploads/2019/10/charles-schwab-logo-1.png' alt='' className='h-7 w-auto'></img>
                  </div>
                  <dt class="truncate py-2 text-lg font-medium text-gray-500">Investments</dt> 
                  <dd class="mt-1 text-2xl font-semibold tracking-tight text-gray-900  md:text-3xl dark:text-white">$90,234.00</dd>
                </div>
                
                <button type="button" class="overflow-hidden rounded-lg bg-white px-4 py-5  border-2 sm:p-6 border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 dark:bg-gray-900 ">
                  <Link href="/demo/settings">
                    <span class="mt-2 block text-2xl font-semibold text-gray-900 dark:text-white">Add Bank +</span>
                  </Link>
                </button>
              </dl>
            </div>
          </div>

          <div>
            <h3 class="text-3xl font-semibold leading-6 text-gray-900 pb-5 dark:text-white">Recent Transactions</h3>
            <DropDown />
            <ul role="list" class="divide-y divide-gray-100 mt-5 border-2 rounded-lg px-4 shadow-lg dark:border-gray-400">
              <li class="flex justify-between gap-x-6 py-5">
                <div class="flex min-w-0 gap-x-4 ">
                  <div class="min-w-0 flex-auto">
                    <p class="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Ms. Piggy Birthday Present</p>
                    <p class="mt-1 truncate text-md leading-5 text-gray-500 text-red-500">- $999.00</p>
                  </div>
                </div>
                <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                  <p class="text-sm leading-6 text-gray-900 dark:text-white">Completed</p>
                  <p class="mt-1 text-xs leading-5 text-gray-500"><time datetime="2023-01-23T13:23Z">2023-01-23 13:23</time></p>
                </div>
              </li>

              <li class="flex justify-between gap-x-6 py-5">
                <div class="flex min-w-0 gap-x-4">
                  <div class="min-w-0 flex-auto">
                    <p class="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Monthly Streaming Service</p>
                    <p class="mt-1 truncate text-md leading-5 text-gray-500 text-red-500">- $14.99</p>
                  </div>
                </div>
                <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                  <p class="text-sm leading-6 text-gray-900 dark:text-white">Pending</p>
                  <p class="mt-1 text-xs leading-5 text-gray-500"><time datetime="2023-01-23T14:00Z">2023-01-23 14:00</time></p>
                </div>
              </li>

              <li class="flex justify-between gap-x-6 py-5">
                <div class="flex min-w-0 gap-x-4">
                  <div class="min-w-0 flex-auto">
                    <p class="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Zelle Payment from Fozzie Bear</p>
                    <p class="mt-1 truncate text-md leading-5 text-gray-500 text-green-500">+ $200</p>
                  </div>
                </div>
                <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                  <p class="text-sm leading-6 text-gray-900 dark:text-white">Pending</p>
                  <p class="mt-1 text-xs leading-5 text-gray-500"><time datetime="2023-01-23T14:00Z">2023-01-23 23:00</time></p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  )
}