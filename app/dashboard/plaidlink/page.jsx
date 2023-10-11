'use client'
import { useState, useEffect, useCallback } from 'react';
import { usePlaidLink } from 'react-plaid-link';

export default function PlaidLink() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const createLinkToken = async () => {
      try {
        const response = await fetch('/api/plaid/create_token', {
          method: 'POST',
        });
  
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
  
        const data = await response.json();
        const { link_token } = data;
  
        if (!link_token) {
          throw new Error('Link token is missing in the response');
        }
  
        setToken(link_token);
      } catch (error) {
        console.error('Error:', error.message);
        // Optionally, set some state to indicate that an error occurred
        // setError(error.message);
      }
    };
  
    createLinkToken();
  }, []);

  const onSuccess = useCallback(async (publicToken) => {
    await fetch('/api/plaid/exchange_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ public_token: publicToken }),
    });
  }, []);

  const { open, ready } = usePlaidLink({
    token,
    onSuccess,
  });

  return (
    <button onClick={() => open()} disabled={!ready}>
      <strong>Link account</strong>
    </button>
  );
}