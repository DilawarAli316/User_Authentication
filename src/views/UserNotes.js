import React, { useEffect } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useHistory } from 'react-router'

const UserNotes = () => {
  const history = useHistory()

  const userData = JSON.parse(localStorage.getItem('data'))
  useEffect(() => {
    if (!userData) {
      history.push('/login')
    } else {
      history.push('/user-notes')
    }
  }, [history])

  console.log(userData)
  return (
    <Row style={{ height: '100vh' }}>
      <Col
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title style={{ paddingBottom: '10px' }}>
              {userData.email}
            </Card.Title>
            <Card.Subtitle className='mb-2 text-muted'>
              {userData.password}
            </Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default UserNotes
