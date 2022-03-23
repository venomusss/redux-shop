import React, {useState} from 'react';
import {useNavigate, useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {ADD_ITEM, REMOVE_ITEM} from "../store/cartReducer";

function ItemPage(props) {
    const location = useLocation();
    const {item} = location.state;
    const [itemData] = useState(item)
    const dispatch = useDispatch();
    const items = useSelector(state => state.items.items);
    const cartChecker = items.filter(item => item.id === itemData.id).length;
    let navigate = useNavigate();

    function addItem(itemData) {
        const item = {
            id: itemData.id,
            title: itemData.title,
            price: itemData.price,
            image: itemData.image,
            description:itemData.description,
        }
        dispatch({type: ADD_ITEM, payload: item})
    }

    function removeItem(id) {
        dispatch({type: REMOVE_ITEM, payload: id});
        // navigate(`/cart`)
    }

    return (
        <div className='item-page'>
            <img src={itemData.image} className='main-image'/>
            <div className='main-text'>
                <div className='main-title'>{itemData.title}</div>
                <div className='description'>{itemData.description}</div>
                <div className='main-price'>{itemData.price} UAH</div>
                {cartChecker === 0 ?
                    <div className='button-group'>
                        <button className='add-button' onClick={() => addItem(itemData)}>ADD TO CART</button>
                    </div>
                    :
                    <div className='button-group'>
                        <div className='cart-checker'>Product is already in the cart</div>
                        <button className='delete-button' onClick={() => removeItem(itemData.id)}>Delete from cart
                        </button>
                    </div>
                }
            </div>
        </div>
    );
}

export default ItemPage;