import React from 'react';
import { Link } from 'react-router-dom';
import Product from '../components/Product'

const ProductsPage = ({ match }) => {
    return ( 
        <div>
            <>
                <div>Strona produktu</div>
                <Product id={match.params.id}/>
                <Link to="/products">Powrót do listry produktów</Link>
            </>
        </div>
     );
}
 
export default ProductsPage;