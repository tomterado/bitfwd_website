import React from 'react';
import './home.css';

const styles = {
    footer: {
        padding: '36px 0',
        background: '#03f4c6',
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
        borderTop: '1px solid #1D2227'
      }
}

const Footer = () => {
    return (
        <footer style={styles.footer}> 
            <p> © bitfwd Community 2019 </p>
        </footer>
    )
}

export default Footer;