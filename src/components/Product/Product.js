import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Product = (props) => {
    return (
        <div className="single-product-container">
            <div>
                <img style={{width:'150px'}} src={props.product.img} alt=""/>
            </div>
            <div>
                <h4 className="product-name">{props.product.name}</h4>
                <p>Only: ${props.product.price}</p>
                <p>by: {props.product.seller}</p>
                <br/>
                <button onClick={() => props.handleAddToCart(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;