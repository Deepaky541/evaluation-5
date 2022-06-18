import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Item } from './Item';

export const Home = () => {
 
  const [data, setData] = useState([]);
    const [error, seterror] = useState(false);
    const [loading, setloading] = useState(true);
  

  useEffect(() => {
    axios({
      url: `https://eval5server.herokuapp.com/item`,
      method: "GET",
    })
      .then((res) => {
        setData(res.data);
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
     {data.map((el)=>(<Item key={el.id} data={el} />))}
    </div>
  )
}
