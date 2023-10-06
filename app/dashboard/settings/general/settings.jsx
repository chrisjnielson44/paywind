'use client'
import SettingInterface from '../settingsinterface'
import { useUser } from '@auth0/nextjs-auth0/client';


export default function Settings() {
    const { user, error, isLoading } = useUser();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;
    return (
        <div className='bg-white dark:bg-gray-900 '> 
            <div className="mx-auto max-w-7xl pt-10 lg:flex lg:gap-x-16 lg:px-0">
                <SettingInterface/>

                <main className="px-4 py-16 sm:px-6 lg:flex-auto lg:px-0 lg:py-20">
                    <div className='pb-8 flex justify-center md:justify-end '>
                        <img class="p-1 h-20 w-20 rounded-full border-2 shadow-xl bg-white" src={user.picture} alt="" />
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
                                        {/* <div className="text-gray-900 dark:text-white">{user?.attributes?.given_name} {user?.attributes?.family_name}</div> */}
                                        {/* <button type="button" className="font-semibold text-green-600 hover:text-green-500 dark:text-white">
                                            Update
                                        </button> */}
                                    </dd>
                                </div>
                                <div className="pt-6 sm:flex">
                                    <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6 dark:text-white">Email address</dt>
                                    <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                                        <div className="text-gray-900 dark:text-white">{user.email}</div>
                                        {/* <button type="button" className="font-semibold text-green-600 hover:text-green-500 dark:text-white">
                                            Update
                                        </button> */}
                                    </dd>
                                </div>
                                {/* <div className="pt-6 sm:flex">
                                    <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6 dark:text-white">Phone Number</dt>
                                    <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                                        <div className="text-gray-900 dark:text-white">+1 999-999-9999</div>
                                        <button type="button" className="font-semibold text-green-600 hover:text-green-500 dark:text-white">
                                            Update
                                        </button>
                                    </dd>
                                </div> */}

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

                                    {/* <button type="button" className="font-semibold text-green-600 hover:text-green-500 dark:text-white">
                                        Update
                                    </button> */}
                                </li>
                                <li className="flex justify-between gap-x-6 py-6">
                                    <div>
                                        <img className="h-20 w-20" src="/usbank.svg" alt="" />
                                    </div>

                                    {/* <button type="button" className="font-semibold text-green-600 hover:text-green-500 dark:text-white">
                                        Update
                                    </button> */}
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
                                    {/* <button type="button" className="font-semibold text-green-600 hover:text-green-500 dark:text-white">
                                        Update
                                    </button> */}
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
                                        {/* <button type="button" className="font-semibold text-green-600 hover:text-green-500 dark:text-white">
                                            Update
                                        </button> */}
                                    </dd>
                                </div>
                                <div className="pt-6 sm:flex">
                                    <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6 dark:text-white">Date format</dt>
                                    <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                                        <div className="text-gray-900 dark:text-white">DD-MM-YYYY</div>
                                        {/* <button type="button" className="font-semibold text-green-600 hover:text-green-500 dark:text-white">
                                            Update
                                        </button> */}
                                    </dd>
                                </div>
                               
                            </dl>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
