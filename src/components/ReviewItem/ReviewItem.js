import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ReviewItem = (props) => {
    const {name, quantity, key, price,img} = props.product;
    const reviewItemStyle={
        borderBottom:'1px solid lightgray',
        marginBottom:'5px',
        paddingBottom:'5px',
        marginLeft:'200px'
    };
    return (
        <div >
            <img src={img} alt="" />
            <h4 className="product-name">{name}</h4>
            <p>Quantity: {quantity}</p>
            <p><small>$ {price}</small></p>
            <br/>
            <button 
                className="main-button"
                onClick={() => props.removeProduct(key)}
            ><FontAwesomeIcon icon={faTrashAlt} /> Remove </button>
        </div>
    );
};

export default ReviewItem;