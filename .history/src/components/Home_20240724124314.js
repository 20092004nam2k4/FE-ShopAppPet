// src/pages/Home.js
import React from 'react';
import Navbar from './Navbar.js';
import Banner from './Banner.js';
import ProductList from './ProductList.js';
import Footer from '../components/Footer.js';
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
