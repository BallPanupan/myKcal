// App.tsx
import React from 'react';
import { GlobalProvider } from './GlobalContext/GlobalContext';
import MainComponent from './components/MainComponent';
import Testx from './components/Testx/Test';

const App: React.FC = () => {
  return (
    <GlobalProvider>
      <MainComponent />
      <Testx/>      
    </GlobalProvider>
  );
};

export default App;
