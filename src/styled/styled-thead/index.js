import styled from 'styled-components'
import THead from '../../components/thead'

const StyledTHead = styled(THead)`
  border-bottom: 2px solid #bdbdbd;
  tr {
    height: 60px;
  }

  th {
    color: #922EA3;
    font-family: Red Hat Display;
    font-size: 20px;
    padding: 0 20px 0 20px;
  }

  @media (max-width: 420px) {
    display: none;
  }
`
export default StyledTHead
