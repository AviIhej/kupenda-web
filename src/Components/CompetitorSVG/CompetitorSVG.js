import React from 'react'
import { useSpring, animated } from 'react-spring'
// import endlessSVG from '../../assets/endless.svg'
import './CompetitorSVG.css' // // Icons made by Freepik from www.flaticon.com

// 20 is speed
const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
// const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
// const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`

const trans2 = (x, y) => `translate3d(${x / 20 + 400}px,${y / 50 - 125}px,0)`
const trans3 = (x, y) => `translate3d(${x / 20 + 310}px,${y / 30 - 90}px,0)`
const trans4 = (x, y) => `translate3d(${x / 20 + 375}px,${y / 20 - 20}px,0)`

const okc = (x, y) => `translate3d(${x / 20 + 175}px,${y / 20 - 90}px,0)`
const cmb = (x, y) => `translate3d(${x / 20 + 35}px,${y / 20 - 90}px,0)`
const badoo = (x, y) => `translate3d(${x / 20 - 100}px,${y / 20 - 90}px,0)`
const nobodyCares = (x, y) => `translate3d(${x / 20 - 200}px,${y / 20 - 0}px,0)`
const pof = (x, y) => `translate3d(${x / 20 - 60}px,${y / 20 - 10}px,0)`
const poCatFish = (x, y) => `translate3d(${x / 20 - 0}px,${y / 20 - 200}px,0)`
const eharmony = (x, y) => `translate3d(${x / 20 + 165}px,${y / 20 + 50}px,0)`
const ugh = (x, y) => `translate3d(${x / 20 + 355}px,${y / 20 + 80}px,0)`

const trans5 = (x, y) => `translate3d(${x / 20 - 450}px,${y / 15 + 10}px,0)`
const trans6 = (x, y) => `translate3d(${x / 20 - 360}px,${y / 15 + 30}px,0)`
const trans7 = (x, y) => `translate3d(${x / 20 - 390}px,${y / 20 - 80}px,0)`
const endless = (x, y) => `translate3d(${x / 20 - 450}px,${y / 20 - 200}px,0)`

// const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`
// const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`

function CompetitorSVG() {
  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
  return (
    <div className="container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
        <div className="mainBox">

      {/* <animated.div class="card1" style={{ transform: props.xy.interpolate(trans1) }} /> */}
      <animated.div className="card2" style={{ transform: props.xy.interpolate(trans2) }} />
      <animated.div className="card3" style={{ transform: props.xy.interpolate(trans3) }} />
      <animated.div className="card4" style={{ transform: props.xy.interpolate(trans4) }} />
      
      <animated.div className="okc" style={{ transform: props.xy.interpolate(okc) }} />
      <animated.div className="cmb" style={{ transform: props.xy.interpolate(cmb) }} />
      <animated.div className="badoo" style={{ transform: props.xy.interpolate(badoo) }} />
      <animated.div className="nobodyCares" style={{ transform: props.xy.interpolate(nobodyCares) }} />
      <animated.div className="pof" style={{ transform: props.xy.interpolate(pof) }} />
      <animated.div className="poCatFish" style={{ transform: props.xy.interpolate(poCatFish) }} />
      <animated.div className="eharmony" style={{ transform: props.xy.interpolate(eharmony) }} />
      <animated.div className="ugh" style={{ transform: props.xy.interpolate(ugh) }} />
      
      <animated.div className="card5" style={{ transform: props.xy.interpolate(trans5) }} />
      <animated.div className="card6" style={{ transform: props.xy.interpolate(trans6) }} />
      <animated.div className="card7" style={{ transform: props.xy.interpolate(trans7) }} />
      <animated.div class="endless" style={{ transform: props.xy.interpolate(endless) }} />
        </div>
    </div>
  )
}

export default CompetitorSVG

