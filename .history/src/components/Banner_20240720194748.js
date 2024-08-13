// src/components/Banner.js
import React from 'react';
import bannerImage from '../assets/images/banner.jpg';

const Banner = () => {
  return (
    <div className="banner">
      <img src={bannerImage} alt="Banner" className="img-fluid" />
    </div>
  );
};

export default Banner;
