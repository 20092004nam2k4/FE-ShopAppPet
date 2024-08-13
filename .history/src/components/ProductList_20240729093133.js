import React from 'react';
import './CSS/ProductList.css'; // Import các kiểu CSS riêng cho ProductList

const ProductList = () => {
    return (
        <div className="product-list container">
            <div className="row">
                <div className="col-md-2 left-image">
                    lkasdjflaksdjfk
                    <div className="left-column">
                        {/* Nội dung cột bên trái */}
                    </div>
                </div>
                <div className="col-md-8">
                    {/* Nội dung cho cột bên phải */}
                    <div className="right-column">
                        {/* Nội dung cột bên phải */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductList;
