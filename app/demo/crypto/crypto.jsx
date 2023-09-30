'use client'
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Metrics() {
  const [cryptoData, setCryptoData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
          params: {
            vs_currency: 'usd',
            order_by: 'market_cap_desc',
            per_page: 5,
            sparkline: false,
            price_change_percentage: '24h',
            market_cap_change_percentage: '24h',
            lang: 'en',
          }
        });
        setCryptoData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching the crypto data", error);
      }
    }

    fetchData();
  }, []);

  return (
    <main id="dashboard" className='top-0 h-screen bg-white dark:bg-gray-900'>
      <div className='pt-20 mx-auto max-w-7xl'>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div>
            <h1 className='text-xl font-semibold mb-4'>Top 5 Cryptocurrencies</h1>
            {cryptoData && cryptoData.map((crypto, index) => (
              <div key={index} className='border rounded shadow-md p-4 mb-4'>
                <h2 className='text-lg font-semibold'>{crypto.name}</h2>
                <p>Price: ${crypto.current_price}</p>
                <p>24h Change: {crypto.price_change_percentage_24h.toFixed(2)}%</p>
                <p>Market Cap: ${new Intl.NumberFormat().format(crypto.market_cap)}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}