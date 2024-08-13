import React from 'react';
import Navbar from '../components/Navbar.js';
import Banner from '../components/Banner.js';
import ProductList from '../components/ProductList.js';
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
