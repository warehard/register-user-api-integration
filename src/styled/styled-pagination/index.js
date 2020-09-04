import styled from 'styled-components'
import Pagination from '../../components/pagination'

const StyledPagination = styled(Pagination)`
  width: 20vw;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  height: 40px;
  margin: 1.25rem;

  div {
    border: 2px solid #922EA3;
    width:250px;
    display:flex;
    justify-content:center;
    font-size:20px;
    font-weight:500;
    color: #922ea3;
  }

  button {
    font-family: 'Red Hat Text', sans-serif;
    font-weight:bold;
    font-size:20px;
    color: #922ea3;
    border: 2px solid #922EA3;
    width:45px;
    height:45px;
    margin:2px;
    background-color:transparent;
    border-radius:5px;
    outline:none;
        
  }

  button:hover {
    color: #cb67db;
    font-size:18px;
  }

  button:active {
    font-size:16px;
  }
    
  @media (max-width: 620px) {
    button {
      width:35px;
      height:35px;
      font-size:18px;
    }
    
    button:hover {
      font-size:16px;
    }
    
    button:active {
      font-size: 14px;
    }
  }

`

export default StyledPagination
