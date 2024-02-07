import React from "react";
import Description from './description';

function Certification({certification}) {
    const name = certification.name;
    const href = certification.href;
    const institution = certification.institution;
    const knowledgeGained = certification.knowledgeGained;
    const completeDate = certification.completeDate;

    return (
        <section className="container">
        <div className="hor-box">
          <h2 className="bold">
            <a href={href}>{name}</a>
          </h2>
          <div>
            <span>{institution + " | "} </span>
            <span>{completeDate}</span>

          </div>
        </div>
        <Description des={{ title: "Knowledge gained", description: knowledgeGained }} />
      </section>
    )
}

export default Certification;