import React from 'react'
import StyledTHead from '../../styled/styled-thead'
import TBody from '../tbody/index'

const Table = ({ className, columns, data}) => {
    return(
        <table className={className}>
            <StyledTHead columns={columns} />
            <TBody data={data} columns={columns}/>
        </table>
    )
}

export default Table