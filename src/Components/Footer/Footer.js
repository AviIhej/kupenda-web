import React, { Component } from 'react';
// import logo from '../../assets/kupenda-logo.png'
import './Footer.css';

class Footer extends Component{
    render(){
        return(
            <div className="footer">
               <ul className="footer-ul">
                   <li>Blog</li>
                   <li>Contact</li>
                   <li>Press</li>
                   <li>Privacy</li>
               </ul>
            </div>

        )
    }
}

export default Footer