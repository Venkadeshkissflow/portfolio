import React from "react";
import {Card} from "../../components/card/index"

import AstronutStar from "../../images/astronut_star.png"

import "./styles.css";
import "../../commonstyle.css"

export const HomeScreen = React.forwardRef((props, ref) => {
    return(
        <div ref={ref} className="homeScrean">
            <Card className="homeScreenCard">
                    <img alt="helloworld" className="astroIcon" src={AstronutStar} />
                    <p className="fontStyle homeScreenfonts helloText"> Hello world 👋,</p>
                    <p className="fontStyle homeScreenfonts name"> I'm Venkadesh S </p>
                    <p className="fontStyle homeScreenfonts role">FRONT-END DEVELOPER</p>
                    <p className="fontStyle homeScreenfonts self">A self-taught passionate Frontend developer from India</p>
            </Card>
        </div>
    )
})