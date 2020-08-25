import React from 'react'
import StyledTHead from '../../styled/styled-thead'
import StyledTBody from '../../styled/styled-tbody'

const Table = ({ className, columns, data }) => {
  return (
    <table className={className}>
      <StyledTHead columns={columns} />
      <StyledTBody data={data} columns={columns} />
    </table>
  )
}

export default Table
