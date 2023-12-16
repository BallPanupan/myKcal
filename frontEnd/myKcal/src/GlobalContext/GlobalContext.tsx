// GlobalContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of your global state
interface GlobalState {
  someData: string;
  setSomeData: (data: string) => void;
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
  console.log('someData: ', someData);
  return (
    <GlobalContext.Provider value={{ someData, setSomeData }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Custom hook to access the global state
export const useGlobalState = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalState must be used within a GlobalProvider');
  }
  return context;
};
