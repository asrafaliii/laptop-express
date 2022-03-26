import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product.css';

const Product = (props) => {
    const {name, img, price} = props.product;
    // console.log(props);
   
    return (
        <div className='product'>
            <img src={img} alt=""></img>
            <div className='product-info'>
                <p>{name}</p>
                <h3>${price}</h3>
            </div>
            <button onClick={ () => props.handleAddToCart(props.product)} type="button" class="btn btn-primary"><span className="p-2">Add to Cart</span><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>  
        </div>
    );
};

export default Product;