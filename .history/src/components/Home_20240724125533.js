import React from 'react';
import Navbar from './Navbar';
import Banner from './';
import ProductList from '../JS/ProductList';
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
