'use client'
import React, { useState } from 'react';

const SuperAdminForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    familyName: '',
    email: '',
    phoneNumber: '',
    password: '',
    status: 'Active',
    twoFactorAuth: false,
  });


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/superadmin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Super Admin created successfully');
      } else {
        alert('Failed to create Super Admin');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to create Super Admin');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
     <div>
        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
          First Name
        </label>
        <input
          type="text"
          name="firstName" // Ensure this matches the state field name
          id="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label htmlFor="familyName" className="block text-sm font-medium text-gray-700">
          Family Name
        </label>
        <input
          type="text"
          name="familyName"
          id="familyName"
          value={formData.familyName}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
          Phone Number
        </label>
        <input
          type="tel"
          name="phoneNumber"
          id="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
 
      <div>
        <label htmlFor="twoFactorAuth" className="block text-sm font-medium text-gray-700">
          Two Factor Auth
        </label>
        <input
          type="checkbox"
          name="twoFactorAuth"
          id="twoFactorAuth"
          checked={formData.twoFactorAuth}
          onChange={(e) => setFormData({ ...formData, twoFactorAuth: e.target.checked })}
          className="mt-1 block p-2 border border-gray-300 rounded-md"
        />
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Create Super Admin
      </button>
    </form>
  );
};

export default SuperAdminForm;