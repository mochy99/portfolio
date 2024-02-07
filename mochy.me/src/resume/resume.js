import React from 'react';
import '../css/resume.css'
import Header from './component/header'
import Description from './component/description';
import Project from './component/project';
import Education from './component/education';
import Certification from './component/certification';
import Experience from './component/experience';
function Resume() {
    // Declare constants
    const resumeData = require('./software.json');
    const projects = resumeData.projects;
    const universities = resumeData.education;
    const certifications = resumeData.certifications;
    const experience = resumeData.experience;
    const leadership = resumeData.leadership


    return (
        <>
            <Header personalInf={resumeData.personalInformation} externalLinks={resumeData.externalLinks} />  

            <section className='container'>
                <h1 className='title bold'>{resumeData.sections[0]}</h1>
                <section>
                    <Description des={resumeData.skills.programming}/>
                    <Description des={resumeData.skills.frameworksLibrariesTools}/>
                </section>
                {projects.map((project) => (<Project project={project} />))}
            </section>

            <section className='container'>
                <h1 className='tille bold'>{resumeData.sections[1]}</h1>
                {universities.map((university) => (<Education university={university}/>))}
            </section>

            <section className='contaner'>
                <h1 className='tille bold'>{resumeData.sections[2]}</h1>
                {certifications.map((certification) => (<Certification certification={certification}/>))}
            </section>

            <section className='container'>
                <h1 className='tille bold'>{resumeData.sections[3]}</h1>
                {experience.map((exp) => (<Experience exp={exp}/>))}
            </section>

            <section className='container'>
                <h1 className='tille bold'>{resumeData.sections[4]}</h1>
                {leadership.map((leader) => (<Experience exp={leader}/>))}
            </section>
        </>
        
    );
}

export default Resume;  // Export the component