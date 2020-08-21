import styled from 'styled-components'
import Button from '../../components/button'

const StyledButton = styled(Button)`
    width:${props => props.width};
    height:${props => props.height};
    background-color:#922EA3;
    outline:none;
    border-radius:5px;
    border-style:none;
    text-justify:center;
    text-align:center;
    color:#f3f3f3;
    font-family: 'Red Hat Text', sans-serif;
    font-size:23px;
    margin:20px;
    
`

export default StyledButton