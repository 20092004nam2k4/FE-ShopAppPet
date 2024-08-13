import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './CSS/ProductList.css'; // Import các kiểu CSS riêng cho ProductList

// Danh sách các tab cho chó và mèo
const TabDogs = ['Phổ Biến nhất', 'Độc Hiếm', 'Chó Bảo Vệ', 'Chó Mặt Xệ', 'Chó Ngao', 'Chó Bull', 'Chó Săn', 'Chó Kéo Xe', 'Chó Xoáy'];
const TabCats = ['Phổ Biến nhất', 'Độc Hiếm', 'Mèo Quý Tộc', 'Đáng yêu', 'Lông dài', 'Lông ngắn', 'ít rụng lông'];

const ProductList = () => {
    const [activeTab, setActiveTab] = useState('Phổ Biến nhất');
    const [dogs, setDogs] = useState([]);
    const [cats, setCats] = useState([]);
    const [loadingDogs, setLoadingDogs] = useState(true);
    const [loadingCats, setLoadingCats] = useState(true);
    const [currentCategory, setCurrentCategory] = useState('Chó');
    const [startIndex, setStartIndex] = useState(0);

    const navigate = useNavigate(); // Initialize useNavigate

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch dữ liệu chó
                const dogsResponse = await axios.get('http://localhost:8080/api/pets', {
                    params: { category: 'Chó', page: 0, size: 4 }
                });
                setDogs(dogsResponse.data.content);
                setLoadingDogs(false);

                // Fetch dữ liệu mèo
                const catsResponse = await axios.get('http://localhost:8080/api/pets', {
                    params: { category: 'Mèo', page: 0, size: 4 }
                });
                setCats(catsResponse.data.content);
                setLoadingCats(false);
            } catch (error) {
                console.error("There was an error fetching pets!", error);
                setLoadingDogs(false);
                setLoadingCats(false);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchFilteredPets = async () => {
            try {
                if (currentCategory === 'Chó') {
                    const response = await axios.get('http://localhost:8080/api/pets', {
                        params: { category: 'Chó', breed: activeTab, page: 0, size: 4 }
                    });
                    setDogs(response.data.content);
                } else {
                    const response = await axios.get('http://localhost:8080/api/pets', {
                        params: { category: 'Mèo', breed: activeTab, page: 0, size: 4 }
                    });
                    setCats(response.data.content);
                }
            } catch (error) {
                console.error("There was an error fetching filtered pets!", error);
            }
        };

        fetchFilteredPets();
    }, [activeTab, currentCategory]);

    // Hàm xử lý khi nhấn nút tiếp theo
    const handleNext = () => {
        if (startIndex + 5 < (currentCategory === 'Chó' ? TabDogs.length : TabCats.length)) {
            setStartIndex(startIndex + 1);
        }
    };

    // Hàm xử lý khi nhấn nút trước
    const handlePrev = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    };

    // Hàm xử lý khi nhấn vào sản phẩm
    const handleProductClick = (id) => {
        navigate(`/product/${id}`); // Điều hướng đến trang chi tiết sản phẩm với ID sản phẩm
    };

    return (
        <div className='true-list'>
            {/* Phần danh sách chó và mèo */}
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
                            <span className="dark-2 parent-cat__title-text">{currentCategory === 'Chó' ? 'GIỐNG CHÓ CẢNH' : 'GIỐNG MÈO CẢNH'}</span>
                        </h2>
                        <div className="sidebar__bottom-image">
                            <img src="https://azpet.com.vn/wp-content/uploads/2021/07/azpet-banner-cho-canh-desktop.jpg" alt="Bottom Image" />
                        </div>
                    </div>
                    <div className="content">
                        <div className="tabs-wrapper">
                            <div className="tabs">
                                {(currentCategory === 'Chó' ? TabDogs : TabCats).slice(startIndex, startIndex + 5).map(tab => (
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
                                    <button onClick={handleNext} className="arrow-btn" disabled={startIndex + 5 >= (currentCategory === 'Chó' ? TabDogs.length : TabCats.length)}>
                                        &gt;
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="product-grid">
                            {(currentCategory === 'Chó' ? loadingDogs : loadingCats) ? (
                                <p>Loading {currentCategory === 'Chó' ? 'Dogs' : 'Cats'}...</p>
                            ) : (
                                (currentCategory === 'Chó' ? dogs : cats).map((pet) => (
                                    <div key={pet.id} className="product" onClick={() => handleProductClick(pet.id)}>
                                        <img src={`http://localhost:8080/image/${pet.image}`} alt={pet.name} />
                                        <p>{pet.name}</p>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Phần banner */}
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
