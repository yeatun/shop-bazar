import React from 'react';
import giphy from '../../images/giphy.gif';
import './OrderPlaced.css';
const OrderPlaced = () => {
    return (
        <div className='order'>
            <img src={giphy} alt="" />
            <h1>Your order is done!</h1>?
        </div>
    );
};

export default OrderPlaced;