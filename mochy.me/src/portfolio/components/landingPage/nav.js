import React, { useEffect, useState } from "react";
import { DataConsumption } from "../data";
import AboutMeIcon from "../../../img/aboutme.js";
import CerfIcon from "../../../img/certification.js";
import ContactIcon from "../../../img/contact.js"; 
import HomeIcon from "../../../img/home.js";
import ProjectIcon from "../../../img/project.js";
import SkillIcon from "../../../img/skill.js";


function Nav({idNav}) {
    const data = DataConsumption();
    const nav = data.landingPage.nav;
    const navIcon = [HomeIcon, AboutMeIcon, SkillIcon, CerfIcon, ProjectIcon, ContactIcon];
    const [index, setIndex] = useState(null);
    

    return (
        <ul className={idNav} >
            {navIcon.map((Icon, i) => ( 
                <li
                    key={i}
                    className={`submerge${idNav === 'nav' && i === 0 ? ' disable' : ''}${i === index ? ' navHovered' : ''}`}

                    onMouseEnter={() => setIndex(i)}
                    onMouseLeave={() => setIndex(null)}
                    
                >

                    {idNav !== 'nav' && <Icon />} 

                    <span
                        key={i}
                        className={`${idNav === 'navRoll' ? 'iconHover' : ''} ${ i == index ? 'hovered' : ''}`}
                    >
                        {nav[i]}
                    </span>
                
                </li>
            ))}
        </ul>
    );
      
    
}

export default Nav;
