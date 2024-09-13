import React from 'react'
import './AboutChef.css'

const AboutChef = () => {
  return (
    <div>
        <div className='chef-img'>
            <div className='container'>
                <div className='chef-content'>
                    <h1 className='heading-primary'>
                        meet the <span>team</span>
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
                        Chris <span className='bold-emphasis'>Chong</span>
                    </h3>

                    <h4>Executive Chef and Owner</h4>

                    <p>With humble roots in learning about sushi in Chicago, Chris has spent decades 
                        in San Diego perfecting this art
                    </p>
                </div>

                <div className='grid-item chef-info'>
                    <h3 className='heading-tertiary'>
                        Enoch <span className='bold-emphasis'>Lorem</span>
                    </h3>

                    <h4>Sous Chef</h4>

                    <p> 20+ years of crafting the finest sushi</p>
                </div>

                <div className='grid-item chef-info'>
                    <h3 className='heading-tertiary'>
                        Ana <span className='bold-emphasis'>Han</span>
                    </h3>

                    <h4>Head Manager</h4>

                    <p>Delivering sushi to your table with the finest service</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default AboutChef
