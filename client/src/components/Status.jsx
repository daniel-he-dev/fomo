import React from 'react'
import Graph from './Graph.jsx'
import {Container, Row, Col, ListGroup, Button} from 'react-bootstrap'

export default function Status({cost, value, graphData, handleClear}) {
  const diff = value - cost;


  return (
    <Container>
      <Row >
        <Col className="my-auto" md={7}>
          <h1 style={{color: diff > 0 ? 'green' : 'red', fontSize: '4rem', textAlign: 'left'}}>
            {cost > 0 ? `${diff > 0 ? '+' : '-'} $${diff.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}` : 'Buy some crypto!'}
          </h1>
        </Col>
        <Col md={5}>
          <ListGroup>
            <ListGroup.Item><strong>ROI: </strong>{`${((diff/cost * 100) || 0).toLocaleString()}%`}</ListGroup.Item>
            <ListGroup.Item><strong>Current Value/Cost: </strong>{`$${value.toLocaleString()}/$${cost.toLocaleString()}`}</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <Row>
        <Graph graphData={graphData}/>
      </Row>
      <Row>
        <Button 
          variant="danger" 
          onClick={handleClear}
          style={{position: 'absolute', width: '98%', bottom: '10px'}}
        >Clear Portfolio</Button>
      </Row>

    </Container>
  )
}
