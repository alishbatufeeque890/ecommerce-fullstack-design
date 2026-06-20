import React from 'react';

function Footer() {
  return (
    <footer style={{
      background: 'linear-gradient(135deg, #6a1b6e, #8e0e3e)',
      color: 'white',
      textAlign: 'center',
      padding: '35px 20px',
      marginTop: '40px',
      fontFamily: "'Poppins', sans-serif"
    }}>
      <h3 style={{ 
        fontFamily: "'Playfair Display', serif", 
        marginBottom: '10px',
        fontSize: '22px'
      }}>
        AlishStyle ✦
      </h3>
      <p style={{ opacity: 0.85, fontSize: '14px' }}>© 2026 AlishStyle. All rights reserved.</p>
      <div style={{ marginTop: '14px' }}>
        <span style={{ margin: '0 12px', cursor: 'pointer', fontSize: '14px' }}>About</span>
        <span style={{ margin: '0 12px', cursor: 'pointer', fontSize: '14px' }}>Contact</span>
        <span style={{ margin: '0 12px', cursor: 'pointer', fontSize: '14px' }}>Privacy Policy</span>
      </div>
    </footer>
  );
}

export default Footer;