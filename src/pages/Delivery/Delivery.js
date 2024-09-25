import React from 'react'
import HeroImage from '../../components/HeroImage/HeroImage'
// import bgImage from '../../assets/sushi_line.jpg'
import bgImage from "../../assets/50%_rolls/aka.jpg"
import DeliveryInfo from './DeliveryInfo/DeliveryInfo'

const Delivery = () => {
  return (
    <div>
      <HeroImage 
        bgImage = {bgImage}
        heading={["Delivery ", <span className='special-word'>Options</span>]}
        text="Get food to you in the fastest way possible"
      />
      <DeliveryInfo />
    </div>
  )
}

export default Delivery