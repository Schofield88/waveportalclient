import { useState } from 'react';
import { Contract } from 'ethers';

const useWave = () => {
  const [numberOfWaves, updateNumberOfWaves] = useState<string>('0');

  const sendAWave = async (contract: Contract) => {
    const wave = await contract.wave();
    console.log('Mining: ', wave.hash);
    await wave.wait();
    console.log('Mined -- ', wave.hash);

    contract.getTotalWaves().then((waves: number) => {
      updateNumberOfWaves(waves.toString());
    });
  };

  return { numberOfWaves, sendAWave };
};

export { useWave };
