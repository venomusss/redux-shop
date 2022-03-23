import React, {useEffect} from 'react';
import {useLocation} from "react-router-dom";
import Item from "./Item";

function CategoryList({items, getCategoryList}) {
    const location = useLocation();
    const {category} = location.state;
    useEffect(()=>{
        getCategoryList(category).then()
    }, [category]);
    return (
        <div>
            <div className='list-title'>{category}</div>
            <div>
                {items.map((item)=> (<Item key={item.id} item={item}/>))}
            </div>
        </div>
    );
}

export default CategoryList;