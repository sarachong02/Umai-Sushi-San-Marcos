import React from 'react'

import HeroImage from "../../components/HeroImage/HeroImage";
import bgImage from "../../assets/salmon_nigiri.png"

import ContactForm from './ContactForm/ContactForm';

const Contact = () => {
  return (
    <div>
      <HeroImage 
       bgImage={bgImage}
       heading={["Contact ", <span className='special-word'>Us</span>]}
       text="Please contact us!"
      />

      <ContactForm />
    </div>
  )
}

export default Contact