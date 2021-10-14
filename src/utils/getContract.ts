import { Contract, ethers } from 'ethers';
import { isWindowWithEthereum } from '../useWallet/useWallet';
import wavePortalJson from './WavePortal.json';

const getContract = (): Contract | null => {
  if (!isWindowWithEthereum(window)) {
    return null;
  }

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contractAddress = '0x8ee13c0798fAb958736E55c213A059eA87E82599';
  const contractABI = wavePortalJson.abi;

  return new ethers.Contract(contractAddress, contractABI, signer);
};

export { getContract };
