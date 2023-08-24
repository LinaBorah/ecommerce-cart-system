import React, { useContext } from 'react';
import {shopContext} from '../../Context/ShopContext';

export default function CartItem(props) {
    const { id, productName, price, productImage } = props.data;
    const {cartItems, addToCart, removeFromCart, updateCartItem} = useContext(shopContext);
    return (
        <div className="cartItem">
            <img src={productImage}></img>
            <div className="description">
                <p>
                    <b>{productName}</b>
                </p>
                <p> Price: ${price}</p>
                <div className="countHandler">
                    <button onClick={()=>removeFromCart(id)}>-</button>
                    <input value={cartItems[id]} onChange={(e)=>updateCartItem(id, Number(e.target.value))}/>
                    <button onClick={()=>addToCart(id)}>+</button>
                </div>

            </div>
        </div>
    )
}