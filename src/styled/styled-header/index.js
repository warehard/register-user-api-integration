import styled from 'styled-components'
import Header from '../../components/header'

const StyledHeader = styled(Header)`
  width: 100vw;
  height: 10vh;
  background-color: #922ea3;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  
  

  @media only screen and (max-width: 420px) {
    justify-content: center;
  }
`

export default StyledHeader
