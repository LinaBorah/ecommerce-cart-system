import { PRODUCTS } from '../../Products';
import { shopContext } from '../../Context/ShopContext';
import { useContext } from 'react';
import CartItem from '../Cart/CartItem';
import '../Cart/cart.css';
import { useNavigate } from 'react-router-dom';
export default function Cart() {
    const { cartItems, getTotalAmount, checkout } = useContext(shopContext);
    const totalAmount = getTotalAmount();
    const navigate = useNavigate();
    return (
        <div className="cart">
            <div>
                <h1>Your cart Items</h1>
            </div>

            <div className='cart'>
                {PRODUCTS.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItem data={product} />
                    }
                })}
            </div>
            {totalAmount > 0 ?
                <div className='checkout'>
                    <p>Subtotal: {totalAmount}</p>
                    <button className='continue' onClick={() => navigate('/')}>Continue Shopping</button>
                    <button onClick={() => {
                        checkout();
                        navigate('/checkout');
                    }}
                    >Checkout
                    </button>
                </div> : 
                <div className='empty'>
                    <h1>Your cart is Empty</h1>
                    <button className='continue' onClick={() => navigate('/')}>Continue Shopping</button>
                </div>
            }
        </div>

    )
}