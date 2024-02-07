import React from "react";

function Education({university}) {
    const name = university.institution;
    const location = university.location;
    const degree = university.degree;
    const completeDate = university.completeDate;

    return (
        <section className="container">
        <div className="hor-box">
          <h2 className="bold">{name}</h2>
          <div>{location}</div>
        </div>
        <div className="hor-box">
          <div className="">{degree}</div>
          <div className="time">{completeDate}</div>
        </div>
        
      </section>
    )
        
}

export default Education;