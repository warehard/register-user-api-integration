import styled from 'styled-components'
import Input from '../../components/input'

const StyledInput = styled(Input)`
    display:flex;
    flex-direction:column;
    font-size:18px;
    input{
        width:348px;
        height:45px;
        border-radius:5px;
        border: 1.2px solid #922EA3;
        font-size:25px;
        padding-left:10px;
        padding-right:10px;
        margin-top:5px;
        margin-bottom:5px;
        outline:none;
    }
    span{
        color:crimson;
    }

    label{
        font-size: 14px;
    }

`

export default StyledInput