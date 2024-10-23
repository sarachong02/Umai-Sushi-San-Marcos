import React, { useState } from 'react';
import './Order.css';
import OrderNavbar from '../../components/OrderNavBar/OrderNavBar';
import ChooseMenu from '../../components/ChooseMenu/ChooseMenu.js';

import HeroImage from "../../components/HeroImage/HeroImage";
import bgImage from "../../assets/salmon_nigiri.png"

const Order = () => {

    const [category, setCategory] = useState("All");

  return (
    <div>
        <HeroImage 
            bgImage={bgImage}
            heading={["Order ", <span className='special-word'>Here</span>]}
            text="Order online at Umai Sushi!"
        />
        <ChooseMenu category={category} setCategory={setCategory}/>

      
    </div>
  )
}

export default Order