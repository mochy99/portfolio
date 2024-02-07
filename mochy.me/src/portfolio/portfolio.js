import React from "react";

import "../css/portfolio.css"
import LandingPage from "./components/landingPage/landingPage";
import AboutMe from "./components/aboutMe/aboutMe";
import Skills from "./components/skills/skills";
import Certifications from "./components/certifications/certifications";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";


function Portfolio() {
    
    return (
        <>
            <LandingPage />
            {/* <AboutMe />
            <Skills />
            <Certifications />
            <Projects />
            <Contact /> */}
        </>
    )   
}

export default Portfolio