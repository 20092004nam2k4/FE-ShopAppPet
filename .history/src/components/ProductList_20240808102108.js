import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './CSS/ProductList.css'; // Import các kiểu CSS riêng cho ProductList

const TabDogs = ['Phổ Biến nhất', 'Độc Hiếm', 'Chó Bảo Vệ', 'Chó Mặt Xệ', 'Chó Ngao', 'Chó Bull', 'Chó Săn', 'Chó Kéo Xe', 'Chó Xoáy'];
const TabCats = ['Phổ Biến nhất', 'Độc Hiếm', 'Mèo Quý Tộc', 'Đáng yêu', 'Lông dài', 'Lông ngắn', 'ít rụng lông'];

const ProductList = () => {
    const [activeTab, setActiveTab] = useState(TabDogs[0]);
    const [startIndex, setStartIndex] = useState(0);
    const [dogs, setDogs] = useState([]);
    const [cats, setCats] = useState([]);
    const [loadingDogs, setLoadingDogs] = useState(true);
    const [loadingCats, setLoadingCats] = useState(true);

    const navigate = useNavigate(); // Initialize useNavigate

   useEffect(() => {
    const fetchPets = async () => {
        try {
            const breed = getBreedFromTab(activeTab);
            console.log(`Fetching pets with breed: ${breed}`);
            
            const fetchDogs = axios.get('http://localhost:8080/api/pets', {
                params: {
                    category: 'Chó',
                    breed: breed,
                    popular: activeTab === 'Phổ Biến nhất',
                    page: 0,
                    size: 4
                }
            });
            const fetchCats = axios.get('http://localhost:8080/api/pets', {
                params: {
                    category: 'Mèo',
                    breed: breed,
                    popular: activeTab === 'Phổ Biến nhất',
                    page: 0,
                    size: 4
                }
            });

            const [dogsResponse, catsResponse] = await Promise.all([fetchDogs, fetchCats]);

            console.log('Dogs Response:', dogsResponse.data);
            console.log('Cats Response:', catsResponse.data);

            setDogs(dogsResponse.data.content);
            setCats(catsResponse.data.content);
            setLoadingDogs(false);
            setLoadingCats(false);
        } catch (error) {
            console.error("There was an error fetching the pets!", error);
            setLoadingDogs(false);
            setLoadingCats(false);
        }
    };

    fetchPets();
}, [activeTab]);

const getBreedFromTab = (tab) => {
    const breedMap = {
        'Độc Hiếm': 'Rare',
        'Chó Bảo Vệ': 'Guard Dog',
        'Chó Mặt Xệ': 'Droopy Face Dog',
        'Chó Ngao': 'Mastiff',
        'Chó Bull': 'Bull Dog',
        'Chó Săn': 'Hunting Dog',
        'Chó Kéo Xe': 'Sled Dog',
        'Chó Xoáy': 'Spinning Dog',
    };
    return breedMap[tab] || '';
};
    

    const handleNext = () => {
        if (startIndex + 5 < TabDogs.length) {
            setStartIndex(startIndex + 1);
        }
    };

    const handlePrev = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    };

    const handleProductClick = (id) => {
        navigate(`/product/${id}`); // Điều hướng đến trang chi tiết sản phẩm với ID sản phẩm
    };

    return (
        <div className='true-list'>
            {/* Phần danh sách chó */}
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
                            <span className="dark-2 parent-cat__title-text">GIỐNG CHÓ CẢNH</span>
                        </h2>
                        <div className="sidebar__bottom-image">
                            <img src="https://azpet.com.vn/wp-content/uploads/2021/07/azpet-banner-cho-canh-desktop.jpg" alt="Bottom Image" />
                        </div>
                    </div>
                    <div className="content">
                        <div className="tabs-wrapper">
                            <div className="tabs">
                                {TabDogs.slice(startIndex, startIndex + 5).map(tab => (
                                    <div
                                        key={tab}
                                        className={`tab ${activeTab === tab ? 'active' : ''}`}
                                        onClick={() => setActiveTab(tab)}
                                    >
                                        <span>{tab}</span>
                                    </div>
                                ))}
                                <div className="arrow-btns">
                                    <button onClick={handlePrev} className="arrow-btn" disabled={startIndex === 0}>
                                        &lt;
                                    </button>
                                    <button onClick={handleNext} className="arrow-btn" disabled={startIndex + 5 >= TabDogs.length}>
                                        &gt;
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="product-grid">
                            {loadingDogs ? (
                                <p>Loading Dogs...</p>
                            ) : (
                                dogs.map((pet) => (
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

            {/* Phần danh sách mèo */}
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
                            <span className="dark-2 parent-cat__title-text">GIỐNG MÈO CẢNH</span>
                        </h2>
                        <div className="sidebar__bottom-image">
                            <img src="https://azpet.com.vn/wp-content/uploads/2021/07/azpet-banner-meo-canh-desktop.jpg" alt="Bottom Image" />
                        </div>
                    </div>
                    <div className="content">
                        <div className="tabs-wrapper">
                            <div className="tabs">
                                {TabCats.slice(startIndex, startIndex + 5).map(tab => (
                                    <div
                                        key={tab}
                                        className={`tab ${activeTab === tab ? 'active' : ''}`}
                                        onClick={() => setActiveTab(tab)}
                                    >
                                        <span>{tab}</span>
                                    </div>
                                ))}
                                <div className="arrow-btns">
                                    <button onClick={handlePrev} className="arrow-btn" disabled={startIndex === 0}>
                                        &lt;
                                    </button>
                                    <button onClick={handleNext} className="arrow-btn" disabled={startIndex + 5 >= TabCats.length}>
                                        &gt;
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="product-grid">
                            {loadingCats ? (
                                <p>Loading Cats...</p>
                            ) : (
                                cats.map((pet) => (
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
        </div>
    );
};

export default ProductList;
