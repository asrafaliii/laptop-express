import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'




const Card = ({cart}) => {
    console.log(cart);
    return (
        <div className='cart-conatiners'>
            <h2>Selected Leptop</h2>
           {
                cart.map(cart =>
                <div className="d-flex justify-content-start align-items-center">
                    <img src={cart.img} alt="" style={{height: '4rem'}}></img>
                    <p className='text-start p-2'>{cart.name}</p>
                    <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                    
                    
                </div>
                )
            }

           
            
            <button type="button" class="btn btn-outline-primary">CHOOSE 1 FOR ME</button>
            <br></br>
            <button type="button" class="btn btn-outline-danger" onClick={() =>cart}>CHOOSE AGAIN</button>
        </div>
    );
};

export default Card;