import React, {useState, useLayoutEffect} from "react";

import {themeStore} from "../../store/index"

import HomeIcon from "../../images/home1.png";
import AboutIcon from "../../images/Search3.jpeg";
import ContactIcon from "../../images/Contact.png";
import MoonIcon from "../../images/moonicon.png";
import SunIcon from "../../images/SunIcon1.png";

import "./styles.css";
import "../../commonstyle.css"

export function HeaderComponent(){
    const [mouseHover, setMouseHover]=useState(false);
    const theme = themeStore((state) => state.theme);
    const setTheme = themeStore((state)=>state.setTheme);
    const bodyContainer = document.querySelector("body");

    useLayoutEffect(()=>{
        bodyContainer.classList.add("light");
    }, [])

    function onMouseHover(){
        setMouseHover(true)
    }
    function onMouseLeave(){
        setMouseHover(false)
    }

    function setThemeEvent(){
        if(theme === "light"){
            bodyContainer.className = ""
            setTheme("dark");
            bodyContainer.classList.add("dark");
        }else {
            setTheme("light");
            bodyContainer.classList.remove("dark");
            bodyContainer.classList.add("light");
        }
    }

    return (
        <div onMouseOver={onMouseHover} onMouseLeave={onMouseLeave} className="outerContainer">
        <div className={`${mouseHover ? "visible" : "hidden"} headerOuterContainer`}>
                <div className={`${mouseHover ? "visibleProfile" : "hiddenProfile"} profileIcon headerButton fontStyle`}/> 
                <div className={`${mouseHover ? "visibleButton" : "hiddenButton"} headerButton fontStyle`} onClick={()=>{
                    window.location="/"
                }}>
                    <img alt="" className="icon" src={HomeIcon} />
                </div>
                <div className={`${mouseHover ? "visibleButton" : "hiddenButton"} headerButton fontStyle`} onClick={()=>{
                    window.location="/about"
                }}>
                    <img alt="" className="icon" src={AboutIcon} />
                </div>
                {/* <div className={`${mouseHover ? "visibleButton" : "hiddenButton"} headerButton fontStyle`} onClick={()=>{
                    window.location="/projects"
                }}/> */}
                {/* <div className="headerButton" onClick={()=>{
                    window.location="/about"
                }}>Profile</div> */}
                <div className={`${mouseHover ? "visibleButton" : "hiddenButton"} headerButton fontStyle`} onClick={()=>{
                    window.location="/contact"
                }}>
                    <img alt="" className="icon" src={ContactIcon} />
                </div>
                <div className={`${mouseHover ? "visibleButton" : "hiddenButton"} headerButton theme`} onClick={setThemeEvent} >
                    {theme === "light" ? 
                        <img alt="themeIconSun" className="themeIcon icon" src={SunIcon} /> : 
                        <img alt="themeIconMoon" className="themeIcon icon" src={MoonIcon}/>
                    }
                </div>
        </div>
        </div>
    )
}