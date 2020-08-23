import React, { useState } from 'react';
import axios from 'axios';
import StyledForm from '../../styled/styled-form'
import StyledInput from '../../styled/styled-input'
import StyledButton from '../../styled/styled-button'

const UserRegister = () => {

  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleFormChange = (e) => {
    
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
      <label for="name" >Name: </label>
      <StyledInput name={name} onChange={""} value={""} />

      <label for="username" >Username: </label>
      <StyledInput name={name} onChange={""} value={""}  />

      <label for="email" >Email: </label>
      <StyledInput name={name} onChange={""} value={""}  />

      <label for="password" >Password: </label>
      <StyledInput name={name} onChange={""} value={""}  />

      <label for="conirmation" >Password Confirmation: </label>
      <StyledInput name={name} onChange={""} value={""}  />
      
      <button onClick={(e) => e.preventDefault()} >Submit</button>

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

