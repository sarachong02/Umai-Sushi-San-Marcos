import React from 'react'
import "./Desserts.css"
import ListItem from '../../../components/ListItem/ListItem'

import green_team_ice_cream_img from "../../../assets/green_tea_ice_cream.jpg"

const menuData = [
    {
        title: "Mochi Ice Cream",
        description: "2 pieces (Strawberry, Mango, Green Tea)",
        price: '3.95'
    },
    {
        title: "Green Tea Ice Cream",
        description: "Large scoop of green tea ice cream",
        price: '3.95'
    },
    {
        title: "Fried Banana Ice Cream",
        description: "1 scoop of green tea ice cream with fried banana slices",
        price: '8.95'
    },
    {
        title: "Ice Cream Cup",
        description: "Thai Tea, Strawberry, Vanilla, Chocolate, Cookies n' Cream, Green Tea, Black Sesame, Purple Yam, Mango, Mint Chocolate",
        price: '2.00'
    }
]

const Desserts = () => {
  return (
    <div>
        <div id="Desserts" className='container desserts'>
            <h1 className='heading-secondary'>
                <span className='bold-emphasis'>Desserts</span>
            </h1>
            <div className = 'grid-container'>

                <div>
                {menuData.map((data, i) => (
                <ListItem
                    title={data.title}
                    description={data.description}
                    price={data.price}
                />
                ))}
                </div>

                <div>
                    <img src={green_team_ice_cream_img} alt='icecream'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Desserts