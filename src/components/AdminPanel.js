import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AdminPanel() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [editId, setEditId] = useState(null);

  const API_URL = 'https://ecommerce-fullstack-design-7src.onrender.com/api/products';

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios.get(API_URL)
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productData = { name, price, image, category };

    try {
      if (editId) {
        await axios.put(`${API_URL}/${editId}`, productData);
      } else {
        await axios.post(API_URL, productData);
      }
      
      setName('');
      setPrice('');
      setImage('');
      setCategory('');
      setEditId(null);
      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (product) => {
    setName(product.name);
    setPrice(product.price);
    setImage(product.image);
    setCategory(product.category);
    setEditId(product._id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ padding: '50px 40px', maxWidth: '900px', margin: '0 auto', fontFamily: "'Poppins', sans-serif" }}>
      <h2 style={{ 
        textAlign: 'center', 
        marginBottom: '30px',
        fontFamily: "'Playfair Display', serif",
        fontSize: '36px',
        color: '#6a1b6e'
      }}>
        Admin Panel
      </h2>

      <form onSubmit={handleSubmit} style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        marginBottom: '40px',
        padding: '30px',
        backgroundColor: 'white',
        borderRadius: '16px',
        boxShadow: '0 4px 15px rgba(142, 68, 173, 0.08)'
      }}>
        <h3 style={{ color: '#4a1a4f', fontFamily: "'Playfair Display', serif" }}>
          {editId ? 'Edit Product' : 'Add New Product'}
        </h3>
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ padding: '12px', border: '2px solid #f3d4e3', borderRadius: '10px', fontFamily: "'Poppins', sans-serif", outline: 'none' }}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
          style={{ padding: '12px', border: '2px solid #f3d4e3', borderRadius: '10px', fontFamily: "'Poppins', sans-serif", outline: 'none' }}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
          style={{ padding: '12px', border: '2px solid #f3d4e3', borderRadius: '10px', fontFamily: "'Poppins', sans-serif", outline: 'none' }}
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ padding: '12px', border: '2px solid #f3d4e3', borderRadius: '10px', fontFamily: "'Poppins', sans-serif", outline: 'none' }}
        />
        <button type="submit" style={{
          padding: '14px',
          background: 'linear-gradient(135deg, #8e44ad, #c2185b)',
          color: 'white',
          border: 'none',
          borderRadius: '25px',
          cursor: 'pointer',
          fontFamily: "'Poppins', sans-serif",
          fontWeight: '500',
          fontSize: '15px'
        }}>
          {editId ? 'Update Product' : 'Add Product'}
        </button>
      </form>

      <h3 style={{ color: '#4a1a4f', fontFamily: "'Playfair Display', serif", marginBottom: '15px' }}>All Products</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {products.map(function(product) {
          return (
            <div key={product._id} style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '15px',
              backgroundColor: 'white',
              borderRadius: '12px',
              boxShadow: '0 2px 10px rgba(142, 68, 173, 0.06)'
            }}>
              <img src={product.image} alt={product.name} style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '8px' }} />
              <span style={{ flex: 1, marginLeft: '15px', color: '#4a1a4f' }}>{product.name}</span>
              <span style={{ marginRight: '15px', color: '#c2185b', fontWeight: '600' }}>${product.price}</span>
              <button onClick={() => handleEdit(product)} style={{
                padding: '8px 18px',
                marginRight: '10px',
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '20px',
                cursor: 'pointer',
                fontFamily: "'Poppins', sans-serif"
              }}>
                Edit
              </button>
              <button onClick={() => handleDelete(product._id)} style={{
                padding: '8px 18px',
                backgroundColor: '#f44336',
                color: 'white',
                border: 'none',
                borderRadius: '20px',
                cursor: 'pointer',
                fontFamily: "'Poppins', sans-serif"
              }}>
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AdminPanel;