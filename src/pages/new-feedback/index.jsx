import React, { useState } from 'react'
import axios from 'axios'
import { useParams, useHistory } from 'react-router-dom'
import { StyledButton, StyledContainer, StyledForm, StyledInput } from '../../styled'

const NewFeeback = ({ token }) => {
  const { id } = useParams()
  const history = useHistory()
  const [name, setName] = useState('')
  const [comment, setComment] = useState('')
  const [grade, setGrade] = useState('')

  const handleName = event => {
    setName(event.target.value)
  }

  const handleComment = event => {
    setComment(event.target.value)
  }

  const handleGrade = event => {
    setGrade(event.target.value)
  }

  const onFinish = async (event) => {
    event.preventDefault()
    try {
      await axios({
        method: 'POST',
        url: `https://ka-users-api.herokuapp.com/users/${id}/feedbacks`,
        headers: {
          Authorization: token,
          'Content-Type': 'application/json'
        },
        data: {
          feedback: {
            name: name,
            comment: comment,
            grade: grade
          }
        }
      })
      history.push(`/users/feedbacks/${id}`)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <StyledContainer>
      <h1>New Feedback</h1>
      <StyledForm handleSubmit={onFinish}>
        <StyledInput
          label='Name'
          name='name'
          required={false}
          value={name}
          handleChange={handleName}
          width='350px'
          height='45px'
        />
        <StyledInput
          label='Comment'
          name='comment'
          required={false}
          value={comment}
          handleChange={handleComment}
          width='350px'
          height='45px'
        />
        <StyledInput
          label='Grade'
          name='grade'
          required={false}
          value={grade}
          handleChange={handleGrade}
          width='350px'
          height='45px'
        />
        <StyledButton
          buttonName='Submit'
          width='245px'
          height='50px'
        />
      </StyledForm>
    </StyledContainer>
  )
}

export default NewFeeback
