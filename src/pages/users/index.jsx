import React, { useState, useEffect } from 'react'

import { getUsers } from './helper';

import StyledTable from '../../styled/styled-table'
import StyledPagination from '../../styled/styled-pagination';
import beforeIcon from '../../images/icons/navigate_before-black-36dp.svg'
import nextIcon from '../../images/icons/navigate_next-black-36dp.svg'

const Users = ({ token }) => {

  const columns = [
    {
      title: "id",
      key: 'id',
    },
    {
      title: "Name",
      key: 'name',
    },
    {
      title: "User",
      key: 'user',
    },
    {
      title: "Email",
      key: 'email',
    },
    {
      title: "Feedbacks",
      key: 'feedbacks',
      link:true,
      linkMessage:'Go to Feedbacks',
      url:'/users/feedbacks/'
    }
  ]

  const [users, setUsers] = useState([])
  const [pageInitial, setPageInitial] = useState(0)
  const [pageFinal, setPageFinal] = useState(10)

  useEffect(  () =>{
    const data = async () => {
      setUsers(await getUsers(token))
    }
    data()
  },[])
  
  users.map(e=> e.key = e.id);
  
  return(
    <div className='users'>
      <StyledTable data={users.slice(pageInitial,pageFinal)} columns={columns} />
      <StyledPagination pageInitial={pageInitial} setPageInitial={setPageInitial} pageFinal={pageFinal} setPageFinal={setPageFinal} data={users} previousIcon={beforeIcon} nextIcon={nextIcon}/>
    </div>
  )
}

export default Users;

