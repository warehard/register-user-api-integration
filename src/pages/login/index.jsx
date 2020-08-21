import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import StyledForm from '../../styled/styled-form'
import StyledButton from '../../styled/styled-button'
import StyledInput from '../../styled/styled-input'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};


const Login = ({ setToken, setAuthentication}) => {


  const [loginError, setLoginError] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  const handleUsername = (event) => {
    setUsername(event.target.value)
  }

  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  const onFinish = async (e) => {
    e.preventDefault()
    console.log(username,password)

    try{
    const response = await axios.post('https://ka-users-api.herokuapp.com/authenticate', {
      user: username, 
      password: password
    })

    setToken(response.data.auth_token)
    setAuthentication(true)
    localStorage.setItem('token', response.data.auth_token)
    history.push('/users')
    }
    catch(error) { 
      setAuthentication(false)
      setLoginError(error.response.data.error.user_authentication)
      
    }
    
  };

  
  
  return(
    
      <StyledForm handleSubmit={onFinish}>
        <StyledInput
          label='Username'
          name='username'
          rules={{required:true}}
          value={username}
          handleChange={handleUsername}
          width='350px'
          height='45px'
          
          
        />
         <StyledInput
          label='Username'
          name='username'
          rules={{required:true}}
          value={password}
          handleChange={handlePassword}
          width='350px'
          height='45px'
          
          
        />

        <StyledButton 
          buttonName='Login' 
          width='245px' 
          height='45px'/>
      </StyledForm>
    
  )
}

export default Login;
