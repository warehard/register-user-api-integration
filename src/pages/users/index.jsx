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
      render: (_,user) => <Link to={`/users/feedbacks/${user.id}`} >Feedback</Link>
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
    <NewTable columns={columns} dataSource={users} style={{width:'90%'}}/>
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
    color: white
  }
`;

const NewTable = styled(Table)`
  div, button, p, h1, span {
    background-color: #1B1D1E !important ;
    color: whitesmoke;
  }

  a {
    color: #2794F0;
  }

  th, tr, td, li {
    background-color: #1B1D1E !important ;
    color: whitesmoke !important ;
  }

    .ant-pagination-item-ellipsis {
      background-color: #1B1D1E ;
      color: whitesmoke !important ;
    }

    th:hover, td:hover {
      color: whitesmoke;
      background-color: goldenrod !important ;
    }
    
    th::selection, td::selection {
      color: whitesmoke;
      background-color: goldenrod !important ;
    }

    .ant-table-row:hover, .ant-table-row-level-0:hover {
      color: darkred;
      background-color: goldenrod !important ;
    }

    .ant-table-row::selection, .ant-table-row-level-0::selection {
      color: darkred;
      background-color: goldenrod !important ;
    }
  
`;