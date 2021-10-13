import { isWindowWithEthereum, useWallet } from './useWallet/useWallet';
import { ethers } from 'ethers';
import wavePortalJson from './utils/WavePortal.json';

function App() {
  const { connectWallet } = useWallet();

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

      const count = await wavePortalContract.getTotalWaves();
      console.log('Total wave count: ', count.toString());

      const waveTxn = await wavePortalContract.wave();
      console.log('Mining: ', waveTxn.hash);
      await waveTxn.wait();

      console.log('Mined -- ', waveTxn.hash);

      const newCount = await wavePortalContract.getTotalWaves();
      console.log('Total wave count: ', newCount.toString());
    }
  };

  return (
    <div>
      <h1>Solidity Wave Portal</h1>
      <button onClick={connectWallet}>Connect Ethereum Wallet</button>
      <button onClick={wave}>Wave</button>
    </div>
  );
}

export default App;
