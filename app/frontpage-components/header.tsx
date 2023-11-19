'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type CustomLinkProps = {
    href: string;
    className?: string;
    children: React.ReactNode;
};

export default function Header() {
    const pathname = usePathname();

    // const CustomLink: React.FC<CustomLinkProps> = ({ href, children, className }) => {
    //     const isActive = pathname === href;
    //     const activeClass = isActive ? 'text-green-500' : '';

    //     return (
    //         <Link href={href}>
    //             <span className={`${className} ${activeClass} cursor-pointer`}>
    //                 {children}
    //             </span>
    //         </Link>
    //     );
    // };

    return (
        <header className=" top-0 z-50 border-green-400  ">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-4 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto px-4 max-w-screen-xl">
                    <Link href="/" className="flex items-center py-4">
                        <svg className="h-10 w-auto fill-green-500 dark:fill-white" viewBox="0 0 350.00000000000006 110.0053045131987"><g transform="matrix(4.640678977689433,0,0,4.640678977689433,-2.5987810683883894,0.7637259811136552)"><path d="M6.1 12.16 c-1.6 0 -2.8 1.22 -2.8 2.76 c0 1.52 1.24 2.76 2.8 2.76 c1.52 0 2.7 -1.24 2.7 -2.76 c0 -1.54 -1.18 -2.76 -2.7 -2.76 z M6.34 20.14 c-1.16 0 -2.28 -0.36 -3 -0.92 l0 4.3 l-2.78 0 l0 -13.78 l2.78 0 l0 0.8 c0.72 -0.56 1.84 -0.9 3 -0.9 c2.8 0 5.18 2.26 5.18 5.22 s-2.38 5.28 -5.18 5.28 z M17.7 12.16 c-1.52 0 -2.7 1.24 -2.7 2.76 c0 1.54 1.18 2.76 2.7 2.76 c1.6 0 2.8 -1.22 2.8 -2.76 c0 -1.52 -1.24 -2.76 -2.8 -2.76 z M20.46 20 l0 -0.76 c-0.72 0.56 -1.84 0.9 -3 0.9 c-2.8 0 -5.18 -2.26 -5.18 -5.22 s2.38 -5.28 5.18 -5.28 c1.16 0 2.28 0.36 3 0.92 l0 -0.82 l2.78 0 l0 10.26 l-2.78 0 z M34.22 9.74 l-3.44 9.9 c-0.96 2.74 -2.2 3.9 -4.72 3.9 l-1 0 l0 -2.5 l0.84 0 c0.92 0 1.52 -0.52 1.9 -1.32 l-3.82 -9.98 l3.18 0 l2.1 6.32 l2.08 -6.32 l2.88 0 z M43.54 20 l-1.4 -5.86 l-1.4 5.86 l-3.52 0 l-2.62 -10.26 l2.8 0 l1.68 7.06 l1.74 -7.06 l2.8 0 l1.72 7.1 l1.7 -7.1 l2.7 0 l-2.64 10.26 l-3.56 0 z M53.28 8.86 l-2.78 0 l0 -2.56 l2.78 0 l0 2.56 z M53.28 20 l-2.78 0 l0 -10.26 l2.78 0 l0 10.26 z M57.13999999999999 9.74 l0 1.04 c0.5 -0.58 1.56 -1.22 2.98 -1.22 c2.4 0 3.96 1.66 3.96 4.14 l0 6.3 l-2.76 0 l0 -5.82 c0 -1.22 -0.7 -2.06 -1.88 -2.06 c-1.36 0 -2.26 0.86 -2.26 2.28 l0 5.6 l-2.78 0 l0 -10.26 l2.74 0 z M70.44 17.68 c1.6 0 2.8 -1.22 2.8 -2.76 c0 -1.52 -1.24 -2.76 -2.8 -2.76 c-1.52 0 -2.7 1.24 -2.7 2.76 c0 1.54 1.18 2.76 2.7 2.76 z M73.2 20 l0 -0.76 c-0.72 0.56 -1.84 0.9 -3 0.9 c-2.8 0 -5.18 -2.26 -5.18 -5.22 s2.38 -5.28 5.18 -5.28 c1.16 0 2.28 0.36 3 0.92 l0 -4.26 l2.78 0 l0 13.7 l-2.78 0 z"></path></g></svg>
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link href="/auth/login" className="text-white text-sm md:text-md lg:text-lg font-bold rounded-lg px-5 py-2 hover:text-white transition duration-300 ease-in-out dark:text-white bg-gray-900 border-2 border-white hover:bg-green-500 ">Log In</Link>
                        
                    </div>
                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        {/* <ul className="flex flex-col mt-4 font-bold text-xl lg:flex-row lg:space-x-12 ">
                            {[
                                { href: "/", name: "Product", className: "text-black border-b border-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-green-500 " },
                                { href: "/a", name: "Pricing", className: "text-black border-b border-gray-100  lg:hover:bg-transparent lg:border-0 lg:hover:text-green-500 dark:text-white  " },
                                { href: "/a", name: "Integrations", className: "text-black border-b border-gray-100  lg:hover:bg-transparent lg:border-0 lg:hover:text-green-500 dark:text-white" },
                                { href: "/about", name: "About", className: "text-black border-b border-gray-100  lg:hover:bg-transparent lg:border-0 lg:hover:text-green-500 dark:text-white " },
                            ].map((link) => (
                                <li key={link.name}>
                                    <CustomLink href={link.href} className={link.className}>
                                        {link.name}
                                    </CustomLink>
                                </li>
                            ))}
                        </ul> */}
                    </div>
                </div>
            </nav>
        </header>
    )
}

