import React from "react";

import {Card} from "../../components/card/index";

import CountryHen from "../../images/countryhen.png";
import chat from "../../images/chats.jpg";
import pots from "../../images/pots.jpg";
import sportcertificate from "../../images/certificate2.webp";
import projectCertificate from "../../images/certificate.webp";
import ArtCertificate from "../../images/certificateArt.png";
import Award from "../../images/awards.png"

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import "./styles.css";

import "../../commonstyle.css"

import { EffectCoverflow, Keyboard , Navigation, Autoplay, Mousewheel, EffectFade, EffectCards } from "swiper";

const SELF_DETAILS = [
{
  title: "Country Hen [ REACT NATIVE ]",
  img: CountryHen,
  detailInfo:"An ecommerce application user interface is developed for the meat and eggs of countryhen with react native",
  tools: "VS Code, Postman , MongoDB Cloud",
  role: "Frontend Developer"

},
{
  title: "Chat App [ Socket io ]",
  img: chat,
  detailInfo:"In this chat App, we can transfer messages from one to one as personally. here I use socket-io for connecting users.",
  tools: "JavaScript, HTML, CSS, SocketIO",
  role: "Developer"
},
{
  title: "Star Performer",
  img: Award,
  detailInfo:"Got Star performer award in kissflow for inter team peformance"
},
{
    title: "First Prize in Mini Project",
    img: projectCertificate,
    detailInfo:"Won First Prize in Mini Project event held on intra college event at kongunadu college of engineering and technology trichy."
},
{
  title: "sports",
  img: sportcertificate,
  detailInfo:"like to play cricket, football, balbadminton, got an journal level certification in balbadminton"
},
{
  title: "Art",
  img: ArtCertificate,
  detailInfo:"Participated junior level in National Art Competion in School days"
},
{
    title: "love gardening",
    img: pots,
    detailInfo:"Apart from technical love to spend my time in gardening and home decorations"
},
]

const AWARDS = [
  {
    awardTitle: "Star Performer",
    awardFunction: "BO Award - 2022 (Kissflow)"
  },
  {
    awardTitle: "Engineering Rockstar",
    awardFunction: "ALTIUS - 2023 (Kissflow)"
  }
]

export const SelfExplore = React.forwardRef(({mobileResolution=false}, ref)=>{
    return (
        <div className="awardsWrapper">
          <div className="trophyWrapper">
            {AWARDS.map(({awardTitle, awardFunction})=>(
              <div className="awardWrapper">
                <img className="awardImage" alt="award" src={Award} />
                <Card className="projectCard">
                  <div className="fontStyle awardTitle">{awardTitle}</div>
                  <div className="fontStyle awardTitle">{awardFunction}</div>
                </Card>
              </div>
            ))}
            </div>
        </div>
    )
})