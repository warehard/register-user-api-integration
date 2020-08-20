import React, { useEffect, useState } from 'react'
import { Table, Button } from 'antd'
import { useParams, useHistory } from 'react-router-dom';
import styled from "styled-components";
import { getUser } from './helper';

const Feedback = ({ token }) => {
  
  const history = useHistory()
  const { id } = useParams();
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
        setUser(await getUser(id, token))
      }
      user()
  }, [])

  const handleClick = ( id ) => {
    history.push(`/users/feedbacks/${id}/new`)
  }
  
  user.map(e => e.key = e.id)

  return(
    <Container>
      <h1>Feedback</h1>
      <Table columns={columns} dataSource={user} style={{width:'90%'}}/>
      <Button type="primary" onClick={() => handleClick(id)}>
            New Feedback
          </Button>
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