import React from 'react';

function Footer() {
  return (
    <footer style={{
      backgroundColor: '#333',
      color: 'white',
      textAlign: 'center',
      padding: '30px 20px',
      marginTop: '40px'
    }}>
      <p>© 2026 My Shop. All rights reserved.</p>
      <div style={{ marginTop: '10px' }}>
        <span style={{ margin: '0 10px', cursor: 'pointer' }}>About</span>
        <span style={{ margin: '0 10px', cursor: 'pointer' }}>Contact</span>
        <span style={{ margin: '0 10px', cursor: 'pointer' }}>Privacy Policy</span>
      </div>
    </footer>
  );
}

export default Footer;