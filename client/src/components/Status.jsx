import React from 'react'
import {Container, Row, Col, ListGroup} from 'react-bootstrap'

export default function Status() {
  return (
    <Container>
      <Row>
        <Col md={9}>
          <div>
            $XXX,XXX.XX 
          </div>
        </Col>
        <Col md={3}>
          <ListGroup>
            <ListGroup.Item>Percentage up</ListGroup.Item>
            <ListGroup.Item>Total/Principal</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}
