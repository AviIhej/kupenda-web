import React from 'react';
import { Parallax } from 'react-scroll-parallax';
// import iPhone6 from '../../assets/iphone6gold.png';
import Phone from '../Phone/Phone';
// import './ContentLeft.css';

const ContentLeft2 = () => {
    return(
           
            <div className="content-container">
                <div className="content1">
                    <p className="blue-heading">We are all in this together</p>
                    <p className="black-parg">
                    Some apps are designed to be deleted. 
                    We are designed to evolve with you. We help 
                    you make decisions based on feedbacks from the 
                    community. you have access to data like the reasons 
                    why you’re being marched with someone else. you are 
                    bound to grow and find what you’re looking for. More 
                    importantly you are also helping others which is more meaningful.
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

export default ContentLeft2