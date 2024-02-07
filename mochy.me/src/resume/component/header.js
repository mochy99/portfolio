import React from 'react';

function Header({ personalInf, externalLinks }) {
    return (
        <header className="container">
            <div id="position">{personalInf.position}</div>
            <h1>{personalInf.name}</h1>
        
            <ul className="hor-box">
                <li>{personalInf.city} </li>
                <li>{personalInf.mail}</li>
                <li>{personalInf.phone}  </li>
            </ul>
            <ul className="hor-box">
                <li><a href="http://mochy.me">My Portfolio</a> </li>
                <li><a href="https://www.linkedin.com/in/thao-nguyen-huynh-thanh-919475221/">My LinkedIn</a></li>
                <li><a href="https://github.com/mochy99">My Github</a></li>
            </ul>
        </header>
    );
}

export default Header;
