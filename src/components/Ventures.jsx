import React from 'react';
import './home.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const VenturesProjects = () => {
    return(
        <div>
            <Container>
            <h1> Blockchain Venture Network</h1>
                <Container className="projectDetails">
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