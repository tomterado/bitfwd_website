import React from 'react';
import './home.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const styles = {
    initialHeader: {
        color: 'aliceblue',
        fontWeight: 'bold',
        fontSize: '65px',
    },
    formText: {
        color: 'aliceblue',
        fontWeight: 'bold',
    },
    heroImage: {

    },
    input: {
        backgroundColor: 'transparent',
        outline: 'none',
        marginBottom: '10px',
        border: '0px',
    },
    submitBox: {
        borderRadius: '15px 15px 15px 15px'
    },
    emailSignUp: {
        width: '333px',
        height:'200px',
        padding:'10px',
        background:'#de00df',
        borderRadius: '15px 15px 15px 15px',
    },
    socialImageBox: {
        padding: '20px',
    },
    socialImages: {
        paddingRight: '10px',

    }
}

const FirstPage = () => {
    return(
        <Container>
            <Row>
                <Col sm={6}>
                    <h1 style={styles.initialHeader}> Blockchain <br></br>Ventures.</h1>
                    <div style={styles.emailSignUp}>
                        <form>
                            <p style={styles.formText}> Join the decentralised future.</p>
                            <label> <input style={styles.input} type="text" placeholder="Name" /> </label>
                            <label> <input style={styles.input} type="text" placeholder="Email" /> </label>
                            <br></br>
                            <input style={styles.submitBox} type="submit" value="Submit" />
                        </form>
                    </div>
                    <div style={styles.socialImageBox}>
                        <a style={styles.socialImages} href="https://t.me/bitfwd" target="_blank" rel="noopener noreferrer" title="bitfwd community"><img alt="" width="50px" height="50px" src={require('./images/social_icons/telegram_icon.png')}/></a> 
                        <a style={styles.socialImages} href="https://twitter.com/bitfwdxyz" target="_blank" rel="noopener noreferrer" title="bitfwd community"><img alt="" width="50px" height="50px" src={require('./images/social_icons/twitter_icon.png')}/></a> 
                        <a style={styles.socialImages} href="https://github.com/bitfwdcommunity" target="_blank" rel="noopener noreferrer" title="bitfwd community"><img alt="" width="50px" height="50px" src={require('./images/social_icons/github_icon.png')}/></a> 
                        <a style={styles.socialImages} href="https://www.facebook.com/bitfwd/" target="_blank" rel="noopener noreferrer" title="bitfwd community"><img alt="" width="50px" height="50px" src={require('./images/social_icons/facebook_icon.png')}/></a> 
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