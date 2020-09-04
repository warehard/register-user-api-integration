import styled from 'styled-components'

const StyledContainer = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;

  h1 {
    font-family: "Red Hat Display";
    font-weight: 500;
    font-size: 60px;
    color: #922ea3;
    margin: 0;
  }

  @media (width:1024px) {
    h1 {
      font-size: 90px;
    }
  }

  @media only screen and (max-width: 420px) {

    h1 {
      font-size: 48px;
    }
  }
`

export default StyledContainer
