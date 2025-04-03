// import { useState, useEffect } from 'react';
// import { ethers } from 'ethers';

// declare global {
//   interface Window {
//     ethereum?: any;
//   }
// }

// export const useMetaMask = () => {
//   const [account, setAccount] = useState<string | null>(null);
//   const [provider, setProvider] =
//     useState<ethers.providers.Web3Provider | null>(null);
//   const [isConnecting, setIsConnecting] = useState(false);

//   useEffect(() => {
//     if (window.ethereum) {
//       const ethProvider = new ethers.providers.Web3Provider(window.ethereum);
//       setProvider(ethProvider);

//       // Check if wallet is already connected on load
//       window.ethereum
//         .request({ method: 'eth_accounts' })
//         .then((accounts: string[]) => {
//           if (accounts.length > 0) {
//             setAccount(accounts[0]); // Set the connected account
//           }
//         })
//         .catch((err: any) => console.error('Error checking accounts', err));

//       // Listen for account changes
//       window.ethereum.on('accountsChanged', (accounts: string[]) => {
//         if (accounts.length === 0) {
//           setAccount(null); // User disconnected
//         } else {
//           setAccount(accounts[0]); // Update to new account
//         }
//       });

//       // Listen for chain/network changes
//       window.ethereum.on('chainChanged', () => {
//         window.location.reload(); // Refresh on network change
//       });
//     } else {
//       console.error('Ethereum provider not found. Please install MetaMask.');
//     }
//   }, []);

//   const connectWallet = async () => {
//     if (!window.ethereum) {
//       console.error('MetaMask is not installed!');
//       return;
//     }

//     if (isConnecting) {
//       console.warn('Already processing connection request. Please wait.');
//       return;
//     }

//     setIsConnecting(true);

//     try {
//       const accounts = await window.ethereum.request({
//         method: 'eth_requestAccounts',
//       });
//       setAccount(accounts[0]);
//       console.log('Connected accounts:', accounts);
//     } catch (error: any) {
//       if (error.code === -32002) {
//         console.warn(
//           'MetaMask request is already pending. Please open MetaMask and complete the request.',
//         );
//       } else {
//         console.error('Error connecting to MetaMask', error);
//       }
//     } finally {
//       setIsConnecting(false);
//     }
//   };

//   const sendTransaction = async () => {
//     if (typeof window.ethereum !== 'undefined' && account) {
//       try {
//         const txHash = await window.ethereum.request({
//           method: 'eth_sendTransaction',
//           params: [
//             {
//               from: account, // The user's active address.
//               to: '0x424b9A43C96E738A30D39e0a3e3c42E5f13A8423', // Recipient address.
//               value: ethers.utils.parseEther('0.0001').toHexString(), // Value transferred in wei.
//               gasLimit: ethers.utils.hexlify(21000), // Customizable gas limit.
//               maxPriorityFeePerGas: ethers.utils
//                 .parseUnits('2', 'gwei')
//                 .toHexString(), // Customizable fee.
//               maxFeePerGas: ethers.utils.parseUnits('50', 'gwei').toHexString(), // Customizable fee.
//             },
//           ],
//         });
//         console.log('Transaction Hash:', txHash);

//         // Wait for the transaction to be mined
//         const receipt = await provider?.waitForTransaction(txHash);
//         console.log('Transaction Receipt:', receipt);
//         console.log('Transaction Status:', receipt?.status);
//         logTransactionDetails(receipt);
//       } catch (error) {
//         console.error('Transaction failed:', error);
//       }
//     } else {
//       console.error(
//         'Ethereum provider not found or account not connected. Install MetaMask.',
//       );
//     }
//   };

//   const logTransactionDetails = (
//     receipt: ethers.providers.TransactionReceipt | undefined,
//   ) => {
//     if (receipt) {
//       console.log('Transaction Block Number:', receipt.blockNumber);
//       console.log('Transaction From:', receipt.from);
//       console.log('Transaction To:', receipt.to);
//     } else {
//       console.warn('Transaction receipt is undefined.');
//     }
//   };

//   return { account, connectWallet, sendTransaction };
// };

// export default useMetaMask;
