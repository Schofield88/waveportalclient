import { FC } from 'react';
import styles from '../Buttons.module.css';

const WaveButton: FC = () => (
  <input type="submit" value="Wave!" className={styles.seventyFiveWidth} />
);

export { WaveButton };
