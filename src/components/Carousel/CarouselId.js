import React from 'react';
import { Carousel } from 'react-bootstrap';
import './CarouselId.css'


const CarouselId = ({ images }) => {
  if (!images) {
    // Manejar el caso donde images es undefined
    return <div>No hay imágenes disponibles</div>;
  }
  
  return (
    <>
      <Carousel>
        {images.map((image, index) => (
          <Carousel.Item  key={index}>
            <img src={'data:image/png;base64,' + image} alt="" className='imagen-tamaño img-fluid d-block mx-auto '    
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </>
    
  );
};

export default CarouselId;