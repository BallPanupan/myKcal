// Login.tsx
import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import { useGlobalState } from '../../GlobalContext/GlobalContext';
import useShareHelper from '../../helpers/fetchProfile';

interface LoginProps {
	width?: 'width' | 'width-300' | 'width-400' | 'width-500';
}

const Login: React.FC<LoginProps> = ({
	width = 'width'
}) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const { someData, loggedIn, setLoggedIn, setAuthorizationToken } = useGlobalState();
	const { fetchProfile } = useShareHelper()

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// Handle form submission
		console.log('Submitting:', { username, password });
		console.log('Login component mounted', { someData, loggedIn });
	
		try {
			const response = await fetch("http://localhost:3000/api/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					email: username,
					password: password,
					// email: "panupan@mykcal.com",
					// password: "password01@"
				})
			});
	
			if (!response.ok) {
				setAuthorizationToken('');
				setLoggedIn(false);
				throw new Error(`HTTP error! Status: ${response.status}`);
			}
	
			const result = await response.json();
			setAuthorizationToken(result.token);
			setLoggedIn(true);
			fetchProfile(result.token);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
	}, []);

	return (
		<div className={styles.fCenter}>
			<form className={`${styles.container} ${styles[width]}`} onSubmit={handleSubmit}>
				<input
					className={styles.input}
					type="text"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					placeholder="Username"
				/>
				<input
					className={styles.input}
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder="Password"
				/>
				<div className={styles.buttonGroup}>
					<button className={styles.button} type="reset">Register</button>
					<button className={styles.button} type="submit">Login</button>
				</div>
			</form>
		</div>
	);
};

export default Login;
