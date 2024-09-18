import React from 'react'
import './Appetizers.css'
import ListItem from "../../../components/ListItem/ListItem"

const menuDataLeft = [
    {
        title: 'Edamame',
        description: 'steamed and salted edamame beans',
        price: '3.95'
    },
    {
        title: 'Garlic Edamame',
        description: 'steamed edamame beans covered in garlic soy sauce',
        price: '6.95'
    },
    {
        title: 'Veggie Egg Rolls',
        description: 'fried veggie egg rolls (4 pcs)',
        price: '5.95'
    },
    {
        title: 'Gyoza',
        description: 'fried pork gyoza dumplings (5 pcs)',
        price: '5.95'
    },
    {
        title: 'Takoyaki',
        description: 'breaded and fried octopus balls (5 pcs)',
        price: '6.95'
    },
    {
        title: 'Karage',
        description: 'bite sized pieces of fried chicken',
        price: '8.95'
    },
    {
        title: 'Fried Cream Cheese Wraps',
        description: 'fried cream cheese wontons (5 pcs)',
        price: '6.95'
    },
    {
        title: 'Agedashi Tofu',
        description: 'deep fried tofu cubes with sweet chili sauce',
        price: '5.95'
    },
    {
        title: 'Calamari Tempura',
        description: 'fried squid with sweet chili sauce',
        price: '8.95'
    }
]

const menuDataRight = [
    {
        title: 'Shrimp and Veggie Tempura',
        description: 'a mix of fried shrimp and vegetables in tempura batter',
        price: '8.95'
    },
    {
        title: 'Veggie Tempura',
        description: 'a blend of fried veggies in tempura batter (5 pcs)',
        price: '5.95'
    },
    {
        title: 'Shrimp Tempura',
        description: 'fried shrimp in tempura batter (3 pcs)',
        price: '6.95'
    },
    {
        title: 'Jalepeno Bomb',
        description: 'deep fried stuffed jalepenos (4 pcs)',
        price: '7.95'
    },
    {
        title: 'Fried Scallops',
        description: 'breaded and deep fried scallops (3 pcs)',
        price: '6.95'
    },
    {
        title: 'Shisito Peppers',
        description: 'garlic seasoned steamed shisito peppers',
        price: '7.95'
    },
    {
        title: 'Soft Shelled Crab',
        description: 'deep fried soft-shelled crabs',
        price: '9.95'
    },
    {
        title: 'Mushroom Special',
        description: 'Fried whole mushrooms topped with spicy crab, eel sauce, spicy mayo',
        price: '6.95'
    },
    {
        title: 'Hamachi Kama',
        description: 'Broiled yellowtail whole collarbone',
        price: '10.95'
    }
]

const Appetizers = () => {
  return (
    <div id="Appetizers" className='container appetizers'>
        <h1 className='heading-secondary'>
        <span className='bold-emphasis'>Appet</span>izers
        </h1>

        <div className='grid-container'>
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

export default Appetizers