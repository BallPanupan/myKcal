// GlobalContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of your global state
interface GlobalState {
  someData: string;
  loggedIn: boolean;
  authorizationToken: string;
  setSomeData: (data: string) => void;
  setLoggedIn: (data: boolean) => void;
  setAuthorizationToken: (data: string) => void;
  // new prop for profile
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
  const [authorizationToken, setAuthorizationToken] = useState<string>('');

  const globalValue: GlobalState = {
    someData,
    loggedIn,
    authorizationToken,
    setSomeData: (data: string) => setSomeData(data),
    setLoggedIn: (data: boolean) => setLoggedIn(data),
    setAuthorizationToken: (data: string) => setAuthorizationToken(data),
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
