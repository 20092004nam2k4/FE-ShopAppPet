import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner.js';
import ProductList from './ProductList.js';
import Footer from './Footer';
import './CSS/Home.css'
import P

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
