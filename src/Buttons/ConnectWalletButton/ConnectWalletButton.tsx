import { FC } from 'react';
import styles from '../Buttons.module.css';

const ConnectWalletButton: FC<{ connectWallet: () => Promise<void> }> = ({
  connectWallet,
}) => (
  <button className={styles.small} onClick={connectWallet}>
    Connect Ethereum Wallet
  </button>
);

export { ConnectWalletButton };
