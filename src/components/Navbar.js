import React from 'react';

function Navbar() {
  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      padding: '20px 40px',
      backgroundColor: '#333',
      color: 'white'
    }}>
      <h2>My Shop 🛍️</h2>
      <div>
        <span style={{ margin: '0 15px', cursor: 'pointer' }}>Home</span>
        <span style={{ margin: '0 15px', cursor: 'pointer' }}>Products</span>
        <span style={{ margin: '0 15px', cursor: 'pointer' }}>Cart 🛒</span>
      </div>
    </nav>
  );
}

export default Navbar;