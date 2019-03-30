import React from 'react';
import './home.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const FirstPage = () => {
    return(
        <Container>
            <Row>
                <Col className="homeMain" sm={6}>
                    <h1> Blockchain <br></br>Ventures.</h1>
                    <div className="emailSignUp">

                    </div>
                </Col>
                <Col className="heroImage" sm={6}>
                    <img alt="ttt" src="https://user-images.githubusercontent.com/16810128/55221495-f13fe780-524c-11e9-8d61-f01a1481c824.jpeg"/> 
                </Col>
            </Row>
    </Container>
    )
}

export default FirstPage;