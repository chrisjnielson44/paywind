'use client'

// components/SP500Card.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ArrowDown, ArrowUp } from 'lucide-react';

const SP500Card = () => {
    const [changePercentage, setChangePercentage] = useState(null);
    const [changePoint, setChangePoint] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const options = {
                method: 'GET',
                url: 'https://realstonks.p.rapidapi.com/SP500',
                headers: {
                    'X-RapidAPI-Key': '2455058dcfmsh318636964407879p1cd381jsn68ee08853c83', // Use environment variable for the API key
                    'X-RapidAPI-Host': 'realstonks.p.rapidapi.com'
                }
            };

            try {
                const response = await axios.request(options);
                setChangePercentage(response.data.change_percentage);
                setChangePoint(response.data.change_point)
            } catch (error) {
                setError(null as React.SetStateAction<null>);
            }
        };
        fetchData();
        const interval = setInterval(fetchData, 600000); // Update every hour

        return () => clearInterval(interval);
    }, []);

    const renderChangeIndicator = () => {
        if (changePercentage !== null && changePercentage > 0) {
            return <ArrowUp className='text-green-500' />;
        } else if (changePercentage !== null && changePercentage < 0) {
            return <ArrowDown className='text-red-500'/>;
        }
        return null; // No arrow for 0% change
    };

    if (error) return <div>Error loading data.</div>;
    if (changePercentage === null) return <div>Loading...</div>;

    return (
        <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold">
                <p>+{changePoint !== null ? changePoint.toFixed(2) : null} ({changePercentage !== null ? changePercentage.toFixed(2) : null})% </p>
                </div>
            {renderChangeIndicator()}
        </div>
    );
};

export default SP500Card;
