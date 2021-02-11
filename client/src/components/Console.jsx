import React from 'react'
import SideBar from './SideBar.jsx'
import Status from './Status.jsx'
import {Card, Row, Col, Button} from 'react-bootstrap'

export default function Console({cost, value, graphData, portfolio, handleClear}) {
  return (
    <Card className="shadow" style={{ height: '30vh', margin: '20px 10px', padding: '10px 10px' }}>
      <Row style={{ height: '100%' }}>
        <Col md={3} style={{height: 'inherit'}}>
          <SideBar portfolio={portfolio}/>
        </Col>
        <Col md={9}>
          <Card className="shadow-thin" style={{height: '100%', padding: '10px 10px'}}>
            <Status cost={cost} value={value} graphData={graphData} handleClear={handleClear}/>
          </Card>
        </Col>
      </Row>
    </Card>
  )
}
