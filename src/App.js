import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import "./App.css";
import "antd/dist/antd.css";

import Router from './components/router'
import StyledHeader from './styled/styled-header'
import StyledLink from './styled/styled-link'
import StyledFooter from './styled/styled-footer'

function App() {

  const location = useLocation();
  const [token, setToken] = useState(localStorage.getItem('token'));

  return (
    <div className='app'>
      {location.pathname === "/" && localStorage.clear()}
      {!token ?
      <StyledHeader>
        <StyledLink to='/' ><span data-hover='Login'>Login</span></StyledLink>
        <StyledLink to='/register'><span data-hover='Register'>Register</span></StyledLink>
      </StyledHeader>
      :
      <StyledHeader>
        <StyledLink onClick={() => {localStorage.clear(); setToken(null)}} to='/' ><span data-hover='Logout'>Logout</span></StyledLink>
        <StyledLink to='/users'><span data-hover='Students'>Students</span></StyledLink>
      </StyledHeader>
      }
      <Router token={token} setToken={setToken}/>
      <StyledFooter>Desenvolvido por Augusto Pietroski e Eduardo Magno</StyledFooter>
    </div>
    )
}

export default App;

