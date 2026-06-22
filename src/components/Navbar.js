import React from 'react';

function Navbar({ cartCount, setCurrentPage, user, setUser }) {
  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    setCurrentPage('home');
  };

  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      flexWrap: 'wrap',
      padding: '18px 20px',
      background: 'linear-gradient(135deg, #8e44ad, #c2185b)',
      color: 'white',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      fontFamily: "'Poppins', sans-serif"
    }}>
      <div 
        style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} 
        onClick={() => setCurrentPage('home')}
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" style={{ marginRight: '10px' }}>
          <path d="M6 7V6C6 3.79 7.79 2 10 2H14C16.21 2 18 3.79 18 6V7H20C20.55 7 21 7.45 21 8V19C21 20.66 19.66 22 18 22H6C4.34 22 3 20.66 3 19V8C3 7.45 3.45 7 4 7H6Z" stroke="white" strokeWidth="1.8" fill="rgba(255,255,255,0.15)"/>
          <path d="M8 7V6C8 4.9 8.9 4 10 4H14C15.1 4 16 4.9 16 6V7" stroke="white" strokeWidth="1.8"/>
          <circle cx="12" cy="13" r="1.5" fill="#ffd700"/>
        </svg>
        <h2 style={{ 
          margin: 0, 
          fontFamily: "'Playfair Display', serif",
          fontWeight: '700',
          fontSize: '22px',
          letterSpacing: '0.5px'
        }}>
          AlishStyle <span style={{ color: '#ffd700' }}>✦</span>
        </h2>
      </div>
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        fontFamily: "'Poppins', sans-serif",
        flexWrap: 'wrap',
        gap: '5px'
      }}>
        <span 
          style={{ margin: '0 10px', cursor: 'pointer' }}
          onClick={() => setCurrentPage('home')}
        >
          Home
        </span>
        <span 
          style={{ margin: '0 10px', cursor: 'pointer' }}
          onClick={() => setCurrentPage('products')}
        >
          Products
        </span>
        <span 
          style={{ margin: '0 10px', cursor: 'pointer' }}
          onClick={() => setCurrentPage('cart')}
        >
          Cart 🛍️ ({cartCount})
        </span>

        {user?.isAdmin && (
          <span 
            style={{ margin: '0 10px', cursor: 'pointer' }}
            onClick={() => setCurrentPage('admin')}
          >
            Admin Panel
          </span>
        )}

        {user ? (
          <>
            <span style={{ margin: '0 10px' }}>Hi, {user.name}</span>
            <span 
              style={{ 
                margin: '0 10px', 
                cursor: 'pointer',
                padding: '8px 16px',
                backgroundColor: 'rgba(255,255,255,0.2)',
                borderRadius: '20px'
              }}
              onClick={handleLogout}
            >
              Logout
            </span>
          </>
        ) : (
          <span 
            style={{ 
              margin: '0 10px', 
              cursor: 'pointer',
              padding: '8px 16px',
              backgroundColor: 'rgba(255,255,255,0.2)',
              borderRadius: '20px'
            }}
            onClick={() => setCurrentPage('login')}
          >
            Login
          </span>
        )}
      </div>
    </nav>
  );
}

export default Navbar;