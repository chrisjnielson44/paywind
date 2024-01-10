'use client'
// components/StockTicker.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Apple, AppleIcon, ArrowUp } from 'lucide-react';

export function TeslaTicker(): JSX.Element {
    const [stockPrice, setStockPrice] = useState<number | null>(null);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const options = {
                method: 'GET',
                url: 'https://realstonks.p.rapidapi.com/TSLA',
                headers: {
                    'X-RapidAPI-Key': '2455058dcfmsh318636964407879p1cd381jsn68ee08853c83',
                    'X-RapidAPI-Host': 'realstonks.p.rapidapi.com'
                }
            };

            try {
                const response = await axios.request(options);
                const marketPrice = response.data.price;
                setStockPrice(marketPrice);
            } catch (error) {
                setError(error as Error);
            }
        };

        fetchData();
        const interval = setInterval(fetchData, 600000); // Update every minute

        return () => clearInterval(interval);
    }, []);

    if (error) return <div>Error loading stock data.</div>;
    if (stockPrice === null) return <div>Loading...</div>;

    return (
        <div className="flex items-center space-x-2">
            <svg className="h-5 w-5 " xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="tesla"><path fill="#C70B01" d="M12,0C8.472,0.015,4.375,0.609,0,2.35c0,0,0.196,0.524,0.672,1.396C4.674,1.989,8.585,1.436,12,1.46v0.003c3.415-0.03,7.327,0.528,11.328,2.28C23.863,2.775,24,2.347,24,2.347C19.625,0.613,15.528,0.015,12,0L12,0z"></path><path fill="#C70B01" d="M8.619,5.034L12,24l3.361-18.961c3.199,0,4.208,0.35,4.354,1.79c0,0,2.15-0.803,3.232-2.438c-4.227-1.965-8.472-2.055-8.472-2.055L12,5.362v0.002h-0.004L12,5.362L9.526,2.34c0,0-4.245,0.091-8.471,2.057c1.083,1.635,3.23,2.43,3.23,2.43C4.431,5.388,5.439,5.034,8.619,5.034L8.619,5.034z"></path><path fill="#AD0A01" d="M12,0C8.472,0.015,4.375,0.609,0,2.35l0,0c0,0,0.196,0.524,0.672,1.396c3.92-1.72,7.753-2.286,11.118-2.286c0.07,0,0.14,0,0.21,0.001v0.003l0,0V0L12,0L12,0z"></path><path fill="#AD0A01" d="M9.526,2.34c0,0-4.245,0.091-8.471,2.057c1.083,1.635,3.23,2.43,3.23,2.43c0.146-1.439,1.155-1.792,4.335-1.792L12,24V5.362v0.002h-0.004L12,5.362L9.526,2.34L9.526,2.34z"></path></svg>
            <div className="text-md md:text-lg lg:text-2xl font-bold">
             ${stockPrice !== null ? stockPrice.toFixed(2) : 'N/A'}
            </div>
            <div>
                <ArrowUp className='text-green-500' />
            </div>
        </div>
    );
};


export function AppleTicker() : JSX.Element {
    const [stockPrice, setStockPrice] = useState<number | null>(null);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const options = {
                method: 'GET',
                url: 'https://realstonks.p.rapidapi.com/AAPL',
                headers: {
                    'X-RapidAPI-Key': '2455058dcfmsh318636964407879p1cd381jsn68ee08853c83',
                    'X-RapidAPI-Host': 'realstonks.p.rapidapi.com'
                }
            };

            try {
                const response = await axios.request(options);
                const marketPrice = response.data.price;
                setStockPrice(marketPrice);
            } catch (error) {
                setError(error as Error);
            }
        };

        fetchData();
        const interval = setInterval(fetchData, 600000); // Update every minute

        return () => clearInterval(interval);
    }, []);

    if (error) return <div>Error loading stock data.</div>;
    if (stockPrice === null) return <div>Loading...</div>;

    return (
        <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 fill-black dark:fill-white" viewBox="0 0 384 512"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>

            <div className="text-md md:text-lg lg:text-2xl  font-bold flex items-center">
            ${stockPrice !== null ? stockPrice.toFixed(2) : 'N/A'}
            </div>
            <div>
                <ArrowUp className='text-green-500' />
            </div>
        </div>
    );
};

export default AppleTicker;