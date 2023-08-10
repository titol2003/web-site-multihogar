import React, { useEffect ,useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './CarouselId.css'
import axios from 'axios'
const URI = 'http://localhost:8000/inmuebles/'

const CarouselId = ({ images }) => {

  const [inmuebles, setInmueble] = useState([])
    useEffect( ()=>{
      getInmuebles()
  },[])

  const getInmuebles = async () => {
    const res = await axios.get(URI)
    setInmueble(res.data)
  }
  
  return (
    <>
      <Carousel>
        {inmuebles.map((inmueble) => (
          <Carousel.Item  >
            <img src={inmueble.images} alt="" className='imagen-tamaño' 
            
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </>
    
  );
};

export default CarouselId;