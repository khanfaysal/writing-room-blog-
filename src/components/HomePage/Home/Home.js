import React from 'react';
import Blogs from '../Blogs/Blogs';
import Header from '../Header/Header';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import SocialNavbar from '../SocialNavbar/SocialNavbar';
import LogoHeader from '../LogoHeader/LogoHeader';

const Home = () => {
    return (
        <div>
            <SocialNavbar />
            <LogoHeader />
            <Header />
            <Blogs />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;