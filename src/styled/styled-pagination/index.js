import styled from 'styled-components'
import Pagination from '../../components/pagination'

const StyledPagination = styled(Pagination)`
    width:350px;
    display: flex;
    justify-content:center;
    border-radius:5px;
    height:40px;
    margin:1.25rem;

    div{
        border: 2px solid #922EA3;
        width:250px;
        display:flex;
        justify-content:center;
        font-family: 'Red Hat Text', sans-serif;
        font-size:20px;
        font-weight:500;
        color: #922ea3;
    }

    p{
        margin:0;
        padding-top:2px;
    }
    button{
        border: 2px solid #922EA3;
        width:50px;
        height:40px;
        margin:2px;
        background-color:transparent;
        border-radius:5px;
        outline:none;
        
    }

    

    button:hover{
        .previous{
            
            transform: translateX(-3px);
        }
        .next{
            transform: translateX(3px);
        }
    }

    button:active{
        .previous{
            transform: translateX(-6px);
        }
        .next{
            transform: translateX(6px);
        }
    }
    
`

export default StyledPagination