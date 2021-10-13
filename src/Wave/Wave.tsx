import { FC } from 'react';
import styles from './Wave.module.css';
import { WaveButton } from '../Buttons/WaveButton/WaveButton';

const Wave: FC<{ wave: () => Promise<void>; waveCount: string }> = ({
  wave,
  waveCount,
}) => {
  return (
    <div>
      <div className={styles.counter}>{waveCount}</div>
      <WaveButton wave={wave} />
    </div>
  );
};

export { Wave };
