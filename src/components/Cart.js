import React from 'react';

function Cart({ cart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: '50px 40px', minHeight: '400px', fontFamily: "'Poppins', sans-serif" }}>
      <h2 style={{ 
        textAlign: 'center', 
        marginBottom: '30px',
        fontFamily: "'Playfair Display', serif",
        fontSize: '36px',
        color: '#6a1b6e'
      }}>
        Your Cart 🛍️
      </h2>

      {cart.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#999' }}>
          Your cart is empty!
        </p>
      ) : (
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          {cart.map(function(item, index) {
            return (
              <div key={index} style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '15px',
                borderBottom: '1px solid #f3e0e9',
                backgroundColor: 'white',
                borderRadius: '10px',
                marginBottom: '10px',
                boxShadow: '0 2px 8px rgba(142, 68, 173, 0.06)'
              }}>
                <img 
                  src={item.image} 
                  alt={item.name}
                  style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '8px' }}
                />
                <span style={{ flex: 1, marginLeft: '15px', color: '#4a1a4f', fontWeight: '500' }}>{item.name}</span>
                <span style={{ fontWeight: '600', color: '#c2185b' }}>${item.price}</span>
              </div>
            );
          })}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '20px',
            fontSize: '20px',
            fontWeight: '600',
            background: 'linear-gradient(135deg, #8e44ad, #c2185b)',
            color: 'white',
            borderRadius: '10px',
            marginTop: '10px'
          }}>
            <span>Total:</span>
            <span>${total}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;