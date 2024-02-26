// App.tsx
import React from 'react';
import { GlobalProvider } from './GlobalContext/GlobalContext';
import MainComponent from './components/MainComponent';
import Login from './components/Login/Login';

const App: React.FC = () => {
  return (
    <GlobalProvider>
      <MainComponent />
      <Login width='width-500' />
    </GlobalProvider>
  );
};

export default App;
