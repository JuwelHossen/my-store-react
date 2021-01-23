import React from 'react';

const ReviewItems = (props) => {

    const {name,quantity,img,key}=props.product;

    const reviewItemsStyle={
        borderBottom: '1px solid lightGray',
        marginBottom: '10px',
        marginLeft:'200px'

    
    }
    return (
        <div>
            
            <h1>Items Added:</h1> 
            
        <div style={reviewItemsStyle}>
            
            <img src={img} alt=" images of product"/>
            <h2>{name}</h2>
            <p>Quantity: {quantity}</p>
            <button className="button-Cart" onClick={ () => props.rp(key)}> Remove Item</button>
        </div>
    </div>
    );
};

export default ReviewItems;