import React, { Component } from 'react';
import './HeroGeneric.css';

class HeroGeneric extends Component{

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
      const isTop = window.scrollY < 100
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
    let scrollClassesHeroDiv = ['hero_generic_inner']

    //Disappearing Elements 
    if(this.state.scrolledHero){
        scrollClassesHeroDiv = ['hero_generic_inner scrolled']
    }else{
      scrollClassesHeroDiv=['hero_generic_inner scrolledUp']
    }
        return (
          <section className="hero_generic">
            <div className={scrollClassesHeroDiv}>
                {/* <h1>Use the power of the crowd to win the dating game</h1> */}
                <h1>We are all in this together</h1>
                <h2>Some apps are designed to be deleted. We are designed to evolve with you.</h2>
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

export default HeroGeneric