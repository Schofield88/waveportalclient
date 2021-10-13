import { FC } from 'react';
import styles from '../Buttons.module.css';

const WaveButton: FC<{ wave: () => Promise<void> }> = ({ wave }) => (
  <button className={styles.widthAndHeight} onClick={wave}>
    Wave
  </button>
);

export { WaveButton };
