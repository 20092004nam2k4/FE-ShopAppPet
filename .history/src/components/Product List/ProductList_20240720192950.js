// src/components/ProductList.js
import React from 'react';

const products = [
  {
    id: 1,
    name: 'Dog Food',
    price: '50,000 VND',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Cat Toy',
    price: '30,000 VND',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Bird Cage',
    price: '200,000 VND',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    name: 'Fish Tank',
    price: '500,000 VND',
    image: 'https://via.placeholder.com/150',
  },
];

const ProductList = () => {
  return (
    <div className="product-list container">
      <h2>Our Products</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-3">
            <div className="card mb-4 shadow-sm">
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.price}</p>
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
