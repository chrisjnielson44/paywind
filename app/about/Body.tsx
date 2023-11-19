import Image from "next/image"

export default function Body() {
    return (
        <main className="">
            <section className="h-screen bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
                    <div className="mx-auto max-w-screen-xl text-center mb-8 lg:mb-16">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">About Us</h2>
                        <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400"></p>
                    </div>

                    <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-1">
                    <h2 className="mb-1 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Mission</h2>
                    <p className="text-xl ">
                    At Paywind, we're passionate about revolutionizing personal finance management. 
                    Our mission is to empower users with an intuitive and comprehensive financial hub that simplifies and enhances the way you handle your finances. 
                    Our app, designed with a user-centric approach, offers a modular design allowing for a personalized experience that aligns with your unique financial goals. 
                    By integrating innovative technology with insightful analytics, Paywind ensures that you're always in command of your financial journey, offering seamless budgeting, robust security, and efficient account management. 
                    We're committed to making personal finance not just easier, but also a more insightful and growth-oriented experience. Join us at Paywind, where your financial wellness is our priority, and experience the future of personal finance management.
                    </p>

                    </div>

                    <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-1">
                    <h2 className="mb-1 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Team</h2>

                        <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img width={150} height={150} className="rounded-lg sm:rounded-none sm:rounded-l-lg grayscale" src="LinkedInPhotoCJN.png" alt="Bonnie Avatar"/>
                            </a>
                            <div className="p-5">
                                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    <a href="#">Christopher Nielson</a>
                                </h3>
                                <span className="text-gray-500 dark:text-gray-400">Founder, Full Stack Web Developer, Student</span>
                                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400"></p>
                                <ul className="flex space-x-4 sm:mt-0">
                                <li>
                                <a href="" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:text-white dark:hover:text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-auto h-8 " fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                </a>
                            </li>
                            <li>
                                <a href="" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:text-white dark:hover:text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-auto h-8 " fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                </a>
                            </li>

                            <li>
                                <a href="https://twitter.com/chrisjnielson" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:text-white dark:hover:text-gray-300">
                                    <svg className="w-auto h-8" viewBox="0 0 1200 1227" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill="currentColor" />
                                    </svg>
                                </a>
                            </li>
                                </ul>
                            </div>
                        </div>
                        <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img width={150} height={150} className=" rounded-lg sm:rounded-none sm:rounded-l-lg grayscale" src="TylerM.jpeg" alt="Photo here"/>
                            </a>
                            <div className="p-5">
                                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    <a href="#">Tyler McKibbin</a>
                                </h3>
                                <span className="text-gray-500 dark:text-gray-400">Co Founder, Student</span>
                                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400"></p>
                                <ul className="flex space-x-4 sm:mt-0">
                                <li>
                                <a href="https://www.linkedin.com/in/tyler-mckibbin-0a2b80164/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:text-white dark:hover:text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-auto h-8 " fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/tylermisok" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:text-white dark:hover:text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-auto h-8 " fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                </a>
                            </li>

                            <li>
                            <a href="" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:text-white dark:hover:text-gray-300">
                                    <svg className="w-auto h-8" viewBox="0 0 1200 1227" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill="currentColor" />
                                    </svg>
                                </a>
                            </li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </main>
    )
}