import React, { Component } from 'react';
// import mockup from '../../assets/phone-mockup.png';
import playStore from '../../assets/playStore.png';
// import appleStore from '../../assets/appleStorepng.png';
import './Hero1.css';

class Hero extends Component{

  constructor(props){
    super(props);
    this.state={
      scrolled: false,
      scrolledHero: false
    };
  }
  
  componentDidMount() {
    window.addEventListener('scroll', () => {
      // For Toolbar
      const isTop = window.scrollY < 500
      const isTopHero = window.scrollY < 150
  
      if(isTop !== true){
        this.setState({scrolled: true})
      }else if(isTop === true){
        this.setState({scrolled: false})
      }
      // For Hero
      if(isTopHero !== true){
        this.setState({scrolledHero: true})
      }else if(isTopHero === true){
        this.setState({scrolledHero: false})
      }
    })
  }
  
  componentWillUnmount(){
    window.removeEventListener('scroll', null);
  }
  
    render(){
    //Disappearing Elements 
    let scrollClassesHeroDiv = ['hero-inner']

    //Disappearing Elements 
    if(this.state.scrolledHero){
        scrollClassesHeroDiv = ['hero-inner scrolled']
    }else{
      scrollClassesHeroDiv=['hero-inner scrolledUp']
    }
        return (
          <section className="hero">
            <div className={scrollClassesHeroDiv}>
                {/* <h1>Use the power of the crowd to win the dating game</h1> */}
                {/* <h1>Powerful alone. Better Together</h1> */}
                <h1>Powerful alone. Better Together</h1>
                <h2>Have other people find you matches, and you dont lift a finger</h2>
                <main>
                  {/* <p>Get quality matches created through crowdsourcing.</p> */}
                {/* <p style={{color: 'white', fontSize: '16px'}}>
                Match other singles together and light the spark of new relationships.
                It’s frustrating to spend hours swiping 
                in dating apps and matching with lame people.
                Swiping wastes time and makes dating feel like a 
                second job. Kupenda helps you save time, 
                have great dates and pay it forward.

                </p> */}
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