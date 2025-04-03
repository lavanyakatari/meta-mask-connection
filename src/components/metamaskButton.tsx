// import React from "react";
// import { useMetaMask } from "../../../../hooks/useMetaMask";
// import styles from "./metamask-button.module.scss";

// const MetaMaskButton: React.FC = () => {

//   const { account, connectWallet, sendTransaction } = useMetaMask();

//   return (
//     <div>
//       <button
//         onClick={connectWallet}
//         type="button"
//         className={`${styles.metamaskButton} ${account ? styles.connected : ''}`}
//       >
//         <span className={styles.accountText}>
//           {account
//             ? `Connected: ${account.substring(0, 6)}...${account.slice(-4)}`
//             : "Connect MetaMask"
//           }
//         </span>
//       </button>
//       <button
//         onClick={sendTransaction}
//         type="button"
//         className={`${styles.sendEthButton} btn`}
//         disabled={!account}
//       >
//         Send ETH
//       </button>
//     </div>
//   );
// };

// export default MetaMaskButton;
