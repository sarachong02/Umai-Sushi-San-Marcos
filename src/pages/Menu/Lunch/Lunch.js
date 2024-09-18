import React from 'react'
import './Lunch.css'
import ListItem from '../../../components/ListItem/ListItem'

const menuDataLeft = [
    {
        title:"Sushi Lunch",
        description: "7 pieces nigiri sushi and choice of California or Spicy Tuna roll",
        price: '20.95'
    },
    {
        title:"Temaki Combo Lunch",
        description: "Choose any 3 hand rolls",
        price: '16.95'
    },
    {
        title:"Roll Combo",
        description: "4 pcs Spicy Tuna Roll, 4 pcs California Roll, choice of Crunch Roll or Shrimp Tempura Roll",
        price: '16.95'
    },
    {
        title:"Poke Bowl Lunch",
        description: "Assorted sashimi, Seaweed Salad, Avocado, Cucumber, Onions, Masago, Sesame Seed",
        price: '18.95'
    }
]

const menuDataRight = [
    {
        title: "Spicy Chicken Bento Lunch",
        description: 'Spicy grilled chicken, house salad, shrimp and vegetable tempura, rice, and 4 pc California roll',
        price: '14.95'
    },
    {
        title: "Chicken Teriyaki Bento Lunch",
        description: 'Teriyaki Chicken, house salad, shrimp and vegetable tempura, rice, and 4 pc California roll',
        price: '14.95'
    },
    {
        title: "Bulgogi Bento Lunch",
        description: 'Bulgogi, house salad, shrimp and vegetable tempura, rice, and 4 pc California roll',
        price: '16.95'
    },
    {
        title: "Salmon Teriyaki Bento Lunch",
        description: 'Grilled Salmon Teriyaki, house salad, shrimp and vegetable tempura, rice, and 4 pc California roll',
        price: '17.95'
    },
]

const Lunch = () => {
  return (
    <div id='Lunch' className='container lunch'>
        <h1 className='heading-secondary'>
            <span className='bold-emphasis'>Lunch</span> Special
        </h1>

        <h2 className='menu-description'>
            Tuesday - Friday 11:30am - 3:00pm only
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

export default Lunch