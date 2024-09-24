import React from 'react'
import './AboutInfo.css'

const AboutInfo = () => {
  return (
    <div className='section'>
        <div className = 'container grid-container'>
            <div>
                <div className='about-info-content'>
                    <h2 className='heading-secondary'>
                        <span className="accent">Sushi</span> that keeps you coming back
                    </h2>

                    <h4>We hope to see you! Again and Again!</h4>

                    <blockquote>"Umai" (うまい) refers to "food that tastes good"</blockquote>

                    <p>We strive to serve the <span className='accent'>freshest</span> ingredients in a menu that respects and highlights the <span className='accent'>qualtiy</span> of the ingredients.
                    Locals and regulars have described Umai Sushi to have "excellent food" that keeps them coming back for more!
                    </p>
                </div>
            </div>

            <div>
                <div className='about-info-content'>
                    <h2 className='heading-secondary'>
                        A brief <span className='accent'> history </span>
                    </h2>

                    <h4>Let us introduce ourselves</h4>

                    <p>
                        Established in <span className='accent'>2016</span>, Umai Sushi has been serving high quality food in San Marcos for over 8 years.
                        With many locals consistently returning since the founding of the restaurant, Umai Sushi has created a name for itself in the area, and prides itself in serving
                        with a <span className='accent'>consistent, high quality</span> of food. 

                    </p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default AboutInfo