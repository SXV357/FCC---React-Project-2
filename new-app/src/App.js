import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Card from './Card';
import Data from './Data'

export default function App(){
    const cardData = Data.map(card => {
        return <Card img = {card.img}
                     para1 = {card.para1}
                     para2 = {card.para2}
                     cost = {card.cost}
                     para3 = {card.para3}
                     openSpots = {card.openSpots}
        />
    })
    return(
        <div>
                <Navbar />
                <Hero />
                <div className = "card-container">
               {cardData}
               </div>
        </div>
    )
}