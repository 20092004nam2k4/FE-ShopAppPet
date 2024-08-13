import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner.js';
import ProductList from '../';
import Footer from '../JS/Footer.js';
import '../CSS/Home.css'

const Home = () => {
    return (
        <div className="home-css">
            <Navbar />
            <Banner />
            <ProductList />
            <Footer />
        </div>
    );
};

export default Home;
