import React from 'react';
import Item from "./Item";

function List({items, name}) {
    return (
        <div>
            <div className='list-title'>{name}</div>
            <div className='list'>
                {items.map((item)=> (<Item key={item.id} item={item}/>))}
            </div>
        </div>
    );
}

export default List;