import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Login from './components/Login';
import Signup from './components/Signup';
import AdminPanel from './components/AdminPanel';

function App() {
  const [cart, setCart] = useState([]);
  const [currentPage, setCurrentPage] = useState('home');
  const [user, setUser] = useState(null);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <Navbar 
        cartCount={cart.length} 
        setCurrentPage={setCurrentPage} 
        user={user}
        setUser={setUser}
      />
      
      {currentPage === 'home' && (
        <Hero setCurrentPage={setCurrentPage} />
      )}

      {currentPage === 'products' && (
        <Products addToCart={addToCart} user={user} setCurrentPage={setCurrentPage} />
      )}

      {currentPage === 'cart' && (
        <Cart cart={cart} />
      )}

      {currentPage === 'login' && (
        <Login setCurrentPage={setCurrentPage} setUser={setUser} />
      )}

      {currentPage === 'signup' && (
        <Signup setCurrentPage={setCurrentPage} setUser={setUser} />
      )}

      {currentPage === 'admin' && user?.isAdmin && (
        <AdminPanel />
      )}

      <Footer />
    </div>
  );
}

export default App;