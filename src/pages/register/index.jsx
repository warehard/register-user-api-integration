import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { StyledButton, StyledContainer, StyledForm, StyledInput} from '../../styled'

const UserRegister = () => {
  const history = useHistory()

  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [nameError, setNameError] = useState(false)
  const [usernameError, setUsernameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [confirmPasswordError, setConfirmPasswordError] = useState(false)

  const [registrationStatus, setRegistrationStatus] = useState(undefined)

  const handleFormNameChange = ({ target: { value } }) => {
    setName(value)
  }

  const handleFormUsernameChange = ({ target: { value } }) => {
    setUsername(value)
  }

  const handleFormEmailChange = ({ target: { value } }) => {
    setEmail(value)
  }

  const handleFormPasswordChange = ({ target: { value } }) => {
    setPassword(value)
  }

  const handleFormPasswordConfirmationChange = ({ target: { value } }) => {
    setConfirmPassword(value)
  }

  const verifyName = () => {
    if (name.length > 0) {
      setNameError(false)
      return true
    } else {
      setNameError(true)
      return false
    }
  }

  const verifyUsername = () => {
    const regexUsername = /\s/
    if (!regexUsername.test(username) && name.length > 0) {
      setUsernameError(false)
      return true
    } else {
      setUsernameError(true)
      return false
    }
  }

  const verifyEmail = () => {
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    if (regexEmail.test(email) && email.length > 0) {
      setEmailError(false)
      return true
    } else {
      setEmailError(true)
      return false
    }
  }

  const verifyPassword = () => {
    if (password.length > 2) {
      setPasswordError(false)
      return true
    } else {
      setPasswordError(true)
      return false
    }
  }

  const verifyConfirmPassword = () => {
    if (confirmPassword === password && confirmPassword) {
      setConfirmPasswordError(false)
      return true
    } else {
      setConfirmPasswordError(true)
      return false
    }
  }

  const verify = () => {
    verifyName()
    verifyUsername()
    verifyEmail()
    verifyPassword()
    verifyConfirmPassword()
    return (verifyName() && verifyUsername() && verifyEmail() && verifyPassword() && verifyConfirmPassword())
  }

  const registerUserFetch = async () => {
    await axios.post('https://ka-users-api.herokuapp.com/users', {
      headers: { 'content-type': 'application/json' },
      user: {
        name: name,
        user: username,
        email: email,
        password: password,
        password_confirmation: confirmPassword
      }
    })
      .then((resp) => { console.log(resp); setRegistrationStatus(true); setTimeout(() => { history.push('/') }, 1500) })
      .catch((err) => { console.log(err); history.push('/register'); setRegistrationStatus(false) })
  }

  const onFinish = async event => {
    event.preventDefault()

    verify() && await registerUserFetch()
  }

  return (
    <StyledContainer>
      <StyledForm handleSubmit={onFinish} titleSize='60px'>
        <h1>Register</h1>

        <StyledInput required error={nameError} message={nameError && 'name cannot be blank'} label='Name' name='name' handleChange={handleFormNameChange} value={name} />

        <StyledInput required error={usernameError} message={usernameError && 'invalid username'} label='Username' name='username' handleChange={handleFormUsernameChange} value={username} />

        <StyledInput required error={emailError} message={emailError && 'invalid email format'} label='Email' name='text' handleChange={handleFormEmailChange} value={email} />

        <StyledInput required error={passwordError} message={passwordError && 'password cannot be blank'} label='Password' name='password' handleChange={handleFormPasswordChange} value={password} />

        <StyledInput required error={confirmPasswordError} message={confirmPasswordError && 'passwords should be the same'} label='Confirm Password' name='password' handleChange={handleFormPasswordConfirmationChange} value={confirmPassword} />

        <StyledButton
          buttonName='Register'
          width='245px'
          height='45px'
        />

      </StyledForm>

      {registrationStatus !== undefined &&

    registrationStatus === true
        ? <RegisterStatus style={{ color: '#4bcc58' }}>Registration Successeful</RegisterStatus>
        : registrationStatus === false
          ? <RegisterStatus style={{ color: '#cc4b4b' }}>Registration Failed</RegisterStatus>
          : null}
    </StyledContainer>
  )
}

export default UserRegister

const RegisterStatus = styled.div`
  font-size:25px;
  font-family: Red Hat Display;
`
