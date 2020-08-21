import React from 'react'
import { Link } from 'react-router-dom'
import StyledLink from '../../styled/styled-link'

const Header = ({className}) => (
  <header className={className}>
    <StyledLink>Login</StyledLink>
    <StyledLink>Register</StyledLink>
  </header>
)
  

export default Header
