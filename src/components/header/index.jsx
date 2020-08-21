import React from 'react'
import { Link } from 'react-router-dom'


const Header = ({className, children}) => (
  <header className={className}>
    {children}
  </header>
)
  

export default Header
