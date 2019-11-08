import React from 'react';
import logo from '../../assets/kupenda-logo.png';
import  DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

const Toolbar = (props) => {
    return(
        <header className="toolbar">
            <nav className="toolbar__navigation">
                <div className="toolbar__toggle-button">
                    <DrawerToggleButton click={props.drawerClickHandler}/>
                </div>
                {/* <div className="toolbar__logo"><a href='/'><img alt="logo" style={{maxWidth: "187px", maxHeight: "55px"}} src={logo} /></a></div> */}
                <div className="toolbar__logo"><a href='/'><strong><b className="k-letter">K</b>UPENDA</strong></a></div>
                <div className="spacer"></div>
                <div className="toolbar__navigation_items">
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