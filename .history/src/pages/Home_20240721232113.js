// src/pages/Home.js
import React from 'react';
import Navbar from '../components/JS/Navbar.js';
import Banner from '../components/JS/Banner.js';
import ProductList from '../components/JS/ProductList.js';
import Footer from '../components/Footer/Footer';

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
