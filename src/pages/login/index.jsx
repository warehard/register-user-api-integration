import React, { useState } from 'react'
import { Form, Input, Button } from 'antd';
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import styled from "styled-components";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};


const Login = ({ setToken, setAuthentication }) => {


  const [loginError, setLoginError] = useState('')
  const history = useHistory()

  const onFinish = async ({ username, password }) => {

    try {
      const response = await axios.post('https://ka-users-api.herokuapp.com/authenticate', {
        user: username,
        password: password
      })

      setToken(response.data.auth_token)
      setAuthentication(true)
      localStorage.setItem('token', response.data.auth_token)
      history.push('/users')
    }
    catch (error) {
      setAuthentication(false)
      setLoginError(error.response.data.error.user_authentication)

    }
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  console.log(loginError)
  return (
    <div>
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <NewFormItem
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <NewInput />
        </NewFormItem>

        <NewFormItem
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          {/* <Input.Password /> */}
          <NewPass />

        </NewFormItem>
        {<span>{loginError}</span>}
        <NewFormItem {...tailLayout} name="remember" valuePropName="checked">

        </NewFormItem>

        <NewFormItem {...tailLayout}>
          <NewButton type="primary" htmlType="submit">
            Submit
          </NewButton>
        </NewFormItem>
      </Form>
    </div>
  )
}

export default Login;

const NewButton = styled(Button)`
  background-color: #2794F0; 
`;

const NewInput = styled(Input)`
  background-color: #1B1D1E;
  color: whitesmoke;
`;

const NewPass = styled(Input.Password)`
  background-color: #1B1D1E;
  color: whitesmoke;

  input {
    background-color: #1B1D1E;
    color: whitesmoke;
  }
`;

const NewFormItem = styled(Form.Item)`
 

 .ant-form-item-label > label {
    position: relative;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -ms-flex-align: center;
    align-items: center;
    height: 32px;
    color: rgba(200, 200, 200, 1);
    font-size: 14px;
  }
  
`;

// style={{background-color:'#181A1B'}}