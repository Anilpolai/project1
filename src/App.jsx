import { useState } from 'react';
import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import Products from './component/Products';
import Product from './component/Product';
import LoginModal from './component/LoginModal';
import RegisterModal from './component/RegisterModal';
import { Routes, Route } from 'react-router-dom';




function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const handleShowLoginModal = () => setShowLoginModal(true);
  const handleCloseLoginModal = () => setShowLoginModal(false);

  const handleShowRegisterModal = () => setShowRegisterModal(true);
  const handleCloseRegisterModal = () => setShowRegisterModal(false);

  return (
    <>
      <Header
        handleShowLoginModal={handleShowLoginModal}
        handleShowRegisterModal={handleShowRegisterModal}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        {/* Render the login and register modals here */}
      </Routes>

      {/* Show the Login and Register modals */}
      <LoginModal show={showLoginModal} handleClose={handleCloseLoginModal} />
      <RegisterModal show={showRegisterModal} handleClose={handleCloseRegisterModal} />
    </>
  );
}

export default App;
