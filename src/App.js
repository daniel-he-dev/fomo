import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NYT from './components/NYT'
import Reddit from './components/Reddit'
import Trends from './components/Trends'
import SearchBar from './components/SearchBar'
import SideBar from './components/SideBar'
import Wikipedia from './components/Wikipedia'
import {Container, Row, Col} from 'react-bootstrap'

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
      <Row md={4}>
        <Col >
          <SideBar handleSearch={search}/>
        </Col>
        <Col >
          <Trends />
          <Reddit />
          <NYT />
          <Wikipedia />
        </Col>
      </Row>
      <Row>

      </Row>
    </Container>
  );
}

export default App;
