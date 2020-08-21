import styled from 'styled-components'
import Form from '../../components/form'

const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
        font-size:${props => props.titleSize};
        color: #922EA3;
        font-family: Red Hat Display;
    }
    span{
        color:crimson;
    }

`
export default StyledForm