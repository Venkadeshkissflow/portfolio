import React from "react";

import { Card } from "../../components/card/index";

import Award from "../../images/supportive_images/awards.png";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import "./styles.css";

import "../../commonstyle.css";

const AWARDS = [
  {
    awardTitle: "Star Performer",
    awardFunction: "BO Award - 2022 (Kissflow)",
  },
  {
    awardTitle: "Engineering Rockstar",
    awardFunction: "ALTIUS - 2023 (Kissflow)",
  },
  {
    awardTitle: "Best Performer of Quarter",
    awardFunction: "Internal Team Recognition, 2024",
  },
];

export const SelfExplore = () => {
  return (
    <div className="awardsWrapper">
      <div className="trophyWrapper">
        {AWARDS.map(({ awardTitle, awardFunction }) => (
          <div className="awardWrapper">
            <img className="awardImage" alt="award" src={Award} />
            <Card className="projectCard">
              <div className="fontStyle awardTitle">{awardTitle}</div>
              <div className="fontStyle awardTitle">{awardFunction}</div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};
