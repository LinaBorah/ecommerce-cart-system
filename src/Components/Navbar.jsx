import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import {ShoppingCart} from 'phosphor-react';
import {HStack, VStack} from '@chakra-ui/react';
import './Navbar.css';
import {shopContext} from '../Context/ShopContext'
export default function Navbar(){
    // to show total number of items on the cart
    const {cartItems} = useContext(shopContext);
    let totalItems = 0;
    for(let item in cartItems){
        totalItems+=cartItems[item];
    }
    console.log(`length of cartItems object is ${cartItems.length}`);
    return(
        <div className='navbar'>
            <div className='links'>
                <HStack
                spacing={4}
                backgroundColor={'#1B023E'}
                color={'white'}
                height={'45px'}
                alignItems={'center'}
                justifyContent={'flex-end'}
                padding={'30px'}
                fontWeight={'medium'}
                fontSize={'lg'}
                fontFamily={'heading'}>
                <Link to='/'>Shop</Link>
                <Link to='/cart'>
                    <span><ShoppingCart size={32} />{totalItems>0 && <>({totalItems})</>}</span>
                    
                </Link>
                </HStack>
            </div>
        </div>
    )
}