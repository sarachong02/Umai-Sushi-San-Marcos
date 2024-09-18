import React from 'react'
import './Premium.css'
import ListItem from "../../../components/ListItem/ListItem"

import albacore_special from "../../../assets/premium_rolls/albacore_special.png"
import bill_gates from "../../../assets/premium_rolls/bill_gates.png"
import cucumber_wrap from "../../../assets/premium_rolls/cucumber_wrap.jpg"
import delmar_beach from "../../../assets/premium_rolls/delmar_beach.jpeg"
import dragon_king from "../../../assets/premium_rolls/dragon_king.jpeg"
import dynamite from "../../../assets/premium_rolls/dynamite.jpg"
import green_aqua from "../../../assets/premium_rolls/green_aqua.jpeg"
import hawaii_cruise from "../../../assets/premium_rolls/hawaii_cruise.png"
import jungle_fever from "../../../assets/premium_rolls/jungle_fever.png"

import lobster_roll from "../../../assets/premium_rolls/lobster_roll.jpg"
import macademia from "../../../assets/premium_rolls/macademia.jpg"
import mr_sunshine from "../../../assets/premium_rolls/mr_sunshine.png"
import pink_panda from "../../../assets/premium_rolls/pink_panda.png"
import poppin from "../../../assets/premium_rolls/popping_soft_shell.jpg"
import surf_n_turf from '../../../assets/premium_rolls/surf_n_turf.jpg'
import tangy_mango from "../../../assets/premium_rolls/tangy_mango.jpg"
import tuna_revenge from "../../../assets/premium_rolls/tuna_revenge.png"
import rainbow_spider from "../../../assets/premium_rolls/rainbow_spider.jpeg"

const menuDataLeft = [
    {
        title: 'Albacore Special',
        description: 'IN: Marinated Albacore, Avocado \n TOP: Albacore [Spicy Ponzu]',
        price: '15.95',
        img: albacore_special
    },
    {
        title: 'Bill Gates (5 pcs)',
        description: 'IN: Spicy Tuna, Salmon, White Fish, Tamago \n TOP: Wrapped with cucumber [Ponzu]',
        price: '15.95',
        img: bill_gates
    },
    {
        title: 'Cucumber Wrap',
        description: 'IN: Krab, Avocado, Tuna, Yellowtail, Salmon \n TOP: Wrapped in Cucumber [Ponzu]',
        price: '15.95',
        img: cucumber_wrap
    },
    {
        title: 'Delmar Beach',
        description: 'IN: Scallop Tempura, Krab \n TOP: Spicy Tuna, Fried Onion [Spicy Mayo, Eel Sauce]',
        price: '17.95',
        img: delmar_beach
    },
    {
        title: 'Dragon King',
        description: 'IN: Krab, Avocado \n TOP: Eel [Eel Sauce]',
        price: '19.95',
        img: dragon_king
    },
    {
        title: 'Dynamite Roll',
        description: 'IN: Krab, Avocado \n TOP: Deep-Fried Baby Lobster, Cheese [Spicy Mayo, Eel Sauce, Hot Sauce]',
        price: '17.95',
        img: dynamite
    },
    {
        title: 'Green Aqua',
        description: 'IN: Tuna, Salmon, Yellowtail, Krab \n TOP: Wrapped in soy paper, Avocado, Tobiko [Ponzu]',
        price: '16.95',
        img: green_aqua
    },
    {
        title: 'Hawaii Cruise',
        description: 'IN: Real Blue Crab, Masago, Avocado \n TOP: Ahi Tuna [Ponzu, Spicy Mayo, Eel Sauce, Hot Sauce]',
        price: '17.95',
        img: hawaii_cruise
    },
    {
        title: 'Jungle Fever',
        description: 'IN: Krab, Soft Shelled Crab, Shrimp Tempura, Asparagus \n TOP: Spicy Tuna, Avocado, Jalepeno [Eel Sauce, Spicy Mayo]',
        price: '21.95',
        img: jungle_fever
    }
]

const menuDataRight = [
    {
        title: 'Lobster Roll',
        description: 'IN: Baked Lobster, Krab, Avocado \n TOP: Soy Paper, Tobiko [Spicy Mayo, Eel Sauce]',
        price: '21.95',
        img: lobster_roll
    },
    {
        title: 'Macademia',
        description: 'IN: Macademia Nut, Krab, Avocado \n TOP: Soy Paper, Macademia Nut [Spicy Mayo, Eel Sauce]',
        price: '15.95',
        img: macademia
    },
    {
        title: 'Mr. Sunshine',
        description: 'IN: Krab, Avocado \n TOP: Seasoned Sashimi [Spicy Poke Sauce]',
        price: '17.95',
        img: mr_sunshine
    },
    {
        title: 'Pink Panda',
        description: 'IN: Spicy Tuna, Krab, Avocado \n TOP: Soy Paper, Salmon, Avocado [Spicy Mayo, Mustard Seed]',
        price: '15.95',
        img: pink_panda
    },
    {
        title: 'Poppin Soft Shell',
        description: 'IN: Shrimp Tempura, Krab \n TOP: Avocado, Panko, Fried Soft Shelled Crab [Spicy Mayo, Eel Sauce, Hot Sauce]',
        price: '18.95',
        img: poppin
    },
    {
        title: 'Rainbow Spider',
        description: 'IN: Fried Soft Shelled Crab, Krab \n TOP: Assorted Sashimi, Avocado, Tobiko [Spicy Mayo, Eel Sauce]',
        price: '19.95',
        img: rainbow_spider
    },
    {
        title: 'Surf n Turf',
        description: 'IN: Shrimp Tempura, Krab, Avocado \n TOP: Seared Beef, Masago [Special Sauce]',
        price: '15.95',
        img: surf_n_turf
    },
    {
        title: 'Tangy Mango',
        description: 'IN: Salmon, Ono, Avocado \n TOP: Mango, Whipped Cream [Ponzu]',
        price: '15.95',
        img: tangy_mango
    },
    {
        title: 'Tuna Revenge',
        description: 'IN: Spicy Tuna, Cucumber \n TOP: Blackened Tuna [Cilantro Sauce]',
        price: '15.95',
        img: tuna_revenge
    },
]

const Premium = () => {
  return (
    <div id='Premium' className='container premium'>
        <h1 className='heading-secondary'>
            <span className='bold-emphasis'>Premium</span> Rolls
        </h1>

        <div className='grid-container'>
            <div>
                {menuDataLeft.map((data,i) => (
                    <ListItem
                      title={data.title}
                      description={data.description}
                      price={data.price}
                      itemImage = {data.img}
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

export default Premium