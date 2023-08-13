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
        {images.map((image) => (
          <Carousel.Item  >
            <img src={'data:image/png;base64,' + image} alt="" className='imagen-tamaño' 
            
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </>
    
  );
};

export default CarouselId;