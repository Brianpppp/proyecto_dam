// Login.js
import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';

const Login = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser);
  };

  return (
    <div>
      {!user ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <Dashboard user={user} />
      )}
    </div>
  );
};

export default Login;
