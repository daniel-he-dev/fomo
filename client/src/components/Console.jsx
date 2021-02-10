import React from 'react'
import SideBar from './SideBar.jsx'
import Status from './Status.jsx'
import {Card, Container, Row, Col, Button} from 'react-bootstrap'

export default function Console() {
  return (
    <Card className="shadow" style={{ margin: '20px 10px', padding: '10px 10px' }}>
      <Row>
        <Col md={3}>
          <SideBar />
        </Col>
        <Col md={9}>
          <Card className="shadow-thin" style={{height: '100%', padding: '10px 10px'}}>
            <Status />
            <Button variant="danger" style={{position: 'absolute', width: '98%', bottom: '10px'}}>Clear</Button>
          </Card>
        </Col>
      </Row>
    </Card>
  )
}
