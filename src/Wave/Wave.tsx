import { FC, useState } from 'react';
import styles from './Wave.module.css';
import { WaveButton } from '../Buttons/WaveButton/WaveButton';
import { WaveFeed } from './WaveFeed';
import { IWave } from '../useWave/useWave';

const Wave: FC<{
  sendAWave: (message: string) => Promise<void>;
  waveCount: string;
  allWaves?: Array<IWave>;
}> = ({ sendAWave, waveCount, allWaves }) => {
  const [message, updateMessage] = useState<string>('');

  return (
    <div>
      <div className={styles.counter}>{waveCount}</div>
      <WaveFeed allWaves={allWaves} />
      <form
        onSubmit={(event) => {
          event.preventDefault();
          sendAWave(message);
        }}
      >
        <input
          type="text"
          onChange={(event) => {
            updateMessage(event.currentTarget.value);
          }}
        />
        <WaveButton />
      </form>
    </div>
  );
};

export { Wave };
