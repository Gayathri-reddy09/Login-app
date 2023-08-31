import React, { useState } from 'react';
import "./login.css"

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Simulate a login action (replace with actual login logic)
    const validCredentials = [
      { username: 'user', password: 'password' },
      { username: 'Kanvi', password: '123456' }
      // Add more valid credentials as needed
    ];

    const validUser = validCredentials.find(cred => cred.username === username && cred.password === password);

    if (validUser) {
      onLogin(username);
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
