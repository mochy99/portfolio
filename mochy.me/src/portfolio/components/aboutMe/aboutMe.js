import React from "react";
import { DataConsumption } from "../data";
function AboutMe(props) {
    const dataAboutMe = DataConsumption().aboutMe;
    const name = dataAboutMe.name;
    const bio = dataAboutMe.bio;
    const aspiration = dataAboutMe.aspiration;
    const hobbies = dataAboutMe.hobbies;



    return (
        <div className="container">
            <section id='aboutme' class='floaty'>
                <h1>{name}</h1>
                <p id='bio'>{bio}</p>
                <p id='asp'>{aspiration}</p>
            </section>
        </div>
        
    )

}

export default AboutMe