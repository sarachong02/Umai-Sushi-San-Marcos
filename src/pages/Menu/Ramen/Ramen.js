import React from 'react'
import "./Ramen.css"
import ListItem from "../../../components/ListItem/ListItem"

const menuData = [
    {
        title: "Tonkatsu",
        description: "Pork broth with bamboo shoots, bean sprouts, green onion, corn, and chasu",
        price: '13.95'
    },
    {
        title: "Miso",
        description: "Miso pork broth with bamboo shoots, bean sprouts, green onion, corn, and chasu",
        price: '14.95'
    },
    {
        title: "Black Garlic",
        description: "Black garlic broth with bamboo shoots, bean sprouts, green onion, corn, and chasu",
        price: '15.95'
    },
    {
        title: "Spicy Seafood",
        description: "Seafood broth with chili oil, bamboo shoots, bean sprouts, green onion, corn, and assorted seafood",
        price: '18.95'
    },
    {
        title: "Yakisoba",
        description: "Stir-fried ramen noodles with mixed vegetables \n Add chicken +$3, Add beef +$4, Add Shrimp +$4",
        price: '13.95'
    },
]

const Ramen = () => {
  return (
    <div>
        <div id='Ramen' className='container ramen'>
            <h1 className='heading-secondary'>
                <span className='bold-emphasis'>Ramen</span>
            </h1>
            {menuData.map((data, i) => (
            <ListItem
                title={data.title}
                description={data.description}
                price={data.price}
            />
            ))}
        </div>
    </div>
  )
}

export default Ramen