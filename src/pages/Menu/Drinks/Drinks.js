import React from 'react'
import './Drinks.css'
import ListItem from '../../../components/ListItem/ListItem'

import sapporoImage from "../../../assets/sapporo.jpg"

const menuDataLeft = [
    {
        title: 'Sapporo',
        price: '8.00'
    },
    {
        title: 'Asahi',
        price: '8.00'
    },
    {
        title: 'Kirin',
        price: '8.00'
    },
    {
        title: 'Kirin Light',
        price: '8.00'
    },
    {
        title: 'Hot Sake',
        price: 'Small: 6.00, Large: 8.00'
    },
    {
        title: 'Ramune',
        description: 'Original, Grape, Strawberry, Lychee, Melon, Orange',
        price: '5.00'
    }
]

const menuDataRight = [
    {
        title: 'Kikisui Sake',
        price: '10.00'
    },
    {
        title: 'Nigori Sake',
        price: '10.00'
    },
    {
        title: 'Peach Nigori Sake',
        price: '11.00'
    },
    {
        title: 'Flavored Soju',
        description: "Green Grape, Apple, Plum, Peach, Mango, Watermelon, Lychee",
        price: '10.00'
    },
    {
        title: 'Soft Drinks',
        description: 'Coke, Sprite, Orange soda, Dr. Pepper, Root Beer, Sparkling Water, Lemonade, Iced Tea',
        price: '2.00'
    }
]

const Drinks = () => {
  return (
    <div id="Drinks" className='container drinks'>
        <h1 className='heading-secondary'>
        <span className='bold-emphasis'>Beverages</span>
        </h1>

        <div className='grid-container'>

            <div>
                <img src={sapporoImage} alt='beer'/>
            </div>

            <div>
                {menuDataLeft.map((data,i) => (
                    <ListItem
                      title={data.title}
                      description={data.description}
                      price={data.price}
                    />
                ))}
            </div>

            <div>
                {menuDataRight.map((data,i) => (
                    <ListItem
                      title={data.title}
                      description={data.description}
                      price={data.price}
                    />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Drinks