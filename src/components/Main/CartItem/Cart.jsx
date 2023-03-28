import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { allCart } = props
    console.log(allCart)

    let quantity = 0
    let total = 0
    let shipping = 0
    for (const cart of allCart) {
        quantity +=  cart.quantity
        total += cart.price * cart.quantity
        shipping += cart.shipping * cart.quantity
    }
    const tax = (total * 7) / 100
    const granTotal = total + shipping + tax

    return (
        <div className='cartProduct p-2 rounded position-sticky top-0'>
            <h2 className='text-center pb-2 mb-3 border-bottom border-dark'>order summary</h2>
            <h5 className='mb-5'>selected item: {quantity}</h5>
            <h5 className='mb-5'>Total Price: ${total}</h5>
            <h5 className='mb-5'>Total Shipping Charge: ${shipping}</h5>
            <h5 className='mb-5'>Tax: ${tax}</h5>
            <h3 className='mb-5'>Grand Total: ${granTotal}</h3>
        </div>
    );
};

export default Cart;