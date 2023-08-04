import React from 'react';
import { Carousel } from 'react-bootstrap';
import './CarouselId.css'

const CarouselId = ({ images }) => {
  return (
    <Carousel>
      {images.map((image, index) => (
        <Carousel.Item key={index} >
          <img src={image} alt="" className='imagen-tamaño' />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselId;