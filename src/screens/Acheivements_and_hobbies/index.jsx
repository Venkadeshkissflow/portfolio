import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import CountryHen from "../../images/countryhen.png";
import Award from "../../images/award.webp";
import chat from "../../images/chats.jpg";
import pots from "../../images/pots.jpg";
import sportcertificate from "../../images/certificate2.webp";
import projectCertificate from "../../images/certificate.webp";
import ArtCertificate from "../../images/certificateArt.png"

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
// import "swiper/css/bundle"
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

export const SelfExplore = React.forwardRef(({mobileResolution=false}, ref)=>{
    return (
    <div ref={ref} className="selfexplorerSection">
      {mobileResolution ? <MobileSwiper/> : <WebResponsiveSwiper/>}
    </div>
    )
})

function MobileSwiper(){
  return (
    <Swiper
    effect={"cards"}
    grabCursor={true}
    modules={[EffectCards]}
    className="mySwiper"
  >
    {SELF_DETAILS.map((data, index)=>(
          <SwiperSlide className="board">
          <img className="mobileResponsiveImg" alt={data.title} src={data.img} />
          <div className="content">
          <div className="fontStyle fontTitleStyle">{data.title}</div>
          <div className="fontStyle">{data.detailInfo}</div> 
          </div>
          </SwiperSlide>
    ))}
  </Swiper> 
  )
}

function WebResponsiveSwiper(){
  return (
    <Swiper
        effect={"coverflow"}
        grabCursor={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Keyboard, Navigation, Autoplay, Mousewheel, EffectFade]}
        className="mySwiper"
        navigation={true}
        mousewheel={true}
        centerInsufficientSlides={true}
        
      >
        {SELF_DETAILS.map((data, index)=>(
            <SwiperSlide virtualIndex={index} zoom={true}>
                <div key={index} name="demo" className={`board selfExploreCard`}>
                    <img className="swiperImage" alt={data.title} src={data.img} />
                    <div className="fontStyle fontTitleStyle">{data.title}</div>
                    <div className="fontStyle">{data.detailInfo}</div> 
                </div>
            </SwiperSlide>
        ))}
      </Swiper>
  )
}