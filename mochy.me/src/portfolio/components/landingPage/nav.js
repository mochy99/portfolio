import React, { useEffect, useState } from "react";
import { DataConsumption } from "../data";
import AboutMeIcon from "../../../img/aboutme.js";
import CerfIcon from "../../../img/certification.js";
import ContactIcon from "../../../img/contact.js"; 
import HomeIcon from "../../../img/home.js";
import ProjectIcon from "../../../img/project.js";
import SkillIcon from "../../../img/skill.js";


function Nav() {
    const data = DataConsumption();
    const nav = data.landingPage.nav;
    const [idNav, setIdNav] = useState('navRoll');
    const navIcon = [HomeIcon, AboutMeIcon, SkillIcon, CerfIcon, ProjectIcon, ContactIcon];

    return (
        <ul id={idNav}>
          {navIcon.map((Icon, i) => ( 
            <li key={i} className={`submerge${idNav === 'nav' && i === 0 ? ' disable' : ''}`}>
              {idNav !== 'nav' && <Icon />} 
              <span className='iconHover'>{nav[i]}</span>
               
            </li>
          ))}
        </ul>
      );
      
    
}

export default Nav;