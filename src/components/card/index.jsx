import React from "react";
import {useSpring, animated} from "react-spring"

import "./styles.css"

const calc = (x, y) => [-(y - window.innerHeight / 2) / 150, (x - window.innerWidth / 2) / 150, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

export function Card({children, className}){

    const [props, set] = useSpring(()=>({xys: [0, 0, 1], config: {mass: 10, friction: 50, tension: 200}}))

    return (
        <animated.div
        onMouseMove={({clientX, clientY})=>set({xys: calc(clientX, clientY)})}
        onMouseLeave={()=>set({xys: [0,0,1]})}
        style={{
            transform: props.xys.to(trans)
        }}
         className={`Card ${className}`}>
            {/* <StyledSpan/> */}
            {children}
            <div
             className="highlight"></div>
        </animated.div>
    )
}