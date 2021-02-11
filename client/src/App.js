import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import React, {useState, useEffect} from 'react'
import Cards from './components/Cards.jsx'
import Console from './components/Console.jsx'
import SearchBar from './components/SearchBar.jsx'
import {Container, Row, Col, Card, Alert} from 'react-bootstrap'

function App() {
  const [coinData, setCoinData] = useState([]);
  const [portfolio, setPortfolio] = useState(JSON.parse(localStorage.getItem('fomoPortfolio')) || []);
  const [cost, setCost] = useState(JSON.parse(localStorage.getItem('fomoCost'))|| 0);
  const [value, setValue] = useState(JSON.parse(localStorage.getItem('fomoValue')) || 0);
  const [show, setShow] = useState(true);
  const [graphData, setGraphData] = useState([]);

  //Set localstorage effects
  useEffect(() => {
    localStorage.setItem('fomoPortfolio', JSON.stringify(portfolio))
  }, [portfolio])
  useEffect(() => {
    localStorage.setItem('fomoCost', JSON.stringify(cost));
  }, [cost])
  useEffect(() => {
    localStorage.setItem('fomoValue', JSON.stringify(value));
  }, [value])

  useEffect(() => {
    setTimeout(() => {
      getCoinData().then((data) => {
          setCoinData(data)
        })
    }, 1000)
  }, [coinData])

  //Update current portfolio value when prices update or portfolio updates
  useEffect(() => {
    coinData.length > 0 && updateValue();
  }, [coinData]);

  const updateValue = () => {
    setValue(portfolio.reduce((val, purchase) => {
      return val + purchase.quantity * coinData.find(coin => purchase.coinId === coin.id).priceUsd;
    }, 0))
  }

  const getCoinData = () => {
    return axios.get(`https://api.coincap.io/v2/assets?limit=20`)
      .then(res => res.data.data.map(coin => {
        coin.priceUsd = parseFloat(coin.priceUsd).toFixed(2)
        coin.changePercent24Hr = parseFloat(coin.changePercent24Hr).toFixed(2);
        return coin;
      }));
  };

  const makePurchase = async(coinId, quantity, time) => {
    let newPortfolio = [...portfolio, { coinId, quantity, time}];
    // localStorage.setItem('fomoPortfolio', JSON.stringify(newPortfolio));
    // console.log('new portfolio', newPortfolio);
    setPortfolio(newPortfolio);
    let res = await axios.get(`https://api.coincap.io/v2/assets/${coinId}/history?interval=d1&start=${new Date(time).getTime()}&end=${Date.now()}`)
    let newCost = cost + parseFloat(quantity * res.data.data[0].priceUsd);
    setCost(newCost);
    setGraphData(res.data.data)
  }

  const handleClear = () => {
    setPortfolio([]);
    setCost(0);
    setGraphData([]);
  }

  return (
    <Container fluid="true" className="App" style={{height: 'inherit'}}>
      <Row md={1}>
        <SearchBar />
      </Row>
      <Row md={12} >
        <Col md={{span: 10, offset:1}}>
          <Alert 
            show={show}
            onClose={(() => setShow(false))}
            variant="info" 
            dismissible 
            style={{ margin: '10px'}}
          ><strong>FOMO: Fear Of Missing Out</strong> - Do you wish you bought cryptocurrency 2 years ago? Build your portfolio to see how much you missed out on, or how much loss you avoided!</Alert>
          <Console cost={cost} value={value} portfolio={portfolio} graphData={graphData} handleClear={handleClear}/>
        </Col>
      </Row>
      <Row md={12} >
        <Col md={{span: 10, offset:1}}>
          <Cards coins={coinData} makePurchase={makePurchase} />
        </Col>
      </Row>
      <Card bg="light" style={{ height: '10vh', position: 'absolute', width: '100%', bottom:'0', paddingTop: '10px'}} md={1}>
        <p>Daniel He | 2021 | <a href="https://github.com/daniel-he-dev">Github</a></p>
        <p><strong>Disclaimer:</strong> This site is for simulation only. No monetary transactions are supported here.<br />No factors other than time-based exchange rate considered. For instance, expected capital gains taxation given age of position not considered.</p>
      </Card>
    </Container>
  );
}

export default App;
