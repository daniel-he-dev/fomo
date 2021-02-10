import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Card, ListGroup} from 'react-bootstrap'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: 40
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  }
};

function Cards () {
  const [coinData, setCoinData] = useState([]);
  
  useEffect(() => {
    getCoinData()
      .then((data) => {
        console.log(data);
        setCoinData(data)
      })
  }, [])
  
  const getCoinData = () => {
    return axios.get(`https://api.coincap.io/v2/assets?limit=20`)
      .then(res => res.data.data.map(coin => {
        coin.changePercent24Hr = parseFloat(coin.changePercent24Hr).toFixed(2);
        return coin;
      }));
  };


  return (
    <Carousel
      swipeable={false}
      draggable={true}
      showDots={false}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      keyBoardControl={true}
      customTransition="transform 500ms ease-in-out"
      transitionDuration={800}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {coinData.map(coin => 
        <Card className="shadow" key={coin.id} style={{margin: '10px', paddingTop: '10px'}}>
          <Card.Img 
            variant="top" 
            src={`https://static.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`}
            style={{ width: '30%', margin: '0 auto'}}
          />
          <Card.Body>
            <Card.Title>{`${coin.name} (${coin.symbol})`}</Card.Title>
            <ListGroup>
              <ListGroup.Item>Market Cap Rank: {coin.rank}</ListGroup.Item>
              <ListGroup.Item>Price: ${parseFloat(coin.priceUsd).toFixed(2)}</ListGroup.Item>
              <ListGroup.Item>Change (24Hr): <span style={ coin.changePercent24Hr > 0 ? {color: 'green'} : {color: 'red'}}>{coin.changePercent24Hr}%</span></ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      )}
    </Carousel>
  )
}

export default Cards;
