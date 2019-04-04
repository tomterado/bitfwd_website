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
    },
    projectDetailsBox: {
        'width': '220px',
        'height':'100px',
        'margin':'10px',
        'padding-right':'30px',
        'background':'aliceblue',
        'border-radius': '15px 15px 15px 15px',
    },
    h4: {
        color: 'aliceblue',
    },
    img: {
        display: 'inline',
        verticalAlign: 'middle',
    },
    extraCBFPadding: {
        padding: '20px',
    }

}

const ResearchVentures = () => {
    return(
        <div>
            <Container>
            <div>
                <h1 style={styles.textColor}> Research Network</h1>
                <p style={styles.textColor}> The research network covers academic topics on the emerging evidence of what shapes the cryptoeconomy. Covering areas such as business, development and design, the XXX </p>
            </div>

                <Container>
                    <Row>
                        <Col> 
                            <div>
                                <img alt="" style={styles.img} width="100px" height="100px" src={require('./images/wallet.png')}/>
                                <h4 style={styles.h4}> Businesses in decentralized web products</h4>
                                <img alt="" width="75px" height="75px" src="https://www.ycombinator.com/images/ycombinator-logo-fb889e2e.png"/>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <img alt="" style={styles.img} width="100px" height="100px" src={require('./images/phone.png')}/>
                                <h4 style={styles.h4}> UI/UX and interfaces as access points to p2p networks</h4>
                                <img alt="" width="75px" height="75px" src="https://www.ycombinator.com/images/ycombinator-logo-fb889e2e.png"/>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <img alt="" style={styles.img} width="100px" height="100px" src={require('./images/privacy.png')}/>
                                <h4 style={styles.h4}> Protocols, cryptoeconomics & privacy technologies.</h4>
                                <img alt="" width="75px" height="75px" src="https://www.ycombinator.com/images/ycombinator-logo-fb889e2e.png"/>
                            </div>
                        </Col>
                        <div style={styles.extraCBFPadding}></div>
                    </Row>
                </Container>
            </Container>
        </div>
    )
}

export default ResearchVentures;