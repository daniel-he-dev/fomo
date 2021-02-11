import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'



export default function SideBar({portfolio}) {
  
  return (
    <Card className="shadow-thin" style={{height: '100%'}}>
      <ListGroup className="scrollbar-hidden" style={{overflowY: 'scroll', height: '100%', position: 'relative' }}>
        <ListGroup.Item style={{top: '0', position: 'sticky', zIndex: '5'}}>
          <h3>Portfolio</h3>
        </ListGroup.Item>
        {portfolio.map((transaction, idx) => <ListGroup.Item key={idx}>
          <div>{`Purchased ${transaction.quantity} ${transaction.coinId}\n`}</div>
          <div>{`${new Date(transaction.time).toLocaleString('en-US')}`}</div>
        </ListGroup.Item>)}
      </ListGroup>
    </Card>
  )
}
