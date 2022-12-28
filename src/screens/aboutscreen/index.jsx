import React from "react";

import {Card} from "../../components/card/index";

import Kissflow from "../../images/kissflow.gif";
import Aspire from "../../images/Aspire.png"

import { DiReact } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import {FaCss3Alt} from "react-icons/fa"

import "./styles.css";
import "../../commonstyle.css"

export function AboutScreen(){
    return(
        <div className="aboutScreenContainer">
            <Card className="aboutScreenCard">
            <div>
                <p className="fontStyle fontTitleStyle">About</p>
                <p className="fontStyle">
                    Hi, I'm Venkadesh S, a self-taught passionate FrontEnd developer from India, 
                    currently working at Kissflow 🦋 as a FrontEnd engineer.I passionately combine 
                    good design, technology, and innovation in all my projects, My goal is to build 
                    highly performant applications that solve real-world problems and provide users with an awesome experience.
                </p>

                <div className="skillsBoard">
                <p className="fontStyle fontTitleStyle skills">Skill Sets</p>
                <div>
                <span className="IconContainer reactIcon">
                        <DiReact className="Icon"/>
                    </span>
                    <span className="IconContainer jsIcon">
                        <DiJavascript1 className="Icon"/>
                    </span>
                    <span className="IconContainer htmlIcon">
                        <DiHtml5 className="Icon"/>
                    </span>
                    <span className="IconContainer cssIcon">
                        <FaCss3Alt className="Icon"/>
                    </span>
                </div>
                </div>
            </div>

            <div>
                <p className="fontStyle fontTitleStyle">Experiances</p>
                <div className="overallExperiance">
                    <div className="firstPart start">
                        <div className="exp-circle">
                           <div className="starttingPoint"></div>
                        </div>
                        <p className="exp-line fontStyle">intern</p>
                    </div>
                    <div className="secondPart">
                        <div className="exp-circle">
                        <img className="companyimages" src={Aspire} alt=""/>
                        </div>
                        <p className="exp-line fontStyle">Asociative Software Engineer</p>
                    </div>
                    <div className="ThirdPart">
                        <div className="exp-circle">
                        <img className="companyimages" src={Kissflow} alt=""/>
                        </div>
                        <p className="exp-line fontStyle">Software Engineer</p>
                    </div>
                    <div className="FourthPart">
                        <div className="exp-circle">
                        <img className="companyimages" src={Kissflow} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            </Card>
        </div>
    )
}