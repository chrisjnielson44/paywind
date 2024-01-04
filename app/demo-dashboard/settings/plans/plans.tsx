import SettingInterface from '../settingsinterface'

export default function Plans() {

    return (
        <div>
            <div className='h-screen bg-white dark:bg-gray-900 '>

                <div className="mx-auto max-w-7xl pt-10 lg:flex lg:gap-x-16 lg:px-0">

                    <main className="px-4 py-16 sm:px-6 lg:flex-auto lg:px-0 lg:py-20">
                        <div className="mx-auto max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none">
                            {/* Subscription Plan (Optional) */}
                            <div className="p-6 bg-white shadow rounded-lg dark:bg-gray-900 dark:ring-2 dark:ring-gray-400">
                                <h2 className="text-2xl font-bold mb-4">Subscription Plan</h2>
                                {/* Placeholder for subscription plan details. You can replace this with components displaying the user's current plan, options to upgrade/downgrade, etc. */}
                                <p>Basic Plan - $9.99/month</p>
                                <button
                                    className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                                >
                                    Upgrade Plan
                                </button>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}
