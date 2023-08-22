import React from 'react';
import {Link} from 'react-router-dom';
import {ShoppingCart} from 'phosphor-react';
import {HStack, VStack} from '@chakra-ui/react';
import './Navbar.css';
export default function Navbar(){
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
                    <ShoppingCart size={32}/>
                </Link>
                </HStack>
            </div>
        </div>
    )
}