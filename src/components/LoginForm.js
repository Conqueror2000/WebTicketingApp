import React, { useState } from 'react';
import axios from 'axios';
import '../styles/LoginForm.css';
import '../styles/CommonFormStyles.css';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.password) {
      alert("Username and password are required");
      return;
    }
    try {
      const response = await axios.post('https://localhost:5001/api/login', formData);
      console.log('Login Success:', response);
    } catch (error) {
      console.error('Login Error:', error);
      alert(`Login failed: ${error.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form form-group">
      <label className="login-label form-label">
        Username:
        <input type="text" name="username" onChange={handleChange} className="login-input form-control" />
      </label>
      <label className="login-label form-label">
        Password:
        <input type="password" name="password" onChange={handleChange} className="login-input form-control" />
      </label>
      <button type="submit" className="login-button btn btn-primary">Login</button>
    </form>
  );
};

export default LoginForm;
