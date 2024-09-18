import React from 'react'
import './nigirisashimi.css'
import ListItem from "../../../components/ListItem/ListItem"

const menuDataLeft = [
    {
        title: 'Albacore',
        description: 'shiro maguro',
        price: '5.95 / 15.95'
    },
    {
        title: 'Capelin Roe',
        description: 'masago',
        price: '5.95 / no sashimi'
    },
    {
        title: 'Eel',
        description: 'unagi',
        price: '5.95 / 15.95'
    },
    {
        title: 'Escolar',
        description: 'ono',
        price: '5.95 / 15.95'
    },
    {
        title: 'Flying Fish Roe',
        description: 'tobiko',
        price: '5.95 / no sashimi'
    },
    {
        title: 'Mackeral',
        description: 'shimi saba',
        price: '5.95 / 15.95'
    },
    {
        title: 'Octopus',
        description: 'tako',
        price: '5.95 / 15.95'
    },
    {
        title: 'Salmon',
        description: 'sake',
        price: '5.95 / 15.95'
    },
    {
        title: 'Salmon Roe',
        description: 'ikura',
        price: '6.95 / no sashimi'
    }
]

const menuDataRight = [
    {
        title: 'Scallop',
        description: 'hotate',
        price: '6.95 / 15.95'
    },
    {
        title: 'Shrimp',
        description: 'ebi',
        price: '5.95 / 15.95'
    },
    {
        title: 'Squid',
        description: 'ika',
        price: '5.95 / 15.95'
    },
    {
        title: 'Surf Clam',
        description: 'hokigaki',
        price: '5.95 / 15.95'
    },
    {
        title: 'Sweet Egg',
        description: 'tamago',
        price: '4.50 / no sashimi'
    },
    {
        title: 'Sweet Tofu',
        description: 'inari',
        price: '4.50 / no sashimi'
    },
    {
        title: 'Tuna',
        description: 'maguro',
        price: '5.95 / 15.95'
    },
    {
        title: 'Yellowtail',
        description: 'hamachi',
        price: '5.95 / 15.95'
    },
    {
        title: 'Seared Tuna',
        description: 'maguro tataki',
        price: '6.95 / 15.95'
    }
]

const nigirisashimi = () => {
  return (
    <div id="NigiriSashimi" className='container nigiri-sashimi'>
        <h1 className='heading-secondary'>
            <span className='bold-emphasis'>Nigiri</span>, Sashimi
        </h1>

        <h2 className='menu-description'>
            <span className='specific'>Nigiri</span> is 2 pieces per order (first price) // 
            <span className='specific'> Sashimi</span> is 5 pieces per order (second price)
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
    </div>
  )
}

export default nigirisashimi