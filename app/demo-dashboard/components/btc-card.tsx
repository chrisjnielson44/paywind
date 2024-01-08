'use client'
// components/StockTicker.tsx
import React, { SetStateAction, useEffect, useState } from 'react';
import axios from 'axios';
import { ArrowDown } from 'lucide-react';

export const BTCPrice = () => {   
     const [btcPrice, setBtcPrice] = useState<number | null>(null);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const options = {
                method: 'GET',
                url: 'https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/price',
                params: {
                  referenceCurrencyUuid: 'yhjMzLPhuIDl'
                },
                headers: {
                  'X-RapidAPI-Key': '2455058dcfmsh318636964407879p1cd381jsn68ee08853c83',
                  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
                }
              };

            try {
                const response = await axios.request(options);
                console.log(response.data);

                const marketPrice = parseFloat(response.data.data.price);
                setBtcPrice(marketPrice);
            } catch (error) {
                setError(error as Error);
            }
        };

        fetchData();
        const interval = setInterval(fetchData, 60000); // Update every hour

        return () => clearInterval(interval);
    }, []);

    if (error) return <div>Error loading coin data.</div>;
    if (btcPrice === null) return <div>Loading...</div>;

    return (
        <div className="flex items-center space-x-2">
                    <img src='https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg' className='h-[25px] w-[25px]'></img>

        <div className="text-md md:text-lg lg:text-xl  font-bold">
           ${btcPrice !== null ? btcPrice.toFixed(2) : 'N/A'}
        </div>
         <ArrowDown className='text-red-500'/>
        </div>
    );
};



export const ETHPrice = () => {
    const [ethPrice, setETHPrice] = useState<number | null>(null);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const options = {
                method: 'GET',
                url: 'https://coinranking1.p.rapidapi.com/coin/razxDUgYGNAdQ/price',
                params: {
                  referenceCurrencyUuid: 'yhjMzLPhuIDl'
                },
                headers: {
                  'X-RapidAPI-Key': '2455058dcfmsh318636964407879p1cd381jsn68ee08853c83',
                  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
                }
              };

            try {
                const response = await axios.request(options);
                console.log(response.data);

                const marketPrice = parseFloat(response.data.data.price);
                setETHPrice(marketPrice);
            } catch (error) {
                setError(error as Error);
            }
        };

        fetchData();
        const interval = setInterval(fetchData, 60000); // Update every hour

        return () => clearInterval(interval);
    }, []);

    if (error) return <div>Error loading coin data.</div>;
    if (ethPrice === null) return <div>Loading...</div>;

    return (
        <div className="flex items-center space-x-2">
        <img src='https://cdn.coinranking.com/rk4RKHOuW/eth.svg' className='h-[25px] w-[25px]'></img>
        <div className="text-md md:text-lg lg:text-xl font-bold">
           ${ethPrice !== null ? ethPrice.toFixed(2) : 'N/A'}
        </div>
         <ArrowDown className='text-red-500'/>
        </div>
    );
};