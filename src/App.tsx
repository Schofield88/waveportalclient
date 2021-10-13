import { ethers } from 'ethers';
import styles from './App.module.css';
import wavePortalJson from './utils/WavePortal.json';
import { isWindowWithEthereum, useWallet } from './useWallet/useWallet';
import { ConnectWalletButton } from './Buttons/ConnectWalletButton/ConnectWalletButton';
import { Wave } from './Wave/Wave';
import { useWave } from './useWave/useWave';

function App() {
  const { connectWallet } = useWallet();
  const { numberOfWaves, sendAWave } = useWave();

  const wave = async () => {
    if (isWindowWithEthereum(window)) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contractAddress = '0xfb6d6Ca53E70Bec17Dc0A584494d8FF716BC1AA2';
      const contractABI = wavePortalJson.abi;

      const wavePortalContract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer,
      );

      await sendAWave(wavePortalContract);
    }
  };

  return (
    <div className={styles.app}>
      <div className={styles.flex}>
        <h1>Solidity Wave Portal</h1>
        <ConnectWalletButton connectWallet={connectWallet} />
      </div>
      <Wave wave={wave} waveCount={numberOfWaves} />
    </div>
  );
}

export default App;
