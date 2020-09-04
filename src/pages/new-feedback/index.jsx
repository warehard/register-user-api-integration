import React, { useState } from 'react'
import axios from 'axios'
import { useParams, useHistory } from 'react-router-dom'
import { StyledButton, StyledContainer, StyledForm, StyledInput } from '../../styled'
import { useEffect } from 'react'

const NewFeeback = ({ token }) => {
  const { id } = useParams()
  const history = useHistory()
  const [name, setName] = useState('')
  const [nameError, setNameError] = useState(false)
  const [comment, setComment] = useState('')
  const [commentError, setCommentError] = useState(false)
  const [grade, setGrade] = useState('')
  const [gradeError, setGradeError] = useState(false)

  useEffect(() => {

  }, [name, comment, grade])
 
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
    
    if ( name === ' '.repeat(name.length) ) {
      setNameError(true)
    }else {
      setNameError(false)
    }
    if ( comment === ' '.repeat(comment.length) ) {
      setCommentError(true)
    }else {
      setCommentError(false)
    }
    if (grade === ' '.repeat(grade.length) ) {
      setGradeError(true)
    }else {
      setGradeError(false)
    }
    
    if (name !== ' '.repeat(name.length) && comment !== ' '.repeat(comment.length) && grade !== ' '.repeat(grade.length)) {
      
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
        <span className='error'>{nameError && 'Name cannot be blank'}</span>
        <StyledInput
          label='Comment'
          name='comment'
          required={false}
          value={comment}
          handleChange={handleComment}
          width='350px'
          height='45px'
        />
        <span className='error' >{commentError && 'Comment cannot be blank'}</span>
        <StyledInput
          label='Grade'
          name='grade'
          required={false}
          value={grade}
          handleChange={handleGrade}
          width='350px'
          height='45px'
        />
        <span className='error' >{gradeError && 'Grade cannot be blank'}</span>
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
