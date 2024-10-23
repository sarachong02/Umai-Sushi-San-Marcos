import React from 'react';
import './Order.css';
import OrderNavbar from '../../components/OrderNavBar/OrderNavBar';

import HeroImage from "../../components/HeroImage/HeroImage";
import bgImage from "../../assets/salmon_nigiri.png"

const Order = () => {
  return (
    <div>
        <HeroImage 
            bgImage={bgImage}
            heading={["Order ", <span className='special-word'>Here</span>]}
            text="Order online at Umai Sushi!"
        />

      
    </div>
  )
}

export default Order