import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const styles = {
    h1: {
        color: 'aliceblue',
        'padding-top': '20px',
        'padding-bottom': '20px',
    },

    teamPerson: {
        border: '8px solid aliceblue',
        borderRadius: '15px 15px 15px 15px',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    h3Pink: {
        color: '#de00df',
        padding: '10px 0px 0px 0px',
    },
    h3Green: {
        color: '#03f4c6',
        padding: '10px 0px 0px 0px',
    },
    h5White: {
        color: 'aliceblue',
    },
    centreDiv: {
        display:'inline-block',
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    imgPadd:{
        paddingRight: '10px'
    },
    rowPadd:{
        paddingBottom: '20px',
    }
}

const Team = () => {
        return(
            <div>
                <Container>
                <h1 style={styles.h1}> Team</h1>
                
                    <Container>
                        <Row style={styles.rowPadd} xs={6}>
                            <Col style={styles.centreDiv}>
                                <div style={styles.teamBox}>
                                    <img alt="" width="175px" height="175px" style={styles.teamPerson}src={require('./images/team/DB.jpeg')}/>
                                </div>
                                <div>
                                    <h3 style={styles.h3Pink}> Daniel Bar</h3>
                                    <h5 style={styles.h5White}> Chairman</h5>    
                                    <a style={styles.imgPadd} href="https://www.linkedin.com/in/dtbar/" target="_blank" rel="noopener noreferrer" title="bitfwd community"><img alt="" width="25px" height="25px" src={require('./images/social_icons/linkedin_icon.png')}/></a> 
                                    <a style={styles.imgPadd} href="https://twitter.com/danieltbar" target="_blank" rel="noopener noreferrer" title="bitfwd community"><img alt="" width="25px" height="25px" src={require('./images/social_icons/twitter_icon.png')}/></a>     
                                </div>
                            </Col>
                            <Col style={styles.centreDiv}>
                                <div style={styles.teamBox}>
                                    <img alt="" width="175px" height="175px" style={styles.teamPerson}src={require('./images/team/mark.jpg')}/>
                                </div>
                                <div>
                                    <h3 style={styles.h3Green}> Mark Pereria</h3>
                                    <h5 style={styles.h5White}> Full Stack Developer</h5>    
                                    <a style={styles.imgPadd} href="https://www.linkedin.com/in/markspereira/" target="_blank" rel="noopener noreferrer" title="bitfwd community"><img alt="" width="25px" height="25px" src={require('./images/social_icons/linkedin_icon.png')}/></a> 
                                    <a style={styles.imgPadd} href="https://github.com/markspereira" target="_blank" rel="noopener noreferrer" title="bitfwd community"><img alt="" width="25px" height="25px" src={require('./images/social_icons/github_icon.png')}/></a>     
                                </div>
                            </Col>
                            <Col style={styles.centreDiv}>
                                <div style={styles.teamBox}>
                                    <img alt="" width="175px" height="175px" style={styles.teamPerson}src={require('./images/team/anna.jpg')}/>
                                </div>
                                <div>
                                    <h3 style={styles.h3Pink}> Anna Grechko</h3>
                                    <h5 style={styles.h5White}> Social Media</h5>    
                                    <a style={styles.imgPadd} href="https://www.linkedin.com/in/anna-grechko-4262a4163/" target="_blank" rel="noopener noreferrer" title="bitfwd community"><img alt="" width="25px" height="25px" src={require('./images/social_icons/linkedin_icon.png')}/></a> 
                                </div>
                            </Col>
                            <Col style={styles.centreDiv}>
                                <div style={styles.teamBox}>
                                    <img alt="" width="175px" height="175px" style={styles.teamPerson}src={require('./images/team/tom.jpg')}/>
                                </div>
                                <div>
                                    <h3 style={styles.h3Green}> Tom Terado</h3>
                                    <h5 style={styles.h5White}> Web Developer</h5>    
                                    <a style={styles.imgPadd} href="https://www.linkedin.com/in/tterado/" target="_blank" rel="noopener noreferrer" title="bitfwd community"><img alt="" width="25px" height="25px" src={require('./images/social_icons/linkedin_icon.png')}/></a> 
                                    <a style={styles.imgPadd} href="https://github.com/tomterado" target="_blank" rel="noopener noreferrer" title="bitfwd community"><img alt="" width="25px" height="25px" src={require('./images/social_icons/github_icon.png')}/></a>     
                                </div>
                            </Col>
                        </Row>

                        <Row style={styles.rowPadd} xs={6}>
                            <Col style={styles.centreDiv}>
                                <div style={styles.teamBox}>
                                    <img alt="" width="175px" height="175px" style={styles.teamPerson}src={require('./images/team/moritz.jpg')}/>
                                </div>
                                <div>
                                    <h3 style={styles.h3Pink}> Moritz Neto</h3>
                                    <h5 style={styles.h5White}> Growth</h5>    
                                    <a style={styles.imgPadd} href="https://www.linkedin.com/in/moritzneto/" target="_blank" rel="noopener noreferrer" title="bitfwd community"><img alt="" width="25px" height="25px" src={require('./images/social_icons/linkedin_icon.png')}/></a> 
                                    <a style={styles.imgPadd} href="https://twitter.com/mrtzneto" target="_blank" rel="noopener noreferrer" title="bitfwd community"><img alt="" width="25px" height="25px" src={require('./images/social_icons/twitter_icon.png')}/></a>     
                                </div>
                            </Col>
                            <Col style={styles.centreDiv}>
                                <div style={styles.teamBox}>
                                    <img alt="" width="175px" height="175px" style={styles.teamPerson}src={require('./images/team/mel.jpg')}/>
                                </div>
                                <div>
                                    <h3 style={styles.h3Green}> Melissa Ran</h3>
                                    <h5 style={styles.h5White}> Partnerships</h5>    
                                    <a style={styles.imgPadd} href="https://www.linkedin.com/in/melissaran/" target="_blank" rel="noopener noreferrer" title="bitfwd community"><img alt="" width="25px" height="25px" src={require('./images/social_icons/linkedin_icon.png')}/></a> 
                                </div>
                            </Col>
                            <Col style={styles.centreDiv}>
                                <div style={styles.teamBox}>
                                    <img alt="" width="175px" height="175px" style={styles.teamPerson}src={require('./images/team/rosalie.jpg')}/>
                                </div>
                                <div>
                                    <h3 style={styles.h3Pink}> Rosalie Prom</h3>
                                    <h5 style={styles.h5White}> Front-End Developer</h5>    
                                    <a style={styles.imgPadd} href="https://www.linkedin.com/in/rosalinda-prom-15508a85/" target="_blank" rel="noopener noreferrer" title="bitfwd community"><img alt="" width="25px" height="25px" src={require('./images/social_icons/linkedin_icon.png')}/></a> 
                                    <a style={styles.imgPadd} href="https://github.com/developerpeachy" target="_blank" rel="noopener noreferrer" title="bitfwd community"><img alt="" width="25px" height="25px" src={require('./images/social_icons/github_icon.png')}/></a>     
                                </div>
                            </Col>
                            <Col style={styles.centreDiv}>
                                <div style={styles.teamBox}>
                                    <img alt="" width="175px" height="175px" style={styles.teamPerson}src={require('./images/team/radek.jpg')}/>
                                </div>
                                <div>
                                    <h3 style={styles.h3Green}> Radek Ostrowski</h3>
                                    <h5 style={styles.h5White}> Blockchain Engineer</h5>    
                                    <a style={styles.imgPadd} href="https://www.linkedin.com/in/radekostrowski/" target="_blank" rel="noopener noreferrer" title="bitfwd community"><img alt="" width="25px" height="25px" src={require('./images/social_icons/linkedin_icon.png')}/></a> 
                                    <a style={styles.imgPadd} href="https://github.com/radek1st" target="_blank" rel="noopener noreferrer" title="bitfwd community"><img alt="" width="25px" height="25px" src={require('./images/social_icons/github_icon.png')}/></a>     
                                </div>
                            </Col>
                        </Row>
                        
                        <Row style={styles.rowPadd} xs={6}>
                        <Col style={styles.centreDiv} >
                                <div style={styles.teamBox}>
                                    <img alt="" width="175px" height="175px" style={styles.teamPerson}src={require('./images/team/fi.jpg')}/>
                                </div>
                                <div>
                                    <h3 style={styles.h3Pink}> Fiona Tschuat</h3>
                                    <h5 style={styles.h5White}> Evangelist </h5>    
                                    <a style={styles.imgPadd} href="https://www.linkedin.com/in/fionatschaut/" target="_blank" rel="noopener noreferrer" title="bitfwd community"><img alt="" width="25px" height="25px" src={require('./images/social_icons/linkedin_icon.png')}/></a> 
                                </div>
                            </Col>
                            <Col style={styles.centreDiv}>
                                <div style={styles.teamBox}>
                                    <img alt="" width="175px" height="175px" style={styles.teamPerson}src={require('./images/team/aelita.jpg')}/>
                                </div>
                                <div>
                                    <h3 style={styles.h3Green}> Prof. Aelita Skarzauskiene</h3>
                                    <h5 style={styles.h5White}> Evangelist</h5>    
                                    <a style={styles.imgPadd} href="https://www.linkedin.com/in/aelita-skarzauskiene-65670311/" target="_blank" rel="noopener noreferrer" title="bitfwd community"><img alt="" width="25px" height="25px" src={require('./images/social_icons/linkedin_icon.png')}/></a> 
                                </div>
                            </Col>
                            <Col style={styles.centreDiv}>
                                <div style={styles.teamBox}>
                                    <img alt="" width="175px" height="175px" style={styles.teamPerson}src={require('./images/team/julia.jpg')}/>
                                </div>
                                <div>
                                    <h3 style={styles.h3Pink}> Julia Lizuonva</h3>
                                    <h5 style={styles.h5White}> Designer</h5>    
                                    <a style={styles.imgPadd} href="https://t.me/bitfwd" target="_blank" rel="noopener noreferrer" title="bitfwd community"><img alt="" width="25px" height="25px" src={require('./images/social_icons/telegram_icon.png')}/></a>     
                                </div>
                            </Col>
                            <Col style={styles.centreDiv}>
                                <div style={styles.teamBox}>
                                    <img alt="" width="175px" height="175px" style={styles.teamPerson}src={require('./images/team/tralia.jpg')}/>
                                </div>
                                <div>
                                    <h3 style={styles.h3Green}> Tralia Yang</h3>
                                    <h5 style={styles.h5White}> Events</h5>    
                                    <a style={styles.imgPadd} href="https://www.linkedin.com/in/traliayang/" target="_blank" rel="noopener noreferrer" title="bitfwd community"><img alt="" width="25px" height="25px" src={require('./images/social_icons/linkedin_icon.png')}/></a> 
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </div>
        )
}

export default Team;