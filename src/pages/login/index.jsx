import React, { useState, useEffect } from 'react'
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
  const [userError, setUserError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  const handleUsername = (event) => {
    setUsername(event.target.value)
  }

  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  useEffect(() => {

  }, [username, password])

  const onFinish = async (e) => {
    e.preventDefault()
    
    if (username.length === 0) {
      setUserError(true)
    }else{
      setUserError(false)
    }
    if (password.length <= 3) {
      setPasswordError(true)
    }else{
      setPasswordError(false)
    }
    if ( username.length > 0 && password.length > 3) {
      setUserError(false)
      setPasswordError(false)
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
    }
  };

  console.log(username.length)
  
  return(

      <StyledForm handleSubmit={onFinish} titleSize='60px'>
        <h1>Welcome</h1>
        <StyledInput
          label='Username'
          name='username'
          rules={{required:true}}
          value={username}
          handleChange={handleUsername}
          width='350px'
          height='45px'
          error={userError}
          message='Usuário Inválido'
        />
         <StyledInput
          label='Password'
          name='password'
          rules={{required:true}}
          value={password}
          handleChange={handlePassword}
          width='350px'
          height='45px'
          error={passwordError}
          message='Senha inválida'
        />
        <span>{loginError}</span>
        <StyledButton 
          buttonName='Login' 
          width='245px' 
          height='45px'/>
      </StyledForm>
    
  )
}

export default Login;
