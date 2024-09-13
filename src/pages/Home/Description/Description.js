import React, { useState } from 'react';
import './Description.css';

import image1 from "../../../assets/nigiri_combo.png";
import image2 from "../../../assets/tuna sashimi.png";
import image3 from "../../../assets/sashimi_combo_a.png";
import image4 from "../../../assets/salmon_nigiri.png"

import image5 from "../../../assets/ingredients.png"
import image6 from "../../../assets/tatami.jpeg"
import image7 from "../../../assets/roll_platter.png"

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {BsFillStarFill} from 'react-icons/bs'

const Description = () => {

    const [items, setItems] = useState([
        {id: 1, url: image1},
        {id: 2, url: image2},
        {id: 3, url: image3},
        {id: 4, url: image4}
    ])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1, 
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    return (
        <div className = 'section'>
            <div className='container'>
                <div className = 'description-container'>
                    <div className = 'description-carousel'>
                        <div>
                            <Slider {...settings}>
                                {items.map(item=>(
                                    <div key={item.id}>
                                        <img src={item.url} alt="carousel pic" />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>

                    <div className='description-content'>
                        <h2 className='heading-secondary'>
                            If you're asking yourself... 
                            <br />
                            <br />
                            "Where's the best Japanese restaurant near me?”
                            <br />
                            <br />
                            <span> 
                                Then look no further!
                            </span>
                        </h2>

                        <br />

                        <p> Umai Sushi is located in San Marcos and has been catering the locals and tourists in the area. 
                            We serve the freshest ingredients and will continue doing that many years to come.

                            <br />
                            <br />
                            <br />
                            {/* Lorem ipsum dolor sit amet, consectetuer adipiscing elit. */}
                        </p>

                        {/* <blockquote>
                            Umai Sushi is located in San Marcos and has been catering the locals and tourists in the area. 
                            We serve the freshest ingredients and will continue doing that many years to come.

                        </blockquote> */}
                    </div>
                </div>

        <div className="desc-card-container">
          <div className="desc-card amazing-card-left">
            <img src={image5} alt="ingredients" className="desc-card-image" />

            <div className="desc-card-content">
              <div className="desc-card-title">
                <BsFillStarFill color="#c3512f" />
                <h3 className="heading-tertiary">
                  the freshest <span>ingredients</span>
                </h3>
              </div>

              <p>
                Our ingredients are all sourced locally to bring the best quality sushi to your table
              </p>
            </div>
          </div>

          <div className="desc-card desc-card-middle">
            <img src={image6} alt="tatami" className="desc-card-image" />

            <div className="desc-card-content">
              <div className="desc-card-title">
                <BsFillStarFill color="#c3512f" />
                <h3 className="heading-tertiary">
                  <span>Tatami Seating</span>
                </h3>
              </div>

              <p>
                Umai Sushi is the only restaurant in the area also offers a “Tatami” style 
                private dining rooms for the customers .
              </p>
            </div>
          </div>

          <div className="desc-card amazing-card-right">
            <img src={image7} alt="reservations" className="desc-card-image" />

            <div className="desc-card-content">
              <div className="desc-card-title">
                <BsFillStarFill color="#c3512f" />
                <h3 className="heading-tertiary">
                  <span>Reservations and Catering</span>
                </h3>
              </div>

              <p>
                We are available for reservations and/or catering
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;