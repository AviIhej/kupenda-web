import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import Phone from '../Phone/Phone';
// import anim from '../../assets/anim.png';
import './ContentRight.css';

const ContentRight = () => {
    return(
            <div className="content-right-container">
            <Parallax className="content2Right" y={[30, -10]} tagOuter="figure">
                {/* <Image src="/image.jpg" /> */}
                {/* <img src={iPhone6} style={{width: '358px', height: '600px'}} alt="phone"/> */}
                <Phone />
            </Parallax>
                <div className="content1Right">
                    <p style={{color: '#59a6f1', fontSize: '20px'}}>Daily points that are even easier to use than cash </p>
                    <p className="black-parg">
                    Let’s be honest the dating process is a pain in the butt. 
                    Every single precious second that you spend looking for the
                    a partner is emotionally draining. Time is money and we want 
                    to make sure you profit for your effort - Get paid to help others. 
                    The better you become at matchmaking the more you earn.

                    </p>
                    <p style={{color: 'black', fontSize: '16px'}}>
                    Get quality matches created through crowdsourcing.
                    Match other singles together and light the spark of new relationships.

                    </p>
                </div>
            </div>
    )
}

export default ContentRight