import React, { Component } from 'react';
import logo from '../../assets/kupenda-logo.png'
import './Navigation.css';

class Navigation extends Component{
    render(){
        return(
            <div className="navbar">
                <div className="nav">
                    <img src={logo} alt='logo' style={{marginTop: "30px"}}></img>
                </div>
            </div>

        )
    }
}

export default Navigation