import { useEffect, useState } from 'react';
import { getContract } from '../utils/getContract';

const useWave = () => {
  const [numberOfWaves, updateNumberOfWaves] = useState<string>('-');

  const getWaves = () => {
    const wavePortalContract = getContract();

    if (wavePortalContract) {
      wavePortalContract.getTotalWaves().then((waves: number) => {
        updateNumberOfWaves(waves.toString());
      });
    }
  };

  const sendAWave = async () => {
    const wavePortalContract = getContract();

    if (wavePortalContract) {
      const wave = await wavePortalContract.wave();
      console.log('Mining: ', wave.hash);
      await wave.wait();
      console.log('Mined -- ', wave.hash);

      getWaves();
    }
  };

  useEffect(() => {
    getWaves();
  }, []);

  return { numberOfWaves, sendAWave };
};

export { useWave };
