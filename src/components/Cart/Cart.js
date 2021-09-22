import React from 'react';
import './Cart.css'

const Cart = (props) => {

    const { cart } = props;

    let productPrice = 0;

    for (const product of cart) {
        productPrice += product.price
    }

    let taxtAmount = productPrice * 0.10

    return (
        <div>
            <h2>order summary</h2>
            <p>Items ordered {props.cart.length} </p>
            <p>Product Price: ${productPrice}</p>
            <p>Total Tax: ${taxtAmount}</p>
        </div>
    );
};

export default Cart;