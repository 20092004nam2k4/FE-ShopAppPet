import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick'; // Import Slider từ react-slick
import 'slick-carousel/slick/slick.css'; // Import CSS cho slick-carousel
import 'slick-carousel/slick/slick-theme.css'; // Import CSS cho slick-carousel theme
import './CSS/ProductList.css'; // Import các kiểu CSS riêng cho ProductList

const TabDogs = ['Phổ Biến nhất', 'Độc Hiếm', 'Chó Bảo Vệ', 'Chó Mặt Xệ', 'Chó Ngao', 'Chó Bull', 'Chó Săn', 'Chó Kéo Xe', 'Chó Xoáy'];
const TabCats = ['Phổ Biến nhất', 'Độc Hiếm', 'Mèo Quý Tộc', 'Đáng yêu', 'Lông dài', 'Lông ngắn', 'ít rụng lông'];

const ProductList = () => {
    const [activeTab, setActiveTab] = useState(TabDogs[0]);
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

    // Cấu hình cho Slider
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
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
                        <Slider {...sliderSettings}>
                            {TabDogs.map(tab => (
                                <div
                                    key={tab}
                                    className={`tab ${activeTab === tab ? 'active' : ''}`}
                                    onClick={() => setActiveTab(tab)}
                                >
                                    <span>{tab}</span>
                                </div>
                            ))}
                        </Slider>
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
                        <Slider {...sliderSettings}>
                            {TabCats.map(tab => (
                                <div
                                    key={tab}
                                    className={`tab ${activeTab === tab ? 'active' : ''}`}
                                    onClick={() => setActiveTab(tab)}
                                >
                                    <span>{tab}</span>
                                </div>
                            ))}
                        </Slider>
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
