import { plaidClient } from '../../../plaid';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).send('Method Not Allowed');
  }

  try {
    const tokenResponse = await plaidClient.linkTokenCreate({
      user: { client_user_id: process.env.PLAID_CLIENT_ID },
      client_name: "Plaid's Tiny Quickstart",
      language: 'en',
      products: ['auth'],
      country_codes: ['US'],
      redirect_uri: process.env.PLAID_SANDBOX_REDIRECT_URI,
    });

    return res.json(tokenResponse.data);
  } catch (error) {
    console.error('Error creating link token:', error.message);
    return res.status(500).send('Internal Server Error');
  }
}
