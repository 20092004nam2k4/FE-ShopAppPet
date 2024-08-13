// src/components/ExampleCarouselImage.js
import React from 'react';

const ExampleCarouselImage = ({ text }) => {
    return (
        <div>
            <img
                className="d-block w-100"
                src="your_image_path_here.jpg"
                alt={text}
            />
        </div>
    );
};

export default ExampleCarouselImage;
