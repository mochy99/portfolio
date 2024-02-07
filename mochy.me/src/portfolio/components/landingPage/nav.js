import React from "react";

function Nav() {
    const nav = require('../../softwareEngineer.json') // data structure is array
    console.log(nav)
    return (
        <ul id='nav'>
            {
            nav.landingPage.nav.map((section, index) => (
                <li key={index} className='submerge'>{section}</li>
            ))
            }
        </ul>
    )
}

export default Nav;