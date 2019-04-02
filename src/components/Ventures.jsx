import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const styles = {
    h1: {
        color: 'aliceblue',
    },
    logo: {
        'padding-top': '10px',
        'padding-right': '10px',
        'float': 'left',
    },
    textAlign: {
        'text-align': 'left',
    },
}

const VenturesProjects = () => {
    return(
        <div>
            <Container>
            <h1 style={styles.h1}> Blockchain Venture Network</h1>
                <Container className="projectDetails">
                    <Row>
                        <Col sm className="projectDetailsBox" style={styles.textAlign}>
                            <div style={styles.logo}>
                                <img alt="" width="75px" height="75px" src="https://www.ycombinator.com/images/ycombinator-logo-fb889e2e.png"/>
                            </div>
                            <br></br>
                            Tenzorum: Seamless <br></br> Blockchain UX
                        </Col>
                        <Col sm className="projectDetailsBox" style={styles.textAlign}>
                            <div style={styles.logo}>
                                <img alt="" width="75px" height="75px" src="https://www.ycombinator.com/images/ycombinator-logo-fb889e2e.png"/>
                            </div>
                            <br></br>
                            Tenzorum: Seamless <br></br> Blockchain UX
                        </Col>
                        <Col sm className="projectDetailsBox" style={styles.textAlign}>
                            <div style={styles.logo}>
                                <img alt="" width="75px" height="75px" src="https://www.ycombinator.com/images/ycombinator-logo-fb889e2e.png"/>
                            </div>
                            <br></br>
                            Tenzorum: Seamless <br></br> Blockchain UX
                        </Col>
                    </Row>
                    <Row>
                        <Col sm className="projectDetailsBox">Tenzorum: Seamless <br></br> Blockchain UX</Col>
                        <Col sm className="projectDetailsBox">Tenzorum: Seamless <br></br> Blockchain UX</Col>
                        <Col sm className="projectDetailsBox">Tenzorum: Seamless <br></br> Blockchain UX</Col>
                    </Row>
                    <Row>
                        <Col sm className="projectDetailsBox">Tenzorum: Seamless <br></br> Blockchain UX</Col>
                        <Col sm className="projectDetailsBox">Tenzorum: Seamless <br></br> Blockchain UX</Col>
                        <Col sm className="projectDetailsBox">Tenzorum: Seamless <br></br> Blockchain UX</Col>
                    </Row>
                </Container>
            </Container>
        </div>

    )
}

export default VenturesProjects;