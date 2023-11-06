import logo from './logoDivideAi.png';
import './Login.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Navigate } from 'react-router-dom';

function Login() {
  const [loggedIn, setLoggedIn] = useState(false);
  const handleLogin = () => {
    // Simular um processo de autenticação
    // Quando o login for bem-sucedido, defina loggedIn como true
    setLoggedIn(true);
  }
  if (loggedIn) {
    return <Navigate to="/main" />;
  }
  return (
    
   
  <div class="login-container">
    <div class="header">
        <div class="app-info">
          
          <div class="app-name">Divide Ai</div>
        </div>
      </div>
    <form>
      <div class="form-group">
        <label for="username">Usuário:</label>
        <input type="text" id="username" name="username" placeholder="Seu email" required></input>
      </div>
      <div class="form-group">
        <label for="password">Senha:</label>
        <input type="password" id="password" name="password" placeholder="Sua senha" required></input>
      </div>
      <div class="submit-button">
        <button onClick={handleLogin} type="submit">Entrar</button>
      </div>
    </form>
  </div>

  );
}

export default Login;
