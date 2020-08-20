import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import Router from "./components/router";

import "./App.css";
import "antd/dist/antd.css";

import styled from "styled-components";

function App() {

  const location = useLocation();
  const [token, setToken] = useState(localStorage.getItem('token'));

  console.log(token);
  
  return (
    <div className="App">
      {!token ? 
      <Container>
        <LinkHolder className={location.pathname === "/register" && "register"} ><Link className="link" to="/register">Register</Link></LinkHolder>
        <LinkHolder className={location.pathname === "/" && "login"} ><Link className="link" to="/">Login</Link></LinkHolder>
      </Container>
      :
      <Container>
        <LinkHolder className={location.pathname === "/register" && "register"} ><Link className="link" to="/register">Register</Link></LinkHolder>
        <LinkHolder className={location.pathname === "/" && "logout"} ><Link className="link" onClick={() => {localStorage.clear(); setToken(null)}} to="/">Logout</Link></LinkHolder>
      </Container>}
      <header className="App-header">
        <Router token={token} setToken={setToken}/>
      </header>
    </div>
  );
}

export default App;

const Container = styled.div`
  height: 50px;
  display: flex;

  .register {
    border-bottom: 2px solid #2794F0;

  .link {
    color: #2794F0;
  }
  }

  .login {
    border-bottom: 2px solid #2794F0;

  .link:hover {
    color: #2794F0;
  }
  }
`;

const LinkHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left:10px;

  .link {
    color: lightgray;
  }
`;
