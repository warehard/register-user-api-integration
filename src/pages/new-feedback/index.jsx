import React from 'react'
import { Form, Input, Button } from 'antd';
import styled from 'styled-components'
import axios from 'axios'
import { useParams, useHistory } from 'react-router-dom';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};


const NewFeeback = ({ token }) => {
  console.log(token)
  const { id } = useParams()
  const history = useHistory()

  const onFinish = async ({name, comment, grade}) => {
    try{
      await axios({
        method:'POST',
        url:`https://ka-users-api.herokuapp.com/users/${id}/feedbacks`,
        headers:{
          Authorization: token,
          "Content-Type":"application/json"
        },
        data:{
          feedback:{
            name:name,
            comment: comment,
            grade: grade
          }
        } 
      })
      history.push(`/users/feedbacks/${id}`)
    }
    catch(error){
      console.log(error)
    }
  
  }

   const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return(
    <Container>
      <h1>New Feedback</h1>
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Comment"
          name="comment"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input/>
            
        </Form.Item>

        <Form.Item
          label="Grade"
          name="grade"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input/>
            
        </Form.Item>
        
        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Container>
  )
}

export default NewFeeback


const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;

  .title {
    width: 90%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    margin: 1rem 5rem;
    font-size: 4rem;
  }
`