import styles from './App.module.css';
import { useWallet } from './useWallet/useWallet';
import { ConnectWalletButton } from './Buttons/ConnectWalletButton/ConnectWalletButton';
import { Wave } from './Wave/Wave';
import { useWave } from './useWave/useWave';
import { useEffect } from 'react';

function App() {
  const { connectWallet, currentAccount } = useWallet();
  const { allWaves, numberOfWaves, sendAWave, getAllWavesFromContract } =
    useWave();

  useEffect(() => {
    getAllWavesFromContract();
  }, [currentAccount, getAllWavesFromContract]);

  return (
    <div className={styles.app}>
      <div className={styles.flex}>
        <h1>Solidity Wave Portal</h1>
        <ConnectWalletButton connectWallet={connectWallet} />
      </div>
      <Wave
        allWaves={allWaves}
        sendAWave={sendAWave}
        waveCount={numberOfWaves}
      />
    </div>
  );
}

export default App;
