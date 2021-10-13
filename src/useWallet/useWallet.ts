import { useEffect, useState } from 'react';

interface WindowWithEthereum extends Window {
  ethereum: any;
}

const isWindowWithEthereum = (window: Window): window is WindowWithEthereum => {
  return (window as WindowWithEthereum)?.ethereum;
};

const useWallet = () => {
  const [currentAccount, updateCurrentAccount] = useState<string>('');

  const connectWallet = async () => {
    if (isWindowWithEthereum(window)) {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });

      console.log('Connected: ', accounts[0]);
      updateCurrentAccount(accounts[0]);
    }
  };

  useEffect(() => {
    if (isWindowWithEthereum(window)) {
      const { ethereum } = window;

      if (!ethereum) {
        console.log('Please ensure Metamask is connected');
      } else {
        console.log('Ethereum object: ', ethereum);
      }

      ethereum
        .request({ method: 'eth_accounts' })
        .then((accounts: string[]) => {
          if (accounts.length !== 0) {
            const account = accounts[0];
            console.log('Found an authorized account:', account);
            updateCurrentAccount(account);
          } else {
            console.log('No authorized account found');
          }
        });
    }
  }, []);

  return { currentAccount, connectWallet };
};

export { useWallet, isWindowWithEthereum };
