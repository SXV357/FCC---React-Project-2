import React from 'react';
//conditional rendering: surround div with curly braces and use dot notation with the object to access its property and see whether it exists
export default function Card(props){
    return(
        <div className = "card-component">
            {props.openSpots === 0 && <div className = "card-component-badge">SOLD OUT</div>}
            <figure className = "card-component-image">
                <img className = "card-component-main-img" src = {props.img}></img>
            </figure>
            <div className = "card-component-text">
            <p className = "card-component-para1">{props.para1}</p>
            </div>
            <div className = "card-component-text2">
            <p className = "card-component-para2">{props.para2}</p>
            </div>
            <div className = "card-component-text3">
            <p className = "card-component-para3">From <span className = "bold">{props.cost}</span> {props.para3}</p>
            </div>
        </div>
    )
}