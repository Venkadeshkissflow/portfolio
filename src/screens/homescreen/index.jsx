import React from "react";
import {Card} from "../../components/card/index"

import ProfilePic from "../../images/profilepic.jpg"

import "./styles.css";
import "../../commonstyle.css"

export const HomeScreen = React.forwardRef((props, ref) => {
    return(
        <div ref={ref} className="homeScrean">
            <Card className="homeScreenCard">
                <div className="profileInfo">
                <p className="fontStyle homeScreenfonts about"> Haii 👋, I'm</p>
                <p className="fontStyle homeScreenfonts name"> Venkadesh S</p>
                <p className="fontStyle homeScreenfonts">FRONT-END WEB DEVELOPER</p>
                <button className="fontStyle button">View Resume</button>
                </div>
                <img className="image" src={ProfilePic} alt=""/>
            </Card>
        </div>
    )
})