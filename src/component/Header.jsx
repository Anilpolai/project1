import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LoginModal from './LoginModal'; // Import the Login Modal
import RegisterModal from './RegisterModal';// Import the Register Modal

function Header() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const handleShowLogin = () => setShowLoginModal(true);
  const handleCloseLogin = () => setShowLoginModal(false);

  const handleShowRegister = () => setShowRegisterModal(true);
  const handleCloseRegister = () => setShowRegisterModal(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary py-3 shadow-sm">
        <div className="container-fluid">
          <NavLink className="navbar-brand " to="/">
            <img
              src="https://freepnglogo.com/images/all_img/1714299307tiktok-shop-icon-png.png"
              className="mb-0"
              alt=""
            />
          </NavLink>
          <button className="navbar-toggler">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fs-5">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/content">
                  Content
                </NavLink>
              </li>
            </ul>
            <div className="buttons">
              <button
                onClick={handleShowLogin}
                className="btn btn-outline-dark"
              >
                <i className="fa-solid fa-right-to-bracket"></i> Login
              </button>
              <button
                onClick={handleShowRegister}
                className="btn btn-outline-dark ms-2"
              >
                <i className="fa-solid fa-plus"></i> Register
              </button>
              <NavLink to={'/cart'} className="btn btn-outline-dark ms-2">
                <i className="fa-solid fa-cart-shopping"></i> Cart(0)
              </NavLink>
            </div>
          </div>
        </div>
      </nav>

      {/* Login Modal */}
      <LoginModal show={showLoginModal} handleClose={handleCloseLogin} />

      {/* Register Modal */}
      <RegisterModal
        show={showRegisterModal}
        handleClose={handleCloseRegister}
      />
    </>
  );
}

export default Header;
