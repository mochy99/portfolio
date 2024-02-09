import React from "react";
import { DataConsumption } from "../data";

function Nav() {
    const data = DataConsumption()
    const nav = data.landingPage.nav
    return (
        <ul id='nav'>
            {
            nav.map((section, index) => (
                <li key={index} className='submerge'>{section}</li>
            ))
            }
        </ul>
    )
}

export default Nav;