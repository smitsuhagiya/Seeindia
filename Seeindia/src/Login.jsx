import React, { useState } from 'react';
import axios from 'axios';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/login', { email, password });
      console.log(response.data); // Assuming response includes user data
      setIsLoggedIn(true); //Set isLoggedIn state to true if login successful
      localStorage.setItem("user" , JSON.stringify(response.data))
      window.location.href = '/';
    } catch (error) {
      console.error('Login failed:', error.response);
      // Handle login failure, show error message to user
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="email"  className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
