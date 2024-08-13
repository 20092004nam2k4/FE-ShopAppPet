import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CSS/ProductDetail.css';

const ProductDetail = ({ id }) => {
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
        <div className="product-detail">
            <div className="product-image">
                <img src={"http://localhost:8080/image/" + product.image} alt={product.name} />
            </div>
            <div className="product-info">
                <h1>{product.name}</h1>
                <p>Giá: {product.price.toLocaleString()}đ</p>
                <p>Giống chó: {product.petDetail.breed}</p>
                <p>Phổ Biến: {product.petDetail.popular ? "Rất Phổ Biến" : "Không Phổ Biến"}</p>
            </div>
        </div>
    );
};

export default ProductDetail;
