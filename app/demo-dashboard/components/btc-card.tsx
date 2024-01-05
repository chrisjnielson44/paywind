'use client'
// components/StockTicker.tsx
import React, { SetStateAction, useEffect, useState } from 'react';
import axios from 'axios';
import { ArrowDown } from 'lucide-react';

const BitcoinPrice = () => {
    const [btcPrice, setBtcPrice] = useState<number | null>(null);
    const [error, setError] = useState(null);

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
                setError(error as SetStateAction<null>);
            }
        };

        fetchData();
        const interval = setInterval(fetchData, 60000); // Update every minute

        return () => clearInterval(interval);
    }, []);

    if (error) return <div>Error loading stock data.</div>;
    if (btcPrice === null) return <div>Loading...</div>;

    return (
        <div className="flex items-center space-x-2">

        <div className="text-2xl font-bold">
           ${btcPrice !== null ? btcPrice.toFixed(2) : 'N/A'}
        </div>
         <ArrowDown className='text-red-500'/>
        </div>
    );
};

export default BitcoinPrice;
