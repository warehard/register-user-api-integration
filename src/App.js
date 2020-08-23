import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import "./App.css";
import "antd/dist/antd.css";

import Router from './components/router'
import StyledHeader from './styled/styled-header'
import StyledLink from './styled/styled-link'

function App() {

  const location = useLocation();
  const [token, setToken] = useState(localStorage.getItem('token'));

  return (
    <div className='app'>
      {!token ? 
        <StyledHeader>
          <StyledLink to='/'>Login</StyledLink>
          <StyledLink to='/register'>Register</StyledLink>
        </StyledHeader>
      :
        <StyledHeader>
          <StyledLink to='/'>Logout</StyledLink>
          <StyledLink to='/users'>Students</StyledLink>
        </StyledHeader>
      }
      <Router token={token} setToken={setToken}/>
    </div>
    )
}

export default App;

