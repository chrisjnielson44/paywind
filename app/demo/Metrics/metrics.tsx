
interface FinancialStats {
  balance: number;
  monthlyExpenses: number;
  monthlyIncome: number;
  investments: number;
}

const userStats: FinancialStats = {
  balance: 10000,
  monthlyExpenses: 2500,
  monthlyIncome: 3000,
  investments: 5000,
};

export default function Metrics() {
  return (
    <main id="dashboard" className='top-0 h-screen bg-white'>
      <div className='pt-20 mx-auto max-w-7xl'>
        
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='border p-6 rounded shadow-lg'>
            <h2 className='text-xl font-bold'>Balance</h2>
            <p className='text-2xl'>$ {userStats.balance.toLocaleString()}</p>
          </div>

          <div className='border p-6 rounded shadow-lg'>
            <h2 className='text-xl font-bold'>Monthly Expenses</h2>
            <p className='text-2xl'>$ {userStats.monthlyExpenses.toLocaleString()}</p>
          </div>

          <div className='border p-6 rounded shadow-lg'>
            <h2 className='text-xl font-bold'>Monthly Income</h2>
            <p className='text-2xl'>$ {userStats.monthlyIncome.toLocaleString()}</p>
          </div>

          <div className='border p-6 rounded shadow-lg'>
            <h2 className='text-xl font-bold'>Investments</h2>
            <p className='text-2xl'>$ {userStats.investments.toLocaleString()}</p>
          </div>
        </div>

      </div>
    </main>
  );
}
