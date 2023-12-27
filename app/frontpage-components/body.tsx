
'use client'
import Image from "next/image"
import Link from "next/link"

import { ChevronRightIcon } from '@heroicons/react/20/solid'

export default function Body() {

    return (
        <main className="bg-white dark:bg-gray-900">
            <section className="bg-white dark:bg-gray-900 pb-20">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-6 text-4xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl dark:text-white">Redefine Your Financial Future with Paywind</h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-500 text-xl lg:mb-8  dark:text-gray-300">Step into the new era of investment management with Paywind. Our cutting-edge robo-advising platform transforms the way you track and grow your portfolio, offering a seamless integration of technology and financial expertise. Whether you&apos;re an individual investor seeking smart, data-driven insights for your personal investments, or a financial advisor managing multiple portfolios, Paywind caters to all your needs. With our user-friendly app, take charge of your investments, gain comprehensive market insights, and make informed decisions with ease. Join Paywind, where innovative investing meets convenience.</p>
                        <div className="flex items-center justify-center ">
                            <Link href="/requestdemo" className="w-full bg-black inline-flex items-center justify-center px-5 py-3 mr-3 text-lg font-bold text-center text-white rounded-lg hover:bg-gray-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900  hover:transition duration-300 ease-in-out dark:ring-2 dark:ring-white md:text-xl ">
                                Request a Demo
                            </Link>
                            <Link href="/auth/signup" className="w-full bg-green-500 inline-flex items-center justify-center px-5 py-3 mr-3 text-lg font-bold text-center text-white rounded-lg hover:bg-green-600 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900  hover:transition duration-300 ease-in-out md:text-xl ">
                                Sign Up
                                <svg className="w-8 h-5 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </Link>


                        </div>
                    </div>
                    <div className="sm:invisible md:invisible lg:visible lg:mt-0 lg:col-span-5 lg:flex ">
                        <Image src="/pig2.svg" alt="pig" width="2432" height="2500" className="animate-fade" />
                    </div>
                </div>
            </section>

            <section className="bg-white dark:bg-gray-900 pb-20">
                <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    <div className="grid grid-cols-1 gap-4 mt-8">
                        <Image className="" src="https://chris-n.s3.us-east-2.amazonaws.com/images/plaid.svg" alt="office content 1" width="2432" height="1442" />
                    </div>
                    <div className="font-light text-gray-500 sm:text-lg dark:text-gray-300">
                        <h2 className="mb-8 text-black text-4xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl dark:text-white">Customize Your Investment Experience</h2>
                        <p className="mb-4 text-xl">Welcome to a new dimension of investment tracking where you&apos;re in full control. Paywind&apos;s adaptable design lets you tailor your financial dashboard to align perfectly with your investment goals. Choose the features that matter most to you, from detailed portfolio analytics to real-time market updates, creating an experience that&apos;s as unique as your investment strategy. Whether you&apos;re a seasoned investor or just starting, Paywind&apos;s intuitive interface empowers you to navigate your financial journey with confidence and ease. </p>
                    </div>

                </div>
            </section>

            <section className="bg-white dark:bg-gray-900 pb-20">
                <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">

                    <div className="font-light text-gray-500 sm:text-lg dark:text-gray-300">
                        <h2 className="mb-8 text-black text-4xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl dark:text-white">Discover Personalized Financial Solutions</h2>
                        <p className="mb-4 text-xl">
                            At Paywind, we understand that every financial journey is unique. That&apos;s why our platform is designed to identify and recommend the best financial solutions tailored to your individual needs. Whether you&apos;re exploring the benefits of a High-Yield Savings Account, considering the growth potential of Index Funds, or planning for retirement with a 401(k), Paywind is here to guide you. Our sophisticated algorithms analyze your financial profile and goals to suggest the most suitable options. With Paywind, you&apos;re not just investing; you&apos;re embarking on a path to financial wellbeing, armed with knowledge and tools tailored just for you. Embrace a smarter way to financial success with Paywind – your partner in personalized finance.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-4 mt-8">
                        <Image className="" src="investor.svg" alt="office content 1" width="2432" height="1442" />
                        {/* <Image src="paywindadvisors.svg" className="h-20 w-auto dark:fill-white" alt="test" height={200} width={200}></Image> */}
                    </div>
                </div>

            </section>

            <section>
                <div className="relative isolate overflow-hidden bg-white dark:bg-gray-900">
                    <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-20">
                        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
                        <svg className="h-12 md:h-12 w-auto fill-green-500 dark:fill-white " viewBox="0 0 350.00000000000006 110.0053045131987"><g transform="matrix(4.640678977689433,0,0,4.640678977689433,-2.5987810683883894,0.7637259811136552)"><path d="M6.1 12.16 c-1.6 0 -2.8 1.22 -2.8 2.76 c0 1.52 1.24 2.76 2.8 2.76 c1.52 0 2.7 -1.24 2.7 -2.76 c0 -1.54 -1.18 -2.76 -2.7 -2.76 z M6.34 20.14 c-1.16 0 -2.28 -0.36 -3 -0.92 l0 4.3 l-2.78 0 l0 -13.78 l2.78 0 l0 0.8 c0.72 -0.56 1.84 -0.9 3 -0.9 c2.8 0 5.18 2.26 5.18 5.22 s-2.38 5.28 -5.18 5.28 z M17.7 12.16 c-1.52 0 -2.7 1.24 -2.7 2.76 c0 1.54 1.18 2.76 2.7 2.76 c1.6 0 2.8 -1.22 2.8 -2.76 c0 -1.52 -1.24 -2.76 -2.8 -2.76 z M20.46 20 l0 -0.76 c-0.72 0.56 -1.84 0.9 -3 0.9 c-2.8 0 -5.18 -2.26 -5.18 -5.22 s2.38 -5.28 5.18 -5.28 c1.16 0 2.28 0.36 3 0.92 l0 -0.82 l2.78 0 l0 10.26 l-2.78 0 z M34.22 9.74 l-3.44 9.9 c-0.96 2.74 -2.2 3.9 -4.72 3.9 l-1 0 l0 -2.5 l0.84 0 c0.92 0 1.52 -0.52 1.9 -1.32 l-3.82 -9.98 l3.18 0 l2.1 6.32 l2.08 -6.32 l2.88 0 z M43.54 20 l-1.4 -5.86 l-1.4 5.86 l-3.52 0 l-2.62 -10.26 l2.8 0 l1.68 7.06 l1.74 -7.06 l2.8 0 l1.72 7.1 l1.7 -7.1 l2.7 0 l-2.64 10.26 l-3.56 0 z M53.28 8.86 l-2.78 0 l0 -2.56 l2.78 0 l0 2.56 z M53.28 20 l-2.78 0 l0 -10.26 l2.78 0 l0 10.26 z M57.13999999999999 9.74 l0 1.04 c0.5 -0.58 1.56 -1.22 2.98 -1.22 c2.4 0 3.96 1.66 3.96 4.14 l0 6.3 l-2.76 0 l0 -5.82 c0 -1.22 -0.7 -2.06 -1.88 -2.06 c-1.36 0 -2.26 0.86 -2.26 2.28 l0 5.6 l-2.78 0 l0 -10.26 l2.74 0 z M70.44 17.68 c1.6 0 2.8 -1.22 2.8 -2.76 c0 -1.52 -1.24 -2.76 -2.8 -2.76 c-1.52 0 -2.7 1.24 -2.7 2.76 c0 1.54 1.18 2.76 2.7 2.76 z M73.2 20 l0 -0.76 c-0.72 0.56 -1.84 0.9 -3 0.9 c-2.8 0 -5.18 -2.26 -5.18 -5.22 s2.38 -5.28 5.18 -5.28 c1.16 0 2.28 0.36 3 0.92 l0 -4.26 l2.78 0 l0 13.7 l-2.78 0 z"></path></g></svg>

                            <div className="mt-24 sm:mt-32 lg:mt-16">
                                <a href="#" className="inline-flex space-x-6">
                                    <span className="rounded-full bg-green-500/10 px-3 py-1 text-sm font-semibold leading-6 text-green-500 ring-1 ring-inset ring-green-500/10">
                                        What&apos;s new
                                    </span>
                                    <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
                                        <span>Just shipped v1.0</span>
                                        <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                    </span>
                                </a>
                            </div>
                            <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
                                Paywind Features 
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-200">
                                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                                fugiat veniam occaecat fugiat aliqua.
                            </p>
                            <div className="mt-10 flex items-center gap-x-6">
                                <a
                                    href="#"
                                    className="rounded-md bg-green-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
                                >
                                    Get started
                                </a>
                                <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                                    Learn more <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </div>
                        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
                            <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                             
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            

            {/* <section className="bg-white dark:bg-gray-900 ">
                <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <div className="max-w-screen-md mb-8 lg:mb-16">
                        <h2 className="mb-4 text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white">Personal Finance, Tailored to You</h2>
                        <p className="text-gray-500 sm:text-xl dark:text-gray-300">Here at Paywind, we focus on areas where technology, innovation, and capital can make personal finance seamless, efficient, and growth-driven.</p>
                    </div>
                    <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                        <div>
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                                <svg className="w-5 h-5 text-primary-600 lg:w-auto lg:h-9 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                            </div>
                            <h3 className="mb-2 text-xl font-bold dark:text-white">Budgeting</h3>
                            <p className="text-gray-500 dark:text-gray-300">Plan, allocate, and optimize. Seamlessly track and adjust your spending to ensure you meet your financial goals every month with our intuitive budgeting tools.</p>
                        </div>
                        <div>
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                                <svg className="w-5 h-5 text-primary-600 lg:w-auto lg:h-9 dark:text-primary-300" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="mb-2 text-xl font-bold dark:text-white">Security</h3>
                            <p className="text-gray-500 dark:text-gray-300">Safeguard your financial data. With our advanced security protocols and permissions, rest assured that your financial details are kept confidential and secure.</p>
                        </div>
                        <div>
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                                <svg className="w-5 h-5 text-primary-600 lg:w-auto lg:h-9 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"></path><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path></svg>
                            </div>
                            <h3 className="mb-2 text-xl font-bold dark:text-white">Automated Finance Management</h3>
                            <p className="text-gray-500 dark:text-gray-300">Auto-categorize expenses, receive timely reminders, and more. Dive into an array of templates and tools designed to make personal finance a breeze.</p>
                        </div>
                        <div>
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                                <svg className="w-5 h-5 text-primary-600 lg:w-auto lg:h-9 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"></path></svg>
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
                                <svg className="w-5 h-5 text-primary-600 lg:w-auto lg:h-9 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path></svg>
                            </div>
                            <h3 className="mb-2 text-xl font-bold dark:text-white">Account Management</h3>
                            <p className="text-gray-500 dark:text-gray-300">Stay on top of your financial game. Our system offers adaptable and structured tools tailored for both comprehensive and individual account oversight.</p>
                        </div>
                    </div>
                </div>
            </section> */}
            <div className="py-20"></div>


        </main>
    )
}