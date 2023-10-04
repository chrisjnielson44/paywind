'use client';
import React, { useState } from 'react';
import { Amplify, Auth } from 'aws-amplify';
import { useRouter } from 'next/navigation';

import awsmobile from '../aws-exports';
Amplify.configure(awsmobile);



export default function CustomSignUp() {

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    //   const [phone_number, setPhone] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [code, setCode] = useState<string>('');
    const [isSignUpSubmitted, setIsSignUpSubmitted] = useState(false);
    const [errorCounter, setErrorCounter] = useState(0);


    const handleError = (message: string) => {
        setErrorMessage(null); // First clear the current error message
        setErrorCounter(prevCount => prevCount + 1); 
        setTimeout(() => { // Then set a new one after a short delay
            setErrorMessage(message);
        }, 0);
    };


    const router = useRouter();

    // const formatToE164 = (phoneNumber: string, countryCode: string = "+1") => {
    //     // Remove all characters except digits
    //     let cleaned = ('' + phoneNumber).replace(/\D/g, '');

    //     // Check if the first number is 0, if yes remove it
    //     if (cleaned.startsWith('0')) cleaned = cleaned.slice(1);

    //     // Add the country code prefix
    //     const formatted = countryCode + cleaned;

    //     return formatted;
    // }

    const isPasswordValid = (password: string): boolean => {
        const minLength = 8;
        const hasLowerCase = /[a-z]/.test(password);
        const hasUpperCase = /[A-Z]/.test(password);
        const hasNumbers = /\d/.test(password);
        const hasSpecialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password);
        

        return password.length >= minLength && hasLowerCase && hasUpperCase && hasNumbers && hasSpecialCharacters;
    }

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrorMessage(null);
        // const formattedPhone = formatToE164(phone_number);

        // Check if passwords match
        if (password !== confirmPassword) {
            handleError('Passwords do not match');

            return; // exit the function early
        }
        // let formattedPhoneNumber = phone_number.replace(/\D/g, ''); // Remove non-numeric characters
        // if (!formattedPhoneNumber.startsWith('+')) {
        //     formattedPhoneNumber = '+1' + formattedPhoneNumber; // Assuming US as default country
        // }

        // Check if password is valid
        if (!isPasswordValid(password)) {
            handleError('Password must contain at least 8 characters. Must include at least one lowercase, at least one Uppercase, at least one number (0-9) and at least one special character (!@#$%^&*)');
            return;
        }

        try {
            await Auth.signUp({
                username,
                password,
                attributes: {
                    email, // optional
                    // phone_number: formattedPhoneNumber, // optional - E.164 number convention
                    // other custom attributes
                },

                // autoSignIn: {
                //   // optional - enables auto sign in after user is confirmed
                //   enabled: true,
                // },
            });
            setIsSignUpSubmitted(true);
            //   console.log(user);
            // router.push('/sign-up/confirm');
        } catch (err) {
            if (typeof err === 'object' && err !== null && 'message' in err) {
                handleError(`Error signing up: ${err.message}`);
            } else if (typeof err === 'string') {
                setErrorMessage(`Error signing up: ${err}`);
            } else {
                handleError('Error signing up: An unknown error occurred');
            }
        }
    };

    const handleConfirmation = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrorMessage(null);

        try {
            await Auth.confirmSignUp(username, code);
            router.push('/log-in/log-in-success');
        } catch (err) {
            if (typeof err === 'object' && err !== null && 'message' in err) {
                handleError(`Error signing up: ${err.message}`);
            } else if (typeof err === 'string') {
                handleError(`Error signing up: ${err}`);
            } else {
                handleError('Error signing up: An unknown error occurred');
            }
        }
    };

    return (
        <div className="h-screen bg-white flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 dark:bg-gray-900">
            {!isSignUpSubmitted ? (
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">

                    <svg className="mx-auto h-14 w-auto fill-green-500 dark:fill-white" viewBox="0 0 350.00000000000006 110.0053045131987"><g transform="matrix(4.640678977689433,0,0,4.640678977689433,-2.5987810683883894,0.7637259811136552)"><path d="M6.1 12.16 c-1.6 0 -2.8 1.22 -2.8 2.76 c0 1.52 1.24 2.76 2.8 2.76 c1.52 0 2.7 -1.24 2.7 -2.76 c0 -1.54 -1.18 -2.76 -2.7 -2.76 z M6.34 20.14 c-1.16 0 -2.28 -0.36 -3 -0.92 l0 4.3 l-2.78 0 l0 -13.78 l2.78 0 l0 0.8 c0.72 -0.56 1.84 -0.9 3 -0.9 c2.8 0 5.18 2.26 5.18 5.22 s-2.38 5.28 -5.18 5.28 z M17.7 12.16 c-1.52 0 -2.7 1.24 -2.7 2.76 c0 1.54 1.18 2.76 2.7 2.76 c1.6 0 2.8 -1.22 2.8 -2.76 c0 -1.52 -1.24 -2.76 -2.8 -2.76 z M20.46 20 l0 -0.76 c-0.72 0.56 -1.84 0.9 -3 0.9 c-2.8 0 -5.18 -2.26 -5.18 -5.22 s2.38 -5.28 5.18 -5.28 c1.16 0 2.28 0.36 3 0.92 l0 -0.82 l2.78 0 l0 10.26 l-2.78 0 z M34.22 9.74 l-3.44 9.9 c-0.96 2.74 -2.2 3.9 -4.72 3.9 l-1 0 l0 -2.5 l0.84 0 c0.92 0 1.52 -0.52 1.9 -1.32 l-3.82 -9.98 l3.18 0 l2.1 6.32 l2.08 -6.32 l2.88 0 z M43.54 20 l-1.4 -5.86 l-1.4 5.86 l-3.52 0 l-2.62 -10.26 l2.8 0 l1.68 7.06 l1.74 -7.06 l2.8 0 l1.72 7.1 l1.7 -7.1 l2.7 0 l-2.64 10.26 l-3.56 0 z M53.28 8.86 l-2.78 0 l0 -2.56 l2.78 0 l0 2.56 z M53.28 20 l-2.78 0 l0 -10.26 l2.78 0 l0 10.26 z M57.13999999999999 9.74 l0 1.04 c0.5 -0.58 1.56 -1.22 2.98 -1.22 c2.4 0 3.96 1.66 3.96 4.14 l0 6.3 l-2.76 0 l0 -5.82 c0 -1.22 -0.7 -2.06 -1.88 -2.06 c-1.36 0 -2.26 0.86 -2.26 2.28 l0 5.6 l-2.78 0 l0 -10.26 l2.74 0 z M70.44 17.68 c1.6 0 2.8 -1.22 2.8 -2.76 c0 -1.52 -1.24 -2.76 -2.8 -2.76 c-1.52 0 -2.7 1.24 -2.7 2.76 c0 1.54 1.18 2.76 2.7 2.76 z M73.2 20 l0 -0.76 c-0.72 0.56 -1.84 0.9 -3 0.9 c-2.8 0 -5.18 -2.26 -5.18 -5.22 s2.38 -5.28 5.18 -5.28 c1.16 0 2.28 0.36 3 0.92 l0 -4.26 l2.78 0 l0 13.7 l-2.78 0 z"></path></g></svg>
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="my-10 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">Sign Up</h2>
                    </div>

                    {errorMessage && <p className="animate-shake animate-once animate-ease-in text-red-500 text-center">{errorMessage}</p>}
                    <form onSubmit={handleSignUp} className='block text-sm font-medium leading-6 text-gray-900' >
                        <div >
                            <label htmlFor="email" className="mt-4 block text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                                Email
                            </label>
                            <div className="mt-2.5">
                                <input
                                    value={email}
                                    onChange={(e) => {
                                        setUsername(e.target.value);
                                        setEmail(e.target.value);
                                    }}
                                    type="email"
                                    name="email"
                                    placeholder="you@example.com"
                                    id="email"
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        {/* <div>
                                <label htmlFor="phone-number" className="mt-4 block text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                                    Phone number
                                </label>
                                <div className="relative mt-2.5">
                                    <div className="absolute inset-y-0 left-0 flex items-center">
                                        <label htmlFor="country" className="sr-only">
                                            Country
                                        </label>
                                        <select
                                            id="country"
                                            name="country"
                                            className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm "
                                        >
                                            <option>US</option>
                                            <option>CA</option>
                                            <option>EU</option>
                                        </select>
                                        <ChevronDownIcon
                                            className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                                            aria-hidden="true"
                                        />
                                    </div>
                                    <input
                                        value={phone_number}
                                        onChange={(e) => setPhone(e.target.value)}
                                        type="tel"
                                        name="phone-number"
                                        id="phone-number"
                                        autoComplete="tel"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div> */}

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="mt-4 block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                                    Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="new-password"
                                    required
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div >
                            <div className="flex items-center justify-between">
                                <label htmlFor="confirm-password" className="mt-4 block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                                    Confirm Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    id="confirm-password"
                                    name="confirm-password"
                                    type="password"
                                    autoComplete="new-password"
                                    required
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="mt-10">
                            <button
                                type="submit"
                                className="block w-full rounded-md bg-green-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
                            >
                                Sign Up

                            </button>
                        </div>
                    </form>
                </div>
            ) : (
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <svg className="mx-auto h-14 w-auto fill-green-500 dark:fill-white" viewBox="0 0 350.00000000000006 110.0053045131987"><g transform="matrix(4.640678977689433,0,0,4.640678977689433,-2.5987810683883894,0.7637259811136552)"><path d="M6.1 12.16 c-1.6 0 -2.8 1.22 -2.8 2.76 c0 1.52 1.24 2.76 2.8 2.76 c1.52 0 2.7 -1.24 2.7 -2.76 c0 -1.54 -1.18 -2.76 -2.7 -2.76 z M6.34 20.14 c-1.16 0 -2.28 -0.36 -3 -0.92 l0 4.3 l-2.78 0 l0 -13.78 l2.78 0 l0 0.8 c0.72 -0.56 1.84 -0.9 3 -0.9 c2.8 0 5.18 2.26 5.18 5.22 s-2.38 5.28 -5.18 5.28 z M17.7 12.16 c-1.52 0 -2.7 1.24 -2.7 2.76 c0 1.54 1.18 2.76 2.7 2.76 c1.6 0 2.8 -1.22 2.8 -2.76 c0 -1.52 -1.24 -2.76 -2.8 -2.76 z M20.46 20 l0 -0.76 c-0.72 0.56 -1.84 0.9 -3 0.9 c-2.8 0 -5.18 -2.26 -5.18 -5.22 s2.38 -5.28 5.18 -5.28 c1.16 0 2.28 0.36 3 0.92 l0 -0.82 l2.78 0 l0 10.26 l-2.78 0 z M34.22 9.74 l-3.44 9.9 c-0.96 2.74 -2.2 3.9 -4.72 3.9 l-1 0 l0 -2.5 l0.84 0 c0.92 0 1.52 -0.52 1.9 -1.32 l-3.82 -9.98 l3.18 0 l2.1 6.32 l2.08 -6.32 l2.88 0 z M43.54 20 l-1.4 -5.86 l-1.4 5.86 l-3.52 0 l-2.62 -10.26 l2.8 0 l1.68 7.06 l1.74 -7.06 l2.8 0 l1.72 7.1 l1.7 -7.1 l2.7 0 l-2.64 10.26 l-3.56 0 z M53.28 8.86 l-2.78 0 l0 -2.56 l2.78 0 l0 2.56 z M53.28 20 l-2.78 0 l0 -10.26 l2.78 0 l0 10.26 z M57.13999999999999 9.74 l0 1.04 c0.5 -0.58 1.56 -1.22 2.98 -1.22 c2.4 0 3.96 1.66 3.96 4.14 l0 6.3 l-2.76 0 l0 -5.82 c0 -1.22 -0.7 -2.06 -1.88 -2.06 c-1.36 0 -2.26 0.86 -2.26 2.28 l0 5.6 l-2.78 0 l0 -10.26 l2.74 0 z M70.44 17.68 c1.6 0 2.8 -1.22 2.8 -2.76 c0 -1.52 -1.24 -2.76 -2.8 -2.76 c-1.52 0 -2.7 1.24 -2.7 2.76 c0 1.54 1.18 2.76 2.7 2.76 z M73.2 20 l0 -0.76 c-0.72 0.56 -1.84 0.9 -3 0.9 c-2.8 0 -5.18 -2.26 -5.18 -5.22 s2.38 -5.28 5.18 -5.28 c1.16 0 2.28 0.36 3 0.92 l0 -4.26 l2.78 0 l0 13.7 l-2.78 0 z"></path></g></svg>
                    {errorMessage && <p className="text-red-500 text-center animate-shake">{errorMessage}</p>} {/* Display the error message here */}
                    <h2 className="my-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white">
                        Confirm Signup</h2>
                    <form onSubmit={handleConfirmation} className='block text-sm font-medium leading-6 text-gray-900'>
                    <h2 className="my-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white">
                        Confirmation Code was sent to: <p className='text-green-500'>{email}</p></h2>
                        {/* <div>
                        <label htmlFor="email" className="block text-md font-medium leading-6 text-gray-900 dark:text-white">
                            Username
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                id="username"
                                placeholder="you@example.com"
                                value={username}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-500 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200 sm:text-sm sm:leading-6"
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                    </div> */}
                        <div className='mt-8'>
                            <label htmlFor="code" className='block text-md font-medium leading-6 text-gray-900 dark:text-white'>Confirmation Code</label>
                            <div className="mt-2">

                                <input
                                    type="text"
                                    id="code"
                                    value={code}
                                    onChange={(e) => setCode(e.target.value)}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-500 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200 sm:text-sm sm:leading-6"
                                    required
                                />
                            </div>
                        </div>
                        <div className="mt-10">
                            <button type="submit" className="flex w-full justify-center rounded-md bg-green-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
                                Confirm
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}
