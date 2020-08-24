import styled from 'styled-components'
import Button from '../../components/button'

const StyledButton = styled(Button)`
    width:${props => props.width};
    height:${props => props.height};
    background-color:#922EA3;
    outline:none;
    border-radius:5px;
    border-style:none;
    display:flex;
    align-items:center;
    justify-content:center;
    
    
    margin:20px;
    transition: 0.5s;
    


    &:hover{
        background-color: #6F187D;
        
    }

    &:active{
        background-color: #922ea3;
        .icon{
            transition: 0.8s;
            transform: translateX(26px);
        }
    }

    &:focus{
        .icon{
            transform: translateX(26px);
        }
    }

    .icon{
        color:#fffff;
        overflow:hidden;
        transition 0.3s;
    }

   

    span{
        
        color:#f3f3f3;
        font-family: 'Red Hat Text', sans-serif;
        font-size:23px;
    }

`

export default StyledButton