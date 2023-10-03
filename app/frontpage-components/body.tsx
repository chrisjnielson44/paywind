
import Image from "next/image"

export default function Body() {
    return (
        <main className="bg-white dark:bg-gray-900">
            <section className="bg-white dark:bg-gray-900 pb-20">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-6 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Empower Your Finances with Paywind</h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-2xl dark:text-gray-300">Discover the ultimate financial hub. Manage all your finances effortlessly in one simple, seamless app. Combining intuitive tools with personalized insights, Paywind ensures you&apos;re always in control of your financial journey. Dive in and experience the future of personal finance.</p>
                        <a href="/demo/dashboard" className="inline-flex w-full items-center justify-center px-5 py-3 mr-3 text-lg font-bold text-center text-white rounded-lg bg-primary-700 hover:bg-green-600 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 bg-green-500 hover:transition duration-300 ease-in-out bg-green-500 ">
                            View Demo
                        </a>
                        
                    </div>
                    <div className=" lg:mt-0 lg:col-span-5 lg:flex">
                        <Image src="pig.svg" alt="pig" width="2432" height="1442"  />
                    </div>
                </div>
            </section>

            <section className="bg-white dark:bg-gray-900 pb-24">
                <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    <div className="grid grid-cols-1 gap-4 mt-8">
                        <Image className="" src="plaid.svg" alt="office content 1" width="2432" height="1442"/>
                    </div>
                    <div className="font-light text-gray-500 sm:text-lg dark:text-gray-300">
                        <h2 className="mb-8 text-black text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Design Your Financial Dashboard with Paywind</h2>
                        <p className="mb-4 text-2xl">Introducing a finance app that bends to your will. With paywind&apos;s modular design, choose only the components you want, creating a personalized experience that mirrors your financial priorities. Your money, your way. Dive into a tailored financial journey with paywind today.</p>
                    </div>

                </div>
            </section>

            <section className="overflow-hidden bg-white py-24 sm:py-32 dark:bg-gray-900 ">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:pr-8 lg:pt-4">
                            <div className="lg:max-w-lg">
                                <h2 className=" text-xl font-semibold leading-7 text-indigo-600 dark:text-indigo-500">Connect with Plaid API</h2>
                                <p className="mt-2 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Unified Finance, Uncompromised Security</p>
                                <p className="mt-6 font-light text-2xl leading-8 text-gray-600 dark:text-gray-300">Experience finance without boundaries. Using the trusted Plaid API, Paywind offers you a seamless connection to your bank, gathering all your financial data securely in one place. Enjoy peace of mind with an app that prioritizes both your convenience and security.</p>
                                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                    
                                    <div className="relative pl-9">
                                        <dt className="inline text-xl font-semibold text-gray-900 dark:text-white">
                                            <svg className="absolute left-1 top-1 h-5 w-5 text-indigo-600 dark:text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
                                            </svg>
                                            True End-To-End Encryption
                                        </dt>
                                        <dd className="inline"></dd>
                                    </div>
                                    
                                </dl>
                            </div>
                        </div>
                        <Image src="personalfin.svg" alt="Product screenshot" className="" width="2432" height="1442"/>
                    </div>
                </div>
            </section>


            <section className="pt-20 bg-white dark:bg-gray-900 ">
                <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <div className="max-w-screen-md mb-8 lg:mb-16">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Personal Finance, Tailored to You</h2>
                        <p className="text-gray-500 sm:text-xl dark:text-gray-300">Here at Paywind, we focus on areas where technology, innovation, and capital can make personal finance seamless, efficient, and growth-driven.</p>
                    </div>
                    <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                        <div>
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                                <svg className="w-5 h-5 text-primary-600 lg:w-auto lg:h-9 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                            </div>
                            <h3 className="mb-2 text-xl font-bold dark:text-white">Budgeting</h3>
                            <p className="text-gray-500 dark:text-gray-300">Plan, allocate, and optimize. Seamlessly track and adjust your spending to ensure you meet your financial goals every month with our intuitive budgeting tools.</p>
                        </div>
                        <div>
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                            <svg className="w-5 h-5 text-primary-600 lg:w-auto lg:h-9 dark:text-primary-300" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
                                            </svg>
                            </div>
                            <h3 className="mb-2 text-xl font-bold dark:text-white">Security</h3>
                            <p className="text-gray-500 dark:text-gray-300">Safeguard your financial data. With our advanced security protocols and permissions, rest assured that your financial details are kept confidential and secure.</p>
                        </div>
                        <div>
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                                <svg className="w-5 h-5 text-primary-600 lg:w-auto lg:h-9 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"></path><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path></svg>
                            </div>
                            <h3 className="mb-2 text-xl font-bold dark:text-white">Automated Finance Management</h3>
                            <p className="text-gray-500 dark:text-gray-300">Auto-categorize expenses, receive timely reminders, and more. Dive into an array of templates and tools designed to make personal finance a breeze.</p>
                        </div>
                        <div>
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                                <svg className="w-5 h-5 text-primary-600 lg:w-auto lg:h-9 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd"></path></svg>
                            </div>
                            <h3 className="mb-2 text-xl font-bold dark:text-white">Financial Oversight</h3>
                            <p className="text-gray-500 dark:text-gray-300">Robust tools tailored for in-depth financial reviews, from monthly summaries to yearly financial retrospectives.</p>
                        </div>
                        <div>
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                                <svg className="w-5 h-5 text-primary-600 lg:w-auto lg:h-9 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path></svg>
                            </div>
                            <h3 className="mb-2 text-xl font-bold dark:text-white">User-Centric Design</h3>
                            <p className="text-gray-500 dark:text-gray-300">Experience personal finance in a beautifully designed, user-friendly environment that fosters effective money management.</p>
                        </div>
                        <div>
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                                <svg className="w-5 h-5 text-primary-600 lg:w-auto lg:h-9 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path></svg>
                            </div>
                            <h3 className="mb-2 text-xl font-bold dark:text-white">Account Management</h3>
                            <p className="text-gray-500 dark:text-gray-300">Stay on top of your financial game. Our system offers adaptable and structured tools tailored for both comprehensive and individual account oversight.</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="py-20"></div>

            
        </main>
    )
}