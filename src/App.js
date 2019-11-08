import React, {Component} from 'react';
import Hero from './Components/Hero/Hero';
import Toolbar from './Components/Toolbar/Toolbar';
import SideDrawer from './Components/SideDrawer/SideDrawer';
import Backdrop from './Components/Backdrop/Backdrop';
// import Navigation from './Components/Navigation/Navigation';
// import Footer from './Components/Footer/Footer';
// import SectionOne from './Components/SectionOne/SectionOne';
import './App.css';


class App extends Component {
constructor(props){
  super(props);
  this.state={
    sideDrawerOpen: false
  };
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
      <div style={{height: '100%'}}>
        {/* <Navigation /> */}
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <Hero />
        {/* <SectionOne />  */}
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
