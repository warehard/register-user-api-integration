import styled from 'styled-components'
import TBody from '../../components/tbody'

const StyledTBody = styled(TBody)`

tr{
  border-bottom: 1px solid #bdbdbd;
  transition:0.2s;
  width:100%;
  &:hover{
      background-color:#f7f7f7;
      
  }
}
td{
  color: #5F5F5F;
    padding:10px 20px 10px 20px;
    
    font-size:16px;
}
  @media (max-width: 420px) {

    tr:first-child{
      border-top:2px solid #bdbdbd;
    }


    tr{
      display: flex;
      flex-direction: column;
      width:320px;
    } 
      td{
          padding:0;
          
      }

      td:nth-of-type(1):before { content: "Id "; }
      td:nth-of-type(2):before { content: "Name "; }
      td:nth-of-type(3):before { content: "User "; }
      td:nth-of-type(4):before { content: "Email "; }
      td:nth-of-type(5):before { content: "Feedbacks "; }
      

      td::before{
          color:#922EA3;
          font-weight:500;
          margin:10px;
      }
  }
`
export default StyledTBody