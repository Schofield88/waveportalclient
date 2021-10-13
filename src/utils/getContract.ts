import { Contract, ethers } from 'ethers';
import { isWindowWithEthereum } from '../useWallet/useWallet';
import wavePortalJson from './WavePortal.json';

const getContract = (): Contract | null => {
  if (!isWindowWithEthereum(window)) {
    return null;
  }

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contractAddress = '0xfb6d6Ca53E70Bec17Dc0A584494d8FF716BC1AA2';
  const contractABI = wavePortalJson.abi;

  return new ethers.Contract(contractAddress, contractABI, signer);
};

export { getContract };
