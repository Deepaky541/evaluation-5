import React from 'react'
import { useState } from 'react';
import { useEffect } from "react";
import axios from "axios";
import "./Cartitems.css";
import { useContext } from 'react';
import { CartContext } from '../Context/Cartcontext';
import { AuthContext } from '../Context/Authcontext';
import { useNavigate } from 'react-router-dom';

export const Cartitem = ({data,sum}) => {
    const [count, setcount] = useState(data.count)
     const [istrue, setistrue] = useState(0);
      const [hide, sethide] = useState(1)
       const [concount, { setconcount }] = useContext(CartContext);
        const [state, dispatch] = useContext(AuthContext);
        const navigate = useNavigate();
     
        

        useEffect(() => {
          axios({
            url: `https://eval5server.herokuapp.com/cartitems`,
            method: "GET",
          }).then((res) => {
            res.data.map((el) => {
              if (el.id === data.id) {
                setistrue(el.id);
              }
              return console.log();
            });
          });
        }, [data.id]);

    useEffect(() => {
      if (istrue !== 0 ) {
        axios
          .patch(`https://eval5server.herokuapp.com/cartItems/${istrue}`, {
            count: count,
          })
          .catch((error) => console.log("deleted"));
      }
    }, [count, istrue]);


         useEffect(() => {
           sum(data.price*count);
         }, [count]);
        


  const Ondelete = (id) => {
    fetch(`https://eval5server.herokuapp.com/cartitems/${id}`, {
      method: "DELETE",
    });
  };



  return (
    <div className={(hide===0)?"hide":""}>
      <br />
      <br />
      <div>{data.title}</div>
      <div>{data.description}</div>
      <div>{data.price}</div>
      <button
        onClick={() => {
              if (!state.isAuth) {
                navigate("/login");
              }
              else{
          setcount(count + 1);
          setconcount(concount+1);
              }
        }}
      >
        +
      </button>
      {count}
      <button
        onClick={() => {
              if (!state.isAuth) {
                navigate("/login");
              }
              else{
          setcount(count - 1);
          setconcount(concount - 1);
             if (count <= 1) {
               Ondelete(data.id);
               sethide(0);
             }
            }
        }}
      >
        -
      </button>
    </div>
  );
}
