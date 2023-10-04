'use client'
// import { useState, useEffect } from 'react';
import { Amplify, Auth } from 'aws-amplify';
import { useRouter } from 'next/navigation';
import awsExports from "../../aws-exports";
Amplify.configure({ ...awsExports, ssr: true });


export default function SignOut() {
    const router = useRouter();

    const handleSignOut = async () => {
        try {
            await Auth.signOut();
            router.push('/log-in');
        } catch (err) {
            console.log('error signing in', err);
        }
    };

    return SignOut;
}