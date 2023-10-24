// src/app/demo/crypto/web3.js
import Web3 from 'web3';

let web3;

if (window.ethereum) {
  web3 = new Web3(window.ethereum);
  window.ethereum.enable().catch(error => {
    // User denied account access
    console.error(error);
  });
} else if (window.web3) {
  web3 = new Web3(window.web3.currentProvider);
} else {
  console.error('MetaMask not found');
}

export default web3;
