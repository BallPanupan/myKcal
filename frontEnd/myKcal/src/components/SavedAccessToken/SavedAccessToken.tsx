// SavedAccessToken.tsx
import React, { useEffect, useState } from 'react';

const SavedAccessToken: React.FC = () => {
	type Cookies = { [key: string]: string };

	const getCookies = (): Cookies => {
		return document.cookie.split(';').reduce((cookies: Cookies, cookie) => {
			const [key, value] = cookie.trim().split('=');
			cookies[key] = value;
			return cookies;
		}, {});
	};

	// Example usage:
	const cookiex: Cookies = getCookies();

	console.log('cookiex: ', cookiex);

	// State to hold the access token
	const [accessToken, setAccessToken] = useState('');

	console.log('accessToken: ', accessToken);


	// Effect to load the access token from the cookie when the component mounts
	useEffect(() => {
		const savedAccessToken = getCookie('access_token');
		if (savedAccessToken) {
			setAccessToken(savedAccessToken);
		}
	}, [accessToken]);

	// Function to handle saving the access token to the cookie
	const saveAccessTokenToCookie = (token: any) => {
		setCookie('access_token', token, 7); // expires in 7 days
	};

	// Function to handle logging in and saving the access token
	const handleLogin = () => {
		// Simulate fetching the access token from an API or authentication service
		const fakeAccessToken = 'your_fake_access_token';

		// Save the access token to the state and cookie
		setAccessToken(fakeAccessToken);
		saveAccessTokenToCookie(fakeAccessToken);
	};

	// Function to handle logging out and removing the access token
	const handleLogout = (name: string) => {
		setAccessToken('');
		document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
	};

	// Helper function to get a cookie value
	const getCookie = (name: any) => {
		const value = `; ${document.cookie}`;
		const parts: any = value.split(`; ${name}=`);
		if (parts.length === 2) return parts.pop().split(';').shift();
	};

	// Helper function to set a cookie
	const setCookie = (name: any, value: any, days: any) => {
		const expirationDate = new Date();
		expirationDate.setDate(expirationDate.getDate() + days);
		const cookieValue = `${name}=${value}; expires=${expirationDate.toUTCString()}; path=/`;
		document.cookie = cookieValue;
	};

	const Welcome = (): JSX.Element => {
		const logout = () => {
			handleLogout('access_token');
		};
		return (
			<div>
				<p>Welcome! You are logged in.</p>
				<button onClick={logout}>Logout</button>
			</div>
		);
	};

	const Login = (): JSX.Element => (
		<div>
			<p>Please log in to continue.</p>
			<button onClick={handleLogin}>Login</button>
		</div>
	);

	return (
		<div>
			<h1>React Cookie Example</h1>
			{accessToken ? <Welcome /> : <Login />}
		</div>
	);
};

export default SavedAccessToken;
