// authService.js
const authService = {
    login: async (username, password) => {
      // Implementar la lógica de autenticación con el backend aquí
      // Ejemplo de API ficticia
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      if (!response.ok) {
        throw new Error('Authentication failed');
      }
  
      const user = await response.json();
      return user;
    },
  };
  
  export default authService;
  