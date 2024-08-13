import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';
import './CSS/CartPage.css'; // Đảm bảo đường dẫn chính xác

const CartPage = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/cart/items')
            .then(response => {
                setCartItems(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the cart items!", error);
            });
    }, []);

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.totalPrice, 0).toLocaleString();
    };

    const handlePurchase = () => {
        alert('bấm cái méo gì,!');
        // Here you can add further logic like sending the order to the server
    };

    return (
        <div className="cart-page">
            <Navbar />
            <div className="cart-content">
                <h1>Giỏ Hàng</h1>
                {cartItems.length === 0 ? (
                    <p className="empty-cart">Giỏ hàng của bạn đang trống.</p>
                ) : (
                    <div className="cart-items">
                        {cartItems.map(item => (
                            <div className="cart-item" key={item.id}>
                                <img src={"http://localhost:8080/image/" + item.pet.image} alt={item.pet.name} />
                                <div className="item-details">
                                    <h2>{item.pet.name}</h2>
                                    <p className="quantity">Số lượng: {item.quantity}</p>
                                    <p className="price">Tổng giá: {item.totalPrice.toLocaleString()}đ</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                <div className="cart-summary">
                    <h2>Tổng cộng: {calculateTotal()}đ</h2>
                </div>
                <div className="purchase-form">
                    <h3>Đặt mua</h3>
                    <input type="text" placeholder="Họ và tên" className="form-input" />
                    <input type="text" placeholder="Địa chỉ" className="form-input" />
                    <input type="text" placeholder="Số điện thoại" className="form-input" />
                    <button className="purchase-button" onClick={handlePurchase}>Mua</button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default CartPage;
