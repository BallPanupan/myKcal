// GlobalContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of your global state
interface GlobalState {
  someData: string;
  loggedIn: boolean;
  authorization: string;
  setSomeData: (data: string) => void;
  setLoggedIn: (data: boolean) => void;
  setAuthorization: (data: string) => void;
}

// Define the props for the GlobalProvider
interface GlobalProviderProps {
  children: ReactNode;
}

// Create the context
const GlobalContext = createContext<GlobalState | undefined>(undefined);

// Create a provider component that will wrap your app
export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [someData, setSomeData] = useState<string>('');
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [authorization, setAuthorization] = useState<string>('');

  const globalValue: GlobalState = {
    someData,
    loggedIn,
    authorization,
    setSomeData: (data: string) => setSomeData(data),
    setLoggedIn: (data: boolean) => setLoggedIn(data),
    setAuthorization: (data: string) => setAuthorization(data),
  };

  console.log('globalValue: ', globalValue);

  return (
    <GlobalContext.Provider value={globalValue}>
      {children}
    </GlobalContext.Provider>
  );
};

// Custom hook to access the global state
export const useGlobalState = (): GlobalState => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalState must be used within a GlobalProvider');
  }
  return context;
};
