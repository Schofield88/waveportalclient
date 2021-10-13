import { useWallet } from './useWallet/useWallet';

function App() {
  const { currentAccount, connectWallet } = useWallet();

  console.log('currentAccount: ', currentAccount);

  return (
    <div>
      <h1>Solidity Wave Portal</h1>
      <button onClick={connectWallet}>Connect Ethereum Wallet</button>
    </div>
  );
}

export default App;
