import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './CSS/ProductList.css';


const TabDogs = ['Phổ Biến nhất', 'Độc Hiếm', 'Chó Bảo Vệ', 'Chó Mặt Xệ', 'Chó Ngao', 'Chó Bull', 'Chó Săn', 'Chó Kéo Xe', 'Chó Xoáy'];
const TabCats = ['Phổ Biến nhất', 'Độc Hiếm', 'Mèo Quý Tộc', 'Đáng yêu', 'Lông dài', 'Lông ngắn', 'ít rụng lông'];


const ProductList = () => {
    const [activeTabDogs, setActiveTabDogs] = useState(TabDogs[0]);
    const [activeTabCats, setActiveTabCats] = useState(TabCats[0]);
    const [startIndexDogs, setStartIndexDogs] = useState(0);
    const [startIndexCats, setStartIndexCats] = useState(0);
    const [dogs, setDogs] = useState([]);
    const [cats, setCats] = useState([]);
    const [loadingDogs, setLoadingDogs] = useState(true);
    const [loadingCats, setLoadingCats] = useState(true);
    const navigate = useNavigate();


    useEffect(() => {
        const fetchDogs = async () => {
            try {
                const breed = getBreedFromTab(activeTabDogs);
                const response = await axios.get('http://localhost:8080/api/pets', {
                    params: {
                        category: 'Chó',
                        breed: breed,
                        popular: activeTabDogs === 'Phổ Biến nhất',
                        page: 0,
                        size: 100000
                    }
                });
                setDogs(response.data.content);
                setLoadingDogs(false);
            } catch (error) {
                console.error("There was an error fetching the dogs!", error);
                setLoadingDogs(false);
            }
        };


        fetchDogs();
    }, [activeTabDogs]);


    useEffect(() => {
        const fetchCats = async () => {
            try {
                const breed = getBreedFromTab(activeTabCats);
                const response = await axios.get('http://localhost:8080/api/pets', {
                    params: {
                        category: 'Mèo',
                        breed: breed,
                        popular: activeTabCats === 'Phổ Biến nhất',
                        page: 0,
                        size: 100000
                    }
                });
                setCats(response.data.content);
                setLoadingCats(false);
            } catch (error) {
                console.error("There was an error fetching the cats!", error);
                setLoadingCats(false);
            }
        };


        fetchCats();
    }, [activeTabCats]);


    const getBreedFromTab = (tab) => {
        switch (tab) {
            case 'Độc Hiếm': return 'Độc Hiếm';
            case 'Chó Bảo Vệ': return 'Chó Bảo Vệ';
            case 'Chó Mặt Xệ': return 'Chó mặt xệ';
            case 'Chó Ngao': return 'Chó ngao';
            case 'Chó Bull': return 'Chó bull';
            case 'Chó Săn': return 'Chó săn';
            case 'Chó Kéo Xe': return 'Chó kéo xe';
            case 'Chó Xoáy': return 'Chó xoáy';
            case 'Mèo Quý Tộc': return 'Quý tộc';
            case 'Đáng yêu': return 'Đáng yêu';
            case 'Lông dài': return 'Lông dài';
            case 'Lông ngắn': return 'Lông ngắn';
            case 'ít rụng lông': return 'ít rụng lông';
            default: return '';
        }
    };


    const handleNextDogs = () => {
        if (startIndexDogs + 6 < TabDogs.length) {
            setStartIndexDogs(startIndexDogs + 1);
        }
    };


    const handlePrevDogs = () => {
        if (startIndexDogs > 0) {
            setStartIndexDogs(startIndexDogs - 1);
        }
    };


    const handleNextCats = () => {
        if (startIndexCats + 6 < TabCats.length) {
            setStartIndexCats(startIndexCats + 1);
        }
    };


    const handlePrevCats = () => {
        if (startIndexCats > 0) {
            setStartIndexCats(startIndexCats - 1);
        }
    };


    const handleProductClick = (id) => {
        navigate(`/product/${id}`);
    };


    return (
        <div className='true-list'>
            {/* Danh sách chó */}
            <div className="product-list container">
                <div className="div-tong">
                    <div className="sidebar">
                        <div className="sidebar__top-image">
                            <img src="https://azpet.com.vn/wp-content/themes/azpet/assets/img/wave-red.png" alt="Top Image" />
                        </div>
                        <h2 className="f aic parent-cat__title">
                            <span className="parent-cat__background" style={{ backgroundImage: 'url("https://azpet.com.vn/wp-content/themes/azpet/assets/img/wave-red.png")' }} />
                            <span className="dark-2 parent-cat__title-text">GIỐNG CHÓ CẢNH</span>
                        </h2>
                        <div className="sidebar__bottom-image">
                            <img src="https://azpet.com.vn/wp-content/uploads/2021/07/azpet-banner-cho-canh-desktop.jpg" alt="Bottom Image" />
                        </div>
                    </div>
                    <div className="content">
                        <div className="tabs-wrapper">
                            <div className="tabs">
                                {TabDogs.slice(startIndexDogs, startIndexDogs + 5).map(tab => (
                                    <div
                                        key={tab}
                                        className={`tab ${activeTabDogs === tab ? 'active' : ''}`}
                                        onClick={() => setActiveTabDogs(tab)}
                                    >
                                        <span>{tab}</span>
                                    </div>
                                ))}
                                <div className="arrow-btns">
                                    <button onClick={handlePrevDogs} className="arrow-btn" disabled={startIndexDogs === 0}>
                                        &lt;
                                    </button>
                                    <button onClick={handleNextDogs} className="arrow-btn" disabled={startIndexDogs + 5 >= TabDogs.length}>
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

            {/* Danh sách mèo */}
            <div className="product-list container">
                <div className="div-tong">
                    <div className="sidebar">
                        <div className="sidebar__top-image">
                            <img src="https://azpet.com.vn/wp-content/themes/azpet/assets/img/wave-red.png" alt="Top Image" />
                        </div>
                        <h2 className="f aic parent-cat__title">
                            <span className="parent-cat__background" style={{ backgroundImage: 'url("https://azpet.com.vn/wp-content/themes/azpet/assets/img/wave-red.png")' }} />
                            <span className="dark-2 parent-cat__title-text">GIỐNG MÈO CẢNH</span>
                        </h2>
                        <div className="sidebar__bottom-image">
                            <img src="https://azpet.com.vn/wp-content/uploads/2021/07/azpet-banner-cho-canh-desktop.jpg" alt="Bottom Image" />
                        </div>
                    </div>
                    <div className="content">
                        <div className="tabs-wrapper">
                            <div className="tabs">
                                {TabCats.slice(startIndexCats, startIndexCats + 5).map(tab => (
                                    <div
                                        key={tab}
                                        className={`tab ${activeTabCats === tab ? 'active' : ''}`}
                                        onClick={() => setActiveTabCats(tab)}
                                    >
                                        <span>{tab}</span>
                                    </div>
                                ))}
                                <div className="arrow-btns">
                                    <button onClick={handlePrevCats} className="arrow-btn" disabled={startIndexCats === 0}>
                                        &lt;
                                    </button>
                                    <button onClick={handleNextCats} className="arrow-btn" disabled={startIndexCats + 5 >= TabCats.length}>
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
            <div className='banner-lon'>
            <section className="image-intro">
  <div className="container image-intro__container">
    <div className="rel image-intro__wrapper">
      <div className="rel image-intro__block">
        <header className="align-c mb-1 image-intro__header">
          <h2 className="primary image-intro__title">VỀ AZPET</h2>
          <div className="dark wysiwyg image-intro__description">
            <p style={{ textAlign: "center" }}>
              Là trại nhân giống chó cảnh hàng đầu Việt Nam – Sau hơn 10 năm
              hoạt động AZPET đã cung cấp ra thị trường trên 25,000 bé thú cưng.
              Quy mô trại chính 7,000 m2, đồng thời hợp tác với hơn 100 hộ nhân
              giống trên toàn quốc…
            </p>
          </div>
        </header>
        <div className="align-c image-intro__main">
          <figure className="image-intro__image-wrapper">
            <img
              decoding="async"
              width={1600}
              height={650}
              src="https://azpet.com.vn/wp-content/uploads/2021/05/banner1.png"
              className="image-intro__image"
              alt="Đội ngũ cán bộ nhân viên azpet"
              srcSet="https://azpet.com.vn/wp-content/uploads/2021/05/banner1.png 1600w, https://azpet.com.vn/wp-content/uploads/2021/05/banner1-300x122.png 300w, https://azpet.com.vn/wp-content/uploads/2021/05/banner1-1024x416.png 1024w, https://azpet.com.vn/wp-content/uploads/2021/05/banner1-768x312.png 768w, https://azpet.com.vn/wp-content/uploads/2021/05/banner1-1536x624.png 1536w, https://azpet.com.vn/wp-content/uploads/2021/05/banner1-20x8.png 20w, https://azpet.com.vn/wp-content/uploads/2021/05/banner1-375x152.png 375w, https://azpet.com.vn/wp-content/uploads/2021/05/banner1-64x26.png 64w"
              sizes="(max-width: 1600px) 100vw, 1600px"
              title="banner1"
            />{" "}
          </figure>
          <footer className="mt-1 align-c image-intro__footer">
            <div className="wp-block-button text-center is-style-fill image-intro__button">
              <a
                className="wp-block-button__link has-primary-background-color has-white-color has-text-color has-background"
                href="https://azpet.com.vn/gioi-thieu/"
              >
                Xem thêm
              </a>
            </div>{" "}
          </footer>
        </div>
      </div>
    </div>
  </div>
</section>

            </div>
        </div>
    );
}


export default ProductList;



