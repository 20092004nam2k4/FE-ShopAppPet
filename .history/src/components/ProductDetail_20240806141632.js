import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import axios from 'axios';
import './CSS/ProductDetail.css';

const ProductDetail = () => {
    const { id } = useParams(); // Lấy ID sản phẩm từ URL
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`http://localhost:8080/api/pets/${id}`)
            .then(response => {
                setProduct(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("There was an error fetching the product details!", error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <p>Loading Product Details...</p>;
    }

    if (!product) {
        return <p>Product not found.</p>;
    }

    return (
        <div className="home-css">
            <Navbar />
            <div className="product-detail">
                <div className="product-image">
                    <img src={"http://localhost:8080/image/" + product.image} alt={product.name} />
                </div>
                <div className="product-info">
                    <h1>{product.name}</h1>
                    <p>Giá: {product.price.toLocaleString()} VND</p>
                    <p>giống: {product.petDetail.breed}</p>
                    <p>Popular: {product.petDetail.popular ? "Yes" : "No"}</p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProductDetail;
