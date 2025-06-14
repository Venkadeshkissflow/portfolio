import React from "react";

import { Card } from "../../components/card";

import { DiReact } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiSocketdotio } from "react-icons/si";

import CountryHen from "../../images/projects/countryhen.png";
import ChatApplication from "../../images/projects/chatapplication.png";
import Game from "../../images/projects/game.png";
import Vimerza from "../../images/projects/vimerza.jpg";
import KNCETian from "../../images/projects/kncet.jpg";

import "./styles.css";

const PROJECTS = [
  {
    TITLE: "Vimerza learning platform",
    DESCRIPTIONS:
      "Vimerza is a platform for learning cultural courses, and I contributed as one of the developers on this project.",
    LANGUAGES: [FaCss3Alt, DiReact],
    IMG: Vimerza,
  },
  {
    TITLE: "Chat App [ Socket io ]",
    DESCRIPTIONS:
      "In this chat App, we can transfer messages from one to one as personally. here I use socket-io for connecting users.",
    LANGUAGES: [FaCss3Alt, DiReact, FaNodeJs, SiSocketdotio],
    IMG: ChatApplication,
  },
  {
    TITLE: "Stone paper scissor game",
    DESCRIPTIONS:
      "Stone-Paper-Scissors is a simple game where players choose between stone, paper, or scissors, each option defeating or losing to another.",
    LANGUAGES: [FaCss3Alt, DiReact],
    IMG: Game,
  },
  {
    TITLE: "KNCETians [ REACT NATIVE ]",
    DESCRIPTIONS:
      "In this Mobile Application which is used for building connectivity between Alumni and the college.",
    LANGUAGES: [FaCss3Alt, DiReact],
    IMG: KNCETian,
  },
];

export function ProjectSection() {
  const [showProjects, setShowProjects] = React.useState(false);
  return (
    <div className="projectContainer">
      <Card className="projectCard">
        <p className="fontStyle homeScreenfonts helloText header">
          Educations 📚
        </p>
        <div className="educationWrapper">
          <p className="fontStyle homeScreenfonts ">
            Kongunadu College of Engineering and Technology
          </p>
          <p className="fontStyle homeScreenfonts degree">
            BE - Electronics and Communication Engineering
          </p>
          <p className="fontStyle homeScreenfonts role">CGPA - 7.89</p>
          <p className="fontStyle homeScreenfonts year">2017 - 2021</p>
        </div>

        <p className="fontStyle homeScreenfonts projectTitle">
          Projects
          <div />
        </p>

        {/* <div className="projectWrapper"> */}
        <div className="projectsWrapper">
          {PROJECTS.map(({ TITLE, DESCRIPTIONS, LANGUAGES, IMG }) => (
            <div className="projectSection">
              <Card className="projectImageWrapper">
                <img className="projectImage" alt="projectImage" src={IMG} />
              </Card>
              <div className="infoWrapper">
                <div className="fontStyle title infoSection">{TITLE}</div>
                <div className="fontStyle descriptions infoSection">
                  {DESCRIPTIONS}
                </div>
                <div className="iconsWrapper infoSection">
                  {LANGUAGES.map((Language) => (
                    <Language className="languageIcon" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* </div> */}
      </Card>
    </div>
  );
}
