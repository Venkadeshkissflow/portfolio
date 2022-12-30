import React, {useState, useLayoutEffect} from "react";

import {themeStore} from "../../store/index"

import HomeIcon from "../../images/home1.png";
import AboutIcon from "../../images/aboutnew.jpeg";
import ContactIcon from "../../images/Contact.png";
import MoonIcon from "../../images/moonicon.png";
import SunIcon from "../../images/SunIcon1.png";
import AcheivementIcon from "../../images/achievement.webp"

import "./styles.css";
import "../../commonstyle.css"

export function HeaderComponent({screenNavigations, callAboutScreen, callContactScreen}){
    const [mouseHover, setMouseHover]=useState(true);
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
                    // window.location="/" 
                    screenNavigations("homeRef")
                }}>
                    <img alt="" className="icon" src={HomeIcon} />
                </div>
                <div className={`${mouseHover ? "visibleButton" : "hiddenButton"} headerButton fontStyle`} onClick={()=>{
                    screenNavigations("aboutRef")
                }}>
                    <img alt="" className="icon" src={AboutIcon} />
                </div>
                <div className={`${mouseHover ? "visibleButton" : "hiddenButton"} headerButton fontStyle`} onClick={()=>{
                    screenNavigations("acheivementsRef")
                }}>
                    <img alt="" className="icon" src={AcheivementIcon} />
                </div>
                <div className={`${mouseHover ? "visibleButton" : "hiddenButton"} headerButton fontStyle`} onClick={()=>{
                    screenNavigations("contactRef")
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