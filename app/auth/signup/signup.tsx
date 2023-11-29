'use client'
import { FormEvent, useState } from "react"
import { useRouter } from 'next/navigation'
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { PatternFormat } from 'react-number-format';
import { signIn } from "next-auth/react";


export default function SignUp() {
    const router = useRouter();

    const [phone, setPhone] = useState('');

    const isNumeric = (str: string) => {
        return !isNaN(parseFloat(str)) && isFinite(Number(str));
    };


    const validatePassword = (password: string): string | null => {
        if (password.length < 8) {
            return 'Password must be at least 8 characters long.';
        }
        if (!/[A-Z]/.test(password)) {
            return 'Password must contain at least one uppercase letter.';
        }
        if (!/\d/.test(password)) {
            return 'Password must contain at least one number.';
        }
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            return 'Password must contain at least one special character.';
        }
        return null;
    };

    const validatePhoneNumber = (phoneNumber: string): boolean => {
        // Regular expression for validating US phone number format +1 (###) ###-####
        const phoneRegex = /^\+1 \(\d{3}\) \d{3}-\d{4}$/;
        return phoneRegex.test(phoneNumber);
    };


    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const firstName = formData.get('first_name') as string;
        const lastName = formData.get('family_name') as string;
        const password = formData.get('password') as string;
        const phoneNumber = formData.get('phone-number') as string;

        const confirmPassword = formData.get('confirm-password') as string;


        // Check for numeric values in first and last name
        if (isNumeric(firstName) || isNumeric(lastName)) {
            toast.error('First and Last name should not contain numbers.');
            return;
        }

        const passwordError = validatePassword(password);
        if (passwordError) {
            toast.error(passwordError);
            return;
        }


        if (password !== confirmPassword) {
            toast.error('Passwords do not match');
            return;
        }

        if (phoneNumber && !validatePhoneNumber(phoneNumber)) {
            toast.error('Phone number must be in the format +1 (XXX) XXX-XXXX.');
            return;
        }

        try {
            const response = await fetch(`/api/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: formData.get('email'),
                    password: formData.get('password'),
                    first_name: formData.get('first_name'),
                    family_name: formData.get('family_name'),
                    phone: formData.get('phone-number'),
                    role: 'base'
                }),
            });

            const data = await response.json(); // Parse the response data

            if (response.ok) {
                router.push('/dashboard');
                router.refresh();
            } else {
                // Use the error message from the response, if available
                toast.error(data.message || 'An error occurred during sign up');
            }
        } catch (error) {
            console.error('Error during sign up:', error);
            toast.error('An unexpected error occurred');
        }
    };
    return (

        <div className="bg-white dark:bg-gray-900 md:h-screen ">

            <Toaster />
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
                    <div className="flex items-center justify-center">
                        <Link href="/">
                            <svg className="h-14 w-auto fill-green-500 dark:fill-white" viewBox="0 0 350.00000000000006 110.0053045131987"><g transform="matrix(4.640678977689433,0,0,4.640678977689433,-2.5987810683883894,0.7637259811136552)"><path d="M6.1 12.16 c-1.6 0 -2.8 1.22 -2.8 2.76 c0 1.52 1.24 2.76 2.8 2.76 c1.52 0 2.7 -1.24 2.7 -2.76 c0 -1.54 -1.18 -2.76 -2.7 -2.76 z M6.34 20.14 c-1.16 0 -2.28 -0.36 -3 -0.92 l0 4.3 l-2.78 0 l0 -13.78 l2.78 0 l0 0.8 c0.72 -0.56 1.84 -0.9 3 -0.9 c2.8 0 5.18 2.26 5.18 5.22 s-2.38 5.28 -5.18 5.28 z M17.7 12.16 c-1.52 0 -2.7 1.24 -2.7 2.76 c0 1.54 1.18 2.76 2.7 2.76 c1.6 0 2.8 -1.22 2.8 -2.76 c0 -1.52 -1.24 -2.76 -2.8 -2.76 z M20.46 20 l0 -0.76 c-0.72 0.56 -1.84 0.9 -3 0.9 c-2.8 0 -5.18 -2.26 -5.18 -5.22 s2.38 -5.28 5.18 -5.28 c1.16 0 2.28 0.36 3 0.92 l0 -0.82 l2.78 0 l0 10.26 l-2.78 0 z M34.22 9.74 l-3.44 9.9 c-0.96 2.74 -2.2 3.9 -4.72 3.9 l-1 0 l0 -2.5 l0.84 0 c0.92 0 1.52 -0.52 1.9 -1.32 l-3.82 -9.98 l3.18 0 l2.1 6.32 l2.08 -6.32 l2.88 0 z M43.54 20 l-1.4 -5.86 l-1.4 5.86 l-3.52 0 l-2.62 -10.26 l2.8 0 l1.68 7.06 l1.74 -7.06 l2.8 0 l1.72 7.1 l1.7 -7.1 l2.7 0 l-2.64 10.26 l-3.56 0 z M53.28 8.86 l-2.78 0 l0 -2.56 l2.78 0 l0 2.56 z M53.28 20 l-2.78 0 l0 -10.26 l2.78 0 l0 10.26 z M57.13999999999999 9.74 l0 1.04 c0.5 -0.58 1.56 -1.22 2.98 -1.22 c2.4 0 3.96 1.66 3.96 4.14 l0 6.3 l-2.76 0 l0 -5.82 c0 -1.22 -0.7 -2.06 -1.88 -2.06 c-1.36 0 -2.26 0.86 -2.26 2.28 l0 5.6 l-2.78 0 l0 -10.26 l2.74 0 z M70.44 17.68 c1.6 0 2.8 -1.22 2.8 -2.76 c0 -1.52 -1.24 -2.76 -2.8 -2.76 c-1.52 0 -2.7 1.24 -2.7 2.76 c0 1.54 1.18 2.76 2.7 2.76 z M73.2 20 l0 -0.76 c-0.72 0.56 -1.84 0.9 -3 0.9 c-2.8 0 -5.18 -2.26 -5.18 -5.22 s2.38 -5.28 5.18 -5.28 c1.16 0 2.28 0.36 3 0.92 l0 -4.26 l2.78 0 l0 13.7 l-2.78 0 z"></path></g></svg>
                        </Link>
                    </div>
                    <h2 className="flex items-center justify-center mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-green-500 dark:text-white">
                        Sign Up
                    </h2>
                </div>

                <div className=" sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6 " onSubmit={handleSubmit}>
                        <div className="pb-5 sm:mx-auto sm:w-full sm:max-w-sm">


                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 dark:text-white text-green-500">
                                        First Name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="first_name"
                                            name="first_name"
                                            type="text"
                                            autoComplete="given-name"
                                            required
                                            placeholder="Johnny"
                                            className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-black dark:text-white shadow-sm ring-1 ring-inset ring-gray-500 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 dark:text-white text-green-500">
                                        Last Name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="family_name"
                                            name="family_name"
                                            type="text"
                                            autoComplete="family-name"
                                            required
                                            placeholder="Appleseed"
                                            className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-black dark:text-white shadow-sm ring-1 ring-inset ring-gray-500 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-full">
                                    <label htmlFor="phone-number" className="block text-sm font-medium leading-6 dark:text-white text-green-500">
                                        Phone Number
                                    </label>
                                    <div className="mt-2">
                                        <PatternFormat
                                            id="phone-number"
                                            name="phone-number"
                                            mask="_"
                                            format="+1 (###) ###-####"
                                            className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-black dark:text-white shadow-sm ring-1 ring-inset ring-gray-500 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
                                            placeholder="+1 (___) ___-____"
                                            type="tel"
                                            required
                                        />
                                    </div>
                                </div>


                                <div className="sm:col-span-full">
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 dark:text-white text-green-500">
                                        Email address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            required
                                            placeholder="example@example.com"
                                            className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-black dark:text-white shadow-sm ring-1 ring-inset ring-gray-500 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>



                                <div className="col-span-full">
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="password" className="block text-sm font-medium leading-6 dark:text-white text-green-500">
                                            Password
                                        </label>

                                    </div>
                                    <div className="mt-2">
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            autoComplete="current-password"
                                            required
                                            className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-black dark:text-white shadow-sm ring-1 ring-inset ring-gray-500 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="password" className="block text-sm font-medium leading-6 dark:text-white text-green-500">
                                            Confirm Password
                                        </label>

                                    </div>
                                    <div className="mt-2">
                                        <input
                                            id="confirm-password"
                                            name="confirm-password"
                                            type="password"
                                            autoComplete="current-password"
                                            required
                                            className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-black dark:text-white shadow-sm ring-1 ring-inset ring-gray-500 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                            </div>

                        </div>

                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-green-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                        >
                            Sign Up
                        </button>
                    </form>
                    <div>
                        <div className="relative my-5">
                            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                <div className="w-full border-t border-gray-200 dark:border-gray-600" />
                            </div>
                            <div className="relative flex justify-center text-sm font-medium leading-6">
                                <span className="bg-white dark:bg-gray-900 px-6 text-gray-900 dark:text-white">Or Sign Up with</span>
                            </div>
                        </div>

                        <div className="pt-2">
                            <button type="button" onClick={() => signIn('google')} className="text-white w-full  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55 mr-2 mb-2"><svg className="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>Google<div></div></button>
                        </div>
                        {/* <div className="pt-2">
                            <button type="button" className="text-white w-full  dark:bg-white dark:text-black dark:hover:bg-gray-200 justify-between bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2">
                                <svg className="mr-2 -ml-1 w-5 h-5" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
                                Apple
                                <div></div>
                            </button>
                        </div> */}
                        <div className="pt-4">
                            <button type="button" className="text-white w-full  bg-black dark:bg-white dark:text-black hover:bg-gray-900 hover:dark:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55 mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="mr-2 -ml-1 w-5 h-5" viewBox="0 0 1792 1792">
                                    <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
                                </svg>
                                GitHub
                                <div></div>

                            </button>
                        </div>

                        <p className="mt-5 text-center text-sm text-gray-400">
                            Already have an account?{' '}
                            <Link href="/auth/login" className="font-semibold leading-6 text-green-500 hover:text-green-300">
                                Log In
                            </Link>
                        </p>
                    </div>
                </div>

            </div >


        </div >
    )
}