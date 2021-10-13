import { useEffect } from 'react';

interface WindowWithEtherum extends Window {
  ethereum: any;
}

const isWindowWithEtherum = (window: Window): window is WindowWithEtherum => {
  return (window as WindowWithEtherum)?.ethereum;
};

function App() {
  const checkWalletConnection = (): void => {
    if (isWindowWithEtherum(window)) {
      const { ethereum } = window;

      if (!ethereum) {
        console.log('Please ensure Metamask is connected');
      } else {
        console.log('Ethereum object: ', ethereum);
      }
    }
  };

  useEffect(() => {
    checkWalletConnection();
  }, []);

  return (
    <div>
      <h1>Solidity Wave Portal</h1>
    </div>
  );
}

export default App;
