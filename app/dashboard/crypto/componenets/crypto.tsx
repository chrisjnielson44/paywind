import axios from 'axios';


type MetricsProps = {
  cryptoData: any[];
};

export default function Metrics({ cryptoData = [] }: MetricsProps) {
  return (
    <div className='pt-20 mx-auto max-w-7xl'>
      {!cryptoData.length ? (
        <div>Loading...</div>
      ) : (
        <div>
          <div className="flex justify-between">
            {cryptoData.map((crypto, index) => (
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
  )
}

export async function getServerSideProps() {
  const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://coingecko.p.rapidapi.com/coins/markets',
  params: {
    vs_currency: 'usd',
    page: '1',
    per_page: '100',
    order: 'market_cap_desc'
  },
  headers: {
    'X-RapidAPI-Key': '2455058dcfmsh318636964407879p1cd381jsn68ee08853c83',
    'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
}