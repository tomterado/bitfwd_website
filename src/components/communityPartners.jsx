import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Row';

const styles = {
    h1: {
        color: 'aliceblue',
        padding: '10px 0px 10px 0px',
    },
    communityPartnersBox: {
        margin:'10px',
        background:'aliceblue',
        borderRadius: '15px 15px 15px 15px',
        color: '#16183e',
        fontWeight: 'bold',
    },
    extraPad: {
        paddingTop: '20px',
    },
    logoSizes: {
        width: '150px',
        height: '150px',
        margin: '30px',
    }
}

const CommunityPartners = () => {
    return(
        <Container >
            <h1 style={styles.h1}> Community Partners</h1>
            <Container style={styles.communityPartnersBox}>
                <Row>
                    <Row style={styles.extraPad}>
                        <Col md="2"> 
                            <img alt="ttt" style={styles.logoSizes} src="https://user-images.githubusercontent.com/16810128/55325452-1ab47980-54c0-11e9-8f44-af33a3b3b5a7.png"/>
                        </Col>
                        <Col md="2"> 
                            <img alt="ttt" style={styles.logoSizes} src="https://user-images.githubusercontent.com/16810128/55325452-1ab47980-54c0-11e9-8f44-af33a3b3b5a7.png"/>
                        </Col>
                        <Col md="2"> 
                            <img alt="ttt" style={styles.logoSizes} src="https://user-images.githubusercontent.com/16810128/55325452-1ab47980-54c0-11e9-8f44-af33a3b3b5a7.png"/>
                        </Col >
                        <Col md="2"> 
                            <img alt="ttt" style={styles.logoSizes} src="https://user-images.githubusercontent.com/16810128/55325452-1ab47980-54c0-11e9-8f44-af33a3b3b5a7.png"/>
                        </Col>
                        <Col md="2"> 
                            <img alt="ttt" style={styles.logoSizes} src="https://user-images.githubusercontent.com/16810128/55325452-1ab47980-54c0-11e9-8f44-af33a3b3b5a7.png"/>
                        </Col>
                        <Col md="2"> 
                            <img alt="ttt" style={styles.logoSizes} src="https://user-images.githubusercontent.com/16810128/55325452-1ab47980-54c0-11e9-8f44-af33a3b3b5a7.png"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="2"> 
                            <img alt="ttt" style={styles.logoSizes} src="https://user-images.githubusercontent.com/16810128/55325452-1ab47980-54c0-11e9-8f44-af33a3b3b5a7.png"/>
                        </Col>
                        <Col md="2"> 
                            <img alt="ttt" style={styles.logoSizes} src="https://user-images.githubusercontent.com/16810128/55325452-1ab47980-54c0-11e9-8f44-af33a3b3b5a7.png"/>
                        </Col>
                        <Col md="2"> 
                            <img alt="ttt" style={styles.logoSizes} src="https://user-images.githubusercontent.com/16810128/55325452-1ab47980-54c0-11e9-8f44-af33a3b3b5a7.png"/>
                        </Col >
                        <Col md="2"> 
                            <img alt="ttt" style={styles.logoSizes} src="https://user-images.githubusercontent.com/16810128/55325452-1ab47980-54c0-11e9-8f44-af33a3b3b5a7.png"/>
                        </Col>
                        <Col md="2"> 
                            <img alt="ttt" style={styles.logoSizes} src="https://user-images.githubusercontent.com/16810128/55325452-1ab47980-54c0-11e9-8f44-af33a3b3b5a7.png"/>
                        </Col>
                        <Col md="2"> 
                            <img alt="ttt" style={styles.logoSizes} src="https://user-images.githubusercontent.com/16810128/55325452-1ab47980-54c0-11e9-8f44-af33a3b3b5a7.png"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="2"> 
                            <img alt="ttt" style={styles.logoSizes} src="https://user-images.githubusercontent.com/16810128/55325452-1ab47980-54c0-11e9-8f44-af33a3b3b5a7.png"/>
                        </Col>
                        <Col md="2"> 
                            <img alt="ttt" style={styles.logoSizes} src="https://user-images.githubusercontent.com/16810128/55325452-1ab47980-54c0-11e9-8f44-af33a3b3b5a7.png"/>
                        </Col>
                        <Col md="2"> 
                            <img alt="ttt" style={styles.logoSizes} src="https://user-images.githubusercontent.com/16810128/55325452-1ab47980-54c0-11e9-8f44-af33a3b3b5a7.png"/>
                        </Col >
                        <Col md="2"> 
                            <img alt="ttt" style={styles.logoSizes} src="https://user-images.githubusercontent.com/16810128/55325452-1ab47980-54c0-11e9-8f44-af33a3b3b5a7.png"/>
                        </Col>
                        <Col md="2"> 
                            <img alt="ttt" style={styles.logoSizes} src="https://user-images.githubusercontent.com/16810128/55325452-1ab47980-54c0-11e9-8f44-af33a3b3b5a7.png"/>
                        </Col>
                        <Col md="2"> 
                            <img alt="ttt" style={styles.logoSizes} src="https://user-images.githubusercontent.com/16810128/55325452-1ab47980-54c0-11e9-8f44-af33a3b3b5a7.png"/>
                        </Col>
                    </Row>
                </Row>     
            </Container>                       
        </Container>

    )

}

export default CommunityPartners;