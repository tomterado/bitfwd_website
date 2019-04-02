import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const styles = {
    textColor: {
        color: 'aliceblue',
    },
    textAlign: {
        'text-align': 'center',
        color: 'aliceblue',
    }
}

const ResearchVentures = () => {
    return(
        <div>
            <Container>
            <h1 style={styles.textColor}> Research Network</h1>
                <Container>
                    <Row>
                        <Col style={styles.textAlign}>Tenzorum: Seamless <br></br> Blockchain UX</Col>
                        <Col style={styles.textAlign}>Tenzorum: Seamless <br></br> Blockchain UX</Col>
                        <Col style={styles.textAlign}>Tenzorum: Seamless <br></br> Blockchain UX</Col>
                    </Row>
                </Container>
            </Container>
        </div>
    )
}

export default ResearchVentures;