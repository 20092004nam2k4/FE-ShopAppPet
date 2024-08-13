import React from 'react';
import './CSS/ProductList.css'; // Import các kiểu CSS riêng cho ProductList



const ProductList = () => {
    return (
        <div className="product-list container">
            <h2>Our Products</h2>
            <div className="product-list-inner">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} className="card-img-top" alt={product.name} />
                        <div className="product-card-body">
                            <h5 className="product-card-title">{product.name}</h5>
                            <p className="product-card-text">{product.price}</p>
                            <button className="product-card-button">Buy Now</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList;
