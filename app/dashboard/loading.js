import { Suspense } from 'react'
import { Spinner } from 'reactstrap'
import { FullNav } from './components/nav/full-nav'

import React from 'react';



const AnimatedSkeleton = ({ className }) => (
    <div className={`animate-pulse bg-card ${className} rounded`}></div>
);

const CardSkeleton = () => (
    <div className=" shadow rounded-md p-4 max-w-sm w-full mx-auto bg-card">
        <div className="flex flex-col space-y-4">
            <div className="flex justify-between">
                <AnimatedSkeleton className="h-6 w-1/4" />
                <AnimatedSkeleton className="h-4 w-8" />
            </div>
            <AnimatedSkeleton className="h-20 w-full" />
            <div className="flex justify-between items-center">
                <AnimatedSkeleton className="h-4 w-1/3" />
                <AnimatedSkeleton className="h-4 w-1/4" />
            </div>
        </div>
    </div>
);

export default function DashboardLoading(){
    return (
        <>
            <FullNav />
            <div className="flex-col md:flex">
                <div className="flex-1 space-y-4 p-8 pt-6">
                    <AnimatedSkeleton className="h-8 w-1/2 mb-4" />
                    <div className="grid gap-4 grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
                        <CardSkeleton />
                        <CardSkeleton />
                        <CardSkeleton />
                        <CardSkeleton />
                        {/* ... more card skeletons */}
                    </div>
                    {/* Additional skeletons for other sections */}
                </div>
            </div>
        </>
    );
};
