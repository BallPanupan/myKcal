// src/components/Login.tsx
import React, { useState } from 'react';
import './Login.css';

const Login: React.FC = () => {
  const [username, setUsername] = useState('Panupan');
  const [password, setPassword] = useState('Password');

  const handleLogin = () => {
    // Add your login logic here
    console.log('Logging in with:', { username, password });
  };

  return (
    <div className="login-container">
      <h1>myKcal</h1>
      <div className='login'>
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleLogin} className="login-button">
          Login
        </button>
      </form>
      </div>
    </div>
  );
};

export default Login;
