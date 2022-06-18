import React, { useState, useContext } from "react";
import { AuthContext } from "../Context/Authcontext";
import axios from "axios";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("cityslicka");
  const [state, dispatch] = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      url: "https://reqres.in/api/login",
      method: "POST",
      data: {
        email,
        password,
      },
    })
      .then((res) => {
        alert("success");
        dispatch({
          type: "LOGIN_SUCCESS",
          token: res.data.token,
        });
      })
      .catch((err) => {
        console.log(err.message);
        alert("error");
      });
  };

  if (state.isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
         
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">
        Submit
      </button>
    </form>
  );
};

export default Login;
