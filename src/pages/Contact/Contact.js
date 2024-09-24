import React from 'react'

import HeroImage from "../../components/HeroImage/HeroImage";
import bgImage from "../../assets/salmon_nigiri.png"

const Contact = () => {
  return (
    <div>
      <HeroImage 
       bgImage={bgImage}
       heading={["Contact ", <span className='special-word'>Us</span>]}
       text="Please contact us!"
      />
    </div>
  )
}

export default Contact