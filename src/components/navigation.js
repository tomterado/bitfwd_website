import React from 'react';
import {NavLink} from 'react-router-dom';
import './navigation.css';
import Container from 'react-bootstrap/Container';

const styles = {
    ul: {
        'list-style-type': 'none',
        'margin': '0',
        'padding': '0',
        'overflow': 'hidden',
    },
    li: {
        'float': 'right',
        'padding-left': '20px',
        'padding-top': '10px',
        'font-size': '25px',
        'text-decoration': 'none',
        'fontWeight': 'bold',
    },
    a: {
        'color': 'white',
        'text-decoration': 'none',
    },
    logo: {
        'float': 'left',
        'padding-left': '20px',
    },
}


const Navigation = () => {
    return (
    <div className="navBar">
        <Container className="topnavleft">
            <ul style={styles.ul}>
                <li style={styles.logo}> <a href="/" title="bitfwd community"><img alt="" width="50px" height="50px" src="https://www.ycombinator.com/images/ycombinator-logo-fb889e2e.png"/></a> </li>
                <li style={styles.li}> <NavLink style={styles.a} to="/contact" > Contact</NavLink> </li>
                <li style={styles.li}> <a style={styles.a} href="http://bitfwd.com/sydney-blockathon/"> Blockathon</a> </li>
                <li style={styles.li}> <a style={styles.a} href="https://www.meetup.com/bitfwd/"> Events</a> </li>
                <li style={styles.li}> <a style={styles.a} href="https://medium.com/bitfwd"> Blog</a> </li>
            </ul>

        </Container>

    </div>
    )
}

export default Navigation
