import React, { useContext } from 'react';
import {shopContext} from '../../Context/ShopContext';

export default function Product(props) {
    const {addToCart} = useContext(shopContext);
    const { id, productName, price, productImage } = props.data;
    return (
        <div className="product">
            <img src={productImage} />
            <div className="description">
                <p>
                    <b>{productName}</b>
                </p>
                <p> ${price}</p>
            </div>
            <button className='addToCartBttn' onClick={()=>addToCart(id)}>Add to Cart</button>
            
        </div>


    )
}