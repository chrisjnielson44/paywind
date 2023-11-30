
import { getServerSession } from 'next-auth/next';
import SettingInterface from '../settingsinterface'
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions"
import { userAgent } from 'next/server';


export default async function Settings() {
    const session = await getServerSession(authOptions);

    return (
        <div>
            <SettingInterface></SettingInterface>
            <div className='bg-white dark:bg-gray-900 flex w-full min-h-screen'>
                <div className="mx-auto max-w-7xl pt-10 lg:flex lg:gap-x-16 lg:px-0">
                    <main className="px-4 py-16 sm:px-6 lg:flex-auto lg:px-0 lg:py-20">
                        <div className="divide-y divide-gray-500">
                            <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
                                <div>
                                    <h2 className="text-xl font-semibold leading-7 text-black dark:text-white">Personal Information</h2>

                                </div>

                                <form className="md:col-span-2">
                                    <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
                                        <div className="col-span-full flex items-center gap-x-8">
                                            <img
                                                src={session?.user.image || ""}
                                                alt="profile image"
                                                className="ring-2 ring-black dark:ring-white h-24 w-24 flex-none rounded-lg bg-gray-800 object-cover"
                                            />
                                            <div>
                                                <button
                                                    type="button"
                                                    className="rounded-md bg-black dark:bg-white/10 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 dark:hover:bg-white/20"
                                                >
                                                    Change avatar
                                                </button>
                                                <p className="mt-2 text-xs leading-5 text-gray-400">JPG, GIF or PNG. 1MB max.</p>
                                            </div>
                                        </div>

                                        <div className="sm:col-span-3">
                                            <label htmlFor="first-name" className="block text-md font-medium leading-6 text-black dark:text-white">
                                                First name
                                            </label>
                                            <p className='pt-2 text-black dark:text-white font-semibold'>{session?.user.first_name}</p>
                                            {/* <div className="mt-2">
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                        />
                      </div> */}
                                        </div>

                                        <div className="sm:col-span-3">
                                            <label htmlFor="last-name" className="block text-md font-medium leading-6 text-black dark:text-white">
                                                Last name
                                            </label>
                                            <p className='pt-2 text-black dark:text-white font-semibold'>{session?.user.last_name}</p>
                                            {/* <div className="mt-2">
                        <input
                          type="text"
                          name="last-name"
                          id="last-name"
                          autoComplete="family-name"
                          className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                        />
                      </div> */}
                                        </div>

                                        <div className="col-span-full">
                                            <label htmlFor="email" className="block text-md font-medium leading-6 text-black dark:text-white">
                                                Email address
                                            </label>
                                            <p className='pt-2 text-black dark:text-white font-semibold'>{session?.user.email}</p>
                                            {/* <div className="mt-2">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                        />
                      </div> */}
                                        </div>


                                    </div>

                                    <div className="mt-8 flex ">
                                        <button
                                            type="submit"
                                            className="rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                                        >
                                            Save
                                        </button>
                                    </div>
                                </form>
                            </div>

                            <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
                                <div>
                                    <h2 className="text-xl font-semibold leading-7 text-black dark:text-white">Change password</h2>
                                    <p className="mt-1 text-sm leading-6 text-gray-400">
                                        Update your password associated with your account.
                                    </p>
                                </div>

                                <form className="md:col-span-2">
                                    <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
                                        <div className="col-span-full">
                                            <label htmlFor="current-password" className="block text-sm font-medium leading-6 text-black dark:text-white">
                                                Current password
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    id="current-password"
                                                    name="current_password"
                                                    type="password"
                                                    autoComplete="current-password"
                                                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-black dark:text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>

                                        <div className="col-span-full">
                                            <label htmlFor="new-password" className="block text-sm font-medium leading-6 text-black dark:text-white">
                                                New password
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    id="new-password"
                                                    name="new_password"
                                                    type="password"
                                                    autoComplete="new-password"
                                                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>

                                        <div className="col-span-full">
                                            <label htmlFor="confirm-password" className="block text-sm font-medium leading-6 text-black dark:text-white">
                                                Confirm password
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    id="confirm-password"
                                                    name="confirm_password"
                                                    type="password"
                                                    autoComplete="new-password"
                                                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-8 flex">
                                        <button
                                            type="submit"
                                            className="rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                                        >
                                            Save
                                        </button>
                                    </div>
                                </form>
                            </div>

                            <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
                                <div>
                                    <h2 className="text-xl font-semibold leading-7 text-black dark:text-white">Delete account</h2>
                                    <p className="mt-1 text-md leading-6 text-gray-400">
                                        No longer want to use our service? You can delete your account here. This action is not reversible.
                                        All information related to this account will be deleted permanently.
                                    </p>
                                </div>

                                <form className="flex items-start md:col-span-2">
                                    <button
                                        type="submit"
                                        className="rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-400"
                                    >
                                        Yes, delete my account
                                    </button>
                                </form>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}
