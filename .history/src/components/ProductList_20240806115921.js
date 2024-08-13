import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CSS/ProductList.css'; // Import các kiểu CSS riêng cho ProductList

const TabDogs = ['Phổ Biến nhất', 'Độc Hiếm', 'Chó Bảo Vệ', 'Chó Mặt Xệ', 'Chó Ngao', 'Chó Bull', 'Chó Săn', 'Chó Kéo Xe', 'Chó Xoáy'];
const TabCats = ['Phổ Biến nhất', 'Độc Hiếm', 'Mèo Quý Tộc', 'Đáng yêu', 'Lông dài', 'Lông ngắn', 'ít rụng lông'];

const ProductList = () => {
    const [activeTab, setActiveTab] = useState(TabDogs[0]);
    const [startIndex, setStartIndex] = useState(0);
    const [dogs, setDogs] = useState([]); // State để lưu danh sách chó
    const [cats, setCats] = useState([]); // State để lưu danh sách mèo
    const [loadingDogs, setLoadingDogs] = useState(true); // State để hiển thị loading khi chờ dữ liệu chó
    const [loadingCats, setLoadingCats] = useState(true); // State để hiển thị loading khi chờ dữ liệu mèo

    useEffect(() => {
        // Gọi API để lấy danh sách chó
        axios.get('http://localhost:8080/api/pets', { params: { category: 'Chó', page: 0, size: 4 } })
            .then(response => {
                setDogs(response.data.content); // Lưu danh sách chó vào state
                setLoadingDogs(false); // Tắt loading
            })
            .catch(error => {
                console.error("There was an error fetching the dogs!", error);
                setLoadingDogs(false); // Tắt loading ngay cả khi gặp lỗi
            });

        // Gọi API để lấy danh sách mèo
        axios.get('http://localhost:8080/api/pets', { params: { category: 'Mèo', page: 0, size: 4 } })
            .then(response => {
                setCats(response.data.content); // Lưu danh sách mèo vào state
                setLoadingCats(false); // Tắt loading
            })
            .catch(error => {
                console.error("There was an error fetching the cats!", error);
                setLoadingCats(false); // Tắt loading ngay cả khi gặp lỗi
            });
    }, []); // Chỉ gọi API khi component được tải lần đầu

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
                                <p>Loading Dogs...</p> // Hiển thị khi dữ liệu chó đang được tải
                            ) : (
                                dogs.map((pet) => (
                                    <div key={pet.id} className="product">
                                        <img src={"http://localhost:8080/image/" + pet.image} alt={pet.name} />
                                        <p>{pet.name}</p>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>

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
                                                    width={1} /* Adjust the width as needed */
                                                    height={70} /* Adjust the height if necessary */
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
                                <p>Loading Cats...</p> // Hiển thị khi dữ liệu mèo đang được tải
                            ) : (
                                cats.map((pet) => (
                                    <div key={pet.id} className="product">
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
}

export default ProductList;
