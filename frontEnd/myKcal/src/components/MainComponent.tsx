// MainComponent.tsx
import React from 'react';
import { useGlobalState } from '../GlobalContext/GlobalContext';

const MainComponent: React.FC = () => {
  const { someData, setSomeData } = useGlobalState();

  return (
    <div>
      <p>Global Data: {someData}</p>
      <button onClick={() => setSomeData('New Global Data +1')}>Update Global Data</button>
    </div>
  );
};

export default MainComponent;
