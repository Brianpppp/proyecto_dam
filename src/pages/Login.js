// En Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Lógica de inicio de sesión aquí (puede ser simplemente redirigir por ahora)
    navigate('/home');
  };

  const handleRegister = () => {
    // Lógica de registro de usuario
    // Aquí puedes agregar validaciones y lógica de almacenamiento
    const newUser = { username, password };
    setUsers([...users, newUser]);
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        {/* Campos de usuario y contraseña */}
        <label>
          Usuario:
          <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Contraseña:
          <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Iniciar Sesión
        </button>
        {/* Agregar el botón de registro */}
        <button type="button" onClick={handleRegister}>
          Registrarse
        </button>
      </form>

      {/* Mostrar la lista de usuarios registrados */}
      <div>
        <h2>Usuarios Registrados</h2>
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user.username}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Login;
