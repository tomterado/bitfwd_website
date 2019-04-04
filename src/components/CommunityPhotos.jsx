import React from 'react';
import './home.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Row';

const styles = {
    mainImage: {
        'width': '90%',
        'height': '50%',
        'align': 'center',
        'display': 'block',
        'margin-left': 'auto',
        'margin-right': 'auto',
        'padding': '15px 0px 15px 0px',
        // 'object-fit': 'contain',
        // 'display': 'flex',
        // 'flex-direction': 'column',
        // 'justify-content': 'center',
        // 'align-items': 'center',
    },
    noWrap: {
        'flex-wrap': 'nowrap',
    },
    colWidth: {
        'align': 'center',
        'display': 'block',
        'margin-left': 'auto',
        'margin-right': 'auto',
        'padding': '15px 0px 15px 0px',
    },
    secondaryImages: {
        'width': '100%',
        'height': '100%',
        'margin-left': 'auto',
        'margin-right': 'auto',
        'align': 'center',
        'display': 'block',
    },
    textAlign: {
        'text-align': 'center',
        color: 'aliceblue',
    }
}


const CommunityPhotos = () => {
    return (
        <div>
        <Container>
            <Container fluid>
                <Row> <img alt="ttt" style={styles.mainImage} src={require('./images/team.png')}/></Row>
                <Row style={styles.noWrap}>
                    <Col><img style={styles.secondaryImages} alt="ttt" src={require('./images/daniel_china.png')}/> </Col>
                    <Col><img style={styles.secondaryImages} alt="ttt" src={require('./images/daniel_kids.png')}/> </Col>

                </Row>
            </Container>
        </Container>
        </div>
    )
}

export default CommunityPhotos;