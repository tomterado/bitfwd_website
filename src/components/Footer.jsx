import React from 'react';
import './home.css';

const styles = {
    footer: {
        padding: '20px 20px',
        background: '#03f4c6',
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
        borderTop: '1px solid #1D2227',
        'fontWeight': 'bold',
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