import React from "react";

import {Card} from "../../components/card/index"

import "./styles.css";
import "../../commonstyle.css"

export function ProjectScreen(){
    return(
        <div className="projectContainer">
            <Card className="projectCard">
                <div className="projectIcon"/>
                <div className="projectDetailsContainer">
                    <p className="fontTitleStyle">Title</p>
                    <p className="fontStyle">Descriptions DescriptionsDescriptionsDescriptionsDescriptions
                    DescriptionsDescriptionsDescriptionsDescriptionsDescriptionsDescriptions</p>
                </div>
            </Card>
            <Card className="projectCard">
                <div className="projectIcon"/>
                <div className="projectDetailsContainer">
                    <p className="fontTitleStyle">Title</p>
                    <p className="fontStyle">Descriptions DescriptionsDescriptionsDescriptionsDescriptions
                    DescriptionsDescriptionsDescriptionsDescriptionsDescriptionsDescriptions</p>
                </div>
            </Card>
            <Card className="projectCard">
                <div className="projectIcon"/>
                <div className="projectDetailsContainer">
                    <p className="fontTitleStyle">Title</p>
                    <p className="fontStyle">Descriptions DescriptionsDescriptionsDescriptionsDescriptions
                    DescriptionsDescriptionsDescriptionsDescriptionsDescriptionsDescriptions</p>
                </div>
            </Card>
            <Card className="projectCard">
                <div className="projectIcon"/>
                <div className="projectDetailsContainer">
                    <p className="fontTitleStyle">Title</p>
                    <p className="fontStyle">Descriptions DescriptionsDescriptionsDescriptionsDescriptions
                    DescriptionsDescriptionsDescriptionsDescriptionsDescriptionsDescriptions</p>
                </div>
            </Card>
        </div>
    )
}