import React, {useState} from 'react';
import {useLocation} from "react-router-dom";

function ItemPage(props) {
    const location = useLocation();
    const {item} = location.state;
    const[itemData] = useState(item)
    return (
        <div>{itemData.title}</div>
    );
}

export default ItemPage;