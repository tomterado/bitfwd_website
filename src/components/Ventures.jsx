import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const styles = {
    h1: {
        color: 'aliceblue',
    },
    logo: {
        paddingTop: '10px',
        paddingRight: '10px',
        float: 'left',
    },
    textAlign: {
        textAlign: 'left',
        color: '#16183e',
        textDecoration: 'none',
    },
    projectDetailsBox: {
        margin:'10px',
        background:'aliceblue',
        borderRadius: '15px 15px 15px 15px',
        color: '#16183e',
        fontWeight: 'bold',
    },
    rowPadding: {
        padding: '10px 10px 10px 10px',
    }
}

const VenturesProjects = () => {
    return(
        <div>
            <Container>
            <h1 style={styles.h1}> Blockchain Venture Network</h1>
                <Container className="projectDetails">
                    <Row>
                        <Col style={styles.projectDetailsBox}>
                            <Row style={styles.rowPadding}>
                                <Col xs={3}>
                                    <img alt="" width="75px" height="75px" src={require('./images/ventures/tenzorum.png')}/>
                                </Col>
                                <Col style={styles.textAlign}>
                                    <a style={styles.textAlign} href="https://tenzorum.org/" target="_blank" rel="noopener noreferrer">Tenzorum: Seamless Blockchain UX</a>
                                </Col>
                            </Row>
                        </Col>
                        <Col style={styles.projectDetailsBox}>
                            <Row style={styles.rowPadding}>
                                <Col xs={3}>
                                    <img alt="" width="75px" height="75px" src={require('./images/ventures/alice.png')}/>
                                </Col>
                                <Col style={styles.textAlign}>
                                    <a style={styles.textAlign} href="https://www.alicedapp.com/" target="_blank" rel="noopener noreferrer">Alice: Open Finance in your pocket</a>
                                </Col>
                            </Row>
                        </Col>
                        <Col style={styles.projectDetailsBox}>
                            <Row style={styles.rowPadding}>
                                <Col xs={3}>
                                    <img alt="" width="75px" height="75px" src={require('./images/ventures/akropolis.png')}/>
                                </Col>
                                <Col style={styles.textAlign}>
                                    <a style={styles.textAlign} href="https://akropolis.io/" target="_blank" rel="noopener noreferrer">Akropolis: Decentralised Penions & Savings Infastructure</a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={styles.projectDetailsBox}>
                            <Row style={styles.rowPadding}>
                                <Col xs={3}>
                                    <img alt="" width="75px" height="75px" src={require('./images/ventures/8x.png')}/>
                                </Col>
                                <Col style={styles.textAlign}>
                                    <a style={styles.textAlign} href="https://8xprotocol.com/" target="_blank" rel="noopener noreferrer">8x Protocol: Decentralised Recuring Payments</a>
                                </Col>
                            </Row>
                        </Col>
                        <Col style={styles.projectDetailsBox}>
                            <Row style={styles.rowPadding}>
                                <Col xs={3}>
                                    <img alt="" width="75px" height="75px" src={require('./images/ventures/alphaWallet.png')}/>
                                </Col>
                                <Col style={styles.textAlign}>
                                    <a style={styles.textAlign} href="https://alphawallet.com/" target="_blank" rel="noopener noreferrer">Alpha Wallet: Wallet Engine for Web 3.0</a>
                                </Col>
                            </Row>
                        </Col>
                        <Col style={styles.projectDetailsBox}>
                            <Row style={styles.rowPadding}>
                                <Col xs={3}>
                                    <img alt="" width="75px" height="75px" src={require('./images/ventures/horizonState.png')}/>
                                </Col>
                                <Col style={styles.textAlign}>
                                    <a style={styles.textAlign} href="https://horizonstate.com/" target="_blank" rel="noopener noreferrer">Horizon State: Empowerment Platform for Decisions.</a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={styles.projectDetailsBox}>
                            <Row style={styles.rowPadding}>
                                <Col xs={3}>
                                    <img alt="" width="75px" height="75px" src="https://www.ycombinator.com/images/ycombinator-logo-fb889e2e.png"/>
                                </Col>
                                <Col style={styles.textAlign}>
                                    <a style={styles.textAlign} href="https://horizonstate.com/" target="_blank" rel="noopener noreferrer">Horizon State: Empowerment Platform for Decisions.</a>
                                </Col>
                            </Row>
                        </Col>
                        <Col> </Col>
                        <Col> </Col>
                    </Row>
                    <Row>
                        <Col sm className="projectDetailsBox">**Insert Spaceman Picture**</Col>
                    </Row>
                </Container>
            </Container>
        </div>

    )
}

export default VenturesProjects;