// App.tsx
import React from 'react';
import { GlobalProvider } from './GlobalContext/GlobalContext';
import MainComponent from './components/MainComponent';
import Testx from './components/Testx/Test';
import SavedAccessToken from './components/SavedAccessToken/savedAccessToken';
import Login from './components/Login/Login';

const App: React.FC = () => {
  return (
    <GlobalProvider>
      <MainComponent />
      <Testx />     
      <SavedAccessToken /> 
      <Login/>
    </GlobalProvider>
  );
};

export default App;
