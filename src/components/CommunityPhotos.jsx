import React from 'react';
import './home.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Row';

const styles = {
    mainImage: {
        'width': '90%',
        'height': '50%',
        'align': 'center',
        'display': 'block',
        'margin-left': 'auto',
        'margin-right': 'auto',
        'padding': '15px 0px 15px 0px',
        // 'object-fit': 'contain',
        // 'display': 'flex',
        // 'flex-direction': 'column',
        // 'justify-content': 'center',
        // 'align-items': 'center',
    },
    colWidth: {
        'align': 'center',
        'display': 'block',
        'margin-left': 'auto',
        'margin-right': 'auto',
        'padding': '15px 0px 15px 0px',
    },
    secondaryImages: {
        // 'display': 'flex',
        // 'flex-direction': 'column',
        // 'justify-content': 'center',

        // 'display': 'flex',
        // 'flex-direction': 'column',
        // 'flex-basis': '100%',
        // 'flex': '1',
        'width': '50%',
    },
    textAlign: {
        'text-align': 'center',
        color: 'aliceblue',
    }
}


const CommunityPhotos = () => {
    return (
        <div>
        <Container className="community">
            <Container>
                <Row md= "auto"> <img alt="ttt" style={styles.mainImage} src="https://user-images.githubusercontent.com/16810128/55327565-4e45d280-54c5-11e9-9b82-8e1470743776.png"/></Row>
                <Row>
                    <Col md="auto" style={styles.textAlign}>Tenzorum: Seamless <br></br> Blockchain UX</Col>
                    <Col md="auto" style={styles.textAlign}>Tenzorum: Seamless <br></br> Blockchain UX</Col>
                </Row>
            </Container>
        </Container>
        </div>
    )
}

export default CommunityPhotos;