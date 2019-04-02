import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Row';


const styles = {
    h1: {
        color: 'aliceblue',
        'padding-top': '20px',
        'padding-bottom': '20px',
    },
}

const Team = () => {
        return(
            <div>
                <Container>
                <h1 style={styles.h1}> Team</h1>
                    <Container>
                        <Row>
                            <Col >Daniel Bar </Col>
                            <Col >Daniel Bar </Col>
                            <Col >Daniel Bar </Col>
                        </Row>
                    </Container>
                </Container>
            </div>
        )
}

export default Team;