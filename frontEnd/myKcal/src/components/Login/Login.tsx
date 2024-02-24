// Login.tsx
import React, { useState } from 'react';
import styles from './styles.module.css';

interface LoginProps {
	width?: 'width' | 'width-300' | 'width-400' | 'width-500';
}

const Login: React.FC<LoginProps> = ({
	width = 'with'
}) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// Handle form submission
		console.log('Submitting:', { username, password });
	};

	console.log('width', width)

	return (
		<div className={`${styles[width]}`}>
			<form className={styles.container} onSubmit={handleSubmit}>
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
					<button className={styles.button} type="submit">Register</button>
					<button className={styles.button} type="submit">Login</button>
				</div>
			</form>

		</div>
	);
};

export default Login;
