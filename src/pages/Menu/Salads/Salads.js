import React from 'react'
import './Salads.css'
import ListItem from "../../../components/ListItem/ListItem"

const menuDataLeft = [
    {
        title: 'House Green Salad',
        description: 'Spring mix veggies topped with house-made vinagrette',
        price: '3.95'
    },
    {
        title: 'Cucumber Salad',
        description: 'refreshing chopped cucumbers in a tangy ponzu dressing',
        price: '5.95'
    },
    {
        title: 'Seaweed Salad',
        description: 'thin kelp seasoned in a sweet sesame dressing',
        price: '5.95'
    },
    {
        title: 'Salmon Skin Salad',
        description: 'Spring mix veggies and crunchy salmon skin mixed with house dressing',
        price: '7.95'
    }
]

const menuDataRight = [
    {
        title: 'Seared Tuna Salad',
        description: 'Spring mix veggies topped with seared tuna and house dressing',
        price: '11.95'
    },
    {
        title: 'Seared Albacore',
        description: 'Spring mix veggies topped with seared albacore and house dressing',
        price: '11.95'
    },
    {
        title: 'Octopus Salad',
        description: 'chopped octopus and cucmbers in a ponzu dressing',
        price: '10.95'
    },
    {
        title: 'Tuna Poke',
        description: 'Poke bowl with tuna, cucumbers, spring mix veggies, corn, onions, with spicy mayo and ponzu',
        price: '10.95'
    }
]

const Salads = () => {
  return (
    <div id='Salads' className='container salads'>
        <h1 className='heading-secondary'>
            <span className='bold-emphasis'>Salads</span>
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

export default Salads