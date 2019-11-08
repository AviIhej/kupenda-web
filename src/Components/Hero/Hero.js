import React, { Component } from 'react';
// import mockup from '../../assets/phone-mockup.png';
import playStore from '../../assets/playStore.png';
// import appleStore from '../../assets/appleStorepng.png';
import './Hero1.css';

class Hero extends Component{
  
    render(){
    //Disappearing Elements 
    let scrollClassesHeroDiv = ['hero-inner']

    //Disappearing Elements 
    if(this.props.scrolled){
        scrollClassesHeroDiv = ['hero-inner scrolled']
    }
        return (
          <section className="hero">
            <div className={scrollClassesHeroDiv}>
                <h1>Use the power of the crowd to win the dating game</h1>
                <main>
                  <p>Get quality matches created through crowdsourcing.</p>
                <p style={{color: 'white', fontSize: '16px'}}>
                Match other singles together and light the spark of new relationships.
                It’s frustrating to spend hours swiping 
                in dating apps and matching with lame people.
                Swiping wastes time and makes dating feel like a 
                second job. Kupenda helps you save time, 
                have great dates and pay it forward.

                </p>
                <img src={playStore} style={{width: '200px', height: 'auto'}} alt="playStore"/>
                {/* <img src={appleStore} style={{width: '200px', height: 'auto'}} alt="appleStore"/> */}
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