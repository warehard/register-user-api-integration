import React, { useState, useEffect } from 'react'
import { Pagination, Table, Tag, Space } from 'antd'
import Column from 'antd/lib/table/Column';
import axios from 'axios'
import { getUsers } from './helper';
import { Link } from 'react-router-dom';


const Users = ({ token }) => {

  const columns = [
    {
      title: "id",
      dataIndex: 'id',
      minWidth: 150
    },
    {
      title: "Name",
      dataIndex: 'name',
      minWidth: 150
    },
    {
      title: "User",
      dataIndex: 'user',
      minWidth: 150
    },
    {
      title: "Email",
      dataIndex: 'email',
      minWidth: 150
    },
    {
      title: "Feedbacks",
      dataIndex: 'feedbacks',
      minWidth: 150,
      render: () => <Link to='/users/:id/feeback'>Feedback</Link>
    }
  ]

const [users, setUsers] = useState([])

  function onShowSizeChange(current, pageSize) {
    console.log(current, pageSize);
  }

  useEffect(  () =>{
    const data = async () => {
      setUsers(await getUsers(token))
    }
    data()
  },[])
  
  users.map(e=> e.key = e.id);
  
  return(
    <div style={{width:'100%'}} >
    <h1>Students</h1>
    <Table columns={columns} dataSource={users} style={{width:'90%'}}/>
    </div>
  )
}

export default Users;

/* const Container =  */