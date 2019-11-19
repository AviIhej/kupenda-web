import React, {Component} from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Hero from './Components/Hero/Hero';
import Toolbar from './Components/Toolbar/Toolbar';
import SideDrawer from './Components/SideDrawer/SideDrawer';
import Backdrop from './Components/Backdrop/Backdrop';
import CompetitorSVG from './Components/CompetitorSVG/CompetitorSVG';
import Frustration from './Components/Frustration/Frustration';
import Footer from './Components/Footer/Footer';
// import Form from './Components/Form/Form';
// import ContentLeft from './Components/ContentLeft/ContentLeft';
// import ContentRight from './Components/ContentRight/ContentRight';
// import appIcons from '../src/assets/appIcons.png';
// import Navigation from './Components/Navigation/Navigation';
// import Footer from './Components/Footer/Footer';
// import SectionOne from './Components/SectionOne/SectionOne';
import './App.css';
import MainHomeContent from './Components/MainHomeContent/MainHomeContent';
import HomePage from './Components/HomePage/HomePage';
import Mission from './Components/Mission/Mission';


class App extends Component {
constructor(props){
  super(props);
  this.state={
    sideDrawerOpen: false,
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

drawerToggleClickHandler = () => {
  // this.setState({sideDrawerOpen: !this.state.sideDrawerOpen}) BAD PRACTICE
  this.setState((prevState) => {
    return {sideDrawerOpen: !prevState.sideDrawerOpen}
  })
};

backdropClickHandler = () => {
  this.setState({sideDrawerOpen: false})
}


render(){
    // let sideDrawer;
    let backdrop
    if(this.state.sideDrawerOpen){
      // sideDrawer = <SideDrawer />
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }

    return (
      <ParallaxProvider>
      <Router>
        <div style={{height: '100%', marginTop: '-20px'}}>
               <Toolbar drawerClickHandler={this.drawerToggleClickHandler} scrolled={this.state.scrolled}/>
              <SideDrawer show={this.state.sideDrawerOpen} />
              {backdrop}
          <Switch>
            <Route path={"/"} exact component={HomePage}/>
            <Route path={"/mission"} exact component={Mission}/>
            {/* <Route path={"/home"}  component={HomePage}/> */}
          </Switch>
          <Footer />
      </div>
        </Router>
        </ParallaxProvider>
    );
  }
}

export default App;
