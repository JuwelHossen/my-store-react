import React from 'react';
import './Products.css';
const Products = (props) => {
    const { img, name, seller, price, stock } = props.product;
    
    return (
        <div className="product">
            <div>
                <img src={img} alt=" images of product"/>
            </div>

            <div className="name-Products">
                <h4>{name}</h4>
                <br />
                <p><small>by:{seller}</small></p>
                <h2>Price: ${price}</h2>
                <h3>Only {stock} left -Order Soon....</h3>

                <button className="button-Cart" 
                onClick= {()=> props.handleAddCart(props.product)}
                > 
                add to cart</button>
            </div>

        </div>
    );
};

export default Products;