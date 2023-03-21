import React, {useState} from 'react'
import { Link  } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import Photo1 from '../img/Photo/screenImg';
import '../Styles/header.css';


function Header() {

    const [index, SetIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        SetIndex(selectedIndex);
    };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className='header' variant='dark'>
      <Carousel.Item>
        <Link to="/urun1"><Photo1 style={{width:'30%', zIndex:'-1'}}/></Link>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Link to="/urun1"><Photo1/></Link>

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Link to="/urun1"><Photo1/></Link>

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Header;
