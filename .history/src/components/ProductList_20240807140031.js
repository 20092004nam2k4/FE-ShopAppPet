import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './CSS/ProductList.css'; // Import CSS for ProductList

// Tab categories for dogs and cats
const TabDogs = ['Phổ Biến nhất', 'Độc Hiếm', 'Chó Bảo Vệ', 'Chó Mặt Xệ', 'Chó Ngao', 'Chó Bull', 'Chó Săn', 'Chó Kéo Xe', 'Chó Xoáy'];
const TabCats = ['Phổ Biến nhất', 'Độc Hiếm', 'Mèo Quý Tộc', 'Đáng yêu', 'Lông dài', 'Lông ngắn', 'ít rụng lông'];

const ProductList = () => {
    const [activeTab, setActiveTab] = useState(TabDogs[0]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate(); // Initialize useNavigate

    useEffect(() => {
        let category = 'Chó'; // Default category for dogs
        let breed = '';
        let isPopular = false;

        // Determine if the active tab is "Phổ Biến nhất" and set filters
        if (TabDogs.includes(activeTab) || TabCats.includes(activeTab)) {
            if (TabDogs.includes(activeTab)) {
                category = 'Chó';
            } else {
                category = 'Mèo';
            }
            
            if (activeTab === 'Phổ Biến nhất') {
                isPopular = true;
            } else {
                breed = activeTab;
            }
        }

        axios.get('http://localhost:8080/api/pets', { 
            params: { 
                category, 
                breed, 
                popular: isPopular 
            } 
        })
        .then(response => {
            setProducts(response.data.content);
            setLoading(false);
        })
        .catch(error => {
            console.error("There was an error fetching the products!", error);
            setLoading(false);
        });
    }, [activeTab]);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const handleProductClick = (id) => {
        navigate(`/product/${id}`); // Navigate to product detail page
    };

    return (
        <div className='true-list'>
            <div className="product-list container">
                <div className="div-tong">
                    <div className="sidebar">
                        <div className="sidebar__top-image">
                            <img src="https://azpet.com.vn/wp-content/themes/azpet/assets/img/wave-red.png" alt="Top Image" />
                        </div>
                        <h2 className="f aic parent-cat__title">
                            <span
                                className="parent-cat__background"
                                style={{
                                    backgroundImage:
                                        'url("https://azpet.com.vn/wp-content/themes/azpet/assets/img/wave-red.png")'
                                }}
                            />
                            <span className="dark-2 parent-cat__title-text">GIỐNG {activeTab}</span>
                        </h2>
                        <div className="sidebar__bottom-image">
                            <img src="https://azpet.com.vn/wp-content/uploads/2021/07/azpet-banner-cho-canh-desktop.jpg" alt="Bottom Image" />
                        </div>
                    </div>
                    <div className="content">
                        <div className="tabs-wrapper">
                            <div className="tabs">
                                {(TabDogs.concat(TabCats)).map(tab => (
                                    <div
                                        key={tab}
                                        className={`tab ${activeTab === tab ? 'active' : ''}`}
                                        onClick={() => handleTabClick(tab)}
                                    >
                                        <span>{tab}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="product-grid">
                            {loading ? (
                                <p>Loading Products...</p>
                            ) : (
                                products.map((pet) => (
                                    <div key={pet.id} className="product" onClick={() => handleProductClick(pet.id)}>
                                        <img src={"http://localhost:8080/image/" + pet.image} alt={pet.name} />
                                        <p>{pet.name}</p>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Banner */}
            <div className='image-banner'>
                <div className="wp-block-group default-section__main">
                    <div className="wp-block-group__inner-container container default-section__container default-section__container--main">
                        <div className="wp-block-group default-section__inner default-section__inner--main">
                            <div className="wp-block-group__inner-content">
                                <div className="grid image-row__grid">
                                    <div className="grid__col image-row__col default-section__col image-row__col image-row__col--100">
                                        <a
                                            className="image-row__image-wrapper has-link"
                                            href="https://hoptac.azpet.com.vn/"
                                        >
                                            <picture className="image image--default image-row__image">
                                                <source
                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/07/hop-tac-nhan-giong-cho-canh-300x15.jpg"
                                                    sizes="(max-width: 480px) 300w"
                                                    media="(max-width: 480px)"
                                                />
                                                <source
                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/07/hop-tac-nhan-giong-cho-canh-1024x52.jpg"
                                                    sizes="(max-width: 1024px) 1024w"
                                                    media="(max-width: 1024px)"
                                                />
                                                <img
                                                    decoding="async"
                                                    className="image__img"
                                                    src="https://azpet.com.vn/wp-content/uploads/2021/07/hop-tac-nhan-giong-cho-canh.jpg"
                                                    alt="hop tac nhan giong cho canh"
                                                    title="hop tac nhan giong cho canh"
                                                />
                                            </picture>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductList;
