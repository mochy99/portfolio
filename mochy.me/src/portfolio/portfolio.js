import React from "react";

import "../css/portfolio.css"
import LandingPage from "./components/landingPage/landingPage";
import AboutMe from "./components/aboutMe/aboutMe";
import Skills from "./components/skills/skills";
import Certifications from "./components/certifications/certifications";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";
import { DataProvider } from "./components/data";

function Portfolio() {
    
    return (
        <DataProvider>
            <LandingPage />
            {/* <AboutMe />
            <Skills />
            <Certifications />
            <Projects />
            <Contact /> */}
        </DataProvider>
    )   
}

export default Portfolio