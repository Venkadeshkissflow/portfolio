import React, {useState, useLayoutEffect} from "react";

import {themeStore} from "../../store/index";
import {THEME,SCREEN} from "../../constant"

import HomeIcon from "../../images/home1.png";
import AboutIcon from "../../images/aboutnew.jpeg";
import ContactIcon from "../../images/Contact.png";
import MoonIcon from "../../images/moonicon.png";
import SunIcon from "../../images/SunIcon1.png";
import AcheivementIcon from "../../images/achievement.webp";
import Logo from "../../images/logo.png";

import "./styles.css";
import "../../commonstyle.css"

export function HeaderComponent({screenNavigations, mobileResolution}){
    const [mouseHover, setMouseHover]=useState(true);
    const theme = themeStore((state) => state.theme);
    const setTheme = themeStore((state)=>state.setTheme);
    const bodyContainer = document.querySelector("body");

    useLayoutEffect(()=>{
        bodyContainer.classList.add(THEME.DARK);
    }, [])

    function onMouseHover(){
        if(!mobileResolution){
            setMouseHover(true)
        }
    }
    function onMouseLeave(){
        if(!mobileResolution){
            setMouseHover(false)
        }
    }

    function setThemeEvent(){
        if(theme === THEME.LIGHT){
            bodyContainer.className = ""
            setTheme(THEME.DARK);
            bodyContainer.classList.add(THEME.DARK);
        }else {
            setTheme(THEME.LIGHT);
            bodyContainer.classList.remove(THEME.DARK);
            bodyContainer.classList.add(THEME.LIGHT);
        }
    }

    return (
        <div onMouseOver={onMouseHover} onMouseLeave={onMouseLeave} className="outerContainer">
            <div className={`${mouseHover ? "visible" : "hidden"} headerOuterContainer`}>
                <div className={`${mouseHover ? "visibleProfile" : "hiddenProfile"} profileIcon headerButton fontStyle logo`}>
                <img alt="" className="icon" src={Logo} />
                </div>
                <div className={`${mouseHover ? "visibleButton" : "hiddenButton"} headerButton fontStyle`} onClick={()=>{
                    // window.location="/" 
                    screenNavigations(SCREEN.HOME)
                }}>
                    <img alt="" className="icon" src={HomeIcon} />
                </div>
                <div className={`${mouseHover ? "visibleButton" : "hiddenButton"} headerButton fontStyle`} onClick={()=>{
                    screenNavigations(SCREEN.ABOUT)
                }}>
                    <img alt="" className="icon" src={AboutIcon} />
                </div>
                <div className={`${mouseHover ? "visibleButton" : "hiddenButton"} headerButton fontStyle`} onClick={()=>{
                    screenNavigations(SCREEN.ACHEIVMENTS)
                }}>
                    <img alt="" className="icon" src={AcheivementIcon} />
                </div>
                <div className={`${mouseHover ? "visibleButton" : "hiddenButton"} headerButton fontStyle`} onClick={()=>{
                    screenNavigations(SCREEN.CONTACT)
                }}>
                    <img alt="" className="icon" src={ContactIcon} />
                </div>
                <div className={`${mouseHover ? "visibleButton" : "hiddenButton"} headerButton theme`} onClick={setThemeEvent} >
                    {theme === THEME.LIGHT ? 
                        <img alt="themeIconSun" className="themeIcon icon" src={SunIcon} /> : 
                        <img alt="themeIconMoon" className="themeIcon icon" src={MoonIcon}/>
                    }
                </div>
            </div>
        </div>
    )
}