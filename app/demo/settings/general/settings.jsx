'use client'
import { useState } from 'react'
import SettingInterface from '../settingsinterface'
import { Dialog, Switch } from '@headlessui/react'
import {
    BellIcon,
    CreditCardIcon,
    CubeIcon,
    FingerPrintIcon,
    UserCircleIcon,
    UsersIcon,
} from '@heroicons/react/24/outline'



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Settings() {
    const [automaticTimezoneEnabled, setAutomaticTimezoneEnabled] = useState(true)

    return (
        <div className='bg-white dark:bg-gray-900 '> 
            <div className="mx-auto max-w-7xl pt-10 lg:flex lg:gap-x-16 lg:px-0">
                <SettingInterface/>

                <main className="px-4 py-16 sm:px-6 lg:flex-auto lg:px-0 lg:py-20">
                    <div className='pb-8 flex justify-end '>
                        <img class=" h-20 w-20 rounded-full border-2 shadow-xl bg-white" src="/kermit.png" alt="" />
                    </div>
                    <div className="mx-auto max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none">
                        <div>
                            <h2 className="text-base font-semibold leading-7 text-gray-900 dark:text-white">Profile</h2>
                            <p className="mt-1 text-sm leading-6 text-gray-500">
                                
                            </p>

                            <dl className="mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6">
                                <div className="pt-6 sm:flex">
                                    <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6 dark:text-white">Full name</dt>
                                    <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                                        <div className="text-gray-900 dark:text-white">Kermit Frog</div>
                                        <button type="button" className="font-semibold text-green-600 hover:text-green-500 dark:text-white">
                                            Update
                                        </button>
                                    </dd>
                                </div>
                                <div className="pt-6 sm:flex">
                                    <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6 dark:text-white">Email address</dt>
                                    <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                                        <div className="text-gray-900 dark:text-white">kermit.frog@paywind.io</div>
                                        <button type="button" className="font-semibold text-green-600 hover:text-green-500 dark:text-white">
                                            Update
                                        </button>
                                    </dd>
                                </div>
                                <div className="pt-6 sm:flex">
                                    <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6 dark:text-white">Phone Number</dt>
                                    <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                                        <div className="text-gray-900 dark:text-white">+1 999-999-9999</div>
                                        <button type="button" className="font-semibold text-green-600 hover:text-green-500 dark:text-white">
                                            Update
                                        </button>
                                    </dd>
                                </div>

                            </dl>
                        </div>

                        <div id="connect-bank">
                            <h2 className="text-base font-semibold leading-7 text-gray-900 dark:text-white">Bank accounts</h2>
                            <p className="mt-1 text-sm leading-6 text-gray-500 dark:text-gray-200">Connect bank accounts to your account.</p>

                            <ul role="list" className="mt-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6">
                                <li className="flex justify-between gap-x-6 py-6">
                                    <div className=" ">
                                        <img className="h-20 w-20" src="/chase.svg" alt="" />
                                    </div>

                                    <button type="button" className="font-semibold text-green-600 hover:text-green-500 dark:text-white">
                                        Update
                                    </button>
                                </li>
                                <li className="flex justify-between gap-x-6 py-6">
                                    <div>
                                        <img className="h-20 w-20" src="/usbank.svg" alt="" />
                                    </div>

                                    <button type="button" className="font-semibold text-green-600 hover:text-green-500 dark:text-white">
                                        Update
                                    </button>
                                </li>
                            </ul>

                            <div className="flex border-t border-gray-100 pt-6">
                                <button type="button" className="text-sm font-semibold leading-6 text-green-600 hover:text-green-500 dark:text-white">
                                    <span aria-hidden="true">+</span> Add another bank
                                </button>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-base font-semibold leading-7 text-gray-900 dark:text-white">Integrations</h2>
                            <p className="mt-1 text-sm leading-6 text-gray-500 dark:text-gray-200">Connect applications to your account.</p>

                            <ul role="list" className="mt-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6">
                                <li className="flex justify-between gap-x-6 py-6">
                                    <div className="font-medium text-gray-900 dark:text-white">QuickBooks</div>
                                    <button type="button" className="font-semibold text-green-600 hover:text-green-500 dark:text-white">
                                        Update
                                    </button>
                                </li>
                            </ul>

                            <div className="flex border-t border-gray-100 pt-6">
                                <button type="button" className="text-sm font-semibold leading-6 text-green-600 hover:text-green-500 dark:text-white">
                                    <span aria-hidden="true">+</span> Add another application
                                </button>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-base font-semibold leading-7 text-gray-900 dark:text-white">Language and dates</h2>
                            <p className="mt-1 text-sm leading-6 text-gray-500 dark:text-white">
                                Choose what language and date format to use throughout your account.
                            </p>

                            <dl className="mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6">
                                <div className="pt-6 sm:flex">
                                    <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6 dark:text-white">Language</dt>
                                    <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                                        <div className="text-gray-900 dark:text-white">English</div>
                                        <button type="button" className="font-semibold text-green-600 hover:text-green-500">
                                            Update
                                        </button>
                                    </dd>
                                </div>
                                <div className="pt-6 sm:flex">
                                    <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6 dark:text-white">Date format</dt>
                                    <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                                        <div className="text-gray-900 dark:text-white">DD-MM-YYYY</div>
                                        <button type="button" className="font-semibold text-green-600 hover:text-green-500 dark:text-white">
                                            Update
                                        </button>
                                    </dd>
                                </div>
                                <Switch.Group as="div" className="flex pt-6">
                                    <Switch.Label as="dt" className="flex-none pr-6 font-medium text-gray-900 sm:w-64 dark:text-white" passive>
                                        Automatic timezone
                                    </Switch.Label>
                                    <dd className="flex flex-auto items-center justify-end">
                                        <Switch
                                            checked={automaticTimezoneEnabled}
                                            onChange={setAutomaticTimezoneEnabled}
                                            className={classNames(
                                                automaticTimezoneEnabled ? 'bg-green-600' : 'bg-gray-200',
                                                'flex w-8 cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600'
                                            )}
                                        >
                                            <span
                                                aria-hidden="true"
                                                className={classNames(
                                                    automaticTimezoneEnabled ? 'translate-x-3.5' : 'translate-x-0',
                                                    'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                                                )}
                                            />
                                        </Switch>
                                    </dd>
                                </Switch.Group>
                            </dl>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
