import React, { useEffect, useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart } from '../../utilities/databaseManager';

const Shop = () => {
    const first10 = fakeData.slice(0,5);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    const handleAddToCart = product => {
        const newCart = [...cart, product];
        setCart(newCart);
        const sameProduct  = newCart.filter(pd => pd.key ===product.key);
        const count = sameProduct.length
        addToDatabaseCart(product.key, count)
    }

    useEffect(()=> {
        console.log(fakeData)
        setProducts(fakeData);
    }, [])
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => <Product 
                        key = {product.key}
                        product={product} 
                        handleAddToCart={handleAddToCart}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;