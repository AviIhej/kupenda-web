import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import ContentLeft from '../ContentLeft/ContentLeft';
import ContentLeft2 from '../ContentLeft2/ContentLeft2';
import ContentRight from '../ContentRight/ContentRight';
import FourGrid from '../FourGrid/FourGrid';
import Form from '../Form/Form';
import anim from '../../assets/anim.png';
import "./MainHomeContent.css";
import img from '../../assets/happn.png';

const MainHomeContent = () => {
  return (
    <div className="contentLeftWrapper" style={{position: 'relative', overflowX: 'hidden', overflowY: 'hidden'}}>
        <div >
            <ContentLeft />
        </div>
        <div style={{transform: "translate(50%,-25%)", position: 'absolute', top: '0', right: '0', zIndex: '-1'}}>
            <Parallax className="parallaxBG" x={[120, -50]} tagOuter="figure">
                <img src={anim} style={{width: '380', height: '666'}} alt="phone"/>
            </Parallax>
        </div>
     
     <ContentRight />
     <ContentLeft2 />
     <Parallax  y={[10, -50]} tagOuter="figure">
        <Form />
      </Parallax>
     <FourGrid />
     <img clasName="grid_img" src={img} style={{height: '322px', width: "100%", marginBottom: "40px", marginTop: "40px"}}/>
     {/* <ContentLeft /> */}
    </div>
  );
};

export default MainHomeContent