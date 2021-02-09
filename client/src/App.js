import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import NYT from './components/NYT.jsx'
import Reddit from './components/Reddit.jsx'
import Trends from './components/Trends.jsx'
import SearchBar from './components/SearchBar.jsx'
import SideBar from './components/SideBar.jsx'
import Wikipedia from './components/Wikipedia.jsx'
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
      <Row md={4} className="h-100">
        <Col>
          <SideBar handleSearch={search}/>
        </Col>
        <Col >
          <Trends />
          <Reddit />
          <NYT />
          <Wikipedia />
        </Col>
      </Row>
      <Card.Footer className="footer" md={1}>
        <p>Daniel He | 2021 | <a href="https://github.com/daniel-he-dev">Github</a></p>
      </Card.Footer>
    </Container>
  );
}

export default App;
