import React from 'react'
import './Footer.css';

const Footer = () => {
    return(
        <div className="footer">
            <div className="footer_ul_rapper">
                <ul>
                    <li>FAQ</li>
                    <li>Contact</li>
                    <li>Press</li>
                </ul>
                <ul className="social_icons">
                    <a href="/"><li><img className="twitter" /></li></a>
                    <a href="/"><li><img className="instagram" /></li></a>
                </ul>
            </div>
            <div className="footer_ul_rapper_2">
                <ul>
                    <li>@ 2019 Kupenda Inc.</li>
                    <li>Safe Dating Tips</li>
                    <li>Terms</li>
                    <li>Privacy</li>
                    <li>Security</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer