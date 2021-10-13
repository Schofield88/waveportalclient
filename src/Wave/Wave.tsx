import { FC } from 'react';
import { WaveButton } from '../Buttons/WaveButton/WaveButton';

const Wave: FC<{ wave: () => Promise<void>; waveCount: string }> = ({
  wave,
  waveCount,
}) => {
  return (
    <div>
      <div>{waveCount}</div>
      <WaveButton wave={wave} />
    </div>
  );
};

export { Wave };
