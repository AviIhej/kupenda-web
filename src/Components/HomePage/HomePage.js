import React, { Component } from 'react';
import './HomePage.css'
import Hero from '../Hero/Hero';
import MainHomeContent from '../MainHomeContent/MainHomeContent';
import CompetitorSVG from '../CompetitorSVG/CompetitorSVG';
import Frustration from '../Frustration/Frustration'

class HomePage extends Component{
    render(){
        return(
            <div>
                <Hero />
                <Frustration />
{/*               <CompetitorSVG /> */}
              <MainHomeContent />
            </div>
        )
    }
}

export default HomePage