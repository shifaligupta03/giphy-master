import React from 'react';
import PropTypes from 'prop-types';

const Button = ({buttonText, buttonCallback}) => {
    return ( 
        <button type="button" onClick={buttonCallback}>{buttonText}</button>
    );
}

Button.propTypes ={
    buttonCallback: PropTypes.func.isRequired,
    buttonText: PropTypes.string.isRequired
}


export default Button;
