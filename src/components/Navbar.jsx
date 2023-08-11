import { Link } from "react-router-dom"
import {ShoppingCart} from 'phosphor-react'
import { HStack } from "@chakra-ui/react"
export default function Navbar(){
    return(
        <HStack 
        spacing={7}
        backgroundColor='black' 
        textColor={'white'} 
        fontSize={23} 
        display='flex'
        textAlign={'center'}
        justifyContent={'flex-end'}
        padding={11}
        paddingRight={5}>
            <Link to='/'>Shop</Link>
            <Link to='/cart'>
                <ShoppingCart size={28}/>
            </Link>
        </HStack>
    )
}