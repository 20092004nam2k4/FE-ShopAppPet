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
    const [quantity, setQuantity] = useState(1); // Số lượng mặc định là 1

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

    const handleAddToCart = () => {
        axios.post('http://localhost:8080/api/cart/add', null, {
            params: {
                petId: product.id,
                quantity: quantity
            }
        })
            .then(response => {
                console.log("Product added to cart:", response.data);
                // Có thể cập nhật trạng thái giỏ hàng hoặc hiển thị thông báo ở đây
            })
            .catch(error => {
                console.error("There was an error adding the product to the cart!", error);
            });
    };

    const handleIncrease = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecrease = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

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
                    <div className="rating-stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                    </div>
                    <p className="price">Giá: {product.price.toLocaleString()}đ</p>
                    <p>Giống chó: {product.petDetail.breed}</p>
                    <p>Phổ Biến: {product.petDetail.popular ? "Rất Phổ Biến" : "Không Phổ Biến"}</p>

                    {/* Thêm thông tin tình trạng sức khỏe */}
                    <div className="health-info">
                        <h2>Tình trạng sức khỏe</h2>
                        <p><strong>Trạng thái sức khỏe:</strong> {product.petDetail.healthStatus}</p>
                    </div>

                    <div className="quantity-control">
                        <button className="quantity-button" onClick={handleDecrease}>-</button>
                        <span className="quantity-display">{quantity}</span>
                        <button className="quantity-button" onClick={handleIncrease}>+</button>
                    </div>

                    <button className="add-to-cart-button" onClick={handleAddToCart}>Thêm vào giỏ hàng</button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProductDetail;
