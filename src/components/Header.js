import React from 'react';
import PropTypes from "prop-types"; // U need to import proptype to use proptype 
import Button from './Button';

const Header = (props) => {
    const log = () => console.log('click')

    return (
        <header className = "header">
          <h1> {props.title}</h1>
           <Button text = "Add"  bg = "green" onclick = {log}></Button>
          
        </header>
    )
}

// const heading = {  // Inline style in js
//     color: "white",
//     background: "black",
//     textAlign: "center",
// };

Header.defaultProps = {  // you can set a default prop 
      index : 1,
      title: "Task Tracker",   
};

Header.propTypes = { // you can set the proptype but you have to require the PropTypes module form express
    title: PropTypes.string,
};

export default Header
