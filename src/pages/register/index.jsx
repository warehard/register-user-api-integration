import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StyledForm from '../../styled/styled-form'
import StyledInput from '../../styled/styled-input'
import StyledButton from '../../styled/styled-button'

const defaultValues = {
  name: '',
  username: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const defaultError = {
  inputName: '',
  errorStatus: false,
  errorValue: '',
  message: ''
}

const UserRegister = () => {

  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [nameError, setNameError] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const handleFormNameChange = ({target: {value}}) => {
    setName(value)
  }

  const handleFormUsernameChange = ({target: {value}}) => {
    setUsername(value)
  }

  const handleFormEmailChange = ({target: {value}}) => {
    setEmail(value)
  }

  const handleFormPasswordChange = ({target: {value}}) => {
    setPassword(value)
  }

  const handleFormPasswordConfirmationChange = ({target: {value}}) => {
    setConfirmPassword(value)
  }

  const verifyName = () => {
    if(name.length > 0) {
      setNameError(false);
      return true;
    } else {
      setNameError(true);
      return false;
    }
  }

  const verifyUsername = () => {
    const regexUsername = /\s/;
    if(!regexUsername.test(username) && name.length > 0) {
      setUsernameError(false);
      return true;
    } else {
      setUsernameError(true);
      return false;
    }
  }

  const verifyEmail = () => {
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    if(regexEmail.test(email) && email.length > 0) {
      setEmailError(false);
      return true;
    } else {
      setEmailError(true);
      return false;
    }
  }

  const verifyPassword = () => {
    if(password.length > 2) {
      setPasswordError(false);
      return true;
    } else {
      setPasswordError(true);
      return false;
    }
  }

  const verifyConfirmPassword = () => {
    if(confirmPassword === password && confirmPassword) {
      setConfirmPasswordError(false);
      return true;
    } else {
      setConfirmPasswordError(true);
      return false;
    }
  }

  const verify = () => {
    verifyName();
    verifyUsername();
    verifyEmail();
    verifyPassword();
    verifyConfirmPassword();
    return(verifyName() && verifyUsername() && verifyEmail() && verifyPassword() && verifyConfirmPassword())
  }

  const registerUserFetch = async () => {
    const response = await axios.post('https://ka-users-api.herokuapp.com/users', {
      "headers": { 'content-type': 'application/json' },
      "user": {
        "name": name,
        "user": username,
        "email": email,
        "password": password,
        "password_confirmation": confirmPassword
      }
    }).catch((err) => console.log(err)).then(resp => console.log(resp));
  }

  const onFinish = async event => {

    event.preventDefault();

    verify() && await registerUserFetch();
  };

  return (

    <StyledForm handleSubmit={onFinish} titleSize='60px'>
      <h1>Register</h1>

      <StyledInput required={true} error={nameError} message={nameError && "name cannot be blank"} label="Name" name="name" handleChange={handleFormNameChange} value={name}  />

      <StyledInput required={true} error={usernameError} message={usernameError && "username cannot be blank neither contain spaces"} label="Username" name="username" handleChange={handleFormUsernameChange} value={username}  />

      <StyledInput required={true} error={emailError} message={emailError && "invalid email format"} label="Email" name="text" handleChange={handleFormEmailChange} value={email}  />

      <StyledInput required={true} error={passwordError} message={passwordError && "password cannot be blank"} label="Password" name="password" handleChange={handleFormPasswordChange} value={password}  />

      <StyledInput required={true} error={confirmPasswordError} message={confirmPasswordError && "passwords should be the same"} label="Confirm Password" name="password" handleChange={handleFormPasswordConfirmationChange} value={confirmPassword}  />

      <StyledButton 
          buttonName='Register' 
          width='245px' 
          height='45px'
          />

    </StyledForm>

  )
}

export default UserRegister;

