import styled from 'styled-components'

const StyledFooter = styled.footer`
  width: 100%;
  height: 5vh;
  display: flex;
  justify-content: center;
  font-family: "Red Hat Text";
  font-size: 16px;

  a {
    color: #922ea3;
  }
  a:hover {
    color: #6f187d;
  }

  @media only screen and (max-width: 420px) {
    font-size: 14px;
  }
`
export default StyledFooter
