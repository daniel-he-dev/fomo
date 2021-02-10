import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Cards from './components/Cards.jsx'
import Console from './components/Console.jsx'
import SearchBar from './components/SearchBar.jsx'
import {Container, Row, Col, Card} from 'react-bootstrap'

function App() {
  const search = (e) => {
    let searchTerm = e.target.value;
    //Do search here
  }

  return (
    <Container fluid="true" className="App">
      <Row md={1}>
        <SearchBar />
      </Row>
      <Row md={12} >
        <Col md={{span: 10, offset:1}}>
          <Console />
        </Col>
      </Row>
      <Row md={12} >
        <Col md={{span: 10, offset:1}}>
          <Cards />
        </Col>
      </Row>
      <Card.Footer bg="dark" className="footer" md={1}>
        <p>Daniel He | 2021 | <a href="https://github.com/daniel-he-dev">Github</a></p>
      </Card.Footer>
    </Container>
  );
}

export default App;
