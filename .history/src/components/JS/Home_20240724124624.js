import React from 'react';
import Navbar from '..JS';
import Banner from './Banner.js';
import ProductList from './ProductList.js';
import Footer from './Footer.js';
import '../pages/Home.css'

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
