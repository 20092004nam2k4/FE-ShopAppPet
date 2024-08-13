// src/pages/Home.js
import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Banner from '../components/Banner';
import ProductList from '../components/Product List/ProductList';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <ProductList />
            <Footer />
        </div>
    );
};

export default Home;
