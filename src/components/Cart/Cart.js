import React from 'react';
import './Cart.css'

const Card = () => {
    return (
        <div className='cart-conatiner'>
            <h2>Selected Leptop</h2>
            <button type="button" class="btn btn-outline-primary">CHOOSE 1 FOR ME</button>
            <br></br>
            <button type="button" class="btn btn-outline-danger">CHOOSE AGAIN</button>
        </div>
    );
};

export default Card;