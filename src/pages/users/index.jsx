import React, { useState, useEffect } from 'react'
import { Pagination, Table, Tag, Space } from 'antd'
import Column from 'antd/lib/table/Column';
import axios from 'axios'
import { getUsers } from './helper';
import { Link } from 'react-router-dom';
import styled from "styled-components";


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
      render: () => <Link to='/users/:id/feeback' >Feedback</Link>
    }
  ]

const [users, setUsers] = useState([])

  //IS IT REALLY NECESSARY??
  /* function onShowSizeChange(current, pageSize) {
    console.log(current, pageSize);
  } */

  useEffect(  () =>{
    const data = async () => {
      setUsers(await getUsers(token))
    }
    data()
  },[])
  
  users.map(e=> e.key = e.id);

  // users.map(e=> {e.key = e.id; e.feedbacks = "Feedback"} )
  
  return(
    <Container>
    <h1 className="title" >Students</h1>
    <Table columns={columns} dataSource={users} style={{width:'90%'}}/>
    </Container>
  )
}

export default Users;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;

  .title {
    width: 90%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    margin: 1rem 5rem;
    font-size: 4rem;
  }
`