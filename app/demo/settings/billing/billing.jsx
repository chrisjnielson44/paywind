'use client'
import { useState } from 'react'
import SettingInterface from '../settingsinterface'

export default function Billing() {
    const [cardNumber, setCardNumber] = useState('**** **** **** 1234'); // Placeholder card number
    const [expiryDate, setExpiryDate] = useState('01/23');
    const [cvv, setCVV] = useState('');

    const handleUpdateBilling = () => {
        // TODO: Logic to update billing details
    }

    return (
        <div className='h-screen bg-white dark:bg-gray-900 '>
            <div className="mx-auto max-w-7xl pt-10 lg:flex lg:gap-x-16 lg:px-0">
                <SettingInterface />

                <main className="px-4 py-16 sm:px-6 lg:flex-auto lg:px-0 lg:py-20">
                    <div className="mx-auto max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none">

                        {/* Billing Details */}
                        <div className="p-6 bg-white shadow rounded-lg">
                            <h2 className="text-2xl font-bold mb-4">Billing Details</h2>
                            <div>
      <fieldset>
        <legend className="block text-sm font-medium leading-6 text-gray-900">Card Details</legend>
        <div className="mt-2 -space-y-px rounded-md bg-white shadow-sm">
          <div>
            <label htmlFor="card-number" className="sr-only">
              Card number
            </label>
            <input
              type="text"
              name="card-number"
              id="card-number"
              className="relative block w-full rounded-none rounded-t-md border-0 bg-transparent py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Card number"
            />
          </div>
          <div className="flex -space-x-px">
            <div className="w-1/2 min-w-0 flex-1">
              <label htmlFor="card-expiration-date" className="sr-only">
                Expiration date
              </label>
              <input
                type="text"
                name="card-expiration-date"
                id="card-expiration-date"
                className="relative block w-full rounded-none rounded-bl-md border-0 bg-transparent py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="MM / YY"
              />
            </div>
            <div className="min-w-0 flex-1">
              <label htmlFor="card-cvc" className="sr-only">
                CVC
              </label>
              <input
                type="text"
                name="card-cvc"
                id="card-cvc"
                className="relative block w-full rounded-none rounded-br-md border-0 bg-transparent py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="CVC"
              />
            </div>
          </div>
        </div>
      </fieldset>
      <fieldset className="mt-6 bg-white">
        <legend className="block text-sm font-medium leading-6 text-gray-900">Billing address</legend>
        <div className="mt-2 -space-y-px rounded-md shadow-sm">
          <div>
            <label htmlFor="country" className="sr-only">
              Country
            </label>
            <select
              id="country"
              name="country"
              autoComplete="country-name"
              className="relative block w-full rounded-none rounded-t-md border-0 bg-transparent py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
              <option>United States</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>
          </div>
          <div>
            <label htmlFor="postal-code" className="sr-only">
              ZIP / Postal code
            </label>
            <input
              type="text"
              name="postal-code"
              id="postal-code"
              autoComplete="postal-code"
              className="relative block w-full rounded-none rounded-b-md border-0 bg-transparent py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="ZIP / Postal code"
            />
          </div>
        </div>
      </fieldset>
    </div>
                            <button 
                                onClick={handleUpdateBilling}
                                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            >
                                Update Billing
                            </button>
                        </div>

                        {/* Transaction History */}
                        <div className="p-6 bg-white shadow rounded-lg">
                            <h2 className="text-2xl font-bold mb-4">Transaction History</h2>
                            {/* This is a basic placeholder. You might want to replace this with a list component displaying past transactions. */}
                            <p>No transactions available.</p>
                        </div>

                        {/* Subscription Plan (Optional) */}
                        <div className="p-6 bg-white shadow rounded-lg">
                            <h2 className="text-2xl font-bold mb-4">Subscription Plan</h2>
                            {/* Placeholder for subscription plan details. You can replace this with components displaying the user's current plan, options to upgrade/downgrade, etc. */}
                            <p>Basic Plan - $9.99/month</p>
                            <button 
                                className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                            >
                                Upgrade Plan
                            </button>
                        </div>

                    </div>
                </main>
            </div>
        </div>
    )
}
