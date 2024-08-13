import React from 'react';
import Navbar from '../JS/Navbar.js';
import Banner from '../JS/Banner.js';
import ProductList from '../JS/ProductList';
import Footer from '../JS/Footer.js';
import '../'

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
