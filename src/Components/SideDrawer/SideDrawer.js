import React from 'react';
import { Link } from 'react-router-dom';
import './SideDrawer.css';

const SideDrawer = (props) => {

    let drawerClasses =['side-drawer'];
    if(props.show) {
        drawerClasses = ['side-drawer open' ];
    }

    return(
        <nav className={drawerClasses}>
            <ul>
                <Link to={"/mission"} style={{textDecoration: 'none'}}><li className="drawer_links">Mission</li></Link>
                <Link style={{textDecoration: 'none'}} to={'/daters'}><li className="drawer_links">Daters</li></Link>
                <Link style={{textDecoration: 'none'}} to={'/matchmakers'}><li className="drawer_links">Match Makers</li></Link>
                <Link style={{textDecoration: 'none'}} to={'/about'}><li className="drawer_links">About</li></Link>
            </ul>
        </nav>
    )
}

export default SideDrawer;