import React from 'react';
import { PRODUCTS } from '../../Products';

import Product from './Product';
import './Shop.css';
export default function Shop() {
    return (
        <div className='shop'>
            <div className='shopTitle'>
                
                Shop Here
            </div>
            <div className='products'>
                {
                    PRODUCTS.map((product) =>
                        (<Product data={product} />)
                    )
                }
            </div>
        </div>
    )
}