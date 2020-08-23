import styled from 'styled-components'
import Pagination from '../../components/pagination'

const StyledPagination = styled(Pagination)`
    width:20vw;
    display: flex;
    justify-content:space-between;
    border-radius:5px;
    height:40px;

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
        transition:0.2s;
        outline:none;
    }

    button:hover{
        background-color:#bdbdbd;
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