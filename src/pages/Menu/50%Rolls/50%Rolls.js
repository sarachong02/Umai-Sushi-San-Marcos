import React from 'react'
import './50%Rolls.css'
import DiscountListItem from "../../../components/50%ListItem/50%ListItem"

import aka from "../../../assets/50%_rolls/aka.jpg"
import albacoreattack from "../../../assets/50%_rolls/albacore_attack.png"
import bakedsalmon from "../../../assets/50%_rolls/baked_salmon.jpeg"
import beachbrake from "../../../assets/50%_rolls/beach_brake.png"
import blackedge from "../../../assets/50%_rolls/blackedge.jpg"
import blackjack from "../../../assets/50%_rolls/blackjack.jpg"
import caterpillar from "../../../assets/50%_rolls/caterpillar.jpg"
import crunch from "../../../assets/50%_rolls/crunch.jpg"
import dragon from "../../../assets/50%_rolls/dragon.jpg"
import firehouse from "../../../assets/50%_rolls/firehouse.jpg"
import girlsnight from "../../../assets/50%_rolls/girls_night.png"
import golden from "../../../assets/50%_rolls/golden.jpg"
import goldenmountain from "../../../assets/50%_rolls/golden_mountain.jpg"
import hawaiian from "../../../assets/50%_rolls/hawaiian.png"
import hotnight from "../../../assets/50%_rolls/hot_night.jpg"
import kelly from "../../../assets/50%_rolls/kelly.jpg"
    
import lemon from "../../../assets/50%_rolls/lemon.jpg"
import midori from "../../../assets/50%_rolls/midori.jpg"
import ninja from "../../../assets/50%_rolls/ninja.jpg"
import panda from "../../../assets/50%_rolls/panda.jpg"
import pinku from "../../../assets/50%_rolls/pinku.jpg"
import rainbow from "../../../assets/50%_rolls/rainbow.jpg"
import recon from "../../../assets/50%_rolls/recon.jpg"
import redbull from "../../../assets/50%_rolls/red_bull.jpeg"
import reddragon from "../../../assets/50%_rolls/red_dragon.jpg"
import scallopdynamite from "../../../assets/50%_rolls/baked_scallop.jpg"
import snowball from "../../../assets/50%_rolls/snowball.jpg"
import snowwhite from "../../../assets/50%_rolls/snow_white.jpg"
import spicycilantro from "../../../assets/50%_rolls/spicy_cilantro.png"
import spicyrainbow from "../../../assets/50%_rolls/spicy_rainbow.jpg"
import supercrunch from "../../../assets/50%_rolls/super_crunch.png"
import sushiburrito from "../../../assets/50%_rolls/sushi_burrito.jpeg"
import tiger from "../../../assets/50%_rolls/tiger.jpeg"
import whitehouse from "../../../assets/50%_rolls/white_house.jpg"
import windy from "../../../assets/50%_rolls/windy.jpg"

const menuDataLeft = [
    {
        title: "Aka",
        description: "IN: Krab, Avocado \n OUT: Tuna [Special Sauce",
        price: "23.00",
        discount_price: "11.50",
        img: aka
    },
    {
        title: "Albacore Attack",
        description: "IN: Krab, Avocado \n OUT: Albacore, Cilantro, Jalepeno [Spicy Ponzu]",
        price: "25.00",
        discount_price: "12.50",
        img: albacoreattack
    },
    {
        title: "Baked Salmon",
        description: "IN: Krab, Avocado \n OUT: Baked Salmon [Baked Sauce]",
        price: "25.00",
        discount_price: "12.50",
        img: bakedsalmon
    },
    {
        title: "Beach Brake",
        description: "IN: Krab, Avocado, Shrimp Tempura \n OUT: Wrapped in Pickled Radish [Spicy Mayo]",
        price: "25.00",
        discount_price: "12.50",
        img: beachbrake
    },
    {
        title: "Blackedge",
        description: "IN: Shrimp Tempura, Krab, Avocado \n OUT: Blackened Tuna, Avocado [Spicy Mayo, Eel Sauce]",
        price: "25.00",
        discount_price: "12.50",
        img: blackedge
    },
    {
        title: "Blackjack",
        description: "IN: Krab, Fried Asparagus \n OUT: Soft Shelled Crab, Krab [Spicy Mayo, Eel Sauce]",
        price: "29.00",
        discount_price: "14.50",
        img: blackjack
    },
    {
        title: "Caterpillar",
        description: "IN: Krab, Avocado \n OUT: Albacore, Cilantro, Jalepeno [Spicy Ponzu]",
        price: "25.00",
        discount_price: "12.50",
        img: caterpillar
    },
    {
        title: "Crunch Roll",
        description: "IN: Shrimp Tempura, Krab, Avocado \n OUT: Tempura [Eel Sauce]",
        price: "21.00",
        discount_price: "10.50",
        img: crunch
    },
    {
        title: "Dragon Roll",
        description: "IN: Shrimp Tempura, Krab, Avocado \n OUT: Eel, Avocado [Eel Sauce]",
        price: "25.00",
        discount_price: "12.50",
        img: dragon
    },
    {
        title: "Firehouse",
        description: "IN: Spicy Tuna, Cucumber \n OUT: Avocado [Spicy Ponzu, Sriracha]",
        price: "25.00",
        discount_price: "12.50",
        img: firehouse
    },
    {
        title: "Girls Night",
        description: "IN: Spicy Tuna, Cucumber \n OUT: Salmon, Yellowtail [Spicy Ponzu]",
        price: "25.00",
        discount_price: "12.50",
        img: girlsnight
    },
    {
        title: "Golden Roll",
        description: "IN: Krab, Avocado \n OUT: Salmon [Special Sauce]",
        price: "23.00",
        discount_price: "11.50",
        img: golden
    },
    {
        title: "Golden Mountain",
        description: "IN: Krab, Cream Cheese, Avocado, Jalepeno \n OUT: Deep Fried [Spicy Mayo, Eel Sauce]",
        price: "25.00",
        discount_price: "12.50",
        img: goldenmountain
    },
    {
        title: "Hawaiian",
        description: "IN: Shrimp Tempura, Krab, Avocado \n OUT: Spicy Tuna, Tempura Crunch [Spicy Mayo, Eel Sauce]",
        price: "25.00",
        discount_price: "12.50",
        img: hawaiian
    },
    {
        title: "Hot Night",
        description: "IN: Spicy Tuna, Cucumber \n OUT: Tuna, Salmon [Special Spicy Sauce]",
        price: "25.00",
        discount_price: "12.50",
        img: hotnight
    },
    {
        title: "Kelly",
        description: "IN: Krab, Cilantro, Avocado \n OUT: Yellowtail, Avocado [Ponzu]",
        price: "25.00",
        discount_price: "12.50",
        img: kelly
    },
    {
        title: "Lemon",
        description: "IN: Krab, Avocado \n OUT: Yellowtail, Salmon, Avocado, Lemons [Ponzu]",
        price: "25.00",
        discount_price: "12.50",
        img: lemon
    },
    {
        title: "Midori",
        description: "IN: Spicy Krab, Cucumber \n OUT: Salmon, Lime, Cilantro [Spicy Ponzu]",
        price: "25.00",
        discount_price: "12.50",
        img: midori
    }
]
const menuDataRight = [
    {
        title: "Ninja",
        description: "IN: Spicy Tuna, Krab, Cucumber \n OUT: Spicy Scallop [Eel Sauce, Spicy Mayo]",
        price: "25.00",
        discount_price: "12.50",
        img: ninja
    },
    {
        title: "Panda",
        description: "IN: Calamri Tempura, Fried Asparagus, Krab \n OUT: Blackened Tuna, Avocado [Spicy Mayo, Eel Sauce]",
        price: "25.00",
        discount_price: "12.50",
        img: panda
    },
    {
        title: "Pinku",
        description: "IN: Krab, Avocado \n OUT: Yellowtail, Avocado, Jalepeno [Spicy Ponzu]",
        price: "25.00",
        discount_price: "12.50",
        img: pinku
    },
    {
        title: "Rainbow",
        description: "IN: Krab, Avocado \n OUT: Assorted Fish, Avocado [Ponzu]",
        price: "25.00",
        discount_price: "12.50",
        img: rainbow
    },
    {
        title: "Recon",
        description: "IN: Shrimp Tempura, Krab, Avocado \n OUT: Blackened Tuna, Seared Albacore, Shrimp, Avocado [Spicy Mayo, Eel Sauce]",
        price: "25.00",
        discount_price: "12.50",
        img: recon
    },
    {
        title: "Red Bull",
        description: "IN: Spicy Tuna, Cucumber \n OUT: Tuna, Jalepeno [Special Spicy Sauce]",
        price: "25.00",
        discount_price: "12.50",
        img: redbull
    },
    {
        title: "Red Dragon",
        description: "IN: Spicy Tuna, Cucumber \n OUT: Tuna [Spicy Mayo]",
        price: "25.00",
        discount_price: "12.50",
        img: reddragon
    },
    {
        title: "Scallop Dynamite",
        description: "IN: Krab, Avocado \n OUT: Spicy Scallop [Bake Sauce, Eel Sauce]",
        price: "27.00",
        discount_price: "13.50",
        img: scallopdynamite
    },
    {
        title: "Snowball",
        description: "IN: Krab, Avocado, Jalepeno, Cream Cheese \n OUT: Deep Fried [Spicy Mayo, Eel Sauce]",
        price: "25.00",
        discount_price: "12.50",
        img: snowball
    },
    {
        title: "Snow White",
        description: "IN: Krab, Avocado \n OUT: Torched Ono [Mustard Seed Dressing]",
        price: "25.00",
        discount_price: "12.50",
        img: snowwhite
    },
    {
        title: "Spicy Cilantro",
        description: "IN: Shrimp Tempura, Krab, Avocado \n OUT: Spicy Krab, Cilantro [Spicy Mayo]",
        price: "25.00",
        discount_price: "12.50",
        img: spicycilantro
    },
    {
        title: "Spicy Rainbow",
        description: "IN: Spicy Tuna, Cucumber \n OUT: Assorted Fish, Avocado [Spicy Ponzu]",
        price: "27.00",
        discount_price: "13.50",
        img: spicyrainbow
    },
    {
        title: "Super Crunch",
        description: "IN: Shrimp Tempura, Krab, Avocado \n OUT: Torched Salmon, Tempura Crunch [Eel Sauce]",
        price: "27.00",
        discount_price: "13.50",
        img: supercrunch
    },
    {
        title: "Sushi Burrito",
        description: "IN: Rice, Krab, Avocado, 3 Fish \n OUT: Soy Paper [Spicy Mayo, Eel Sauce]",
        price: "25.00",
        discount_price: "12.50",
        img: sushiburrito
    },
    {
        title: "Tiger",
        description: "IN: Shrimp Tempura, Avocado, Krab \n OUT: Tamago, Shrimp, Avocado [Spicy Mayo]",
        price: "25.00",
        discount_price: "12.50",
        img: tiger
    },
    {
        title: "White House",
        description: "IN: Spicy Tuna, Cucumber \n OUT: Torched Ono [Spicy Mayo, Eel Sauce]",
        price: "25.00",
        discount_price: "12.50",
        img: whitehouse
    },
    {
        title: "Windy",
        description: "IN: Spicy Tuna, Cucumber \n OUT: Albacore, Toasted Garlic [Spicy Ponzu]",
        price: "25.00",
        discount_price: "12.50",
        img: windy
    }
]

const HalfRolls = () => {
  return (
    <div id="SashimiCombo" className='container halfrolls'>
        <h1 className='heading-secondary'>
        <span className='bold-emphasis'>50% Off </span> Rolls
        </h1>

        <div className='grid-container'>
            <div>
                {menuDataLeft.map((data,i) => (
                    <DiscountListItem
                      title={data.title}
                      description={data.description}
                      price={data.price}
                      discount_price={data.discount_price}
                      itemImage={data.img}
                    />
                ))}
            </div>

            <div>
                {menuDataRight.map((data,i) => (
                    <DiscountListItem
                      title={data.title}
                      description={data.description}
                      price={data.price}
                      discount_price={data.discount_price}
                      itemImage={data.img}
                    />
                ))}
            </div>
        </div>
    </div>
  )
}

export default HalfRolls