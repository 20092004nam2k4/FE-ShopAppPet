import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ProductDetail from './ProductDetail'; // Import the ProductDetail component
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
    const [selectedProductId, setSelectedProductId] = useState(null); // For modal
    const [isModalOpen, setIsModalOpen] = useState(false); // For modal visibility

    useEffect(() => {
        axios.get('http://localhost:8080/api/pets', { params: { category: 'Chó', page: 0, size: 4 } })
            .then(response => {
                setDogs(response.data.content);
                setLoadingDogs(false);
            })
            .catch(error => {
                console.error("There was an error fetching the dogs!", error);
                setLoadingDogs(false);
            });

        axios.get('http://localhost:8080/api/pets', { params: { category: 'Mèo', page: 0, size: 4 } })
            .then(response => {
                setCats(response.data.content);
                setLoadingCats(false);
            })
            .catch(error => {
                console.error("There was an error fetching the cats!", error);
                setLoadingCats(false);
            });
    }, []);

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
        setSelectedProductId(id);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className='true-list'>
            <div className="product-list container">
                <div className="div-tong">
                    <div className="content">
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

            {isModalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <ProductDetail id={selectedProductId} />
                        <button className="close-modal" onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProductList;
