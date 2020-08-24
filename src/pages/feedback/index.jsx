import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom';
import styled from "styled-components";
import { getUser } from './helper';
import StyledTable from '../../styled/styled-table'
import StyledPagination from '../../styled/styled-pagination'
import StyledButton from '../../styled/styled-button';
import beforeIcon from '../../images/icons/navigate_before-black-36dp.svg'
import nextIcon from '../../images/icons/navigate_next-black-36dp.svg'
import StyledContainer from '../../styled/styled-container'

const Feedback = ({ token }) => {
  
  const history = useHistory()
  const { id } = useParams();
  const [user, setUser] = useState([])
  const [pageInitial, setPageInitial] = useState(0)
  const [pageFinal, setPageFinal] = useState(10)


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
      title: "Comment",
      key: 'comment',
    },
    {
      title: "Grade",
      key: 'grade',
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
    <StyledContainer>
      <h1>Feedbacks</h1>
      <StyledTable data={user.slice(pageInitial, pageFinal)} columns={columns} />
      <StyledPagination pageInitial={pageInitial} setPageInitial={setPageInitial} pageFinal={pageFinal} setPageFinal={setPageFinal} data={user} previousIcon={beforeIcon} nextIcon={nextIcon}/>
      <StyledButton handleClick={() => handleClick(id)} buttonName='New Feedback' width='200px' height='50px'/>
    </StyledContainer>
  )
}

export default Feedback

