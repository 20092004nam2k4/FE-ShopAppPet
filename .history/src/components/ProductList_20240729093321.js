import React from 'react';
import './CSS/ProductList.css'; // Import các kiểu CSS riêng cho ProductList

const ProductList = () => {
    return (
        <div className="product-list container">
            <div className="row">
                <div className="col-md-2 ">
                    {/* Nội dung cho cột bên trái */}
                    <div className="left-column">
                        ksjdflaksdjfl
                    </div>
                </div>
                <div className="col-md-8">
                    {/* Nội dung cho cột bên phải */}
                    <div className="right-column">
                        lksdajfklasdj
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductList;
