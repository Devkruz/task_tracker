import React from 'react';
import PropTypes from "prop-types";

function Button({text, bg, onclick}) {
    return (
        <button style = {{backgroundColor: bg }} className = "btn-prim" onClick = {onclick}> {text} </button> 
    )
}

Button.defaultProps = {
    bg : "#007bff",
    text: "Button"
}

Button.propTypes = {
    bg : PropTypes.string,
    text : PropTypes.string,
    onClick: PropTypes.func,
}
export default Button
