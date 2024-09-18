import React from 'react'
import "./Kids.css"
import ListItem from '../../../components/ListItem/ListItem'

const menuDataLeft = [
    {
        title: 'Kids Chicken Teriyaki',
        description: 'Grilled chicken in a teriyaki glaze',
        price: '9.95'
    }
]
const menuDataRight = [
    {
        title: 'Kids Bulgogi',
        description: 'Short rib beef pieces in bulgogi marinade',
        price: '9.95'
    }
]

const Kids = () => {
  return (
    <div id="Kids" className='container kids'>
        <h1 className='heading-secondary'>
        <span className='bold-emphasis'>Kids</span> Menu
        </h1>

        <h2 className='menu-description'>
            All items come with white rice, edamame, house salad, and pork gyoza 
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

export default Kids