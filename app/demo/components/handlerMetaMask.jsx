import web3 from '../crypto/web3'; 

const handlerMetaMask = async () => {
  // Check if MetaMask is installed
  if (window.ethereum) {
    try {
      // Request account access if MetaMask is installed
      await window.ethereum.request({ method: 'eth_requestAccounts' });
    } catch (error) {
      console.error('Error connecting to MetaMask:', error);
    }
  } else {
    // If MetaMask is not installed, redirect to MetaMask installation page
    window.location.href = 'https://metamask.io/download.html';
  }
};

export default handlerMetaMask;
