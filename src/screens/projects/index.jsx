import React from "react";

import { Card } from "../../components/card";

import { DiReact } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import {FaCss3Alt} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiSocketdotio } from "react-icons/si";

import CountryHen from "../../images/projects/countryhen.png";
import ChatApplication from "../../images/projects/chatapplication.png";
import Game from "../../images/projects/game.png";
import KNCETian from "../../images/projects/kncet.jpg"


import "./styles.css"

const PROJECTS = [
    {
        TITLE: "Country Hen [ REACT NATIVE ]",
        DESCRIPTIONS: "An ecommerce application user interface is developed for the meat and eggs of countryhen with react native",
        LANGUAGES: [
            DiHtml5, 
            FaCss3Alt,
            DiReact,
        ],
        IMG: CountryHen
    },
    {
        TITLE: "KNCETians [ REACT NATIVE ]",
        DESCRIPTIONS: "In this Mobile Application which is used for building connectivity between Alumni and the college.",
        LANGUAGES: [
            DiHtml5,
            FaCss3Alt,
            DiReact,
        ],
        IMG: KNCETian
    },
    {
        TITLE: "Chat App [ Socket io ]",
        DESCRIPTIONS: "In this chat App, we can transfer messages from one to one as personally. here I use socket-io for connecting users.",
        LANGUAGES: [
            DiHtml5, 
            FaCss3Alt,
            DiJavascript1,
            FaNodeJs,
            SiSocketdotio
        ],
        IMG: ChatApplication
    },
    {
        TITLE: "Stone paper scissor game",
        DESCRIPTIONS: "Stone-Paper-Scissors is a simple game where players choose between stone, paper, or scissors, each option defeating or losing to another.",
        LANGUAGES: [
            DiHtml5, 
            FaCss3Alt,
            DiJavascript1,
        ],
        IMG: Game
    }
]

export function ProjectSection(){
    return (
        <div className="projectWrapper">
            {
                PROJECTS.map(({TITLE,DESCRIPTIONS,  LANGUAGES, IMG})=>(
                    <div className="projectSection">
                    <Card className="projectImageWrapper">
                        <img className="projectImage" alt="projectImage"  src={IMG} />
                    </Card>
                    <div className="infoWrapper">
                        <div className="fontStyle title infoSection">{TITLE}</div>
                        <div className="fontStyle descriptions infoSection">{DESCRIPTIONS}</div>
                        <div className="iconsWrapper infoSection">
                            {
                                LANGUAGES.map((Language)=><Language className="languageIcon" />)
                            }
                        </div>
                    </div>
                </div>
                ))
            }
        </div>
    )
}