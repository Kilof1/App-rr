import React from 'react';
import ProductsPage from '../pages/ProductsPage';

const Product = (props) => {
    return ( 
        <article className="product">
            <h1>{props.id}</h1>
        </article>
     );
}
 
export default Product;