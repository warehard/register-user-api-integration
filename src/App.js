import React, { useState } from "react";
import "./App.css";
import Router from "./components/router";
import "antd/dist/antd.css";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

function App() {

  const location = useLocation();

  const [token, setToken] = useState(localStorage.getItem('token'))
  console.log(token)
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
    border-bottom: 2px solid #81AD7E;

  .link {
    color: #81AD7E;
  }
  }

  .login {
    border-bottom: 2px solid #81AD7E;

  .link {
    color: #81AD7E;
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
