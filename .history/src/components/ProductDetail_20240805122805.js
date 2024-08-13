import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CSS/ProductDetail.css';

const ProductDetail = ({ match }) => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`/api/pets/${match.params.id}`);
                setProduct(response.data);
            } catch (error) {
                console.error('Error fetching product details:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [match.params.id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!product) {
        return <div>Product not found.</div>;
    }

    return (
        <div className="product-detail container">
            <div className="product-detail__wrapper">
                <div className="product-detail__image">
                    <img src={product.imageUrl} alt={product.name} />
                </div>
                <div className="product-detail__info">
                    <h1 className="product-detail__title">{product.name}</h1>
                    <p className="product-detail__price">{`Price: ${product.price}`}</p>
                    <p className="product-detail__description">{product.description}</p>
                    <div className="product-detail__actions">
                        <button className="btn btn-primary">Add to Cart</button>
                        <button className="btn btn-secondary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
