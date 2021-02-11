import React from 'react'
import Graph from './Graph.jsx'
import {Container, Row, Col, ListGroup} from 'react-bootstrap'

export default function Status({cost, value, graphData}) {
  const diff = value - cost;

  return (
    <Container>
      <Row >
        <Col className="my-auto" md={7}>
          <h1 style={{color: diff > 0 ? 'green' : 'red', fontSize: '4rem'}}>
            {cost > 0 ? `${diff > 0 ? '+' : '-'} $${diff.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}` : 'Buy some crypto!'}
          </h1>
        </Col>
        <Col md={5}>
          <ListGroup>
            <ListGroup.Item>{`ROI: ${((diff/cost * 100) || 0).toLocaleString()}%`}</ListGroup.Item>
            <ListGroup.Item>{`Current Value/Cost: $${value.toLocaleString()}/$${cost.toLocaleString()}`}</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <Row>
        <Graph graphData={graphData}/>
      </Row>
    </Container>
  )
}
