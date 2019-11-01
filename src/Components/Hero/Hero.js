import React, { Component } from 'react';
import mockup from '../../assets/phone-mockup.png';
import appStore from '../../assets/appStore.png';
import './Hero.css';

class Hero extends Component{
    render(){
        return(
                <div className="hero">
                    <div className="text-info">
                        <h1 className="hero-h1">Use the power of the crowd to find a match</h1>
                        <p className="hero-p">As seen on <strong style={{color: "#fb8e7f"}}>ABC’s Shark Tank</strong></p>
                        <img className="appStore" src={appStore} alt="phone" style={{width: "400px", height: "80"}} />
                        <p className="hero-p">Click Here to Text a Link to Your Phone</p>
                    </div>
                    <div className="mockup">
                        <img src={mockup} alt="phone" style={{width: "400px", height: "600px"}} />
                    </div>
                </div>
        )
    }
}

export default Hero