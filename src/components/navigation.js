import React from 'react';
import {NavLink} from 'react-router-dom';
import './navigation.css';

const Navigation = () => {
    return (
    <div className="navBar">
        
        <div className="topnavleft">
             <a href="/" title="bitfwd community"> 
                <img alt="" width="50px" height="50px" src="https://www.ycombinator.com/images/ycombinator-logo-fb889e2e.png"/> 
             </a>
        </div>

        <div className="topnavright">
            <a href="https://medium.com/bitfwd"> Blog</a>
            <a href="https://www.meetup.com/bitfwd/"> Events</a>
            <a href="http://bitfwd.com/sydney-blockathon/"> Blockathon</a>
            <NavLink to="/contact" > Contact</NavLink>
        </div>
    </div>
    )
}

export default Navigation
