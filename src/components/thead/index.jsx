import React from 'react'
import StyledTh from '../../styled/styled-th'

const THead = ({ className, children, columns }) => {
    return(
        <thead className={className}>
           <tr>
               {columns.map(row => <StyledTh key={row.key}>{row.title}</StyledTh>)}
           </tr>
        </thead>
    )
}

export default THead