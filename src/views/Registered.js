import React, { useState, useEffect } from 'react'

import { Row, Col, Form, Button } from 'react-bootstrap'
import { useHistory, useLocation } from 'react-router-dom'
import FormContainer from '../components/FormContainer/FormContainer.js'

const RegisteredScreen = ({}) => {
  const history = useHistory()
  const [email, setEmail] = useState('')

  const [fName, setfName] = useState('')
  const [lName, setlName] = useState('')
  const [dob, setdob] = useState('')
  const [phone, setPhone] = useState('')

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
      fName,
      lName,
      email,
      dob,
      phone,
      token: 'acbasfkfsafjalk',
    }
    //get token from backend and save it in localstorage
    localStorage.setItem('data', JSON.stringify(data.token))

    history.push('/user-notes')
  }
  return (
    <FormContainer>
      <h1>Sign Up</h1>

      <Form onSubmit={submitHandler}>
        <Form.Group controlId='fName'>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type='fName'
            placeholder='Enter your first Name'
            value={fName}
            onChange={(e) => setfName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='lName'>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type='lName'
            placeholder='Enter your last name'
            value={lName}
            onChange={(e) => setlName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='dob'>
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control
            type='dob'
            placeholder='Enter your dob'
            value={dob}
            onChange={(e) => setdob(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='phone'>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type='phone'
            placeholder='Enter your phone'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type='submit' variant='primary'>
          Sign Up
        </Button>
      </Form>
    </FormContainer>
  )
}

export default RegisteredScreen
