import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero-img container'>
        <div className = 'hero-content' >
            <h1 className='heading-primary'>
                welcome to <span className='special-word'>umai sushi!</span>
            </h1>

            <p className='text-white'> THe highest quality of sushi in San Marcos</p>

            <p className='text-white'>
                Order online or call <span className='special-word'>(760)233-0888</span>
            </p>
        </div>
    </div>
  )
}

export default Hero