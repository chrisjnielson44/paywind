'use client'
// components/StockTicker.tsx
import React, { SetStateAction, useEffect, useState } from 'react';
import axios from 'axios';
import { ArrowUp } from 'lucide-react';

const StockTicker = () => {
    const [stockPrice, setStockPrice] = useState(null);
    const [error, setError] = useState(null);

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
                setError(error as SetStateAction<null>);
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
            <div className="text-2xl font-bold">
                TSLA: ${typeof stockPrice === 'number' ? stockPrice.toFixed(2) : 'N/A'}
            </div>
            <div>
                <ArrowUp className='text-green-500' />
            </div>
        </div>
    );
};

export default StockTicker;
