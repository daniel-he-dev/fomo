import React from 'react'
import {Navbar,Form,Button,Container} from 'react-bootstrap'

function SearchBar() {
  return (
    <Navbar variant="dark" bg="dark">
      <Container>
        <Navbar.Brand>
          <img
            src="./icon.png"
            alt="Site logo"
            style={{width: '20px', height: '20px'}}
          />
          {`  FOMO`}
        </Navbar.Brand>
        {/* Maybe add drop-down commands here */}
        <Form inline>
          <Form.Control type="text" placeholder="Search" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Container>
    </Navbar>
  )
}

export default SearchBar
