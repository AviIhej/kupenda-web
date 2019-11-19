import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import iPhone6 from '../../assets/iphone6gold.png';
import Phone from '../Phone/Phone';
import './ContentLeft.css';

const ContentLeft = () => {
    return(
           
            <div className="content-container">
                <div className="content1">
                    <p className="blue-heading">There's a better way to find a partner - do nothing</p>
                    <p className="black-parg">
                    No more endless swiping left and right before you find the right match.
                     Leave it to others to do it for you, put your phone down and the app is 
                     still working for you. It is in the best interest of Matchmakers to match 
                     you with the right person. Everyone help you get matches - we use the 
                     power of the crowd and we believe that human collective intelligence is 
                     better than any algorithms.
                    </p>
                    <p className="black-parg-2">
                    Swiping through crappy matches sucks. Kupenda solves this for you, by having others do the swiping for you,
                    as you reap the benefit of other peoples' good will.
                    </p>
                </div>
                <Parallax className="content2" y={[10, -10]} tagOuter="figure">
                    {/* <Image src="/image.jpg" /> */}
                    {/* <img className="iphoneX" src={iPhone6} alt="phone"/> */}
                    <Phone />
                </Parallax>
            </div>
    )
}

export default ContentLeft