import React from 'react';
import './ChooseMenu.css';

import sashimicombo from "../../assets/sashimi_combo_a.jpg";
import bentoImg from "../../assets/bentobox.jpg";
import tempura from "../../assets/tempura.jpg";
import fishtower from "../../assets/fish_tower.jpg";
import saladImg from "../../assets/seared_tuna_salad.jpg";
import californiaroll from "../../assets/california_roll.jpg";
import nigiri from "../../assets/aesthetic_nigiri.jpeg";
import premium from "../../assets/premium_rolls/cucumber_wrap.jpg";
import fifty from "../../assets/50%_rolls/aka.jpg";
import ramenImage from "../../assets/ramen.jpg";
import curry from '../../assets/curry.jpg';
import kids from '../../assets/chix_teriyaki.jpeg';
import green_team_ice_cream_img from "../../assets/green_tea_ice_cream.jpg";
import sapporoImage from "../../assets/sapporo.jpg";

const menu_categories = [
    { name: "Sashimi Combo", img: sashimicombo },
    { name: "Lunch Special", img: bentoImg },
    { name: "Appetizers", img: tempura },
    { name: "Chef's Special", img: fishtower },
    { name: "Salads", img: saladImg },
    { name: "Regular Rolls", img: californiaroll },
    { name: "Nigiri & Sashimi", img: nigiri },
    { name: "Premium Rolls", img: premium },
    { name: "50% Rolls", img: fifty },
    { name: "Ramen", img: ramenImage },
    { name: "Kitchen", img: curry },
    { name: "Kids", img: kids },
    { name: "Desserts", img: green_team_ice_cream_img },
    { name: "Beverages", img: sapporoImage },
  ];


const ChooseMenu = ({category, setCategory}) => {
  return (
    <div className='choose-menu' id='choose-menu'>
        <h1>Choose from our menu</h1>
        <p className='choose-menu-text'>Scroll through a diverse menu featuring all of your cravings!</p>
        <div className='choose-menu-list'>
            {menu_categories.map((item, index) => {
                return (
                    <div onClick={()=> setCategory(prev=>prev===item.name? "All":item.name)} key={index} className='choose-menu-category-item'>
                        <img className = {category===item.name?"active":""} src={item.img} alt="" /> 
                        <p>{item.name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}

export default ChooseMenu