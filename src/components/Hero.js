import React from 'react';

function Hero() {
  return (
    <div style={{
      textAlign: 'center',
      padding: '80px 20px',
      backgroundColor: '#f4f4f4'
    }}>
      <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>
        Welcome to My Shop 🛍️
      </h1>
      <p style={{ fontSize: '20px', color: '#666', marginBottom: '30px' }}>
        Best products, best prices, best experience!
      </p>
      <button style={{
        padding: '15px 40px',
        fontSize: '18px',
        backgroundColor: '#333',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}>
        Shop Now
      </button>
    </div>
  );
}

export default Hero;