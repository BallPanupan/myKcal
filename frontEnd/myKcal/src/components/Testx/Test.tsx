// Testx.tsx
import React from 'react';
import { useGlobalState } from '../GlobalContext';

const Testx: React.FC = () => {
  const { someData, setSomeData } = useGlobalState();

  return (
    <div>
      <p>Global Data: {someData}</p>
      <button onClick={() => setSomeData('New Global Data +2')}>Update Global Data</button>
    </div>
  );
};

export default Testx;
