import React from 'react';
import {NavLink} from "react-router-dom";

function Item({key, item}) {
    return (
            <NavLink className='item' to={`/item/${item.id}`} state={{item: item}}>
                <div className='image-container'>
                    <img className='item-image' src={item.image}/>
                </div>
                <div className='item-text'>
                    <div className='item-price'>{item.price} UAH</div>
                    <div className='item-title'>{item.title}</div>
                </div>
            </NavLink>
);
}

export default Item;