import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner.js';
import ProductList from './ProductList.js';
import Footer from './Footer';
import './CSS/ProductDetail.css'
const ProductDetail = () => {
    return (
        <div className="home-css">
            <Navbar />
            <div className="product-detail">
            <h1>{product.name}</h1>
            <img src={"http://localhost:8080/image/" + product.image} alt={product.name} />
            <p>Price: {product.price.toLocaleString()} VND</p>
            <p>Breed: {product.petDetail.breed}</p>
            <p>Popular: {product.petDetail.popular ? "Yes" : "No"}</p>
            {/* Thêm các thuộc tính chi tiết khác nếu cần */}
        </div>
            <Footer />
        </div>
    );
};

export default ProductDetail;