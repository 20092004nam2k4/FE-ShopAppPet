// src/pages/Home.js
import React from 'react';
import Navbar from '../components/Navbar.js';
import Banner from '../components/JS/Banner.js';
import ProductList from '../components/ProductList.js';
import Footer from '../components/Footer/Footer.js';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <ProductList />
            <Footer/>
        </div>
    );
};

export default Home;
