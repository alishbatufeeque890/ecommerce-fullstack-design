import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Products({ addToCart, user, setCurrentPage }) {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [addedId, setAddedId] = useState(null);

  useEffect(() => {
    axios.get('https://ecommerce-fullstack-design-7src.onrender.com/api/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log('Error fetching products:', error);
      });
  }, []);

  const categories = ['All', ...new Set(products.map(p => p.category))];

  const filteredProducts = products.filter(function(product) {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAddToCart = (product) => {
    if (!user) {
      alert('Please login first to add items to cart!');
      setCurrentPage('login');
      return;
    }
    addToCart(product);
    setAddedId(product._id);
    setTimeout(() => setAddedId(null), 1500);
  };

  return (
    <div style={{ padding: '30px 15px', fontFamily: "'Poppins', sans-serif" }}>
      <h2 style={{ 
        textAlign: 'center', 
        marginBottom: '10px',
        fontFamily: "'Playfair Display', serif",
        fontSize: '28px',
        color: '#6a1b6e'
      }}>
        Our Collection
      </h2>
      <p style={{ textAlign: 'center', color: '#999', marginBottom: '20px' }}>
        Handpicked pieces just for you
      </p>

      <div style={{ textAlign: 'center', marginBottom: '20px', padding: '0 10px' }}>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: '12px 20px',
            width: '100%',
            maxWidth: '320px',
            border: '2px solid #f3d4e3',
            borderRadius: '30px',
            fontSize: '15px',
            outline: 'none',
            fontFamily: "'Poppins', sans-serif",
            boxSizing: 'border-box'
          }}
        />
      </div>

      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        {categories.map(function(cat) {
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                margin: '0 4px 8px',
                padding: '7px 16px',
                borderRadius: '20px',
                border: '2px solid #c2185b',
                backgroundColor: selectedCategory === cat ? '#c2185b' : 'white',
                color: selectedCategory === cat ? 'white' : '#c2185b',
                cursor: 'pointer',
                fontFamily: "'Poppins', sans-serif",
                fontWeight: '500',
                fontSize: '13px'
              }}
            >
              {cat}
            </button>
          );
        })}
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
        gap: '16px',
        padding: '0 5px'
      }}>
        {filteredProducts.length === 0 ? (
          <p style={{ color: '#999', textAlign: 'center', gridColumn: '1/-1' }}>No products found!</p>
        ) : (
          filteredProducts.map(function(product) {
            return (
              <div key={product._id} style={{
                border: '1px solid #f3e0e9',
                borderRadius: '16px',
                padding: '15px',
                textAlign: 'center',
                backgroundColor: 'white',
                boxShadow: '0 4px 15px rgba(142, 68, 173, 0.08)'
              }}>
                <img 
                  src={product.image} 
                  alt={product.name}
                  style={{ width: '100%', height: '140px', objectFit: 'cover', marginBottom: '10px', borderRadius: '10px' }}
                />
                <span style={{
                  fontSize: '11px',
                  color: '#c2185b',
                  backgroundColor: '#fce4ec',
                  padding: '3px 10px',
                  borderRadius: '10px'
                }}>
                  {product.category}
                </span>
                <h3 style={{ 
                  fontFamily: "'Playfair Display', serif", 
                  color: '#4a1a4f', 
                  margin: '8px 0',
                  fontSize: '15px'
                }}>
                  {product.name}
                </h3>
                <p style={{ color: '#c2185b', fontSize: '16px', fontWeight: '600', margin: '6px 0 12px' }}>
                  ${product.price}
                </p>
                <button 
                  onClick={() => handleAddToCart(product)}
                  style={{
                    padding: '10px',
                    background: addedId === product._id ? '#4caf50' : 'linear-gradient(135deg, #8e44ad, #c2185b)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '20px',
                    cursor: 'pointer',
                    width: '100%',
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: '500',
                    fontSize: '13px',
                    transition: 'background 0.3s'
                  }}>
                  {addedId === product._id ? '✓ Added!' : 'Add to Cart'}
                </button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Products;