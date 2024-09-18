import React from 'react'
import "./Regular.css"
import ListItem from "../../../components/ListItem/ListItem"

const menuDataLeft = [
    {
        title: 'Avocado Roll',
        description: 'avocado, rice, nori',
        price: '5.00'
    },
    {
        title: 'Classic Vegetable Roll',
        description: 'romaine, carrots, cucumbers, rice, nori',
        price: '6.00'
    },
    {
        title: 'California Roll',
        description: 'imitation crab, cucumber, nori, rice',
        price: '5.00'
    },
    {
        title: 'Cucumber Roll',
        description: 'cucumber, rice, nori',
        price: '5.00'
    },
    {
        title: 'Yellotail Onion Roll',
        description: 'yellowtail, onion, nori, rice',
        price: '6.00'
    },
    {
        title: 'Philadelphia Roll',
        description: 'salmon, cream cheese, cucumber, nori, rice',
        price: '6.00'
    },
    {
        title: 'Shrimp Tempura Roll',
        description: 'shrimp tempura, cucumber, nori, rice',
        price: '7.00'
    }
]

const menuDataRight = [
    {
        title: 'Soft Shell Crab Roll',
        description: 'soft shell crab, cucumber, nori, rice',
        price: '10.00'
    },
    {
        title: 'Spicy Tuna Roll',
        description: 'spicy tuna, cucumber, nori, rice',
        price: '6.00'
    },
    {
        title: 'Tuna Maki',
        description: 'tuna, rice, nori',
        price: '6.00'
    },
    {
        title: 'Salmon Maki',
        description: 'salmon, rice, nori',
        price: '6.00'
    },
    {
        title: 'Unagi Roll',
        description: 'unagi (eel), rice, nori',
        price: '6.00'
    },
    {
        title: 'Salmon Skin Roll',
        description: 'salmon skin, rice, nori',
        price: '5.00'
    }
]

const centerItem = {
    title: 'Salmon Skin Roll',
    description: 'salmon skin, rice, nori',
    price: '5.00'
}

const Regular = () => {
  return (
    <div id='Regular' className='container regular'>
        <h1 className='heading-secondary'>
            <span className='bold-emphasis'>Regular Rolls</span> and Handrolls
        </h1>

        <h2 className='menu-description'>
            Either 8 pc cut rolls or 1 hand roll
        </h2>

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
        
        {/* <div>
            <ListItem
                title={centerItem.title}
                description={centerItem.description}
                price={centerItem.price}
            />
        </div> */}
        
    </div>
  )
}

export default Regular