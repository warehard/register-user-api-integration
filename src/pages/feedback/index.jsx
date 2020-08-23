import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom';
import styled from "styled-components";
import { getUser } from './helper';
import StyledTable from '../../styled/styled-table'
import StyledPagination from '../../styled/styled-pagination'
import StyledButton from '../../styled/styled-button';

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
    <Container>
      <StyledTable data={user.slice(pageInitial, pageFinal)} columns={columns} />
      <StyledPagination pageInitial={pageInitial} setPageInitial={setPageInitial} pageFinal={pageFinal} setPageFinal={setPageFinal} data={user}/>
      <StyledButton handleClick={() => handleClick(id)} buttonName='New Feedback' width='200px' height='50px'/>
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