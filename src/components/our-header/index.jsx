import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";


const location = useLocation();

const OurHeader = ({token, setToken}) => {
    return (
        <>
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
        </>
    )
}

export default OurHeader;

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