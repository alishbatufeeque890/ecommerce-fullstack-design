import React, { useState } from 'react';
import axios from 'axios';

function Login({ setCurrentPage, setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password
      });

      localStorage.setItem('token', response.data.token);
      setUser(response.data.user);
      setCurrentPage('home');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '70vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #fce4ec, #f3e5f5)',
      padding: '40px 20px',
      fontFamily: "'Poppins', sans-serif"
    }}>
      <div style={{
        maxWidth: '400px',
        width: '100%',
        padding: '45px',
        backgroundColor: 'white',
        borderRadius: '20px',
        boxShadow: '0 10px 40px rgba(142, 68, 173, 0.15)'
      }}>
        <h2 style={{ 
          textAlign: 'center', 
          marginBottom: '8px',
          fontFamily: "'Playfair Display', serif",
          color: '#6a1b6e',
          fontSize: '30px'
        }}>
          Welcome Back
        </h2>
        <p style={{ textAlign: 'center', color: '#999', marginBottom: '30px', fontSize: '14px' }}>
          Login to continue shopping
        </p>

        {error && (
          <p style={{ 
            color: '#c2185b', 
            textAlign: 'center', 
            backgroundColor: '#fce4ec',
            padding: '10px',
            borderRadius: '8px',
            fontSize: '14px'
          }}>
            {error}
          </p>
        )}

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '14px',
              marginBottom: '15px',
              border: '2px solid #f3d4e3',
              borderRadius: '10px',
              boxSizing: 'border-box',
              fontFamily: "'Poppins', sans-serif",
              fontSize: '14px',
              outline: 'none'
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '14px',
              marginBottom: '22px',
              border: '2px solid #f3d4e3',
              borderRadius: '10px',
              boxSizing: 'border-box',
              fontFamily: "'Poppins', sans-serif",
              fontSize: '14px',
              outline: 'none'
            }}
          />
          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '14px',
              background: loading ? '#ccc' : 'linear-gradient(135deg, #8e44ad, #c2185b)',
              color: 'white',
              border: 'none',
              borderRadius: '25px',
              cursor: loading ? 'not-allowed' : 'pointer',
              fontSize: '16px',
              fontFamily: "'Poppins', sans-serif",
              fontWeight: '500',
              boxShadow: '0 4px 15px rgba(142, 68, 173, 0.3)'
            }}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <p style={{ textAlign: 'center', marginTop: '24px', fontSize: '14px', color: '#999' }}>
          Don't have an account?{' '}
          <span
            style={{ color: '#c2185b', cursor: 'pointer', fontWeight: '600' }}
            onClick={() => setCurrentPage('signup')}
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;