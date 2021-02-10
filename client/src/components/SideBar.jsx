import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'



export default function SideBar({handleSearch}) {
  
  return (
    <Card className="h-100">
      <ListGroup>
        <ListGroup.Item>
          <h3>Search History</h3>
        </ListGroup.Item>
        {/* This will be a map of some localstorage of previous searches at some point */}
        <ListGroup.Item action onClick={handleSearch}>
          Some Previous Search Here
        </ListGroup.Item>
        <ListGroup.Item action onClick={handleSearch}>
          Beets
        </ListGroup.Item>
        <ListGroup.Item action onClick={handleSearch}>
          Bears
        </ListGroup.Item>
        <ListGroup.Item action onClick={handleSearch}>
          Battlestar Galactica
        </ListGroup.Item>
      </ListGroup>
    </Card>
  )
}
