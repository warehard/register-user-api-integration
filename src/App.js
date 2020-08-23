import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import "./App.css";
import "antd/dist/antd.css";

import Router from './components/router'
import StyledHeader from './styled/styled-header'
import StyledLink from './styled/styled-link'
import StyledFooter from './styled/styled-footer'

function App() {

  const { pathname } = useLocation();
  const [token, setToken] = useState(localStorage.getItem('token'));
  
  

  return (
    <div className='app'>
      <StyledHeader>
        <StyledLink to={pathname === '/' || pathname === '/register' ? '/' : '/users'}>
          <span
            data-hover={pathname === '/' ? 'Login' :'Alunos' } 
            >
              {pathname === '/' ? 'Login' :  'Alunos'}
          </span>
        </StyledLink>
        <StyledLink 
          to={pathname === '/' || pathname === '/register' ? '/register' : '/'}>
          <span 
            data-hover={pathname === '/' || pathname === '/register' ? 'Register' : 'Logout'}
             >
              {pathname === '/' || pathname === '/register' ? 'Register' : 'Logout'}
          </span>
        </StyledLink>
      </StyledHeader>
      <Router token={token} setToken={setToken}/>
      <StyledFooter>Desenvolvido por Augusto Pietroski e Eduardo Magno</StyledFooter>
    </div>
    )
}

export default App;

