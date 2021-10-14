import { FC } from 'react';
import { IWave } from '../useWave/useWave';
import styles from './WaveFeed.module.css';

const WaveInfo: FC<{ wave: IWave }> = ({ wave }) => {
  return (
    <div className={styles.wave}>
      <div>Message: {wave.message}</div>
      <div className={styles.flex}>
        <div className={styles.address}>Address: {wave.waver}</div>
        <div className={styles.timeStamp}>
          Time: {wave.timeStamp.toDateString()}
        </div>
      </div>
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
