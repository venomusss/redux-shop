import React from 'react';
import {NavLink} from "react-router-dom";

function Item({key, item}) {
    return (
        <div>
            <NavLink to={`/item/${item.id}`} state={{item: item}}>
                <img style={{width: 200}} src={item.image}/>
                <div>{item.price}</div>
                <div>{item.title}</div>
            </NavLink>
        </div>
);
}

export default Item;