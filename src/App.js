import React, { useState } from 'react';
import './App.css';
import Login from './Login';
import Profile from './Profile';

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (username) => {
    setLoggedInUser(username);
  };

  return (
    <div className="App">
      {loggedInUser ? <Profile username={loggedInUser} /> : <Login onLogin={handleLogin} />}
    </div>
  );
}

export default App;
