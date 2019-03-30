import React from 'react';
import './home.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const WhatWeDo = () => {
    return(
        <div>
            <div className="whatWeDoText">
                <h1> Empowering the Cryptosphere</h1>
                <p className="paraText"> Hello world text. Hello world text. Hello world text. </p>
                <p className="paraText"> Hello world text. Hello world text. Hello world text. </p>
            </div>
            <Row>
            <Col className="vrText">
                <h1> Ventures & Research<br></br> Network</h1>
                <p> Introducing beginer to advanced BC concepts to the mases.From hands on coding workshops to international guest speakers,w einvite people of all backgrounds to come together and learn. <br>
                    </br>
                </p>
                <div className="displayImageBox1">

                </div>
            </Col>
            <Col className ="blockathons">
                <h1> #Blockathons </h1>
                <br></br>
                <br></br>
                <p> A global hackathon competion which aims to tackle real cases of Blockchain technologies.
                    We have done 8 Blockathons across Australia, China and Europe.
                </p>

                <div className="displayImageBox2">
                </div>
            </Col>
            </Row>
        </div>

    )
}

export default WhatWeDo;