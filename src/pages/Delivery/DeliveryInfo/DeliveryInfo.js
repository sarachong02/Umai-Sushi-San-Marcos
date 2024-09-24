import React from 'react'
import { BsFillStarFill } from 'react-icons/bs'
import RatingComponent from '../../../components/Rating/Rating'
import './DeliveryInfo.css'

import uber_rating from "../../../assets/uber_rating.png"

const DeliveryInfo = () => {
  return (
    <div className='section delivery-info'>
        <div className='container'>
            <div className='grid-container'>
                <div>
                    <div className='delivery-iconbox'>
                        <BsFillStarFill color='#c3512f'/>
                        <h3 className='heading-tertiary'>
                            <a href="https://www.ubereats.com/store/umai-sushi-%26-yakitori-san-marcos/962AfYRRQaKRnJOqQ9xbTQ?diningMode=DELIVERY&sc=SEARCH_SUGGESTION"
                            target="_blank"
                            rel="noopener noreferrer">
                                Order with <span>Uber</span>
                            </a>

                        </h3>
                    </div>

                    <div className='rating-component'>
                        <RatingComponent rating={4.8} totalRatings={1000} />
                    </div>

                </div>

                <div>
                    <div className='delivery-iconbox'>
                        <BsFillStarFill color='#c3512f'/>
                        <h3 className='heading-tertiary'>
                            <a href="https://www.grubhub.com/restaurant/umai-sushi--yakitori-730-nordahl-rd-san-marcos/1418248"
                            target="_blank"
                            rel="noopener noreferrer">
                                Order with <span>Grubhub</span>
                            </a>
                            
                        </h3>
                    </div>

                    <div className='rating-component'>
                        <RatingComponent rating={4.7} totalRatings={346} />
                    </div>
                </div>

                <div>
                    <div className='delivery-iconbox'>
                        <BsFillStarFill color='#c3512f'/>
                        <h3 className='heading-tertiary'>
                            <a href="https://postmates.com/store/umai-sushi-%26-yakitori-san-marcos/962AfYRRQaKRnJOqQ9xbTQ?utm_source=AdWords_NonBrand&utm_campaign=CM2478307-search-google-nonbrand_1_12_US-Los%20Angeles_pm-e_web_acq_cpc_en_SMB_DSA_Exact__dsa-2271069672928_711468755427_170471259990__c&campaign_id=21637095306&adg_id=170471259990&fi_id=151200866336&match=&net=g&dev=c&dev_m=&ad_id=711468755427&cre=711468755427&kwid=dsa-2271069672928&kw=&placement=&tar=&gad_source=1&gclid=Cj0KCQjw3bm3BhDJARIsAKnHoVVHO6JNa4pyJGMivNOE2PMNJbm2BFfrDBIkGNnmqY3o3sPOI5NiCIAaAtPFEALw_wcB&gclsrc=aw.ds"
                            target="_blank"
                            rel="noopener noreferrer">
                                Order with <span>Postmates</span>
                            </a>
                        </h3>
                    </div>

                    <div className='rating-component'>
                        <RatingComponent rating={4.8} totalRatings={1000} />
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default DeliveryInfo