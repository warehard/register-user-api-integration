import styled from 'styled-components'
import Form from '../../components/form'

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
    
  label {
    text-align: right;
    align-self: flex-start;
    font-size: 24px;
  }

  .error {
    color: crimson;
  }
`
export default StyledForm
