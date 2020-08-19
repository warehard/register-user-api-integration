import React, { useState } from 'react'
import { Form, Input, Button } from 'antd';
import axios from 'axios'
import { useHistory } from 'react-router-dom';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};


const Login = ({ setToken, setAuthentication}) => {

  const history = useHistory()

  const onFinish = async (values) => {
    console.log(values)
    try{
    const response = await axios.post('https://ka-users-api.herokuapp.com/authenticate', {
      user: values.username, 
      password: values.password
    })

    setToken(response.data.auth_token)
    setAuthentication(true)
    localStorage.setItem('token', response.data.auth_token)
    history.push('/users')
    }
    catch(error) { setAuthentication(false) }


    
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return(
    <div>
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login;