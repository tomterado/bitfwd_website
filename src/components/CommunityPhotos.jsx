import React from 'react';
import './home.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const CommunityPhotos = () => {
    return (
        <div>
        <Container>
            <Row sm={6}> <img alt="ttt" src="https://user-images.githubusercontent.com/16810128/55221495-f13fe780-524c-11e9-8d61-f01a1481c824.jpeg"/></Row>
            <Row sm={6}> <img alt="ttt" src="https://user-images.githubusercontent.com/16810128/55221495-f13fe780-524c-11e9-8d61-f01a1481c824.jpeg"/></Row>
        </Container>
        </div>

    )
}

export default CommunityPhotos;