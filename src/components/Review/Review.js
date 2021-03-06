import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import './Review.css';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { Link } from 'react-router-dom';

const Review = () => {
    const [cart, setCart] = useState([]);

    const removeProduct = (productKey) => {
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }
 


    useEffect(()=> {
            const savedCart = getDatabaseCart();
            const productKeys = Object.keys(savedCart);
            const cartProducts =  productKeys.map( key => {
                const product = fakeData.find( pd => pd.key === key);
                product.quantity = savedCart[key];
                return product;
            });
            setCart(cartProducts);
    })
    return (
        <div className="shop-container">
           
          <div className="product-container">
          {
                    cart.map(pd => <ReviewItem 
                        key={pd.key}
                        removeProduct = {removeProduct}
                        product={pd}></ReviewItem>)
                }
           
          </div>
          <div className="cart-container">
                    <Cart cart={cart}></Cart>
                  <Link to='/orderPlaced'  > <button className='button'>Order Place</button></Link>
          </div>
         
        </div>
    );
};

export default Review;