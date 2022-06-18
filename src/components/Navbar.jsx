import React from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../Context/Cartcontext';

export const Navbar = () => {
    const [count] = useContext(CartContext);
  return (
    <div>
      <Link to="/">home</Link>
      <br />
      <Link to="/login">login</Link>
      <br />
      <Link to="/cart">cart:{count}</Link>
    </div>
  );
}
