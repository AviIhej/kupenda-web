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
                <div className="toolbar__logo"><a href='/'><img alt="logo" style={{maxWidth: "187px", maxHeight: "55px"}} src={logo} /></a></div>
                <div className="spacer"></div>
                <div className="toolbar__navigation_items">
                    <ul>
                        <li><a href="/">Users</a></li>
                        <li><a href="/">Products</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Toolbar;