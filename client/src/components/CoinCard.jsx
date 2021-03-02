import React, {useState, useRef} from 'react'
import {Form, Button, Card, ListGroup, Alert} from 'react-bootstrap'

export default function CoinCard({coin, makePurchase}) {
  const [quantity, setQuantity] = useState(0);
  const [date, setDate] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const formRef = useRef(null);
  
  const handleSubmit = (e) => {
    if (quantity > 0 && date !== '' && new Date(date).getTime() < Date.now()) {
      makePurchase(coin.id, quantity, date);
      setQuantity(0);
      setDate('');
      formRef.current.reset();
    } else {
      setShowAlert(true);
    }
  }

  return (
    <>          
      <Alert variant="primary" dismissible onClose={() => setShowAlert(false)} show={showAlert}>Please Enter Valid Quantity and Date!</Alert>
      <Card className="shadow" style={{margin: '10px', paddingTop: '10px'}}>
        <Card.Img 
          variant="top" 
          src={`https://static.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`}
          style={{ width: '75px', height: '75px', margin: '0 auto'}}
        />
        <Card.Body>
          <Card.Title>{`${coin.name} (${coin.symbol})`}</Card.Title>
          <ListGroup>
            <ListGroup.Item>Market Cap Rank: {coin.rank}</ListGroup.Item>
            <ListGroup.Item>Price: ${coin.priceUsd}</ListGroup.Item>
            <ListGroup.Item>Change (24Hr): <span style={ coin.changePercent24Hr > 0 ? {color: 'green'} : {color: 'red'}}>{coin.changePercent24Hr}%</span></ListGroup.Item>
            <ListGroup.Item>
              <Form id={coin.id} ref={formRef} inline>
                Purchase
                {<Form.Control 
                  type="text" 
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                  placeholder="0" 
                  style={{ margin: '0 0.5em 0 0.5em', width: '5em'}}
                  isValid={quantity > 0}
                  required/>}
                {coin.symbol} on {<Form.Control 
                  type="datetime-local"
                  onChange={(e) => setDate(e.target.value || 0)}
                  style={{ display: 'inline', width: '100%'}}
                  isValid={date !== '' && new Date(date).getTime() < Date.now()}
                  required/>}
                {<Button 
                  form={coin.id}
                  variant="primary"
                  onClick={handleSubmit}
                  style={{ width: '100%' }}>Buy</Button>}
              </Form>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </>
  )
}
