import React, { ChangeEvent } from 'react';

interface LoginProps {
	onLoginSuccess: (username: string, password: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
	const [username, setUsername] = React.useState<string>('Panupan');
	const [password, setPassword] = React.useState<string>('Password');

	const handleLogin = () => {
		// Add your login logic here
		console.log('Logging in with:', { username, password });

		// Call the callback on successful login
		onLoginSuccess(username, password);
	};

	const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
		setUsername(e.target.value);
	};

	const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		handleLogin();
	};

	return (
		<div className="login-container">
			<h1>myKcal</h1>
			<div className='login'>
				<h2>Login</h2>
				<form onSubmit={handleSubmit}>
					<div className="form-group">
						<label htmlFor="username">Username:</label>
						<input
							type="text"
							id="username"
							value={username}
							onChange={handleUsernameChange}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="password">Password:</label>
						<input
							type="password"
							id="password"
							value={password}
							onChange={handlePasswordChange}
						/>
					</div>
					<button type="submit" className="login-button">
						Login
					</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
