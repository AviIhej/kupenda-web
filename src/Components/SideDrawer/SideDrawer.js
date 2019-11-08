import React from 'react';
import './SideDrawer.css';

const SideDrawer = (props) => {

    let drawerClasses =['side-drawer'];
    if(props.show) {
        drawerClasses = ['side-drawer open' ];
    }

    return(
        <nav className={drawerClasses}>
            <ul>
                <li><a href="/">Mission</a></li>
                <li><a href="/">Daters</a></li>
                <li><a href="/">Match Makers</a></li>
                {/* <li><a href="/">Ambassadors</a></li> */}
                <li><a href="/">About</a></li>
            </ul>
        </nav>
    )
}

export default SideDrawer;