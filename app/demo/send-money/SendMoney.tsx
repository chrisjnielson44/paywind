'use client'
import React, { useState } from 'react';

interface Account {
  id: string;
  name: string;
  balance: number;
}

const userAccounts: Account[] = [
  { id: '1', name: 'Savings Account', balance: 10000 },
  { id: '2', name: 'Checking Account', balance: 5000 },
];

export default function SendMoney() {
  const [selectedAccount, setSelectedAccount] = useState<Account | null>(null);
  const [recipient, setRecipient] = useState<string>('');
  const [amount, setAmount] = useState<number | ''>('');

  const handleSendMoney = () => {
    if (!selectedAccount || !recipient || !amount) {
      alert('Please fill out all fields before sending.');
      return;
    }
    if (amount <= 0 || amount > selectedAccount.balance) {
      alert('Please enter a valid amount.');
      return;
    }
    alert(`Sent $${amount} to ${recipient} from ${selectedAccount.name}.`);
  };

  return (
    <div className='bg-white h-screen '>
      <div className='mx-auto max-w-7xl pt-20'>
      <h2 className='text-2xl mb-4'>Send Money</h2>

      <div className='mb-4'>
        <label className='block text-sm font-medium mb-2'>Select Account:</label>
        <select
          className='border rounded w-full p-2'
          value={selectedAccount?.id || ''}
          onChange={e => {
            const account = userAccounts.find(acc => acc.id === e.target.value);
            setSelectedAccount(account || null);
          }}
        >
          <option value='' disabled>Select an account</option>
          {userAccounts.map(account => (
            <option key={account.id} value={account.id}>
              {account.name} - Balance: ${account.balance.toLocaleString()}
            </option>
          ))}
        </select>
      </div>

      <div className='mb-4'>
        <label className='block text-sm font-medium mb-2'>Recipient:</label>
        <input
          type='text'
          className='border rounded w-full p-2'
          placeholder='Enter recipient name or email'
          value={recipient}
          onChange={e => setRecipient(e.target.value)}
        />
      </div>

      <div className='mb-4'>
        <label className='block text-sm font-medium mb-2'>Amount:</label>
        <input
          type='number'
          className='border rounded w-full p-2'
          placeholder='Enter amount'
          value={amount}
          onChange={e => setAmount(Number(e.target.value))}
        />
      </div>

      <button
        className='bg-green-500 text-white rounded px-4 py-2 hover:bg-green-600'
        onClick={handleSendMoney}
      >
        Send Money
      </button>
      </div>
    </div>
  );
}
