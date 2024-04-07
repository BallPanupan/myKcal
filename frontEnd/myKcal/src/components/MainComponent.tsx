// MainComponent.tsx
import React, { useEffect } from 'react';
import useShareHelper from '../helpers/fetchProfile';
import { useGlobalState } from '../GlobalContext/GlobalContext';
import Register from './Register/Register';
import Login from './Login/Login';

const MainComponent: React.FC = () => {
	const { fetchProfile } = useShareHelper()
  const { authorizationToken } = useGlobalState();

	useEffect(() => {
		const cookies = document.cookie.split(';');
		for (let cookie of cookies) {
			const [name, value] = cookie.trim().split('=');
			if (name === 'authorization') {
				fetchProfile(value);
			}
		}
	}, []);
  

  useEffect(() => {
    if (authorizationToken) {
      document.cookie = `authorization=${authorizationToken}; path=/`;
    }
  }, [authorizationToken]);

  return (
    <div>
      <Login width='width-500' />
      {/* <p>Global Data: {someData}</p> */}
    </div>
  );
};

export default MainComponent;
