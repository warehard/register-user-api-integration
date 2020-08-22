import React from 'react'

const Table = ({ className, children }) => {
    return(
        <table className={className}>
            {children}
        </table>
    )
}

export default Table