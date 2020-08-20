import React from 'react'
import { Pagination, Table, Tag, Space } from 'antd'
import Column from 'antd/lib/table/Column';



const Users = () => {

  function onShowSizeChange(current, pageSize) {
    console.log(current, pageSize);
  }

  return(
    <div>
    <Table>
      <Column title='id'></Column>
      <Column title='Name'></Column>
      <Column title='User'></Column>
      <Column title='Email'></Column>
      <Column title='Feedbacks'></Column>

    </Table>

    <br/>

    <Pagination
      showSizeChanger
      onShowSizeChange={onShowSizeChange}
      defaultCurrent={3}
      total={500}
    />
    
    </div>
  )
}

export default Users