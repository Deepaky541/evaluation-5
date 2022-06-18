import React, { createContext } from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [concount, setconcount] = useState(0);
  let sum=0;

  useEffect(() => {
    axios({
      url: `https://eval5server.herokuapp.com/cartitems`,
      method: "GET",
    })
      .then((res) => {
        res.data.map((el) => {
          sum = sum + el.count;
          setconcount(sum);
        });
      })
      .catch((err) => {});
  }, []);

  return (
    <CartContext.Provider value={[concount, { setconcount }]}>
      {children}
    </CartContext.Provider>
  );
};
