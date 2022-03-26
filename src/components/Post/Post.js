import React from 'react';
import './Post.css';

const Post = () => {
    return (
        <div className='post-container'>
            <div className='primary-post'>
                <h1>How React Work?</h1>
                <p>While building client-side apps, a team of Facebook developers realized that the DOM is slow (The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.).
                <br></br> 
                    
                So, to make it faster, React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM.</p>
            </div>
            <div className='secondary-post'>
                <h1>How useState Work?</h1>
                <p>useState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.
                <br></br>

                As stated previously, useState enables you to add state to function components. Calling React.useState inside a function component generates a single piece of state associated with that component.
                </p>
            </div>
            
        </div>
    );
};

export default Post;