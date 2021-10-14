import { FC } from 'react';
import { IWave } from '../useWave/useWave';

const WaveInfo: FC<{ wave: IWave }> = ({ wave }) => {
  return (
    <div>
      <div>Message: {wave.message}</div>
      <div>Address: {wave.waver}</div>
      <div>Time: {wave.timeStamp.toDateString()}</div>
    </div>
  );
};

const WaveFeed: FC<{ allWaves?: Array<IWave> }> = ({ allWaves }) => {
  if (!allWaves) {
    return null;
  }

  return (
    <div>
      {allWaves.map((wave: IWave) => (
        <WaveInfo key={wave.message} wave={wave} />
      ))}
    </div>
  );
};

export { WaveFeed };
