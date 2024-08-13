// src/pages/Home.js
import React from 'react';
import Navbar from '../components/Navbar.js';
import Banner from '../components/Banner.js';
import ProductList from '../components/Product List/ProductList.js';
import Footer from '../components/Footer/Footer.js';
im

const Home = () => {
    return (
        <div className="home-css">
            <Navbar />
            <Banner />
            <ProductList />
            <Footer/>
        </div>
    );
};

export default Home;
