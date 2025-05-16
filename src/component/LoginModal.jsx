import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { closeLoginModal } from '../redux/modelsilce';
import './login.css';
import axios from 'axios';

const LoginModal = () => {
  const show = useSelector((state) => state.modal.showLoginModal);
  const dispatch = useDispatch();

  const [email, setEmail] = useState('anil@gmail.com');
  const [password, setPassword] = useState('Anil123');
  const [error, seterror] = useState('');

  const errormsg = () => {
    if (email.endsWith('.com')) {
      seterror('');
    } else {
      seterror('This email id is wrong.');
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/api/login", { email, password });
      if (res.data.status) {
        localStorage.setItem("token", res.data.data.token);
        dispatch(closeLoginModal()); // Close on successful login
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal show={show} onHide={() => dispatch(closeLoginModal())}>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleLogin}>
          <Form.Group controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={errormsg}
              required
            />
            <p className='text-danger'>{error}</p>
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="mt-3">
            Login
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
