import React from 'react'
import "./Kitchen.css"
import ListItem from '../../../components/ListItem/ListItem'

import chix_teriyaki from "../../../assets/chix_teriyaki.jpeg"
import beef_teriyaki from "../../../assets/beef_teriyaki.jpg"
import bulgogi from "../../../assets/bulgogi.jpg"
import salmon from "../../../assets/salmon_teriyaki.jpg"
import katsu from "../../../assets/katsu.jpg"
import kalbi from "../../../assets/kalbi.jpeg"

import curry from "../../../assets/curry.jpg"
import unagi_donburi from "../../../assets/unagi_donburi.jpg"
import bibimbap from "../../../assets/bibimbap.jpg"
import soondubu from "../../../assets/soondubu.jpg"
import fried_rice from "../../../assets/fried_rice.jpg"

const menuDataLeft = [
    {
        title: 'Chicken Teriyaki',
        description: 'Grilled chicken in a teriyaki glaze, white rice, steamed vegetables',
        price: '14.95',
        img:chix_teriyaki
    },
    {
        title: 'Beef Steak Teriyaki',
        description: 'Grilled steak in a teriyaki glaze, white rice, steamed vegetables',
        price: '18.95',
        img: beef_teriyaki
    },
    {
        title: 'Bulgogi Teriyaki',
        description: 'Ribeye in a sweet bulgogi glaze, white rice, steamed vegetables',
        price: '16.95',
        img: bulgogi
    },
    {
        title: 'Salmon Teriyaki',
        description: 'Grilled salmon in a teriyaki glaze, white rice, steamed vegetables',
        price: '17.95',
        img: salmon
    },
    {
        title: 'Chicken/Pork Katsu',
        description: 'Breaded and Deep Fried Cutlet (Chicken or Pork) with rice',
        price: '15.95',
        img: katsu
    },
    {
        title: 'Kalbi',
        description: 'Marinated beef short rib, rice, steamed vegetables',
        price: '19.95',
        img: kalbi
    }
]

const menuDataRight = [
    {
        title: 'Curry',
        description: 'Japanese curry with vegetables \n Add chicken +$3, Add beef + $4',
        price: '11.95',
        img: curry
    },
    {
        title: 'Unagi Donburi',
        description: 'Steamed white rice, topped with eel in a Japanese BBQ glaze',
        price: '19.95',
        img: unagi_donburi
    },
    {
        title: 'Hot Stone Bibimbap',
        description: 'Hot stone bowl with white rice, cooked veggies, egg, and gochujang sauce',
        price: '16.95',
        img: bibimbap
    },
    {
        title: 'Spicy Soft Tofu Stew',
        description: 'Soft tofu in a spicy anchovy broth, served with white rice and egg',
        price: '14.95',
        img: soondubu
    },
    {
        title: 'Fried Rice',
        description: 'Add chicken +$3, Add Beef +$4, Add Shrimp +$4',
        price: '14.95',
        img: fried_rice
    }
]

const Kitchen = () => {
  return (
    <div id="Kitchen" className='container kitchen'>
        <h1 className='heading-secondary'>
        <span className='bold-emphasis'>Kitchen</span> Items
        </h1>

        <h2 className='menu-description'>
            All items come with a side of either <span className='specific'>Miso Soup</span> or 
            <span className='specific'> House Salad</span>
        </h2>

        <div className='grid-container'>
            <div>
                {menuDataLeft.map((data,i) => (
                    <ListItem
                      title={data.title}
                      description={data.description}
                      price={data.price}
                      itemImage={data.img}
                    />
                ))}
            </div>

            <div>
                {menuDataRight.map((data,i) => (
                    <ListItem
                      title={data.title}
                      description={data.description}
                      price={data.price}
                      itemImage={data.img}
                    />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Kitchen