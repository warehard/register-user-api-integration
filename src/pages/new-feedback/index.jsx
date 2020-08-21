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

  const onFinish = async ({ name, comment, grade }) => {
    try {
      await axios({
        method: 'POST',
        url: `https://ka-users-api.herokuapp.com/users/${id}/feedbacks`,
        headers: {
          Authorization: token,
          "Content-Type": "application/json"
        },
        data: {
          feedback: {
            name: name,
            comment: comment,
            grade: grade
          }
        }
      })
      history.push(`/users/feedbacks/${id}`)
    }
    catch (error) {
      console.log(error)
    }

  }

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Container>
      <h1 className="title">New Feedback</h1>
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <NewFormItem
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <NewInput />
        </NewFormItem>

        <NewFormItem
          label="Comment"
          name="comment"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <NewInput />

        </NewFormItem>

        <NewFormItem
          label="Grade"
          name="grade"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <NewInput />

        </NewFormItem>

        <NewFormItem {...tailLayout} name="remember" valuePropName="checked">

        </NewFormItem>

        <NewFormItem {...tailLayout}>
          <NewButton type="primary" htmlType="submit">
            Submit
          </NewButton>
        </NewFormItem>
      </Form>
    </Container>
  )
}

export default NewFeeback


const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  .title {
    width: 90%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    margin: 1rem 5rem;
    font-size: 4rem;
    color: whitesmoke;
  }
`;

const NewButton = styled(Button)`
  background-color: #2794F0; 
`;

const NewInput = styled(Input)`
  background-color: #1B1D1E;
  color: whitesmoke;
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