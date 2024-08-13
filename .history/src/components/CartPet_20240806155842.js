import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CSS/CartPage.css'; // Thêm file CSS nếu cần

const CartPage = () => {
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Lấy dữ liệu giỏ hàng từ API
        axios.get('http://localhost:8080/api/cart') // Thay đổi endpoint nếu cần
            .then(response => {
                setCartItems(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("There was an error fetching the cart items!", error);
                setLoading(false);
            });
    }, []);

    const handleQuantityChange = (cartItemId, newQuantity) => {
        axios.put(`http://localhost:8080/api/cart/${cartItemId}`, { quantity: newQuantity })
            .then(response => {
                setCartItems(prevItems =>
                    prevItems.map(item =>
                        item.id === cartItemId ? { ...item, quantity: newQuantity } : item
                    )
                );
            })
            .catch(error => {
                console.error("There was an error updating the quantity!", error);
            });
    };

    const handleRemoveItem = (cartItemId) => {
        axios.delete(`http://localhost:8080/api/cart/${cartItemId}`)
            .then(() => {
                setCartItems(prevItems => prevItems.filter(item => item.id !== cartItemId));
            })
            .catch(error => {
                console.error("There was an error removing the item!", error);
            });
    };

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.totalPrice, 0);
    };

    if (loading) {
        return <p>Loading cart...</p>;
    }

    return (
        <div className="cart-page">
            <h1>Giỏ hàng của bạn</h1>
            {cartItems.length === 0 ? (
                <p>Giỏ hàng của bạn đang trống.</p>
            ) : (
                <div className="cart-items">
                    {cartItems.map(item => (
                        <div key={item.id} className="cart-item">
                            <img src={"http://localhost:8080/image/" + item.pet.image} alt={item.pet.name} />
                            <div className="item-info">
                                <h2>{item.pet.name}</h2>
                                <p>Giá: {item.pet.price.toLocaleString()}đ</p>
                                <p>Tổng giá: {item.totalPrice.toLocaleString()}đ</p>
                                <div className="quantity-control">
                                    <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
                                </div>
                                <button onClick={() => handleRemoveItem(item.id)}>Xóa</button>
                            </div>
                        </div>
                    ))}
                    <div className="cart-summary">
                        <h2>Tổng tiền: {calculateTotalPrice().toLocaleString()}đ</h2>
                        <button>Thanh toán</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;
