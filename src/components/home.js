import React from 'react';
import FirstPage from './firstpage';
import WhatWeDo from './whatWeDo';
import VenturesProjects from './Ventures';
import CommunityPhotos from './CommunityPhotos';
import CommunityPartners from './communityPartners';
import Team from './team';
import SignUp from './signUp';
import ResearchVentures from './researchVentures';

const Home = () => {
    return (
        <div className="content">
            <FirstPage/>
            <WhatWeDo/>
            <VenturesProjects/>
            <ResearchVentures />
            <CommunityPhotos />
            <CommunityPartners />
            <Team />
            <SignUp />
        </div>
    )
}

export default Home