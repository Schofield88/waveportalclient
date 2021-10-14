import { useCallback, useEffect, useState } from 'react';
import { getContract } from '../utils/getContract';

interface IWave {
  waver: string;
  timeStamp: Date;
  message: string;
}

const useWave = () => {
  const [numberOfWaves, updateNumberOfWaves] = useState<string>('-');
  const [allWaves, updateAllWaves] = useState<Array<IWave>>();

  const getNumberOfWavesFromContract = () => {
    const wavePortalContract = getContract();

    if (wavePortalContract) {
      wavePortalContract.getTotalWaves().then((waves: number) => {
        updateNumberOfWaves(waves.toString());
      });
    }
  };

  const getAllWavesFromContract = useCallback(async () => {
    const wavePortalContract = getContract();

    if (wavePortalContract) {
      const rawWaves = await wavePortalContract.getAllWaves();

      const wavesReducer = (
        accumulator: Array<IWave>,
        value: { waver: string; message: string; timeStamp: number },
      ): Array<IWave> => {
        return [
          ...accumulator,
          {
            waver: value.waver,
            message: value.message,
            timeStamp: new Date(value.timeStamp * 1000),
          },
        ];
      };

      const waves = rawWaves.reduce(wavesReducer, [] as Array<IWave>);

      updateAllWaves(waves);
    }
  }, []);

  const sendAWave = async (message: string) => {
    const wavePortalContract = getContract();

    if (wavePortalContract) {
      const wave = await wavePortalContract.wave(message);
      console.log('Mining: ', wave.hash);
      await wave.wait();
      console.log('Mined -- ', wave.hash);

      getNumberOfWavesFromContract();
      await getAllWavesFromContract();
    }
  };

  useEffect(() => {
    getNumberOfWavesFromContract();
  }, []);

  return { allWaves, numberOfWaves, sendAWave, getAllWavesFromContract };
};

export { useWave };
export type { IWave };
