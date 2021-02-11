import React from 'react';
import CoinCard from './CoinCard.jsx'
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

function Cards ({coins, makePurchase}) {
  return (
    <Carousel
      swipeable={false}
      draggable={true}
      showDots={false}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={false}
      autoPlaySpeed={5000}
      keyBoardControl={true}
      customTransition="transform 500ms ease-in-out"
      transitionDuration={800}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {coins.map(coin => 
        <CoinCard key={coin.id} coin={coin} makePurchase={makePurchase}/>
      )}
    </Carousel>
  )
}

export default Cards;
