'use client'
import axios from 'axios';
import { useState, useEffect } from 'react';

interface CryptoData {
  name: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
  // Add more properties if needed
}

const Metrics: React.FC = () => {
  const [cryptoData, setCryptoData] = useState<CryptoData[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

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
        <h1 className='text-xl font-bold pb-5'>Top 5 Crypto Coins</h1>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div>
            <div className="flex justify-between">
              {cryptoData && cryptoData.map((crypto, index) => (
                <div key={index} className='border rounded-lg shadow-md p-4'>
                  <div className='flex items-center'>
                    <img src={crypto.image} alt={crypto.name} width="32" height="32" className='mr-4' />
                    <h2 className='text-md font-semibold'>{crypto.name}</h2>
                  </div>
                  <p className='text-sm pt-2'>Price: ${crypto.current_price}</p>
                  <p className='text-sm pt-2'>24h Change: {crypto.price_change_percentage_24h.toFixed(2)}%</p>
                  <p className='text-sm pt-2'>Market Cap: ${new Intl.NumberFormat().format(crypto.market_cap)}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className='pt-20'>
         <button 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Connect with MetaMask
        </button>
        </div>
      </div>
     
    </main>
  )
}

export default Metrics;
