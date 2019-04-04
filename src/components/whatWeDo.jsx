import React from 'react';
// import './home.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import circle_pink from './images/circle_pink.png';
import circle_green from './images/circle_green.png';
import audience from './images/audience.jpg';

const styles = {
    h1: {
        color: 'aliceblue',
        paddingLeft: '20px',
    },
    pinkcircle: {
        backgroundImage: `url(${circle_pink})`,
        backgroundRepeat: 'no-repeat',
    },
    greencircle: {
        backgroundImage: `url(${circle_green})`,
        backgroundRepeat: 'no-repeat',
        float: 'right',
    },
    audience: {
        image: `url(${audience})`,
    },
    // greencircle2: {
    //     backgroundImage: `url(${circle_green2})`,
    //     backgroundRepeat: 'no-repeat',
    //     float: 'right',
    // },
    circlePadding: {
        paddingBottom: '100px',
    },
    blockathons: {
        textAlign: 'right',
        flexDirection: 'row',
    },
    displayImageBox1:{
        width: '333px',
        height:'250px',
        margin:'10px',
        paddingBottom:'50px',
        background:'aliceblue',
        borderRadius: '15px 15px 15px 15px',
    },
    displayImage1: {
        padding: '15px 15px 15px 15px',
        maxWidth: '100%',
        maxHeight: '100%',
        backgroundPosition: 'center',
        borderRadius: '15%',
    },
    displayImageBox2:{
        width: '333px',
        height:'250px',
        margin:'10px',
        paddingBottom:'50px',
        background:'aliceblue',
        borderRadius: '15px 15px 15px 15px',
        float: 'right',
    },
    displayImage2: {
        padding: '15px 15px 15px 15px',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}

const WhatWeDo = () => {
    return(
        <div>
            <Container className="whatWeDo" style={styles.h1}>
                <div className="whatWeDoText">
                    <h1> Empowering the Cryptosphere</h1>
                    <p className="paraText"> Hello world text. Hello world text. Hello world text. </p>
                    <p className="paraText"> Hello world text. Hello world text. Hello world text. </p>
                </div>
            <Row>
            <Col>
                <div style={styles.pinkcircle}>
                    <br></br>
                    <h1 style={styles.h1}> Ventures & Research</h1>
                    <p style={styles.h1}> Introducing beginner to advanced BC concepts to the mases.From hands on coding workshops to international guest speakers,we invite people of all backgrounds to come together and learn. <br>
                        </br>
                    </p>
                    <div style={styles.displayImageBox1}> 
                        <div>
                            <img alt="" style={styles.displayImage1} src={require('./images/audience.jpg')}/>
                        </div>
                    </div>
                    <div style={styles.circlePadding}></div>
                </div>
            </Col>
            <Col style={styles.blockathons}>
                <div style={styles.greencircle}>
                    <br></br>
                    <h1> #Blockathons </h1>
                    <p> A global hackathon competion which aims to tackle real cases of Blockchain technologies. We have done 8 Blockathons across Australia, China and Europe.
                    </p>
                    <div style={styles.displayImageBox2}> 
                        <div>
                            <img alt="" style={styles.displayImage2} src={require('./images/audience2.jpg')}/>
                        </div>
                    </div>
                    <div style={styles.circlePadding}></div>
                </div>
            </Col>
            </Row>
            </Container>
        </div>
    )
}

export default WhatWeDo;