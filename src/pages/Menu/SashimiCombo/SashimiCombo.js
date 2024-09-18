import React from 'react';
import ListItem from '../../../components/ListItem/ListItem';
import './SashimiCombo.css'

import sashimi_comobo_a from "../../../assets/sashimi_combo_a.jpg"
import sashimi_combo_b from "../../../assets/sashimi_combo_b.jpg"
import sashimi_combo_c from "../../../assets/sashimi_combo_c.jpg"
import sashimi_combo_d from "../../../assets/sashimi_combo_a.png"

const menuData = [
    {
        title: 'Sashimi Combo A',
        description: 'Three slices each of salmon, tuna, and yellowtail',
        price: '21.95',
        img: sashimi_comobo_a,
    },
    {
        title: 'Sashimi Combo B',
        description: 'Three slices each of salmon, tuna, yellowtail, and a fish of choice',
        price: '31.95',
        img: sashimi_combo_b
    },
    {
        title: 'Sashimi Combo C',
        description: 'Three slices each of salmon, tuna, yellowtail, and 2 fish of choice',
        price: '41.95',
        img: sashimi_combo_c
    },
    {
        title: 'Sashimi Combo D',
        description: 'Three slices each of salmon, tuna, yellowtail, and 3 fish of choice',
        price: '51.95',
        img: sashimi_combo_d
    },
];

const SashimiCombo = () => {
  return (
    <div id='SashimiCombo' className='container sashimi-combo'>
        <h1 className='heading-secondary'>
            <span className='bold-emphasis'>Sashimi</span> combos
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
  )
}

export default SashimiCombo