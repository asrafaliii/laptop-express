import React from 'react';
import './Product.css';

const Product = (props) => {
    const {name, img, price} = props.product;

    return (
        <div className='product'>
            <img src={img} alt=""></img>
            <p>{name}</p>
            <h3>${price}</h3>
            <button>Add to Cart</button>
        </div>
    );
};

export default Product;