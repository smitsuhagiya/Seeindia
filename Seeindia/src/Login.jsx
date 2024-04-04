import React, { useState } from 'react';
import axios from 'axios';
import './login.css';


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
    <form action="Login" method="post">
        <div className="form-group">
            <center><h2>Login</h2></center>
          <label htmlFor="username">Username:</label>
          <input type="email" id="email" name="username" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" className="form-control" required />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
        <ul> 
          <li>
            <a className="signup" href="/Signup">Sign Up</a>
          </li>
        </ul>
      </form>
  );
};

export default Login;
