import React from 'react';
import FirstPage from './firstpage';
import WhatWeDo from './whatWeDo';
import VenturesProjects from './Ventures';
import CommunityPhotos from './CommunityPhotos';
import Footer from './Footer';

const Home = () => {
    return (
        <div className="content">
            <FirstPage/>
            <WhatWeDo/>
            <VenturesProjects/>
            <CommunityPhotos />
            <Footer />
        </div>
    )
}

export default Home