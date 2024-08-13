import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './CSS/ProductList.css';

const ProductList = () => {
    const [activeTab, setActiveTab] = useState('Phổ Biến nhất');
    const [startIndex, setStartIndex] = useState(0);
    const [dogs, setDogs] = useState([]);
    const [cats, setCats] = useState([]);
    const [breeds, setBreeds] = useState({ dogs: [], cats: [] });
    const [loadingDogs, setLoadingDogs] = useState(true);
    const [loadingCats, setLoadingCats] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchBreeds = async () => {
            try {
                const [dogsResponse, catsResponse] = await Promise.all([
                    axios.get('http://localhost:8080/api/pets/breeds', { params: { category: 'Chó' } }),
                    axios.get('http://localhost:8080/api/pets/breeds', { params: { category: 'Mèo' } })
                ]);

                setBreeds({
                    dogs: dogsResponse.data,
                    cats: catsResponse.data
                });
            } catch (error) {
                console.error("There was an error fetching breeds!", error);
            }
        };

        fetchBreeds();
    }, []);

    useEffect(() => {
        const fetchPets = async () => {
            try {
                const breed = getBreedFromTab(activeTab);
                const [dogsResponse, catsResponse] = await Promise.all([
                    axios.get('http://localhost:8080/api/pets', {
                        params: { category: 'Chó', breed, page: 0, size: 4 }
                    }),
                    axios.get('http://localhost:8080/api/pets', {
                        params: { category: 'Mèo', breed, page: 0, size: 4 }
                    })
                ]);

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
        if (startIndex + 5 < breeds.dogs.length) {
            setStartIndex(startIndex + 1);
        }
    };

    const handlePrev = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    };

    const handleProductClick = (id) => {
        navigate(`/product/${id}`);
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
                                style={{ backgroundImage: 'url("https://azpet.com.vn/wp-content/themes/azpet/assets/img/wave-red.png")' }}
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
                                {breeds.dogs.slice(startIndex, startIndex + 5).map(breed => (
                                    <div
                                        key={breed}
                                        className={`tab ${activeTab === breed ? 'active' : ''}`}
                                        onClick={() => setActiveTab(breed)}
                                    >
                                        <span>{breed}</span>
                                    </div>
                                ))}
                                <div className="arrow-btns">
                                    <button onClick={handlePrev} className="arrow-btn" disabled={startIndex === 0}>
                                        &lt;
                                    </button>
                                    <button onClick={handleNext} className="arrow-btn" disabled={startIndex + 5 >= breeds.dogs.length}>
                                        &gt;
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="product-grid">
                            {loadingDogs ? (
                                <p>Loading Dogs...</p>
                            ) : (
                                dogs.map(pet => (
                                    <div key={pet.id} className="product" onClick={() => handleProductClick(pet.id)}>
                                        <img src={`http://localhost:8080/image/${pet.image}`} alt={pet.name} />
                                        <p>{pet.name}</p>
                                    </div>
                                ))
                            )}
                        </div>
                        <div className="product-grid">
                            {loadingCats ? (
                                <p>Loading Cats...</p>
                            ) : (
                                cats.map(pet => (
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
        </div>
    );
};

export default ProductList;
