import React from 'react'
import "./ContactForm.css"

import bgImage from "../../../assets/crispy_rice.jpg"

const ContactForm = () => {
  return (
    <div className='section'>
        <div className='container grid-container contact-content'>
            <div>
                <h1 className='heading-secondary'>
                    get in <span className='bold-emphasis'>touch</span>
                </h1>

                <p>We would love to provide more information about any of our dishes, and are open to collaboration!
                </p>

                <img src={bgImage} alt='get in touch'/>

                <p>If you have any questions or business inquiries, please send us a message!</p>

                <p style={{ marginBottom: '5px', paddingBottom: '0' }}><span className='bold-emphasis'>Telephone:</span> (760) 233 - 0888</p>
                <p style={{ marginTop: '5px', paddingTop: '0' }}><span className='bold-emphasis'>Mailing Address: </span>730 Nordahl Rd, Suite 108, San Marcos, CA 92069</p>
            </div>

            <div>
                <h1 className='heading-secondary'>
                    <span className='bold-emphasis'>Mail </span> Us
                </h1>

                <form>
                    <div className='form-field name-email'>
                        <div>
                            <label>Name</label>
                            <input type='text' name='name'/>
                        </div>

                        <div>
                            <label>Email</label>
                            <input type='email' name='email' />
                        </div>
                    </div>

                    <div className='form-field'>
                        <div>
                            <label>Subject</label>
                            <input type='text' name='subject'/>
                        </div>
                    </div>

                    <div className='form-field'>
                        <div>
                            <label>Message</label>
                            <textarea type='text' name='message'/>
                        </div>
                    </div>
                </form>

                <button>Submit</button>
            </div>
        </div>

    </div>
  )
}

export default ContactForm