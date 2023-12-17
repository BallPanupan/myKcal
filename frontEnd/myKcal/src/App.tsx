// App.tsx
import React from 'react';
import { GlobalProvider } from './GlobalContext/GlobalContext';
import MainComponent from './components/MainComponent';
import Testx from './components/Testx/Test';
import SavedAccessToken from './components/SavedAccessToken/savedAccessToken';

const App: React.FC = () => {
  return (
    <GlobalProvider>
      <MainComponent />
      <Testx />     
      <SavedAccessToken /> 
    </GlobalProvider>
  );
};

export default App;
