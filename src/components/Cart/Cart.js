import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = (props) => {

    const cart=props.cart;

    const total= cart.reduce((total,prd)=>total+prd.price,0);
    const tax = (total*.08).toFixed(2);
    
    let shipping=0;

            if (total>35)
            {
                shipping=0;
            }
            else if(total>25)
            {
                shipping=5.99;
            }
            else if(total>0){
                shipping =10.99;
            }
  
       const grandTotal =  (Number(tax )+ total+ shipping).toFixed(2);

    return (
        <div className="cart">
            <h2>Order Summery  :</h2>
            <p>Items Orederd: {cart.length}</p>
             <p>Products Price:{total.toFixed(2)}</p>
            <p>Shipping Cost:{shipping}</p>
            <p> Total Tax :{tax}</p>
            <p>  ------------------------------</p>
            <h3>Toatl Price  :{grandTotal}</h3>

            <Link to="/review"><button className="button-Cart">Review Order</button></Link>
        </div>
    );
};

export default Cart;