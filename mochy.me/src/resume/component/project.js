import React from 'react';
import Description from './description';
function Project({project}) {
    const title = project.title;
    const href = project.href;
    const description = project.description;
    const techniques = project.techniques;
    const highlights = project.highlights;

    return (
        <section className="container">
        <div className="hor-box">
          <h2 className="project">
            <a href={href}>{title}</a>
          </h2>
        </div>
        
        <div className="description">{description}</div>
        <Description des={{ title: "Techniques", description: techniques }} />
        <Description des={{ title: "Highlights", description: highlights }} />

        
      </section>
    );
}

export default Project;