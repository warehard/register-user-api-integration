import React, { useState } from 'react';
import axios from 'axios';
import StyledForm from '../../styled/styled-form'
import StyledInput from '../../styled/styled-input'
import StyledButton from '../../styled/styled-button'
import arrowForward from '../../images/icons/arrow_forward-black-18dp.svg'

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

  const [formValues, setFormValues] = useState(defaultValues);
  const [formValueErrors, setFormValueErrors] = useState(defaultError);

  const nameErrors = '';

  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [nameError, setNameError] = useState("");
  const [usernameError, setUsernameError] = useState(defaultError);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState(defaultError);
  const [confirmPasswordError, setConfirmPasswordError] = useState(defaultError);

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
    const regexName = /\s/;
    return !regexName.test(name) && name.length > 0;
  }

  const verifyUsername = () => {
    const regexUsername = /\s/;
    return !regexUsername.test(username) && name.length > 0;
  }

  const verifyEmail = () => {
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    return regexEmail.test(email) && email.length > 0;
  }

  const verifyPassword = () => {
    return password.length > 2;
  }

  const verifyConfirmPassword = () => {
    return confirmPassword === password;
  }

  const verify = () => {
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

      <StyledInput required={true} label="Name" name="name" handleChange={handleFormNameChange} value={name}  />

      <StyledInput required={true} label="Username" name="username" handleChange={handleFormUsernameChange} value={username}  />

      <StyledInput required={true} label="Email" name="text" handleChange={handleFormEmailChange} value={email}  />

      <StyledInput required={true} label="Password" name="password" handleChange={handleFormPasswordChange} value={password}  />

      <StyledInput required={true} label="Confirm Password" name="password" handleChange={handleFormPasswordConfirmationChange} value={confirmPassword}  />

      <StyledButton 
          buttonName='Register' 
          width='245px' 
          height='45px'
          
          />

    </StyledForm>

  )
}

export default UserRegister;

