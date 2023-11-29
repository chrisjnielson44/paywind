
import { getServerSession } from 'next-auth/next';
import SettingInterface from '../settingsinterface'
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions"


export default async function Settings() {
    const session = await getServerSession(authOptions);

    return (
        <div className='bg-white dark:bg-gray-900 md:h-screen'>
            <div className="mx-auto max-w-7xl pt-10 lg:flex lg:gap-x-16 lg:px-0">
                <SettingInterface />
                <main className="px-4 py-16 sm:px-6 lg:flex-auto lg:px-0 lg:py-20">
                    <div className='pb-8 flex justify-center md:justify-end '>
                        <img className="p-1 h-20 w-20 rounded-full border-2 shadow-xl " src={`${session ? session.user?.image : "User not signed in"}`} alt="test" />
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
                                        <div className="text-gray-900 dark:text-white">{session ? session.user?.name : "User not signed in"}
                                        </div>
                                        <button type="button" className="font-semibold text-green-600 hover:text-green-500 dark:text-white">
                                            Update
                                        </button>
                                    </dd>
                                </div>
                                <div className="pt-6 sm:flex">
                                    <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6 dark:text-white">Email address</dt>
                                    <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                                        <div className="text-gray-900 dark:text-white">{session ? session.user?.email : "User not signed in"}</div>
                                        <button type="button" className="font-semibold text-green-600 hover:text-green-500 dark:text-white">
                                            Update
                                        </button>
                                    </dd>
                                </div>
                                <div className="pt-6 sm:flex">
                                    <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6 dark:text-white">Phone Number</dt>
                                    <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                                        <div className="text-gray-900 dark:text-white">{session ? session.user?.phonenumber : "User not signed in"}</div>
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
                                    

                                    {/* <button type="button" className="font-semibold text-green-600 hover:text-green-500 dark:text-white">
                                        Update
                                    </button> */}
                                </li>
                                <li className="flex justify-between gap-x-6 py-6">
                              

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

                            

                            <div className="flex border-t border-gray-100 pt-6">
                                <button type="button" className="text-sm font-semibold leading-6 text-green-600 hover:text-green-500 dark:text-white">
                                    <span aria-hidden="true">+</span> Add another application
                                </button>
                            </div>
                        </div>

                        
                    </div>
                </main>
            </div>
        </div>
    )
}
