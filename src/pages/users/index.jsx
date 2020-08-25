import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getUsers } from './helper'
import StyledTable from '../../styled/styled-table'
import StyledPagination from '../../styled/styled-pagination'
import StyledContainer from '../../styled/styled-container'

const Users = ({ token }) => {
  const { page } = useParams()
  const pageLimit = 10

  const columns = [
    {
      title: 'id',
      key: 'id'
    },
    {
      title: 'Name',
      key: 'name'
    },
    {
      title: 'User',
      key: 'user'
    },
    {
      title: 'Email',
      key: 'email'
    },
    {
      title: 'Feedbacks',
      key: 'feedbacks',
      link: true,
      linkMessage: 'Go to Feedbacks',
      url: '/users/feedbacks/'
    }
  ]

  const [users, setUsers] = useState([])
  const [pageInitial, setPageInitial] = useState(0)
  const [pageFinal, setPageFinal] = useState(pageLimit)

  useEffect(() => {
    const data = async () => {
      setUsers(await getUsers(token))
    }
    data()
  }, [])

  users.map(e => e.key = e.id)

  return (
    <StyledContainer>
      <h1>Students</h1>
      <StyledTable
        data={users.slice((page - 1) * 10, page * 10)}
        columns={columns}
      />

      <StyledPagination
        pageInitial={pageInitial}
        setPageInitial={setPageInitial}
        pageFinal={pageFinal}
        setPageFinal={setPageFinal}
        data={users}
        pageLimit={pageLimit}
      />
    </StyledContainer>
  )
}

export default Users
