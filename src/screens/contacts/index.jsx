import React, {useState} from "react";
import Shape from 'react-clip-path';

import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";

import "./contact.styles.css"

const CONTACT_MEDIAS = [
    {
        name: "Twitter",
        icon: "AiOutlineTwitter"
    },
    {
        name: "LinkedIn",
        icon: "AiOutlineLinkedin"
    },
    {
        name: "Mail",
        icon: "AiOutlineMail"
    },
    {
        name: "Github",
        icon: "AiOutlineGithub"
    }
]

function IconEvent(icon){
    switch (icon) {
        case "AiOutlineTwitter":
            return <AiOutlineTwitter className="mediaIcon" />
        case "AiOutlineLinkedin": 
            return <AiOutlineLinkedin className="mediaIcon"/>
        case "AiOutlineMail": 
            return <AiOutlineMail className="mediaIcon"/>
        case "AiOutlineGithub": 
            return <AiOutlineGithub className="mediaIcon"/>
        default: 
        return "haii";
    }
}

export const ContactScreen = React.forwardRef((props, ref)=>{

    const [hoverStategithub, setHoverStategithub] = useState({state: false, color: "white"});
    const [hoverStatelinkedin, setHoverStatelinkedin] = useState({state: false, color: "white"});
    const [hoverStatemail, setHoverStatemail] = useState({state: false, color: "white"});
    const [hoverStatetwitter, setHoverStatetwitter] = useState({state: false, color: "#1ca2f1"});

    function openInNewTab(url){
        window.open(url, '_blank', 'noreferrer');
    }

    return (
        <div ref={ref} className="contactBoard">
            <div className="board">
                            {/* one */}
                            <div className="bulbBox">
                            <div className="wire"/>
                            <div className="bulbHandler"/>
                            <div style={hoverStatetwitter.state ? {boxShadow: `0 0 100px 100px ${hoverStatetwitter.color}`, backgroundImage: `radial-gradient(#fff1c0, ${hoverStatetwitter.color})`} : {}} className="bulb twitterBulb"/>
                            {/* <div className="lightShade"/> */}
                            {/* {hoverStatetwitter.state && (
                                <div className="trapezoid">
                                    <Shape
                                        // name="Trapezoid"
                                        id="trapezoid"
                                        backgroundColor="#bd34f14d"
                                        width="150px"
                                        height="200px"
                                        formula="polygon(44% 0%,55% 0%,100% 100%,0% 100%)"
                                    />
                                </div>
                            )
                            } */}
                            <div 
                            className="mediaBox" 
                            onClick={()=>openInNewTab("https://twitter.com/Venkade20226949?t=ZEz7CgBuTKvxC6aI9hVmNA&s=09")}
                            onMouseEnter={()=>setHoverStatetwitter({state: true, color: "#1ca2f1"})} 
                            onMouseLeave={()=>setHoverStatetwitter({state: false, color: "white"})}>
                                <AiOutlineTwitter className="mediaIcon" />
                            </div>
                            </div>

                            {/* two */}

                            <div className="bulbBox">
                            <div className="wire"/>
                            <div className="bulbHandler"/>
                            <div style={hoverStatelinkedin.state ? {boxShadow: `0 0 100px 80px ${hoverStatelinkedin.color}`, backgroundImage: `radial-gradient(#fff1c0, #ff43a6)`} : {}} className="bulb"/>
                            {/* <div style={{backgroundColor: `${hoverStatelinkedin.color}`, zIndex: 1}} className="bulb"/> */}
                            {/* <div className="lightShade"/> */}
                            {/* {hoverStatelinkedin.state && (
                                <div className="trapezoid">
                                    <Shape
                                        // name="Trapezoid"
                                        id="trapezoid"
                                        backgroundColor="#007fa27d"
                                        width="150px"
                                        height="200px"
                                        formula="polygon(44% 0%,55% 0%,100% 100%,0% 100%)"
                                    />
                                </div>
                            )
                            } */}
                            <div 
                            className="mediaBox" 
                            onClick={()=>openInNewTab("https://www.linkedin.com/in/venkadesh-s-sakthivel")}
                            onMouseEnter={()=>setHoverStatelinkedin({state: true, color: "#ff3d9cf5"})} 
                            onMouseLeave={()=>setHoverStatelinkedin({state: false, color: "white"})}>
                                <AiOutlineLinkedin className="mediaIcon"/>
                            </div>
                            </div>

                            {/* three */}

                            <div className="bulbBox">
                            <div className="wire"/>
                            <div className="bulbHandler"/>
                            <div style={hoverStatemail.state ? {boxShadow: `0 0 100px 70px ${hoverStatemail.color}`, backgroundImage: `radial-gradient(#fff1c0, #ffbe00)`} : {}} className="bulb"/>
                            {/* <div style={{backgroundColor: `${hoverStatemail.color}`, zIndex: 1}} className="bulb"/> */}
                            {/* <div className="lightShade"/> */}
                            {/* {hoverStatemail.state && (
                                <div className="trapezoid">
                                    <Shape
                                        // name="Trapezoid"
                                        id="trapezoid"
                                        backgroundColor="#f1a63852"
                                        width="150px"
                                        height="200px"
                                        formula="polygon(44% 0%,55% 0%,100% 100%,0% 100%)"
                                    />
                                </div>
                            )
                            } */}
                            <div 
                            className="mediaBox" 
                            onMouseEnter={()=>setHoverStatemail({state: true, color: "#f1a638"})} 
                            onMouseLeave={()=>setHoverStatemail({state: false, color: "white"})}>
                                <AiOutlineMail className="mediaIcon"/>
                            </div>
                            </div>

                            {/* four */}

                            <div className="bulbBox">
                            <div className="wire"/>
                            <div className="bulbHandler"/>
                            <div style={hoverStategithub.state ? {boxShadow: `0 0 100px 80px ${hoverStategithub.color}`, backgroundImage: `radial-gradient(#fff1c0, #5bff4b)`} : {}} className="bulb"/>
                            {/* <div style={{backgroundColor: `${hoverStategithub.color}`, zIndex: 1}} className="bulb"/> */}
                            {/* <div className="lightShade"/> */}
                            {/* {hoverStategithub.state && (
                                <div className="trapezoid">
                                    <Shape
                                        // name="Trapezoid"
                                        id="trapezoid"
                                        backgroundColor="#f206d745"
                                        width="150px"
                                        height="200px"
                                        formula="polygon(44% 0%,55% 0%,100% 100%,0% 100%)"
                                    />
                                </div>
                            )
                            } */}
                            <div 
                            className="mediaBox" 
                            onClick={()=>openInNewTab("https://github.com/Venkadeshkissflow")}
                            onMouseEnter={()=>setHoverStategithub({state: true, color: "#3cff5a"})} 
                            onMouseLeave={()=>setHoverStategithub({state: false, color: "white"})}>
                                <AiOutlineGithub className="mediaIcon"/>
                            </div>
                            </div>
            </div>
        </div>
    )
})