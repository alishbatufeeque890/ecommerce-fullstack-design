import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AdminPanel() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios.get('http://localhost:5000/api/products')
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productData = { name, price, image, category };

    try {
      if (editId) {
        await axios.put(`http://localhost:5000/api/products/${editId}`, productData);
      } else {
        await axios.post('http://localhost:5000/api/products', productData);
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
      await axios.delete(`http://localhost:5000/api/products/${id}`);
      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ padding: '40px', maxWidth: '900px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Admin Panel</h2>

      <form onSubmit={handleSubmit} style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        marginBottom: '40px',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px'
      }}>
        <h3>{editId ? 'Edit Product' : 'Add New Product'}</h3>
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
          style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
          style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}
        />
        <button type="submit" style={{
          padding: '12px',
          backgroundColor: '#333',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}>
          {editId ? 'Update Product' : 'Add Product'}
        </button>
      </form>

      <h3>All Products</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {products.map(function(product) {
          return (
            <div key={product._id} style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '15px',
              border: '1px solid #ddd',
              borderRadius: '8px'
            }}>
              <img src={product.image} alt={product.name} style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '5px' }} />
              <span style={{ flex: 1, marginLeft: '15px' }}>{product.name}</span>
              <span style={{ marginRight: '15px' }}>${product.price}</span>
              <button onClick={() => handleEdit(product)} style={{
                padding: '8px 15px',
                marginRight: '10px',
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}>
                Edit
              </button>
              <button onClick={() => handleDelete(product._id)} style={{
                padding: '8px 15px',
                backgroundColor: '#f44336',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
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