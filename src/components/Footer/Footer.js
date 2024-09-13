import React from 'react';
import './Footer.css';

import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='section footer'>
      <div className='container'>
        <div className='grid-container'>
          <div className='footer-grid-item'>
            <h1>Hours: </h1>
            <h4 className='text-white'>Monday: Closed</h4>
            <h4 className='text-white'>Tuesday ~ Thursday : 11:30 am ~ 9 pm</h4>
            <h4 className='text-white'>Friday ~ Sat. : 11:30 am ~ 9:30 pm</h4>
            <h4 className='text-white'>Sunday : 11:30 am ~ 9 pm</h4>
          </div>

          <div className='footer-grid-item'>
            <div className="column-container">
              <div className='footer-column'>
                <h1>Location:</h1>
                <Link to="https://www.google.com/maps/place/Umai+Sushi/@32.8323461,-117.3981316,10z/data=!4m6!3m5!1s0x80dbf4d0d90271f1:0x5d4fb2ed557b557a!8m2!3d33.1338099!4d-117.1196108!16s%2Fg%2F1tf31pj8?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D" 
                className='text-white'>
                  730 Nordahl Rd, Suite 108, San Marcos, CA 92069
                </Link>
              </div>

              <div className='footer-column'>
                <h1>Contact Us:</h1>
                <h4 className='text-white'>
                  tel: (760) 233-0888
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
