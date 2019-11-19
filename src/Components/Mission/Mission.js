import React, { Component } from 'react';
import './Mission.css'
import HeroGeneric from '../HeroGeneric/HeroGeneric';
import Phone from '../Phone/Phone';
import { Parallax } from 'react-scroll-parallax';

class Mission extends Component{
    render(){
        return(
            <div>
                <div>
                    <HeroGeneric />
                </div>

                <div className="mission_content">
                    <div>
                        <h1>Mission Content</h1>
                        <p>
                        Some apps are designed to be deleted. 
                        We are designed to evolve with you. 
                        We help you make decisions based on feedbacks 
                        from the community. you have access to data like 
                        the reasons why you’re being marched with someone 
                        else. you are bound to grow and find what you’re 
                        looking for. More importantly you are also helping 
                        others which is more meaningful.
                        </p>
                    </div>
                    <div className="phone_holder">
                        <Phone />
                    </div>
                </div>
            </div>
        )
    }
}

export default Mission