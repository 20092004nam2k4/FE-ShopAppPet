// src/components/CartPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';
import './CSS/CartPage.css'; // Thay đổi đường dẫn nếu cần

const CartPage = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        // Giả sử bạn có một API để lấy các mục trong giỏ hàng
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

    return (
        <div className="cart-page">
            <Navbar />
            <div className="cart-content">
                <h1>Giỏ Hàng</h1>
                {cartItems.length === 0 ? (
                    <p>Giỏ hàng của bạn đang trống.</p>
                ) : (
                    <table>
                        <thead>
                            <tr>
                                <th>Ảnh</th>
                                <th>Tên sản phẩm</th>
                                <th>Số lượng</th>
                                <th>Giá</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map(item => (
                                <tr key={item.id}>
                                    <td><img src={"http://localhost:8080/image/" + item.pet.image} alt={item.pet.name} width="100" /></td>
                                    <td>{item.pet.name}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.totalPrice.toLocaleString()}đ</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
                <div className="cart-total">
                    <h2>Tổng cộng: {calculateTotal()}đ</h2>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default CartPage;
