import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Banner1 from "../Images/Banner1.png"
import Banner2 from "../Images/Banner2.jpg"
import Banner3 from "../Images/Banner3.jpeg"
import Banner4 from "../Images/Banner4.webp"
import Banner5 from "../Images/HomeImage.jpg"

function Banner() {
  return (
    <div className='d-none d-md-block'>
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
        style={{height:"315px"}}
          className="d-block w-100"
          src={Banner5}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
        style={{height:"315px"}}
          className="d-block w-100"
          src={Banner1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
        style={{height:"315px"}}
          className="d-block w-100"
          src={Banner2}
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
        style={{height:"315px"}}
          className="d-block w-100"
          src={Banner3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
        style={{height:"315px"}}
          className="d-block w-100"
          src={Banner4}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Banner;