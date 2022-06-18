import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../components/Home';
import Login from "../components/Login"
import { Cart } from '../components/Cart';
import ReqAuth from './ReqAuth';

export const Allroutes = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<ReqAuth>
        <Cart />
        </ReqAuth>
        } />
        
      </Routes>
    </div>
  );
}
