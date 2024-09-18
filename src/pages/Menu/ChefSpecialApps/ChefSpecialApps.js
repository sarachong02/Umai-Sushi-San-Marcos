import React from 'react'
import './ChefSpecialApps.css'
import ListItem from "../../../components/ListItem/ListItem"

import french_kiss from '../../../assets/french_kiss.jpg'
import yellotail_carpaccio from '../../../assets/yellotail_carpaccio.jpg'
import crispy_rice from '../../../assets/crispy_rice.jpg'
import fish_tower from "../../../assets/fish_tower.jpg"

const menuData = [
    {
        title: 'French Kiss',
        description: 'Albacore nigiri with crabmeat, avocado, ponzu, spicy mayo, and sriracha (3 pcs)',
        price: '10.95',
        img: french_kiss
    },
    {
        title: 'Yellowtail Carpaccio',
        description: 'Thinly sliced yellowtail toasted in hot olive oil with chopped fresh garlic and truffle salt (6 pcs)',
        price: '15.95',
        img: yellotail_carpaccio
    },
    {
        title: 'Crispy Rice Spicy Tuna',
        description: 'Fried rice cube topped with spicy tuna, eel sauce, spicy mayo, and mango paste (4 pcs)',
        price: '11.95',
        img: crispy_rice
    },
    {
        title: 'Fish Tower',
        description: 'Crabmeat and avocado stacked with fresh sashimi seasoned with spicy sunshine sauce, topped with green onions and masago',
        price: '18.95',
        img: fish_tower
    }
]

const ChefSpecialApps = () => {
  return (
    <div>
        <div id="ChefSpecialApps" className='container chef-special-apps'>
            <h1 className='heading-secondary'>
                <span className='bold-emphasis'>Chef's Special</span> Appetizers
            </h1>
            {menuData.map((data, i) => (
            <ListItem
                title={data.title}
                description={data.description}
                price={data.price}
                itemImage={data.img}
            />
            ))}
        </div>
    </div>
  )
}

export default ChefSpecialApps