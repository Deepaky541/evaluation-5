import React from 'react'
import { useContext } from "react";
import { CartContext } from "../Context/Cartcontext";
import { AuthContext } from '../Context/Authcontext';
import { useNavigate } from 'react-router-dom';

export const Item = ({data}) => {
   const [concount, { setconcount }] = useContext(CartContext);
   const [state, dispatch] = useContext(AuthContext);
   const navigate = useNavigate();
  
    const addcart = () => {
          if (!state.isAuth) {
            navigate("/login");
          }
      else{
      fetch("https://eval5server.herokuapp.com/cartitems", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          id: data.id,
          title: data.title,
          description: data.description,
          count: 1,
          price: data.price,
        }),
      }).then((r) => r.json(setconcount(concount + 1)));
    }
    }

  return (
    <div>
      <br />
      <br />
      <br />
      <div>{data.title}</div>
      <div>{data.description}</div>
      <div>{data.price}</div>
      <button onClick={addcart}>add to cart</button>
    </div>
  );
}
