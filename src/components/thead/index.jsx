import React from 'react'

const THead = ({ className, children, columns }) => {
  return (
    <thead className={className}>
      <tr>
        {columns.map(row => <th key={row.key}>{row.title}</th>)}
      </tr>
    </thead>
  )
}

export default THead
