import styled from 'styled-components'
import Table from '../../components/table'

const StyledTable = styled(Table)`
    background-color:#ffffff;
    margin:0.625rem;
    width:90vw;
    border-radius:5px


    @media (max-width: 420px) {
        width:100vw;
    }
`
export default StyledTable