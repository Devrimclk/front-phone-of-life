import React, { useState } from "react";
import Navbar from "../component/Navbar";

const LoginPage = () => {
  const [{ username, password, email }, setCredential] = useState({
    username: "",
    password: "",
    email: "",
  });
  return (
    <div>
      <Navbar />
      <div className="formulaire1">
        <span className="login-phrase">Register</span>
        <br />
        <br />
        <br />
        <br />
        <form className="login">
          <label htmlFor="username"> username</label>
          <input
            placeholder="username"
            value={username}
            onChange={(event) =>
              setCredential({
                username: event.target.value,
                password,
                email,
              })
            }
          />
          <br />
          <label htmlFor="email">E-mail</label>
          <input
            placeholder="email"
            value={email}
            onChange={(event) =>
              setCredential({
                username,
                password,
                email: event.target.value,
              })
            }
          />
          <br />
          <label htmlFor="password">Password</label>
          <input
            placeholder="password"
            type="password"
            value={password}
            onChange={(event) =>
              setCredential({
                username,
                password: event.target.value,
                email,
              })
            }
          />
          <br />
          <button className="login-button" type="submit">
            register you !
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
