import styled from 'styled-components'
import THead from '../../components/thead'

const StyledTHead = styled(THead)`
    border-bottom: 2px solid #bdbdbd;
    tr{
        height:60px;
    }

    @media (max-width: 420px) {
        
        tr{
            height:0;
        }
       visibility:hidden;
    }
`
export default StyledTHead