import React from 'react'
import HeroImage from '../../components/HeroImage/HeroImage'
import bgImage from '../../assets/sushi_platter_w_cucumber.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import "./Menu.css"
import SashimiCombo from './SashimiCombo/SashimiCombo'
import Lunch from "./Lunch/Lunch"
import Appetizers from './Appetizers/Appetizers'
import ChefSpecialApps from './ChefSpecialApps/ChefSpecialApps'
import Salads from "./Salads/Salads"
import Regular from "./Regular/Regular"
import NigiriSashimi from "./NigiriSashimi/nigirisashimi"
import Premium from "./Premium/Premium"
import HalfRolls from "./50%Rolls/50%Rolls"
import Ramen from "./Ramen/Ramen"
import Kitchen from "./Kitchen/Kitchen"
import Kids from "./Kids/Kids"
import Desserts from "./Desserts/Desserts"
import Drinks from "./Drinks/Drinks"


const Menu = () => {
  return (
    <div>
      <HeroImage 
        bgImage = {bgImage}
        heading={["Our ", <span className='special-word'>Menu</span>]}
        text="Take a look at our diverse menu"
      />

      <div className='menu-buttons'>
        <AnchorLink href="#SashimiCombo">
          <button>Sashimi Combo</button>
        </AnchorLink>

        <AnchorLink href='#Lunch'>
          <button>Lunch Special</button>
        </AnchorLink>

        <AnchorLink href="#Appetizers">
          <button>Appetizers</button>
        </AnchorLink>

        <AnchorLink href="#ChefSpecialApps">
          <button>Chef's Special</button>
        </AnchorLink>

        <AnchorLink href="#Salads">
          <button >Salads</button>
        </AnchorLink>

        <AnchorLink href="#Regular">
          <button >Regular Rolls</button>
        </AnchorLink>

        <AnchorLink href="#NigiriSashimi">
          <button >Nigiri & Sashimi</button>
        </AnchorLink>

        <AnchorLink href="#Premium">
          <button >Premium Rolls</button>
        </AnchorLink>

        <AnchorLink href="#HalfRolls">
          <button >50% Off Rolls</button>
        </AnchorLink>

        <AnchorLink href="#Ramen">
          <button >Ramen</button>
        </AnchorLink>

        <AnchorLink href="#Kitchen">
          <button >Kitchen</button>
        </AnchorLink>

        <AnchorLink href="#Kids">
          <button >Kids Menu</button>
        </AnchorLink>

        <AnchorLink href="#Desserts">
          <button >Desserts</button>
        </AnchorLink>

        <AnchorLink href="#Drinks">
          <button >Beverages</button>
        </AnchorLink>
      </div>

      <SashimiCombo />
      <Lunch Special />
      <Appetizers />
      <ChefSpecialApps />
      <Salads />
      <Regular />
      <NigiriSashimi />
      <Premium />
      <HalfRolls />
      <Ramen />
      <Kitchen />
      <Kids />
      <Desserts />
      <Drinks />
    </div>
  )
}

export default Menu