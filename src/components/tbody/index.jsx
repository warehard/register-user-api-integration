import React from 'react'
import StyledTr from '../../styled/styled-tr'
import StyledTd from '../../styled/styled-td'
import { Link } from 'react-router-dom'

const TBody = ({ className, children , columns , data}) => {
    
    return(
        <tbody className={className}>
            {data.map(row => (
                <StyledTr key={row.key}>
                    {columns.map(cell => (
                        <StyledTd key={cell.key}>{row[cell.key]}{cell.link && <Link to={`${cell.url}${row.id}`}>{cell.linkMessage}</Link>}</StyledTd>
                    ))}
                </StyledTr>
            ))}
        </tbody>
    )
}

export default TBody