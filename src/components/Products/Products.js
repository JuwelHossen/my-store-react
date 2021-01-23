import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css';
const Products = (props) => {
    const { img, name, seller, price, stock, key} = props.product;
    
    return (
        <div className="product">
            <div>
                <img src={img} alt=" images of product"/>
            </div>

            <div >
                <h4 className="name-Products"> <Link to={"/product/"+ key}>{name}</Link></h4>
                <br />
                <p><small>by:{seller}</small></p>
                <h2>Price: ${price}</h2>
                <h3>Only {stock} left -Order Soon....</h3>

            {props.showAddCart && <button className="button-Cart" 
                onClick= {()=> props.handleAddCart(props.product)}> 
                add to cart
                </button>}
            </div>

        </div>
    );
};

export default Products;