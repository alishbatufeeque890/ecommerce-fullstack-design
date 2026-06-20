import React from 'react';

function Products() {
  const products = [
    { 
      id: 1, 
      name: 'Sneakers', 
      price: '$45', 
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300' 
    },
    { 
      id: 2, 
      name: 'Backpack', 
      price: '$60', 
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300' 
    },
    { 
      id: 3, 
      name: 'Watch', 
      price: '$120', 
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300' 
    },
    { 
      id: 4, 
      name: 'Sunglasses', 
      price: '$30', 
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300' 
    }
  ];

  return (
    <div style={{ padding: '40px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>
        Our Products
      </h2>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        justifyContent: 'center'
      }}>
        {products.map(function(product) {
          return (
            <div key={product.id} style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '20px',
              width: '200px',
              textAlign: 'center'
            }}>
              <img 
                src={product.image} 
                alt={product.name}
                style={{ width: '100%', height: '150px', objectFit: 'cover', marginBottom: '10px', borderRadius: '5px' }}
              />
              <h3>{product.name}</h3>
              <p style={{ color: '#666', fontSize: '18px', fontWeight: 'bold' }}>{product.price}</p>
              <button style={{
                padding: '10px 20px',
                backgroundColor: '#333',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                width: '100%'
              }}>
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;