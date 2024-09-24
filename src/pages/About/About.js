import React from 'react'
import HeroImage from "../../components/HeroImage/HeroImage"
import bgImage from "../../assets/opening_image.jpg"
import AboutInfo from './AboutInfo/AboutInfo'
import OurData from './OurData/OurData'
import Gallery from './Gallery/Gallery'

const About = () => {
  return (
    <div>
      <HeroImage 
        bgImage = {bgImage}
        heading={["About ", <span className='special-word'>Us</span>]}
        text="Take a look at the place, the people, and most importantly...the food"
      />

      <AboutInfo />
      <OurData />
      <h1 style={{ fontSize: '65px', fontWeight: 'bold', fontStyle: 'italic', textAlign: 'center', padding: '20px 30px', color: 'var(--color-primary)' }}>
        Gallery
      </h1>
      <Gallery />
    </div>
  )
}

export default About