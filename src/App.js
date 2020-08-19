import React from "react";
import "./App.css";
import Router from "./components/router";
import "antd/dist/antd.css";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

function App() {

  const location = useLocation();

  console.log(location);

  return (
    <div className="App">
      <Container>
        <LinkHolder className={location.pathname === "/register" && "register"} ><Link to="/register">Register</Link></LinkHolder>
        <LinkHolder className={location.pathname === "/login" && "login"} ><Link to="/login">Login</Link></LinkHolder>
      </Container>
      <header className="App-header">
        <Router />
      </header>
    </div>
  );
}

export default App;

const Container = styled.div`
  height: 50px;
  display: flex;

  .register {
    border-bottom: 2px solid blue;
  }

  .login {
    border-bottom: 2px solid blue;
  }
`;

const LinkHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left:10px;
`;
