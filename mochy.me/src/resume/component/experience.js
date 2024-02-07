import React from 'react';
import Description from './description';
function Experience({exp}) {
    const organization = exp.organization;
    const location = exp.location;
    const position = exp.position;
    const startDate = exp.startDate;
    const endDate = exp.endDate;
    const keySkills = exp.keySkills;
    return (
        <section className="container">
        <div className="hor-box">
          <h2 className="bold">{organization}</h2>
          <div>{location}</div>
        </div>
        <div className="hor-box">
          <div className="bold">{position}</div>
          <div className="time">{startDate + " - " + endDate}</div>
        </div>
       
        <Description des={{ title: "Key skills", description: keySkills }} />
        
      </section>
    )

}
export default Experience;