// 'use client'
import { FormEvent, useState } from "react"
import { useRouter } from 'next/navigation'
import Link from "next/link";
import toast, { Toaster } from 'react-hot-toast'
import { Button } from "@/components/ui/button";
import React from "react";
import { login } from "../confirm/actions";
import { KeyIcon } from "@heroicons/react/24/outline";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Icons } from "./icons";

export default async function Login() {
    // const [isLoading, setIsLoading] = useState(false);
    // const handleSubmit = async (event: { preventDefault: () => void; target: HTMLFormElement | undefined; }) => {
    //     event.preventDefault();
    //     setIsLoading(true);
    
    //     // Create a FormData object from the form event
    //     const formData = new FormData(event.target);
    
    //     // You can now access email and password directly from formData
    //     const email = formData.get('email');
    //     const password = formData.get('password');
    
    //     // Assuming the login function expects an object with email and password
    //     try {
    //         await login({ email, password });
    //         setIsLoading(false);
    //         toast.success('Logged in successfully');
    //     } catch (error) {
    //         setIsLoading(false);
    //         toast.error('Failed to log in');
    //     }
    // };
    


    return (
        <div>
            <div><Toaster /></div>
            <div className="flex min-h-full flex-1 flex-col justify-center py-12">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-black dark:text-white">
                       Advisor Log In
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6">
                        <div>
                            <Label htmlFor="email" className="block text-sm font-bold leading-6 dark:text-white text-primary">
                                Email Address
                            </Label>
                            <div className="mt-2">
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <Label htmlFor="password" className="block text-sm font-bold leading-6 dark:text-white text-primary">
                                    Password
                                </Label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-black dark:text-white hover:text-red-600">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                        <Button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                        >
                            {/* {isLoading ? (
                                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" /> // Make sure Icons.spinner points to your spinner icon
                            ) : (
                                "Sign in"
                            )} */}
                        </Button>
                        </div>
                    </form>
                    <div className="pt-8">
                        <div className="relative mb-5">
                            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                <div className="w-full border-t border-gray-200 dark:border-gray-600" />
                            </div>
                            <div className="relative flex justify-center text-sm font-medium leading-6">
                                <span className="bg-background px-6 text-gray-900 dark:text-white">Or Log In with</span>
                            </div>
                        </div>
                        <button type="button" className="text-white dark:text-black w-full bg-black hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55 mr-2 "
                        >
                            <KeyIcon className="mr-2 -ml-1 w-5 h-5 " />
                            SSO
                            <div></div>
                        </button>
                        
                    </div>

                    <div className="pt-5">

                        {/* <p className="mt-10 text-center text-sm text-gray-400">
                            Don&apos;t have an account?{' '}
                            <Link href="/auth/signup" className="font-semibold leading-6 text-green-500 hover:text-green-300">
                                Sign Up
                            </Link>
                        </p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
