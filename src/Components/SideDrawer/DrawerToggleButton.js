import React from 'react';
import './DrawerToggleButton.css';

const DrawerToggleButton = (props) => {

    // Changes Toggle Color
    let scrolledClassToggle = ['toggle-button__line']
    if(props.scrolled){
        scrolledClassToggle= ['toggle-button__line scrolled']
    }

    return(
   <button onClick={props.click} className="toggle-button">
       <div className={scrolledClassToggle}></div>
       <div className={scrolledClassToggle}></div>
       <div className={scrolledClassToggle}></div>
   </button>
    )
}

export default DrawerToggleButton;