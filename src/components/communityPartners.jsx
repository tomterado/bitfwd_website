import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Row';

const styles = {
    mainbox: {
        display: 'flex',
        'flex-direction': 'row',
        background: 'aliceblue',
        'border-radius': '15px 15px 15px 15px'
        },
    secondaryBox: {
        display: 'flex',
        'padding-left': '15px',
        'padding-right': '30px',
        'flex-direction': 'column',
    },
    h1: {
        color: 'aliceblue',
        'padding-top': '20px',
        'padding-bottom': '20px',
    },
    outerBox: {
        'padding': '15px 15px 15px 15px',
    }
}

const CommunityPartners = () => {
    return(
        <Container>
            <h1 style={styles.h1}> Community Partners</h1>
            <Container style={styles.outerBox}>
                <Row className="communityDetails" style={styles.mainbox}>
                    <Col>
                        <Row><img alt="ttt" src="https://user-images.githubusercontent.com/16810128/55325452-1ab47980-54c0-11e9-8f44-af33a3b3b5a7.png"/></Row>
                        <Row><img alt="ttt" src="https://user-images.githubusercontent.com/16810128/55325452-1ab47980-54c0-11e9-8f44-af33a3b3b5a7.png"/></Row>
                        <Row><img alt="ttt" src="https://user-images.githubusercontent.com/16810128/55325452-1ab47980-54c0-11e9-8f44-af33a3b3b5a7.png"/></Row>
                        <Row><img alt="ttt" src="https://user-images.githubusercontent.com/16810128/55325452-1ab47980-54c0-11e9-8f44-af33a3b3b5a7.png"/></Row>
                        <Row><img alt="ttt" src="https://user-images.githubusercontent.com/16810128/55325452-1ab47980-54c0-11e9-8f44-af33a3b3b5a7.png"/></Row>
                        <Row><img alt="ttt" src="https://user-images.githubusercontent.com/16810128/55325452-1ab47980-54c0-11e9-8f44-af33a3b3b5a7.png"/></Row>
                        <Row><img alt="ttt" src="https://user-images.githubusercontent.com/16810128/55325452-1ab47980-54c0-11e9-8f44-af33a3b3b5a7.png"/></Row>
                        <Row><img alt="ttt" src="https://user-images.githubusercontent.com/16810128/55325452-1ab47980-54c0-11e9-8f44-af33a3b3b5a7.png"/></Row>
                    </Col>
                </Row>     
            </Container>                       
        </Container>

    )

}

export default CommunityPartners;