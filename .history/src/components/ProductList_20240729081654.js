import React from 'react';
import './CSS/ProductList.css'; // Import các kiểu CSS riêng cho ProductList

const products = [
    {
        id: 1,
        name: 'Dog Food',
        price: '50,000 VND',
        image: 'https://fagopet.vn/storage/in/r5/inr5f4qalj068szn2bs34qmv28r2_phoi-giong-meo-munchkin.webp',
    },
    {
        id: 2,
        name: 'Cat Toy',
        price: '30,000 VND',
        image: 'https://fagopet.vn/storage/in/r5/inr5f4qalj068szn2bs34qmv28r2_phoi-giong-meo-munchkin.webp',
    },
    {
        id: 3,
        name: 'Bird Cage',
        price: '200,000 VND',
        image: 'https://fagopet.vn/storage/in/r5/inr5f4qalj068szn2bs34qmv28r2_phoi-giong-meo-munchkin.webp',
    },
    {
        id: 4,
        name: 'Fish Tank',
        price: '500,000 VND',
        image: 'https://fagopet.vn/storage/in/r5/inr5f4qalj068szn2bs34qmv28r2_phoi-giong-meo-munchkin.webp',
    },
];

const ProductList = () => {
    return (
        <div className="product-list container">
            <h2>Our Products</h2>

        </div>
    );
}

export default ProductList;
