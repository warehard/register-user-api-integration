import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import "./App.css";
import "antd/dist/antd.css";

import Router from './components/router'
import StyledHeader from './styled/styled-header'

function App() {

  const location = useLocation();
  const [token, setToken] = useState(localStorage.getItem('token'));

  

  return (
    <div>
      <StyledHeader />
      <Router token={token} setToken={setToken}/>
    </div>
    )
}

export default App;

