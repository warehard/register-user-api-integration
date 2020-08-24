import styled from 'styled-components'
import Pagination from '../../components/pagination'

const StyledPagination = styled(Pagination)`
    width:20vw;
    display: flex;
    justify-content:space-between;
    border-radius:5px;
    height:40px;
    margin:1.25rem;

    div{
        border: 2px solid #922EA3;
        width:70%;
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
        width:15%;
        background-color:transparent;
        border:none;
        outline:none;
        img{
            transition 0.3s;
        }
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
    .previousButton{
        border-left:2px solid #922ea3;
        border-top:2px solid #922ea3;
        border-bottom:2px solid #922ea3;
        border-top-left-radius:5px;
        border-bottom-left-radius:5px;
    }

    .nextButton{
        border-right:2px solid #922ea3;
        border-top:2px solid #922ea3;
        border-bottom:2px solid #922ea3;
        border-top-right-radius:5px;
        border-bottom-right-radius:5px;
    }
`

export default StyledPagination