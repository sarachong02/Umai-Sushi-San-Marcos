import React from 'react'
import "./Gallery.css"

import image1 from "../../../assets/premium_rolls/cucumber_wrap.jpg";
import image2 from "../../../assets/sushi_and_nigiri.jpg";
import image3 from "../../../assets/roll_platter.png";
import image4 from "../../../assets/fish_tower.jpg";
import image5 from "../../../assets/bibimbap.jpg";
import image6 from "../../../assets/bentobox.jpg";
import image7 from "../../../assets/sashimi_combo_a.png";
import image8 from "../../../assets/premium_rolls/jungle_fever.png";
import image9 from "../../../assets/50%_rolls/blackedge.jpg";
import image10 from "../../../assets/50%_rolls/caterpillar.jpg"
import image11 from "../../../assets/50%_rolls/firehouse.jpg"
import image12 from "../../../assets/ramen.jpg"
import image13 from "../../../assets/unagi_donburi.jpg"
import image14 from "../../../assets/50%_rolls/red_dragon.jpg"

const Gallery = () => {
  return (
    <div className='gallery'>

        <figure className='gallery___item gallery__item-1'>
            <img src={image1} alt='Gallery image 1' className='gallery__img' />
        </figure>

        <figure className='gallery___item gallery__item-2'>
            <img src={image2} alt='Gallery image 2' className='gallery__img' />
        </figure>

        <figure className='gallery___item gallery__item-3'>
            <img src={image3} alt='Gallery image 3' className='gallery__img' />
        </figure>

        <figure className='gallery___item gallery__item-4'>
            <img src={image4} alt='Gallery image 4' className='gallery__img' />
        </figure>

        <figure className='gallery___item gallery__item-5'>
            <img src={image5} alt='Gallery image 5' className='gallery__img' />
        </figure>

        <figure className='gallery___item gallery__item-6'>
            <img src={image6} alt='Gallery image 6' className='gallery__img' />
        </figure>

        <figure className='gallery___item gallery__item-7'>
            <img src={image7} alt='Gallery image 7' className='gallery__img' />
        </figure>

        <figure className='gallery___item gallery__item-8'>
            <img src={image8} alt='Gallery image 8' className='gallery__img' />
        </figure>

        <figure className='gallery___item gallery__item-9'>
            <img src={image9} alt='Gallery image 9' className='gallery__img' />
        </figure>

        <figure className='gallery___item gallery__item-10'>
            <img src={image10} alt='Gallery image 10' className='gallery__img' />
        </figure>

        <figure className='gallery___item gallery__item-11'>
            <img src={image11} alt='Gallery image 11' className='gallery__img' />
        </figure>

        <figure className='gallery___item gallery__item-12'>
            <img src={image12} alt='Gallery image 12' className='gallery__img' />
        </figure>

        <figure className='gallery___item gallery__item-13'>
            <img src={image13} alt='Gallery image 13' className='gallery__img' />
        </figure>

        <figure className='gallery___item gallery__item-14'>
            <img src={image14} alt='Gallery image 14' className='gallery__img' />
        </figure>

    </div>
  )
}

export default Gallery