import styles from './App.module.css';
import { useWallet } from './useWallet/useWallet';
import { ConnectWalletButton } from './Buttons/ConnectWalletButton/ConnectWalletButton';
import { Wave } from './Wave/Wave';
import { useWave } from './useWave/useWave';

function App() {
  const { connectWallet } = useWallet();
  const { numberOfWaves, sendAWave } = useWave();

  return (
    <div className={styles.app}>
      <div className={styles.flex}>
        <h1>Solidity Wave Portal</h1>
        <ConnectWalletButton connectWallet={connectWallet} />
      </div>
      <Wave wave={sendAWave} waveCount={numberOfWaves} />
    </div>
  );
}

export default App;
