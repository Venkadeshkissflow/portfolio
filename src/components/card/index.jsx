import React from "react";
import {useSpring, animated} from "react-spring"

import "./styles.css"

const calc = (x, y) => [-(y - window.innerHeight / 2) / 250, (x - window.innerWidth / 2) / 250, 1.05]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

export function Card({children, className}){

    const [props, set] = useSpring(()=>({xys: [0, 0, 1], config: {mass: 10, friction: 50, tension: 200}}))

    return (
        <div className={`Card ${className}`}>
            {children}
        </div>
    )
}