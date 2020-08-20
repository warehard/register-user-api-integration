import React, { useState, useEffect } from 'react'
import { Table } from 'antd'
import { getUsers } from './helper';
import { Link } from 'react-router-dom';
import styled from "styled-components";


const Users = ({ token }) => {

  const columns = [
    {
      title: "id",
      dataIndex: 'id',
    },
    {
      title: "Name",
      dataIndex: 'name',
    },
    {
      title: "User",
      dataIndex: 'user',
    },
    {
      title: "Email",
      dataIndex: 'email',
    },
    {
      title: "Feedbacks",
      dataIndex: 'feedbacks',
      render: (_,user) => <Link to={`/users/feedback/${user.id}`} >Feedback</Link>
    }
  ]

  const [users, setUsers] = useState([])

  useEffect(  () =>{
    const data = async () => {
      setUsers(await getUsers(token))
    }
    data()
  },[])
  
  users.map(e=> e.key = e.id);
  
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