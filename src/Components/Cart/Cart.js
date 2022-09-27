import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;

    return (
        <div className='order'>
            <h2>Order</h2>
            {
                cart.map(food => <li>{food.strMeal}</li>)
            }

        </div >
    );
};

export default Cart;