// src/components/ProductList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import './ProductList.css'; // Import CSS file if needed

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch product data from an API or local JSON file
        axios.get('https://api.example.com/products')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the products!', error);
            });
    }, []);

    return (
        <div className="product-list">
            {products.map(product => (
                {/* <ProductCard key={product.id} product={product} /> */}
            ))}
        </div>
    );
};

export default ProductList;
