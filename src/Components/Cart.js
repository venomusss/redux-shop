import React from 'react';
import List from "./List";
import {useSelector} from "react-redux";

function Cart({name, items}) {
    const arr = useSelector(state => state.items.items);
    let sum = 0;
    arr.map((item)=>(
        sum += item.price
    ))
    return (
        <div className='cart'>
            <List name={name} items={items}/>
            <div className='sum'>The price of products in the basket is: <span>{sum.toFixed(2)} UAH</span></div>
        </div>
    );
}

export default Cart;