'use client'
import DropDown from '../components/dropdown'

export default function Transactions() {

  return (
    <>
      <main id="dashboard" className='top-0 bg-white dark:bg-gray-900 h-screen'>
        <div className='mx-auto max-w-7xl'>
        <div className="relative isolate overflow-hidden pt-20">


          <div>
            <h3 className="text-3xl font-semibold leading-6 text-gray-900 pb-5 dark:text-white">Transactions</h3>
            <DropDown />
            <ul role="list" className="divide-y divide-gray-100 mt-5 border-2 rounded-lg px-4 shadow-lg dark:border-gray-400">
              <li className="flex justify-between gap-x-6 py-5">
                <div className="flex min-w-0 gap-x-4 ">
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Ms. Piggy Birthday Present</p>
                    <p className="mt-1 truncate text-md leading-5 text-gray-500 text-red-500">- $999.00</p>
                  </div>
                </div>
                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                  <p className="text-sm leading-6 text-gray-900 dark:text-white">Completed</p>
                  <p className="mt-1 text-xs leading-5 text-gray-500"><time dateTime="2023-01-23T13:23Z">2023-01-23 13:23</time></p>
                </div>
              </li>

              <li className="flex justify-between gap-x-6 py-5">
                <div className="flex min-w-0 gap-x-4">
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Monthly Streaming Service</p>
                    <p className="mt-1 truncate text-md leading-5 text-gray-500 text-red-500">- $14.99</p>
                  </div>
                </div>
                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                  <p className="text-sm leading-6 text-gray-900 dark:text-white">Pending</p>
                  <p className="mt-1 text-xs leading-5 text-gray-500"><time dateTime="2023-01-23T14:00Z">2023-01-23 14:00</time></p>
                </div>
              </li>

              <li className="flex justify-between gap-x-6 py-5">
                <div className="flex min-w-0 gap-x-4">
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Zelle Payment from Fozzie Bear</p>
                    <p className="mt-1 truncate text-md leading-5 text-gray-500 text-green-500">+ $200</p>
                  </div>
                </div>
                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                  <p className="text-sm leading-6 text-gray-900 dark:text-white">Pending</p>
                  <p className="mt-1 text-xs leading-5 text-gray-500"><time dateTime="2023-01-23T14:00Z">2023-01-23 23:00</time></p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        </div>
      </main>
    </>
  )
}