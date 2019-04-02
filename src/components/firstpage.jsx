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
                        <form>
                            <p> Join the decentralised future.</p>
                            <label> <input type="text" placeholder="Name" /> </label>
                            <label> <input type="text" placeholder="Email" /> </label>
                            <br></br>
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                    <div>
                        <a href="/" title="bitfwd community"><img alt="" width="50px" height="50px" src="https://www.ycombinator.com/images/ycombinator-logo-fb889e2e.png"/></a> 
                        <a href="/" title="bitfwd community"><img alt="" width="50px" height="50px" src="https://www.ycombinator.com/images/ycombinator-logo-fb889e2e.png"/></a> 
                        <a href="/" title="bitfwd community"><img alt="" width="50px" height="50px" src="https://www.ycombinator.com/images/ycombinator-logo-fb889e2e.png"/></a> 
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