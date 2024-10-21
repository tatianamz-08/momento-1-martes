// Body.js
import React from 'react';
import Button from './Buttons'

const Body = (props) => {
    return (
        
        <div class="row">
            <div class="col-md-5">
                <div class="text-bg body">
                    <h2>{props.title}</h2>
                    <h1>{props.subtitle}</h1>
                    <p>{props.text}</p>
                    <Button placeholder="Buy Now" />
                    <Button placeholder="Contact" />
   
                </div>
            </div>
            <div class="col-md-7">
                <div class="text_img">
                </div>
            </div>
        </div>
    );
};

export default Body;