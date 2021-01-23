
import React, {useState, useEffect}from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import ReviewItems from '../ReviewItems/ReviewItems';

const Review = () => {

    const [cart, setCart] =useState([])

    const rp = (pdkey) =>{
        const newCart= cart.filter( pd=> pd.key !== pdkey);
        setCart(newCart);
        removeFromDatabaseCart(pdkey);
}

    useEffect(()=>{

    const savedCart= getDatabaseCart();
    const productsKey= Object.keys(savedCart);
    const cartProducts=productsKey.map(key=>{
        const product= fakeData.find(pd=>pd.key===key)
        product.quantity= savedCart[key];
        return product;
    });

        setCart(cartProducts);
    })

    
    return (
        <div>
            <h1 style={{textAlign:'center', color:'green'}}>Your Cart Summerry: </h1>
            <h2 style={{textAlign:'center', color:'lightSalmon'}}>Your Items   :{cart.length} </h2>
            {
                cart.map(pd=><ReviewItems 
                    key = {pd.key}
                    rp = {rp}
                    product={pd}></ReviewItems>)
            }
        </div>
    );
};

export default Review;