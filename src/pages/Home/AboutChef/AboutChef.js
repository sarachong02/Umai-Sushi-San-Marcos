import React from 'react'
import './AboutChef.css'

import bgImage from "../../../assets/owners.png"

const AboutChef = () => {
  return (
    <div>
        <div className='chef-img'>
            <div className='container'>
                <div className='chef-content'>
                    <h1 className='heading-primary'>
                        meet the <span>owners</span>
                    </h1>

                    <p className='text-white'>
                        Serving the finest sushi for over 20 years, crafted and delivered to perfection
                    </p>
                </div>
            </div>
        </div>

        {/* chef info */}

        <div className='container'>
            <div className='grid-container py-md'>
                <div className='grid-item chef-info'>
                    <h3 className='heading-tertiary'>
                        <span className='bold-emphasis'>Chris</span> and <span className='bold-emphasis'>Ana</span>
                    </h3>

                    <h4>the owners</h4>

                    <p> Chris, the executive chef, studied and worked at various sushi restaurants in Chicago and New York,
                        learning the skills of a master sushi chef, while also studying the restaurant business. After marrying
                        Ana, the two proceeded to start their own sushi restaurant from humble beginnings, first in Convoy,
                        then a buffet in Escondido, and now <span className='bold-emphasis'>Umai Sushi </span>in San Marcos. 
                    </p>

                    <p>The couple has been in the restaurant business for over 20 years, and there have been many ups and downs
                        including the 2008 Repression and even most recently, COVID-19. However, they have proceeded to push 
                        through — and continue today — to accomplish their goal to consistently serve the local community 
                        <span className='bold-emphasis'> high quality</span> Japanese cuisine.
                    </p>
                </div>

                <div>
                    <img src={bgImage} alt='owners' className='owners-img'/>
                </div>
            </div>
        </div>

    </div>
  )
}

export default AboutChef
