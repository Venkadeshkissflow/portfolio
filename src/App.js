import React, {useState, useRef, useLayoutEffect} from "react";

import {themeStore} from "../src/store/index";
import {THEME, THEME_LOCATION, SCREEN} from "./constant.js"

import './App.css';

import {HomeScreen} from "../src/screens/homescreen/index";
import {SkillSet} from "../src/screens/skillset/index";
import {Experiance} from "../src/screens/experiance/index.jsx"
import {HeaderComponent} from "../src/components/header/index";
import {ContactScreen} from "../src/screens/contacts/index";
import {SelfExplore} from "../src/screens/Acheivements_and_hobbies/index";


function BackgroundImage({theme}){
  return(
    <>
        <div 
           className={`
           ${THEME_LOCATION.FOREST} 
           ${theme !== THEME_LOCATION.FOREST ? "removed" : "live" } 
           backgroundImage
        `}/>
         <div 
         className={`
         ${THEME_LOCATION.HIMALAYAS} 
         ${theme !== THEME_LOCATION.HIMALAYAS ? "removed" : "live" } 
         backgroundImage
         `}/>
             <div 
         className={`
         ${THEME_LOCATION.OCEAN} 
         ${theme !== THEME_LOCATION.OCEAN ? "removed" : "live" } 
         backgroundImage
         `}></div>
             <div 
         className={`
         ${THEME_LOCATION.DESERT}
         ${theme !== THEME_LOCATION.DESERT ? "removed" : "live" }  
         backgroundImage
         `}></div>
    </>
  )
}

function App() {
    const swiperRef = useRef(null);
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const acheivementsRef = useRef(null);
    const contactRef = useRef(null); 

    const[location, setLocation] = useState(THEME_LOCATION.HIMALAYAS);
    const [mobileResolution, setMobileResolution] = useState(false)
    const bodyContainer = document.querySelector("body");

    const theme = themeStore((state) => state.theme);
    const setTheme = themeStore((state)=>state.setTheme);

    const WEB_MIN_WIDTH = 550;
    useLayoutEffect(()=>{
       let mobileResolution = swiperRef.current.clientWidth < WEB_MIN_WIDTH;
       setMobileResolution(mobileResolution)
    }, [])


    function SetThemeEvent(theme){
      setLocation(theme);
      bodyContainer.className = ""
      bodyContainer.classList.add(`${theme}background`);
      bodyContainer.classList.add(THEME.LIGHT);
      setTheme(THEME.LIGHT)
    }

    function screenNavigations(refValue){
      console.log([refValue], "ref");
      switch(refValue){
        case SCREEN.HOME: 
         return homeRef.current.scrollIntoView({behavior: "smooth"});
        case SCREEN.ABOUT: 
         return aboutRef.current.scrollIntoView({behavior: "smooth"});
        case SCREEN.ACHEIVMENTS: 
         return acheivementsRef.current.scrollIntoView({behavior: "smooth"});
        case SCREEN.CONTACT: 
         return contactRef.current.scrollIntoView({behavior: "smooth"});
        default:
          return homeRef.current.scrollIntoView({behavior: "smooth"});
      } 
    }

  return (
    <div ref={swiperRef} className={`App`}>
      <div className="screensWrapper">
      <HeaderComponent
        screenNavigations={screenNavigations}
        mobileResolution={mobileResolution}
      />
      <HomeScreen ref={homeRef} />
      <SkillSet ref={aboutRef} />
      <Experiance />
      <SelfExplore ref={acheivementsRef} mobileResolution={mobileResolution} />
      <ContactScreen ref={contactRef} mobileResolution={mobileResolution} />
      </div>
        <div className={`moonImage ${theme === THEME.LIGHT ? "moonSetDown" : "moonSetUp"}`}></div>
        <div className={`sun ${theme === THEME.LIGHT ? "sunSet" : "sunSetDown"}`}/>
        <BackgroundImage theme={location} />
        <div className="themeContainer">
        <div className="themeSwitch">
            <div id="forest" className="theme1 themeBox" onClick={()=>SetThemeEvent(THEME_LOCATION.FOREST)}/>
            <div id="himalayas" className="theme2 themeBox" onClick={()=>SetThemeEvent(THEME_LOCATION.DESERT)}/>
            <div className="theme3 themeBox" onClick={()=>SetThemeEvent(THEME_LOCATION.HIMALAYAS)}/>
            <div className="theme4 themeBox" onClick={()=>SetThemeEvent(THEME_LOCATION.OCEAN)}/>
            <div className="centrPart" />
        </div>
          <p className="fontStyle themeFontStyle">change theme</p>
        </div>
    </div>
  );
}

export default App;
