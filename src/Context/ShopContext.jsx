import { PRODUCTS } from "../Products";
import React, {createContext, useState} from 'react';
export const shopContext = React.createContext(null);
//this function will update the default value of the quantity  for eact item in the cart
const getDefaultCartValues = ()=>{
    const cart = {};
    for(let i = 1; i<PRODUCTS.length +1; i++){
        cart[i]=0;
    }
    return cart;
}
export default function ShopContext(props){
    const[cartItems, setCartItems] = useState(getDefaultCartValues());
    const addToCart =(itemId)=>{
        setCartItems((prev)=>({...prev, [itemId]:prev[itemId]+1}));
    };
    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev, [itemId]: prev[itemId]-1}))
    }
    const contextValues = {cartItems, addToCart, removeFromCart} /*object that keeps 
    the collection of all the context states that we want to us in our different 
    components
    */
   
    return(
        <shopContext.Provider value={contextValues}>{props.children}</shopContext.Provider>
    )
}