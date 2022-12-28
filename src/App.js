import React, {useState, useEffect, useRef, useLayoutEffect} from "react";
import Snowfall from 'react-snowfall'

import {themeStore} from "../src/store/index";
import {THEME, THEME_LOCATION} from "./constant.js"

import './App.css';

import {HomeScreen} from "../src/screens/homescreen/index";
// import {ProjectScreen} from "../src/screens/projects/index";
// import {SkillsScreen} from "../src/screens/skillscreen/index";
import {AboutScreen} from "../src/screens/aboutscreen/index";
import {HeaderComponent} from "../src/components/header/index";
import {ContactScreen} from "../src/screens/contacts/index";
import {SelfExplore} from "../src/screens/Acheivements_and_hobbies/index"

// function BackgroundImage({theme}){
//   console.log(theme)
//   switch(theme){
//     case THEME_LOCATION.FOREST: 
//       return (
//         <>
//           <div 
//           className={`
//           ${THEME_LOCATION.FOREST} 
//           ${theme !== THEME_LOCATION.FOREST ? "removed" : "" } 
//           backgroundImage
//           `}/>
//         </>
//       );
//     case THEME_LOCATION.HIMALAYAS:
//       return (
//         <div 
//         className={`
//         ${THEME_LOCATION.HIMALAYAS} 
//         ${theme !== THEME_LOCATION.HIMALAYAS ? "removed" : "" } 
//         backgroundImage
//         `}/>
//       )
//     case THEME_LOCATION.OCEAN:
//       return(
//         <div 
//         className={`
//         ${THEME_LOCATION.OCEAN} 
//         ${theme !== THEME_LOCATION.OCEAN ? "removed" : "" } 
//         backgroundImage
//         `}></div>
//       )
//     case THEME_LOCATION.DESERT:
//       return(
//         <div 
//         className={`
//         ${THEME_LOCATION.DESERT}
//         ${theme !== THEME_LOCATION.DESERT ? "removed" : "" }  
//         backgroundImage
//         `}></div>
//       )
//     default:
//         return (
//           <div 
//           className={`
//           ${THEME_LOCATION.HIMALAYAS} 
//           backgroundImage
//           `}></div>
//         )
//   }
// }

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
    }

  return (
    <div ref={swiperRef} className={`App`}>
            <HeaderComponent/>
      <HomeScreen />
      {/* <SkillsScreen/> */}
      {/* <ProjectScreen /> */}
      <AboutScreen />
      {<SelfExplore mobileResolution={mobileResolution} />}
      <ContactScreen />
      <Snowfall
            style={{
                position: 'fixed',
                width: '100vw',
                height: '100vh'
            }}
        />
        {/* <div className={`moonImage ${theme === "light" ? "moonSetDown" : "moonSetUp"}`}/> */}
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
          <p className="fontStyle homeScreenfonts">change theme</p>
        </div>
    </div>
  );
}

export default App;
