// src/components/Banner.js
import React from 'react';
import bannerImage from '../a'; // Đảm bảo bạn có tệp hình ảnh

const Banner = () => {
    return (
        <div className="banner">
            <img src={bannerImage} alt="Banner" className="img-fluid" />
        </div>
    );
};

export default Banner;
