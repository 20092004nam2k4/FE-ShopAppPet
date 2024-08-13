import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './CSS/ProductList.css'; // Import các kiểu CSS riêng cho ProductList

const TabDogs = ['Phổ Biến nhất', 'Độc Hiếm', 'Chó Bảo Vệ', 'Chó Mặt Xệ', 'Chó Ngao', 'Chó Bull', 'Chó Săn', 'Chó Kéo Xe', 'Chó Xoáy'];
const TabCats = ['Phổ Biến nhất', 'Độc Hiếm', 'Mèo Quý Tộc', 'Đáng yêu', 'Lông dài', 'Lông ngắn', 'ít rụng lông'];

// Hàm lấy breed cho phần chó
const getBreedForDogs = (tab) => {
    switch (tab) {
        case 'Độc Hiếm':
            return 'Rare';
        case 'Chó Bảo Vệ':
            return 'Chó Bảo Vệ';
        case 'Chó Mặt Xệ':
            return 'Chó mặt xệ';
        case 'Chó Ngao':
            return 'Chó ngao';
        case 'Chó Bull':
            return 'Chó bull';
        case 'Chó Săn':
            return 'Chó săn';
        case 'Chó Kéo Xe':
            return 'Chó kéo xe';
        case 'Chó Xoáy':
            return 'Chó xoáy';
        default:
            return '';
    }
};

// Hàm lấy breed cho phần mèo
const getBreedForCats = (tab) => {
    switch (tab) {
        case 'Mèo Quý Tộc':
            return 'Quý tộc';
        case 'Đáng yêu':
            return 'Đáng yêu';
        case 'Lông dài':
            return 'Lông dài';
        case 'Lông ngắn':
            return 'Lông ngắn';
        case 'ít rụng lông':
            return 'ít rụng lông';
        default:
            return '';
    }
};

// Component danh sách chó
const DogSection = ({ activeTab, handleTabChange, dogs, loadingDogs, onProductClick }) => {
    const [startIndex, setStartIndex] = useState(0);

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

    return (
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
                                    onClick={() => handleTabChange(tab)}
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
                                <div key={pet.id} className="product" onClick={() => onProductClick(pet.id)}>
                                    <img src={"http://localhost:8080/image/" + pet.image} alt={pet.name} />
                                    <p>{pet.name}</p>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

// Component danh sách mèo
const CatSection = ({ activeTab, handleTabChange, cats, loadingCats, onProductClick }) => {
    const [startIndex, setStartIndex] = useState(0);

    const handleNext = () => {
        if (startIndex + 5 < TabCats.length) {
            setStartIndex(startIndex + 1);
        }
    };

    const handlePrev = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    };

    return (
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
                        <img src="https://azpet.com.vn/wp-content/uploads/2021/07/azpet-banner-cho-canh-desktop.jpg" alt="Bottom Image" />
                    </div>
                </div>
                <div className="content">
                    <div className="tabs-wrapper">
                        <div className="tabs">
                            {TabCats.slice(startIndex, startIndex + 5).map(tab => (
                                <div
                                    key={tab}
                                    className={`tab ${activeTab === tab ? 'active' : ''}`}
                                    onClick={() => handleTabChange(tab)}
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
                                <div key={pet.id} className="product" onClick={() => onProductClick(pet.id)}>
                                    <img src={"http://localhost:8080/image/" + pet.image} alt={pet.name} />
                                    <p>{pet.name}</p>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

const ProductList = () => {
    const [activeTab, setActiveTab] = useState('Phổ Biến nhất');
    const [dogs, setDogs] = useState([]);
    const [cats, setCats] = useState([]);
    const [loadingDogs, setLoadingDogs] = useState(true);
    const [loadingCats, setLoadingCats] = useState(true);

    const navigate = useNavigate(); // Initialize useNavigate

    useEffect(() => {
        const fetchPets = async () => {
            try {
                // Chỉ lấy dữ liệu cho chó hoặc mèo dựa trên activeTab
                const breedDogs = TabDogs.includes(activeTab) ? getBreedForDogs(activeTab) : '';
                const breedCats = TabCats.includes(activeTab) ? getBreedForCats(activeTab) : '';

                // Lấy dữ liệu chó
                if (breedDogs) {
                    const dogsResponse = await axios.get('http://localhost:8080/api/dogs', { params: { breed: breedDogs } });
                    setDogs(dogsResponse.data);
                    setLoadingDogs(false);
                }

                // Lấy dữ liệu mèo
                if (breedCats) {
                    const catsResponse = await axios.get('http://localhost:8080/api/cats', { params: { breed: breedCats } });
                    setCats(catsResponse.data);
                    setLoadingCats(false);
                }
            } catch (error) {
                console.error('Error fetching pets:', error);
                setLoadingDogs(false);
                setLoadingCats(false);
            }
        };

        fetchPets();
    }, [activeTab]);

    const handleProductClick = (id) => {
        navigate(`/product/${id}`);
    };

    return (
        <div className='true-list'>
            <DogSection
                activeTab={activeTab}
                handleTabChange={setActiveTab}
                dogs={dogs}
                loadingDogs={loadingDogs}
                onProductClick={handleProductClick}
            />
            <CatSection
                activeTab={activeTab}
                handleTabChange={setActiveTab}
                cats={cats}
                loadingCats={loadingCats}
                onProductClick={handleProductClick}
            />
        </div>
    );
};

export default ProductList;
