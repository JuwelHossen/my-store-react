import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Products from '../Products/Products';

const ProductDetails = () => {

    const {productKey}=useParams();
    const product=fakeData.find(pd=> pd.key===productKey);

    return (
        <div>
             <h1> Product Detais:</h1>
             <Products showAddCart={false} product={product}></Products>
        </div>
    );
};

export default ProductDetails;