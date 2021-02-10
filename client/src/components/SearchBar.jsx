import React from 'react'
import {Navbar,Form,Button} from 'react-bootstrap'

function SearchBar() {
  return (
    <Navbar variant="dark" bg="dark">
      <Navbar.Brand>Trending.Now</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      {/* Maybe add drop-down commands here */}
      <Form inline>
        <Form.Control type="text" placeholder="Search" />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar>
  )
}

export default SearchBar
