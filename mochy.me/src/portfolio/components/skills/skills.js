import React from "react";
import { DataConsumption } from "../data";
function Skills(props) {
    const data = DataConsumption();
    const programming = data.skills.programming.array;
    const tools = data.skills.tools.array;


}

export default Skills