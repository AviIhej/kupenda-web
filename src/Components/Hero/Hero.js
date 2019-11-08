import React, { Component } from 'react';
// import mockup from '../../assets/phone-mockup.png';
import playStore from '../../assets/playStore.png';
import './Hero1.css';

class Hero extends Component{
    render(){
        return (
          <section className="hero">
            <div className="hero-inner">
                <h1>Find the people you’ve crossed paths with</h1>
                <main>
                <p>
                When walking down the street, sitting at a bar, 
                at work, or during a night out… We’ve all had that 
                experience of making eye contact with someone who 
                leaves a lasting impression. Now with happn, you 
                can find the people you cross paths with, 
                and seize the opportunity!
                </p>
                <img src={playStore} style={{width: '200px', height: 'auto'}} alt="playStore"/>
                </main>
            </div>
          </section>
          // <div className="hero">
          //     <div className="text-info">
          //         <h1 className="hero-h1">Use the power of the crowd to find a match</h1>
          //         <p className="hero-p">As seen on <strong style={{color: "#fb8e7f"}}>ABC’s Shark Tank</strong></p>
          //         <img className="appStore" src={appStore} alt="phone" style={{width: "400px", height: "80"}} />
          //         <p className="hero-p">Click Here to Text a Link to Your Phone</p>
          //     </div>
          //     <div className="mockup">
          //         <img src={mockup} alt="phone" style={{width: "400px", height: "600px"}} />
          //     </div>
          // </div>
        );
    }
}

export default Hero