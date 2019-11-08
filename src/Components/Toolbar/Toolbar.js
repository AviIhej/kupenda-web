import React from 'react';
import  DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

const Toolbar = (props) => {
    // Changes Various Element Colors
    let scrollClassesBG = ['toolbar']
    let scrollClassesLogo = ['toolbar__logo']
    let scrollClassesLinks = ['toolbar__navigation_items']

    // Changes Various Element Colors
    if(props.scrolled){
        scrollClassesBG = ['toolbar scrolled']
    }
    if(props.scrolled){
        scrollClassesLogo = ['toolbar__logo scrolled']
    }
    if(props.scrolled){
        scrollClassesLinks = ['toolbar__navigation_items scrolled']
    }

    return(
        <header className={scrollClassesBG}>
            <nav className="toolbar__navigation">
                <div className="toolbar__toggle-button">
                    <DrawerToggleButton click={props.drawerClickHandler} scrolled={props.scrolled}/>
                </div>
                {/* <div className="toolbar__logo"><a href='/'><img alt="logo" style={{maxWidth: "187px", maxHeight: "55px"}} src={logo} /></a></div> */}
                <div className={scrollClassesLogo}><a href='/'><strong><b className="k-letter">K</b>UPENDA</strong></a></div>
                <div className="spacer"></div>
                <div className={scrollClassesLinks}>
                    <ul className="nav-ul">
                        <li><a className="nav-links" href="/">Mission</a></li>
                        <li><a className="nav-links" href="/">Daters</a></li>
                        {/* <li><a className="nav-links" href="/">The App</a></li> */}
                        <li><a className="nav-links" href="/">Match Makers</a></li>
                        {/* <li><a className="nav-links" href="/">Ambassadors</a></li> */}
                        <li><a className="nav-links" href="/">About</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Toolbar;