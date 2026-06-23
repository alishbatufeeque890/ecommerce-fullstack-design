import React from 'react';

function Hero({ setCurrentPage }) {
  return (
    <div style={{
      textAlign: 'center',
      padding: '60px 20px',
      background: 'linear-gradient(135deg, #fce4ec, #f3e5f5)',
      fontFamily: "'Poppins', sans-serif"
    }}>
      <h1 style={{ 
        fontSize: 'clamp(28px, 6vw, 52px)', 
        marginBottom: '20px',
        fontFamily: "'Playfair Display', serif",
        fontWeight: '700',
        color: '#6a1b6e'
      }}>
        Welcome to AlishStyle ✨
      </h1>
      <p style={{ 
        fontSize: 'clamp(15px, 3vw, 20px)', 
        color: '#7a5980', 
        marginBottom: '30px',
        padding: '0 10px'
      }}>
        Where every outfit tells your story
      </p>
      <button 
        onClick={() => setCurrentPage('products')}
        style={{
          padding: '14px 36px',
          fontSize: 'clamp(15px, 3vw, 18px)',
          background: 'linear-gradient(135deg, #8e44ad, #c2185b)',
          color: 'white',
          border: 'none',
          borderRadius: '30px',
          cursor: 'pointer',
          fontFamily: "'Poppins', sans-serif",
          fontWeight: '500',
          boxShadow: '0 4px 15px rgba(142, 68, 173, 0.4)'
        }}>
        Shop Now
      </button>
    </div>
  );
}

export default Hero;