import React from 'react';


const Button = (props) => {
    return (
        <button className="buttons">{props.placeholder}</button>
    );
};

export default Button;