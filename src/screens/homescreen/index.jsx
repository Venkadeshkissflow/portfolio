import React from "react";
import { Card } from "../../components/card/index";

import AstronutStar from "../../images/supportive_images/astronut_star.png";
import Linkedin from "../../images/social_media_logos/linkedin.png";
import Github from "../../images/social_media_logos/github.png";
import Twitter from "../../images/social_media_logos/twitter.png";
import Mail from "../../images/social_media_logos/mail.png";

import "./styles.css";
import "../../commonstyle.css";

export const HomeScreen = React.forwardRef((props, ref) => {
  function openInNewTab(url) {
    window.open(url, "_blank", "noreferrer");
  }
  return (
    <div ref={ref} className="homeScrean">
      <Card className="homeScreenCard">
        <img alt="helloworld" className="astroIcon" src={AstronutStar} />
        <p className="fontStyle homeScreenfonts helloText"> Hello world 👋,</p>
        <p className="fontStyle homeScreenfonts name"> I'm Venkadesh S </p>
        <p className="fontStyle homeScreenfonts role">FRONT-END DEVELOPER</p>
        <p className="fontStyle homeScreenfonts self">
          A self-taught passionate Frontend developer from India
        </p>
        <div className="socialMediIcons">
          <img
            className="socialIcon"
            alt="linkedin"
            src={Linkedin}
            onClick={() =>
              openInNewTab("https://www.linkedin.com/in/venkadesh-s-sakthivel")
            }
          />
          <img
            className="socialIcon"
            alt="github"
            src={Github}
            onClick={() => openInNewTab("https://github.com/Venkadeshkissflow")}
          />
          <img
            onClick={() =>
              openInNewTab(
                "https://twitter.com/Venkade20226949?t=ZEz7CgBuTKvxC6aI9hVmNA&s=09"
              )
            }
            className="socialIcon"
            alt="twitter"
            src={Twitter}
          />
          <img
            onClick={() =>
              (window.location = "mailto:venkadeshsakthivel03@gmail.com.com")
            }
            className="socialIcon"
            alt="mail"
            src={Mail}
          />
        </div>
        <div
          onClick={() =>
            openInNewTab(
              "https://drive.google.com/file/d/1ncTT_lTJBl3w88IJyF5Ep-DDcO4O1HQv/view?usp=sharing"
            )
          }
          className="resume"
        >
          Resume
        </div>
      </Card>
    </div>
  );
});
