
import React from "react";

import {Card} from "../../components/card/index";

import Kissflow from "../../images/kissflow.gif";
import Aspire from "../../images/Aspire.png";
import Rocket from "../../images/rocket.png";
import AstroFly from "../../images/astrofly.png"

import "./styles.css";
import "../../commonstyle.css"

const experianceList = [
    {
        company: "Aspire",
        role: "intern",
        companyLogo: Aspire,
    },
    {
          company: "Kissflow",
        role: "Associative Software Engineer",
          companyLogo: Kissflow,
    },
    {
        company: "Kissflow",
      role: "Software Engineer",
         companyLogo: Kissflow,
  },
  {
    company: "Kissflow",
  role: "Senior Software Engineer",
       companyLogo: Kissflow,
}
]

export const Experiance = React.forwardRef((props, ref)=>{
    return (
        <div className="experianceCardWrapper">
        <Card className="experianceCard">
            <img className="astronut" alt="astro-fly" src={AstroFly} />
                <div className="experianceWrapper">
                {
                    experianceList.map(({role, companyLogo}, index)=>(
                        <div className="experianceBox" id={`${role}-${index}`}>
                            <div class="flagWrapper">
                                <img className="companyLogo" src={companyLogo} alt=""/>
                            </div>
                            <div className="fontStyle">{role}</div>
                        </div>
                    ))
                }
                </div>
             
                <div class="container">    
                    <div class="progress progress-striped">
                        <div class="progress-bar"></div>
                            <div className="rocketWrapper">
                            <img alt="rocket" className="rocketImg" src={Rocket}/> 
                            </div>
                    </div> 
                </div>
        </Card>
        </div>
    )
})