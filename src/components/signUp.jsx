import React from 'react';
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Row';


const styles = {
    h1: {
        color: 'aliceblue',
        'text-align': 'center',
    },
    boxRow: {
        'padding-top': '20px',
        'padding-bottom': '20px',
    },
    boxEmail: {
        'width': '150px',
        'height':'70px',
        'align': 'center',
        'margin': '0 auto',
        'text-align': 'center',
        'padding': '20px 20px 20px 20px',
        'border-radius': '15px 15px 15px 15px',
        'background': '#de00df',
        'color': 'aliceblue',
        'font-weight': 'bold',
    },
    a: {
        'color': 'aliceblue',
        'text-decoration': 'none',
    }
}

const SignUp = () => {
    return(
        <Container style={styles.boxRow}>
            <h1 style={styles.h1} > Get in touch</h1>
            <div style={styles.boxEmail}> <a href="/contact" style={styles.a}>Contact Us</a> </div>
        </Container>

    )

}

export default SignUp;