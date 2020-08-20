import React, {useState} from "react";
import "./App.css";
import Router from "./components/router";
import "antd/dist/antd.css";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

function App() {

  const location = useLocation();

  console.log(location);

  const [tokenState, setTokenState] = useState(window.localStorage.getItem('token'));

  console.log("tokenState: " + tokenState);

  return (
    <div className="App">

      <div>
        <Container>
          <LinkHolder className={location.pathname === "/register" && "register"} ><Link to="/register">Register</Link></LinkHolder>
          <LinkHolder className={location.pathname === "/login" && "login"} ><Link to="/login">Login</Link></LinkHolder>
        </Container> 
      </div>
      
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
