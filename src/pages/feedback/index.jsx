import React, { useEffect, useState } from 'react'
import { Table } from 'antd'
import { Link, useParams } from 'react-router-dom';
import styled from "styled-components";
import axios from 'axios';
import { getUser } from './helper';

const Feedback = ({token }) => {

  const params = useParams();
  const [user, setUser] = useState([])

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
      title: "Comment",
      dataIndex: 'comment',
    },
    {
      title: "Grade",
      dataIndex: 'grade',
    },
    
  ]

  useEffect(() => {
      const user = async () => {
        setUser(await getUser(params.id, token))
      }
      user()
  }, [])
  console.log(user)
  user.map(e => e.key = e.id)
  return(
    <Container>
      <h1>Feedback</h1>
      <Table columns={columns} dataSource={user} style={{width:'90%'}}/>
    </Container>
  )
}

export default Feedback

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