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
      {pathname === "/" && localStorage.clear()}
      
      {!token ?
      <StyledHeader>
        <StyledLink to='/' ><span data-hover='Login' className={pathname === '/' ? 'selectedPage': undefined}>Login</span></StyledLink>
        <StyledLink to='/register'><span data-hover='Register' className={pathname === '/register' ? 'selectedPage' : undefined}>Register</span></StyledLink>
      </StyledHeader>
      :
      <StyledHeader>
        <StyledLink to='/users'><span data-hover='Students' className={pathname === '/users' && 'selectedPage'} >Students</span></StyledLink>
        <StyledLink onClick={() => {localStorage.clear(); setToken(null)}} to='/' ><span data-hover='Logout'>Logout</span></StyledLink>
      </StyledHeader>
      }

      <Router token={token} setToken={setToken}/>
      <StyledFooter><p>Desenvolvido por <a href='https://www.linkedin.com/in/augusto-pietroski-8659465a/'>Augusto Pietroski</a> e <a href='https://www.linkedin.com/in/edu-magno/'>Eduardo Magno</a></p></StyledFooter>
    </div>
    )
}

export default App;

