import React from 'react'

import { Link } from 'react-router-dom'

const TBody = ({ className, columns , data}) => {
    
    return(
        <tbody className={className}>
            {data.map(row => (
                <tr key={row.key}>
                    {columns.map(cell => (
                        <td key={cell.key}>{row[cell.key]}{cell.link && <Link to={`${cell.url}${row.id}`}>{cell.linkMessage}</Link>}</td>
                    ))}
                </tr>
            ))}
        </tbody>
    )
}

export default TBody