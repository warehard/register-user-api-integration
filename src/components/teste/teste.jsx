import React from 'react'
import styled from 'styled-components'

const Link = ({ className, children }) => (
    <a className={className}>
      {children}asdasdsadasdada
    </a>
  );
  
  const StyledLink = styled(Link)`
    color: palevioletred;
    font-weight: bold;
  `;

  export default StyledLink