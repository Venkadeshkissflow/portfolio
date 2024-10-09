import React, {useState, useRef, useLayoutEffect} from "react";

import {themeStore} from "../src/store/index";
import {THEME, THEME_LOCATION, SCREEN} from "./constant.js"

import './App.css';

import {HomeScreen} from "../src/screens/homescreen/index";
import {SkillSet} from "../src/screens/skillset/index";
import {Experiance} from "../src/screens/experiance/index.jsx"
import {HeaderComponent} from "../src/components/header/index";
import {SelfExplore} from "../src/screens/Acheivements_and_hobbies/index";
import {ProjectSection} from "../src/screens/projects/index.jsx"


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
      <ProjectSection />
      <Experiance />
      <SelfExplore ref={acheivementsRef} mobileResolution={mobileResolution} />
      </div>
        <div className={`moonImage ${theme === THEME.LIGHT ? "moonSetDown" : "moonSetUp"}`}></div>
        <div className={`sun ${theme === THEME.LIGHT ? "sunSet" : "sunSetDown"}`}/>
    </div>
  );
}

export default App;
