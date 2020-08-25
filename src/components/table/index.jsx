import React from 'react'
import { StyledTBody, StyledTHead} from '../../styled'

const Table = ({ className, columns, data }) => {
  return (
    <table className={className}>
      <StyledTHead columns={columns} />
      <StyledTBody data={data} columns={columns} />
    </table>
  )
}

export default Table
