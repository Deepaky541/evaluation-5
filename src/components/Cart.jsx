import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Cartitem } from './Cartitem';


export const Cart = () => {
     const [cart, setCart] = useState([]);
     const [summ, setsumm] = useState(0);
       const [error, seterror] = useState(false);
       const [loading, setloading] = useState(true);

     const sum=(data)=>{
         setsumm(data);
     }

     useEffect(() => {
       axios({
         url: `https://eval5server.herokuapp.com/cartitems`,
         method: "GET",
       })
         .then((res) => {
           setCart(res.data);
           setloading(false);
         })
         .catch((err) => {
           seterror(true);
           setloading(false);
         });
     }, []);


        if (loading) {
          return <div id="loading-containe"></div>;
        }
        if (error) {
          return <div>something went wrong!</div>;
        }

  return (
    <div>
      {cart.map((el) => (
        <Cartitem key={el.id} data={el} sum={sum} />
      ))}
      <br />
      <br />
      <br />
      <div>total pay:{summ}</div>
      <button></button>
    </div>
  );
}
