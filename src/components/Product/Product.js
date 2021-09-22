import React from 'react';
import './Product.css'

const Product = (props) => {

    const { img, name, price, seller, stock } = props.product

    return (
        <div className="single-product">
            <div className="product-img">
                <img src={img} alt="producr-imf=g" />
            </div>
            <div className="product-details">
                <h4>{name}</h4>
                <p><small>by: {seller}</small></p>
                <p>Price: $ {price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button onClick={() => props.handleAddToCart(props.product)} className="regular-btn"><i className="fas fa-shopping-cart"></i> add to cart</button>
            </div>
        </div>
    );
};

export default Product;