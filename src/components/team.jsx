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
    teamBox: {
        borderRadius: '15px 15px 15px 15px',
        background:'aliceblue',
    }
}

const Team = () => {
        return(
            <div>
                <Container>
                <h1 style={styles.h1}> Team</h1>
                
                    <Container>
                        <Row>
                            <Col style={styles.teamBox}>
                                <Row>
                                    <Col> 
                                        <img alt="" width="150px" height="150px" src={require('./images/team/DB.jpeg')}/>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </div>
        )
}

export default Team;