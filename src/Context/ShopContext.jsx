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
    const getTotalAmount =()=>{
        let totalPrice = 0;
        for(let item in cartItems){
            //it will filter the product from the product list which has id equal to 
            //the id in the cartItems
            let itemInfo = PRODUCTS.find((product)=>product.id===Number(item));
            totalPrice+= itemInfo.price*cartItems[item];
        }
        return totalPrice;
    }
    const addToCart =(itemId)=>{
        setCartItems((prev)=>({...prev, [itemId]:prev[itemId]+1}));
    };
    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev, [itemId]: prev[itemId]-1}))
    }
    const updateCartItem=(itemId, itemQuantity)=>{
        setCartItems((prev)=>({...prev, [itemId]: itemQuantity}))
    }
    const checkout=()=>{
        setCartItems(getDefaultCartValues());
    }
    const contextValues = {cartItems, addToCart, removeFromCart, updateCartItem, getTotalAmount, checkout} /*object that keeps 
    the collection of all the context states that we want to us in our different 
    components
    */
   
    return(
        <shopContext.Provider value={contextValues}>{props.children}</shopContext.Provider>
    )
}