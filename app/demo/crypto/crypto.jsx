'use client'
import axios from 'axios';
import web3 from "./web3";
import { useState, useEffect } from 'react';

// ERC20 ABI
const ERC20_ABI = [
  {
    "constant": true,
    "inputs": [{"name": "_owner", "type": "address"}],
    "name": "balanceOf",
    "outputs": [{"name": "balance", "type": "uint256"}],
    "type": "function"
  }
]; 

export default function Metrics() {
  const [cryptoData, setCryptoData] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [balances, setBalances] = useState({});
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
        const accounts = await web3.eth.getAccounts();
        setAccounts(accounts);

        // Get Ether balance
        const etherBalance = await web3.eth.getBalance(accounts[0]);
        const formattedEtherBalance = web3.utils.fromWei(etherBalance, 'ether');
        
        // Get DAI token balance
        const daiContractAddress = '0x6b175474e89094c44da98b954eedeac495271d0f';  // Replace with the actual contract address
        const daiContract = new web3.eth.Contract(ERC20_ABI, daiContractAddress);
        const daiBalance = await daiContract.methods.balanceOf(accounts[0]).call();
        const formattedDaiBalance = web3.utils.fromWei(daiBalance, 'ether');

        setBalances({
          ether: formattedEtherBalance,
          DAI: formattedDaiBalance
        });
      } catch (error) {
        console.error("Error fetching the crypto data", error);
      }
    }

    fetchData();
  }, []);

  return (
    <main id="dashboard" className='top-0 h-screen bg-white dark:bg-gray-900'>
      <div className='pt-20 mx-auto max-w-7xl'>
      <div>
        <h2>Your Accountsuh</h2>
        <ul>
          {accounts.map((account, index) => (
            <li key={index}>{account}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Your Balances</h2>
        <p>Ether: {balances.ether}</p>
        <p>DAI: {balances.DAI}</p>
      </div>
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
        </div>
    </main>
  )
}
