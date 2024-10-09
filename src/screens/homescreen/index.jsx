import React from "react";
import {Card} from "../../components/card/index"

import AstronutStar from "../../images/astronut_star.png";
import Linkedin from "../../images/social_media_logos/linkedin.png"
import Github from "../../images/social_media_logos/github.png"
import Twitter from "../../images/social_media_logos/twitter.png"
import Mail from "../../images/social_media_logos/mail.png"

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
                    <div className="socialMediIcons">
                        <img className="socialIcon" alt="linkedin" src={Linkedin}/>
                        <img className="socialIcon" alt="linkedin" src={Github}/>
                        <img className="socialIcon" alt="linkedin" src={Twitter}/>
                        <img className="socialIcon" alt="linkedin" src={Mail}/>
                    </div>
                    <div className="resume">Resume</div>
            </Card>
        </div>
    )
})