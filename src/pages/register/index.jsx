import React, { useState } from 'react';
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

  const [formValues, setFormValues] = useState(defaultValues);
  const [formValueErrors, setFormValueErrors] = useState(defaultError);

  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [nameError, setNameError] = useState(defaultError);
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
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2, 5}$/i;
    return !regexEmail.test(email);
  }

  const verifyPassword = () => {
    return password.length > 2;
  }

  const verifyConfirmPassword = () => {
    return confirmPassword === password;
  }

  const verify = (e) => {
    (verifyName() &&
    verifyUsername() &&
    verifyEmail() &&
    verifyPassword() &&
    verifyConfirmPassword())

    ?

    console.log(
      "State Values",
      name, 
      username, 
      email, 
      password, 
      confirmPassword,
      "Boolean Values",
      verifyName(),
      verifyUsername(),
      verifyEmail(),
      verifyPassword(),
      verifyConfirmPassword()
    )

    :
    
    console.log(
      "Boolean Values",
      verifyName(),
      verifyUsername(),
      verifyEmail(),
      verifyPassword(),
      verifyConfirmPassword(),
      "Invalid Email Format"
    )

    // onFinish();
  }

  

  const onFinish = async event => {

    const response = await axios.post('https://ka-users-api.herokuapp.com/users', {
      "headers": { 'content-type': 'application/json' },
      "user": {
        "name": name,
        "user": username,
        "email": email,
        "password": password,
        "password_confirmation": confirmPassword
      }
    }).catch((err) => console.log(err));
  };

  return (



    <StyledForm>
      <label for="name" >*Name: </label>
      {/* <StyledInput name={name} onChange={""} value={""}  /> */}
      <input type="text" name={name} onChange={handleFormNameChange} value={name} />

      <label for="username" >*Username: </label>
      {/* <StyledInput name={name} onChange={""} value={""}  /> */}
      <input type="text" name={name} onChange={handleFormUsernameChange} value={username} />

      <label for="email" >*Email: </label>
      {/* <StyledInput name={name} onChange={""} value={""}  /> */}
      <input type="text" name={name} onChange={handleFormEmailChange} value={email} />

      <label for="password" >*Password: </label>
      {/* <StyledInput name={name} onChange={""} value={""}  /> */}
      <input type="password" name={name} onChange={handleFormPasswordChange} value={password} />

      <label for="conirmation" >*Password Confirmation: </label>
      {/* <StyledInput name={name} onChange={""} value={""}  /> */}
      <input type="password" name={name} onChange={handleFormPasswordConfirmationChange} value={confirmPassword} />
      
      <button onClick={(e) => {e.preventDefault(); verify();}} >Submit</button>

      {/* <div className={className}>
      <h1>Register</h1>
      <label for="name" >Name: </label>
      <input name={name} onChange={handleChange} value={value} />
      {error && <span>{message}</span>} <br />
      <label for="username" >Username: </label>
      <input name={name} onChange={handleChange} value={value} />
      {error && <span>{message}</span>} <br />
      <label for="email" >Email: </label>
      <input name={name} onChange={handleChange} value={value} />
      {error && <span>{message}</span>} <br />
      <label for="password" >Password: </label>
      <input name={name} onChange={handleChange} value={value} />
      {error && <span>{message}</span>} <br />
      <label for="conirmation" >Password Confirmation: </label>
      <input name={name} onChange={handleChange} value={value} />
      {error && <span>{message}</span>}
      <button onClick={(e) => e.preventDefault()} >Submit</button>
      </div> */}

    </StyledForm>
    

  )
}

export default UserRegister;

