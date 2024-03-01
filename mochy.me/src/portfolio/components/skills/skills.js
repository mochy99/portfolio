import React from "react";
import { DataConsumption } from "../data";
import Skill from "./skill";
function Skills(props) {
    const data = DataConsumption();
    const programming = data.skills.programming.array;
    const tools = data.skills.tools.array;
    return (
        <>
            {programming.map((skill) => (
                <Skill value={skill} />
            ))}
    
            {tools.map((tool) => (
                <Skill  />
            ))}
        </>
        
        
    )
    
}

export default Skills