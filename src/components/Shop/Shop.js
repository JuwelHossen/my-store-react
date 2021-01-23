import React, { useState } from 'react';
import fakeData from '../../fakeData';
import { addToDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css';

const Shop = () => {
   const first10 = fakeData.slice(0,10);
   const [products, setProducts]=useState(first10);
   const [cart,setCart]=useState([]);

   const handleAddCart = (product)=>{
       const newCart=[...cart,product];
       setCart(newCart);
       const smaeProduct=newCart.filter(pd=> pd.key===product.key);
       const count =smaeProduct.length;

       addToDatabaseCart(product.key,count);
   
   }

    return (
        <div className ="shop-container">
            <div className="products-container">
                {
                    products.map(pd => <Products 
                    key={pd.key}
                    showAddCart={true}
                    handleAddCart= {handleAddCart}
                    product={pd} >
                    </Products>)
                }
                
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>

            </div>

            
        </div>
    );
};

export default Shop;