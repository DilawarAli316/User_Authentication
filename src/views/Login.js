import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux' // redux state
import { Row, Col, Form, Button } from 'react-bootstrap'
import { useHistory, useLocation } from 'react-router-dom'
import FormContainer from '../components/FormContainer/FormContainer.js'

const LoginScreen = ({}) => {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // useEffect(() => {
  //   if (userInfo && userInfo.isAdmin) {
  //     history.push('/usernotes') // if login then redirect
  //   } else {
  //     history.push('/login')
  //   }
  // }, [history, userInfo])

  const submitHandler = (e) => {
    e.preventDefault()
    const data = {
      email,
      password,
      token: 'acbasfkfsafjalk',
    }
    //get token from backend and save it in localstorage
    localStorage.setItem('data', JSON.stringify(data))

    history.push('/user-notes')
  }
  return (
    <FormContainer>
      <h1>Sign In</h1>

      <Form onSubmit={submitHandler}>
        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter your password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type='submit' variant='primary'>
          Sign In
        </Button>
      </Form>
    </FormContainer>
  )
}

export default LoginScreen
