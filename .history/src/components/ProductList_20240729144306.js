import React from 'react';
import './CSS/ProductList.css'; // Import các kiểu CSS riêng cho ProductList


const ProductList = () => {
    return (
        <div className="product-list container">
            <section
                className="parent-cat default-section default-section--no-container parent-cat--homepage has-4 parent-cat--color-red parent-cat--has-nav-slider"
                data-child-block="parent-cat"
                data-rest-url="https://azpet.com.vn/wp-json/v1/get_products_by_category"
                data-screen="desktop"
                data-layout={4}
            >
                <div className="container parent-cat__container">
                    <div className="parent-cat__inner">
                        <div className="mb-1 parent-cat__header">
                            <h2 className="f aic parent-cat__title">
                                <span
                                    className="parent-cat__background"
                                    style={{
                                        backgroundImage:
                                            'url("https://azpet.com.vn/wp-content/themes/azpet/assets/img/wave-red.png")'
                                    }}
                                />
                                <span className="dark-2 parent-cat__title-text">Giống Chó Cảnh</span>
                            </h2>
                            <div className="parent-cat__image-wrapper">
                                <img
                                    decoding="async"
                                    width={730}
                                    height={1459}
                                    src="https://azpet.com.vn/wp-content/uploads/2021/07/azpet-banner-cho-canh-desktop.jpg"
                                    className="parent-cat__image"
                                    alt="azpet banner chó cảnh desktop"
                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/07/azpet-banner-cho-canh-desktop.jpg 730w, https://azpet.com.vn/wp-content/uploads/2021/07/azpet-banner-cho-canh-desktop-300x600.jpg 300w, https://azpet.com.vn/wp-content/uploads/2021/07/azpet-banner-cho-canh-desktop-512x1024.jpg 512w, https://azpet.com.vn/wp-content/uploads/2021/07/azpet-banner-cho-canh-desktop-10x20.jpg 10w, https://azpet.com.vn/wp-content/uploads/2021/07/azpet-banner-cho-canh-desktop-375x749.jpg 375w, https://azpet.com.vn/wp-content/uploads/2021/07/azpet-banner-cho-canh-desktop-64x128.jpg 64w"
                                    sizes="(max-width: 730px) 100vw, 730px"
                                    title="azpet banner cho canh desktop"
                                />{" "}
                            </div>
                        </div>
                        <div className="parent-cat__main">
                            <div className="f aic jcc parent-cat__nav">
                                <div
                                    className="list-reset parent-cat__nav-list js-nav-list flickity-enabled is-draggable is-initialized"
                                    role="tablist"
                                    data-carousel='{"prevNextButtons":false}'
                                    tabIndex={0}
                                >
                                    <div
                                        className="flickity-viewport"
                                        style={{ height: "46.65px", touchAction: "pan-y" }}
                                    >
                                        <div
                                            className="flickity-slider"
                                            style={{ left: 0, transform: "translateX(0px)" }}
                                        >
                                            <button
                                                className="d-inline-block parent-cat__nav-item is-active is-selected"
                                                role="tab"
                                                aria-selected="true"
                                                style={{
                                                    position: "absolute",
                                                    left: 0,
                                                    transform: "translateX(0px)"
                                                }}
                                            >
                                                <span className="parent-cat__nav-link">Phổ biến nhất</span>
                                            </button>
                                            <button
                                                className="d-inline-block parent-cat__nav-item"
                                                role="tab"
                                                aria-selected="false"
                                                aria-hidden="true"
                                                style={{
                                                    position: "absolute",
                                                    left: 0,
                                                    transform: "translateX(181px)"
                                                }}
                                            >
                                                <span className="parent-cat__nav-link">Độc Hiếm</span>
                                            </button>
                                            <button
                                                className="d-inline-block parent-cat__nav-item"
                                                role="tab"
                                                aria-selected="false"
                                                aria-hidden="true"
                                                style={{
                                                    position: "absolute",
                                                    left: 0,
                                                    transform: "translateX(362px)"
                                                }}
                                            >
                                                <span className="parent-cat__nav-link">Chó Bảo Vệ</span>
                                            </button>
                                            <button
                                                className="d-inline-block parent-cat__nav-item"
                                                role="tab"
                                                aria-selected="false"
                                                aria-hidden="true"
                                                style={{
                                                    position: "absolute",
                                                    left: 0,
                                                    transform: "translateX(542px)"
                                                }}
                                            >
                                                <span className="parent-cat__nav-link">Chó Mặt Xệ </span>
                                            </button>
                                            <button
                                                className="d-inline-block parent-cat__nav-item"
                                                role="tab"
                                                aria-selected="false"
                                                aria-hidden="true"
                                                style={{
                                                    position: "absolute",
                                                    left: 0,
                                                    transform: "translateX(723px)"
                                                }}
                                            >
                                                <span className="parent-cat__nav-link">Chó Ngao</span>
                                            </button>
                                            <button
                                                className="d-inline-block parent-cat__nav-item"
                                                role="tab"
                                                aria-selected="false"
                                                aria-hidden="true"
                                                style={{
                                                    position: "absolute",
                                                    left: 0,
                                                    transform: "translateX(904px)"
                                                }}
                                            >
                                                <span className="parent-cat__nav-link">Chó Bull</span>
                                            </button>
                                            <button
                                                className="d-inline-block parent-cat__nav-item"
                                                role="tab"
                                                aria-selected="false"
                                                aria-hidden="true"
                                                style={{
                                                    position: "absolute",
                                                    left: 0,
                                                    transform: "translateX(1085px)"
                                                }}
                                            >
                                                <span className="parent-cat__nav-link">Chó Săn</span>
                                            </button>
                                            <button
                                                className="d-inline-block parent-cat__nav-item"
                                                role="tab"
                                                aria-selected="false"
                                                aria-hidden="true"
                                                style={{
                                                    position: "absolute",
                                                    left: 0,
                                                    transform: "translateX(1266px)"
                                                }}
                                            >
                                                <span className="parent-cat__nav-link">Chó Kéo Xe </span>
                                            </button>
                                            <button
                                                className="d-inline-block parent-cat__nav-item"
                                                role="tab"
                                                aria-selected="false"
                                                aria-hidden="true"
                                                style={{
                                                    position: "absolute",
                                                    left: 0,
                                                    transform: "translateX(1446px)"
                                                }}
                                            >
                                                <span className="parent-cat__nav-link">Chó Xoáy</span>
                                            </button>
                                        </div>
                                    </div>
                                    <ol className="flickity-page-dots">
                                        <li
                                            className="dot is-selected"
                                            aria-label="Page dot 1"
                                            aria-current="step"
                                        />
                                        <li className="dot" aria-label="Page dot 2" />
                                        <li className="dot" aria-label="Page dot 3" />
                                        <li className="dot" aria-label="Page dot 4" />
                                        <li className="dot" aria-label="Page dot 5" />
                                        <li className="dot" aria-label="Page dot 6" />
                                        <li className="dot" aria-label="Page dot 7" />
                                        <li className="dot" aria-label="Page dot 8" />
                                        <li className="dot" aria-label="Page dot 9" />
                                    </ol>
                                </div>
                                <div className="parent-cat__nav-right">
                                    <button className="parent-cat__nav-button parent-cat__nav-button--left js-prev-button">
                                        <span className="parent-cat__nav-button-icon">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={44}
                                                height={44}
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="#000000"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <polyline points="15 6 9 12 15 18" />
                                            </svg>
                                        </span>
                                    </button>
                                    <button className="parent-cat__nav-button parent-cat__nav-button--right js-next-button">
                                        <span className="parent-cat__nav-button-icon">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={44}
                                                height={44}
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="#000000"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <polyline points="9 6 15 12 9 18" />
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <div className="rel parent-cat__block">
                                <div className="parent-cat__block-inner js-content">
                                    <div
                                        className="parent-cat__tab-panel parent-cat__tab-panel--active is-active"
                                        role="tabpanel"
                                        aria-expanded="true"
                                    >
                                        <section className="default-section woo-categories parent-cat has-5-columns">
                                            <div className="wp-block-group default-section__main">
                                                <div className="wp-block-group__inner-container container default-section__container default-section__container--main">
                                                    <div className="wp-block-group default-section__inner default-section__inner--main">
                                                        <div className="wp-block-group__inner-content">
                                                            <div className="grid woo-categories__grid default-section__grid">
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/cho-alaska/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Alaska-300x300.jpg"
                                                                                    sizes="(max-width: 480px) 300w"
                                                                                    media="(max-width: 480px)"
                                                                                />
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Alaska.jpg"
                                                                                    sizes="(max-width: 1024px) 400w"
                                                                                    media="(max-width: 1024px)"
                                                                                />
                                                                                <img
                                                                                    decoding="async"
                                                                                    className="image__img"
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Alaska.jpg"
                                                                                    width={400}
                                                                                    height={400}
                                                                                    alt="Alaska"
                                                                                    title="Alaska"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Alaska
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/cho-border-collie/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Border-Collie-300x300.jpg"
                                                                                    sizes="(max-width: 480px) 300w"
                                                                                    media="(max-width: 480px)"
                                                                                />
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Border-Collie.jpg"
                                                                                    sizes="(max-width: 1024px) 400w"
                                                                                    media="(max-width: 1024px)"
                                                                                />
                                                                                <img
                                                                                    decoding="async"
                                                                                    className="image__img"
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Border-Collie.jpg"
                                                                                    width={400}
                                                                                    height={400}
                                                                                    alt="Border Collie"
                                                                                    title="Border Collie"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Border Collie
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/cho-bull-phap/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Bull-Phap-300x300.jpg"
                                                                                    sizes="(max-width: 480px) 300w"
                                                                                    media="(max-width: 480px)"
                                                                                />
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Bull-Phap.jpg"
                                                                                    sizes="(max-width: 1024px) 400w"
                                                                                    media="(max-width: 1024px)"
                                                                                />
                                                                                <img
                                                                                    decoding="async"
                                                                                    className="image__img"
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Bull-Phap.jpg"
                                                                                    width={400}
                                                                                    height={400}
                                                                                    alt="Bull Phap"
                                                                                    title="Bull Phap"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Bull Pháp
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/cho-corgi/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Pembroke-Welsh-Corgi-300x300.jpg"
                                                                                    sizes="(max-width: 480px) 300w"
                                                                                    media="(max-width: 480px)"
                                                                                />
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Pembroke-Welsh-Corgi.jpg"
                                                                                    sizes="(max-width: 1024px) 400w"
                                                                                    media="(max-width: 1024px)"
                                                                                />
                                                                                <img
                                                                                    decoding="async"
                                                                                    className="image__img"
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Pembroke-Welsh-Corgi.jpg"
                                                                                    width={400}
                                                                                    height={400}
                                                                                    alt="Pembroke Welsh Corgi"
                                                                                    title="Pembroke Welsh Corgi"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Corgi
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/cho-golden/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Golden-Retriever-300x300.jpg"
                                                                                    sizes="(max-width: 480px) 300w"
                                                                                    media="(max-width: 480px)"
                                                                                />
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Golden-Retriever.jpg"
                                                                                    sizes="(max-width: 1024px) 400w"
                                                                                    media="(max-width: 1024px)"
                                                                                />
                                                                                <img
                                                                                    decoding="async"
                                                                                    className="image__img"
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Golden-Retriever.jpg"
                                                                                    width={400}
                                                                                    height={400}
                                                                                    alt="Golden Retriever"
                                                                                    title="Golden Retriever"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Golden
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/cho-husky/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Husky-300x300.jpg"
                                                                                    sizes="(max-width: 480px) 300w"
                                                                                    media="(max-width: 480px)"
                                                                                />
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Husky.jpg"
                                                                                    sizes="(max-width: 1024px) 400w"
                                                                                    media="(max-width: 1024px)"
                                                                                />
                                                                                <img
                                                                                    decoding="async"
                                                                                    className="image__img"
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Husky.jpg"
                                                                                    width={400}
                                                                                    height={400}
                                                                                    alt="Husky"
                                                                                    title="Husky"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Husky
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/cho-labrador/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/labrador-300x300.jpg"
                                                                                    sizes="(max-width: 480px) 300w"
                                                                                    media="(max-width: 480px)"
                                                                                />
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/labrador.jpg"
                                                                                    sizes="(max-width: 1024px) 400w"
                                                                                    media="(max-width: 1024px)"
                                                                                />
                                                                                <img
                                                                                    decoding="async"
                                                                                    className="image__img"
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/labrador.jpg"
                                                                                    width={400}
                                                                                    height={400}
                                                                                    alt="labrador"
                                                                                    title="labrador"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Labrador
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/cho-phoc-soc/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Phoc-Soc-300x300.jpg"
                                                                                    sizes="(max-width: 480px) 300w"
                                                                                    media="(max-width: 480px)"
                                                                                />
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Phoc-Soc.jpg"
                                                                                    sizes="(max-width: 1024px) 400w"
                                                                                    media="(max-width: 1024px)"
                                                                                />
                                                                                <img
                                                                                    decoding="async"
                                                                                    className="image__img"
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Phoc-Soc.jpg"
                                                                                    width={400}
                                                                                    height={400}
                                                                                    alt="Phoc Soc"
                                                                                    title="Phoc Soc"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Phốc Sóc
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/cho-poodle/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Poodle-300x300.jpg"
                                                                                    sizes="(max-width: 480px) 300w"
                                                                                    media="(max-width: 480px)"
                                                                                />
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Poodle.jpg"
                                                                                    sizes="(max-width: 1024px) 400w"
                                                                                    media="(max-width: 1024px)"
                                                                                />
                                                                                <img
                                                                                    decoding="async"
                                                                                    className="image__img"
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Poodle.jpg"
                                                                                    width={400}
                                                                                    height={400}
                                                                                    alt="Poodle"
                                                                                    title="Poodle"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Poodle
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/cho-pug/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <img
                                                                                    decoding="async"
                                                                                    width={300}
                                                                                    height={300}
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Pug-300x300.jpg"
                                                                                    className="wp-post-image image__img"
                                                                                    alt="Pug"
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Pug-300x300.jpg 300w, https://azpet.com.vn/wp-content/uploads/2021/06/Pug-150x150.jpg 150w, https://azpet.com.vn/wp-content/uploads/2021/06/Pug-20x20.jpg 20w, https://azpet.com.vn/wp-content/uploads/2021/06/Pug-375x375.jpg 375w, https://azpet.com.vn/wp-content/uploads/2021/06/Pug-100x100.jpg 100w, https://azpet.com.vn/wp-content/uploads/2021/06/Pug-64x64.jpg 64w, https://azpet.com.vn/wp-content/uploads/2021/06/Pug.jpg 400w"
                                                                                    sizes="(max-width: 300px) 100vw, 300px"
                                                                                    title="Pug"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Pug
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/cho-samoyed/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <img
                                                                                    decoding="async"
                                                                                    width={300}
                                                                                    height={300}
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Samoyed-300x300.jpg"
                                                                                    className="wp-post-image image__img"
                                                                                    alt="Samoyed"
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Samoyed-300x300.jpg 300w, https://azpet.com.vn/wp-content/uploads/2021/06/Samoyed-150x150.jpg 150w, https://azpet.com.vn/wp-content/uploads/2021/06/Samoyed-20x20.jpg 20w, https://azpet.com.vn/wp-content/uploads/2021/06/Samoyed-375x375.jpg 375w, https://azpet.com.vn/wp-content/uploads/2021/06/Samoyed-100x100.jpg 100w, https://azpet.com.vn/wp-content/uploads/2021/06/Samoyed-64x64.jpg 64w, https://azpet.com.vn/wp-content/uploads/2021/06/Samoyed.jpg 400w"
                                                                                    sizes="(max-width: 300px) 100vw, 300px"
                                                                                    title="Samoyed"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Samoyed
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/cho-shiba-inu/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <img
                                                                                    decoding="async"
                                                                                    width={300}
                                                                                    height={300}
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Shiba-300x300.jpg"
                                                                                    className="wp-post-image image__img"
                                                                                    alt="Shiba"
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Shiba-300x300.jpg 300w, https://azpet.com.vn/wp-content/uploads/2021/06/Shiba-150x150.jpg 150w, https://azpet.com.vn/wp-content/uploads/2021/06/Shiba-20x20.jpg 20w, https://azpet.com.vn/wp-content/uploads/2021/06/Shiba-375x375.jpg 375w, https://azpet.com.vn/wp-content/uploads/2021/06/Shiba-100x100.jpg 100w, https://azpet.com.vn/wp-content/uploads/2021/06/Shiba-64x64.jpg 64w, https://azpet.com.vn/wp-content/uploads/2021/06/Shiba.jpg 400w"
                                                                                    sizes="(max-width: 300px) 100vw, 300px"
                                                                                    title="Shiba"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Shiba
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                    <div
                                        className="parent-cat__tab-panel"
                                        role="tabpanel"
                                        aria-expanded="false"
                                    >
                                        <section className="default-section woo-categories parent-cat has-5-columns">
                                            <div className="wp-block-group default-section__main">
                                                <div className="wp-block-group__inner-container container default-section__container default-section__container--main">
                                                    <div className="wp-block-group default-section__inner default-section__inner--main">
                                                        <div className="wp-block-group__inner-content">
                                                            <div className="grid woo-categories__grid default-section__grid">
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/leonberger/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Leonberger-300x300.jpg"
                                                                                    sizes="(max-width: 480px) 300w"
                                                                                    media="(max-width: 480px)"
                                                                                />
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Leonberger.jpg"
                                                                                    sizes="(max-width: 1024px) 400w"
                                                                                    media="(max-width: 1024px)"
                                                                                />
                                                                                <img
                                                                                    decoding="async"
                                                                                    className="image__img"
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Leonberger.jpg"
                                                                                    width={400}
                                                                                    height={400}
                                                                                    alt="Leonberger"
                                                                                    title="Leonberger"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Leonberger
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/italian-greyhound/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Italian-Greyhound-300x300.jpg"
                                                                                    sizes="(max-width: 480px) 300w"
                                                                                    media="(max-width: 480px)"
                                                                                />
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Italian-Greyhound.jpg"
                                                                                    sizes="(max-width: 1024px) 400w"
                                                                                    media="(max-width: 1024px)"
                                                                                />
                                                                                <img
                                                                                    decoding="async"
                                                                                    className="image__img"
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Italian-Greyhound.jpg"
                                                                                    width={400}
                                                                                    height={400}
                                                                                    alt="Italian Greyhound"
                                                                                    title="Italian Greyhound"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Italian Greyhound
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/irish-wolfhound/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Irish-Wolfhound-300x300.jpg"
                                                                                    sizes="(max-width: 480px) 300w"
                                                                                    media="(max-width: 480px)"
                                                                                />
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Irish-Wolfhound.jpg"
                                                                                    sizes="(max-width: 1024px) 400w"
                                                                                    media="(max-width: 1024px)"
                                                                                />
                                                                                <img
                                                                                    decoding="async"
                                                                                    className="image__img"
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Irish-Wolfhound.jpg"
                                                                                    width={400}
                                                                                    height={400}
                                                                                    alt="Irish Wolfhound"
                                                                                    title="Irish Wolfhound"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Irish Wolfhound
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/irish-setter/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Irish-Setter-300x300.jpg"
                                                                                    sizes="(max-width: 480px) 300w"
                                                                                    media="(max-width: 480px)"
                                                                                />
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Irish-Setter.jpg"
                                                                                    sizes="(max-width: 1024px) 400w"
                                                                                    media="(max-width: 1024px)"
                                                                                />
                                                                                <img
                                                                                    decoding="async"
                                                                                    className="image__img"
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Irish-Setter.jpg"
                                                                                    width={400}
                                                                                    height={400}
                                                                                    alt="Irish Setter"
                                                                                    title="Irish Setter"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Irish Setter
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/cho-iceland/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Icelandic-Sheepdog-300x300.jpg"
                                                                                    sizes="(max-width: 480px) 300w"
                                                                                    media="(max-width: 480px)"
                                                                                />
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Icelandic-Sheepdog.jpg"
                                                                                    sizes="(max-width: 1024px) 400w"
                                                                                    media="(max-width: 1024px)"
                                                                                />
                                                                                <img
                                                                                    decoding="async"
                                                                                    className="image__img"
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Icelandic-Sheepdog.jpg"
                                                                                    width={400}
                                                                                    height={400}
                                                                                    alt="Icelandic Sheepdog"
                                                                                    title="Icelandic Sheepdog"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Icelandic Sheepdog
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/chinese-crested/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Chinese-Crested-300x300.jpg"
                                                                                    sizes="(max-width: 480px) 300w"
                                                                                    media="(max-width: 480px)"
                                                                                />
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Chinese-Crested.jpg"
                                                                                    sizes="(max-width: 1024px) 400w"
                                                                                    media="(max-width: 1024px)"
                                                                                />
                                                                                <img
                                                                                    decoding="async"
                                                                                    className="image__img"
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Chinese-Crested.jpg"
                                                                                    width={400}
                                                                                    height={400}
                                                                                    alt="Chinese Crested"
                                                                                    title="Chinese Crested"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Chinese Crested
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/cavalier-king-charles-spaniel/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Cavalier-King-Charles-Spaniel-300x300.jpg"
                                                                                    sizes="(max-width: 480px) 300w"
                                                                                    media="(max-width: 480px)"
                                                                                />
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Cavalier-King-Charles-Spaniel.jpg"
                                                                                    sizes="(max-width: 1024px) 400w"
                                                                                    media="(max-width: 1024px)"
                                                                                />
                                                                                <img
                                                                                    decoding="async"
                                                                                    className="image__img"
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Cavalier-King-Charles-Spaniel.jpg"
                                                                                    width={400}
                                                                                    height={400}
                                                                                    alt="Cavalier King Charles Spaniel"
                                                                                    title="Cavalier King Charles Spaniel"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Cavalier King Charles Spaniel
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/lhasa-apso/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Lhasa-Apso-300x300.jpg"
                                                                                    sizes="(max-width: 480px) 300w"
                                                                                    media="(max-width: 480px)"
                                                                                />
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Lhasa-Apso.jpg"
                                                                                    sizes="(max-width: 1024px) 400w"
                                                                                    media="(max-width: 1024px)"
                                                                                />
                                                                                <img
                                                                                    decoding="async"
                                                                                    className="image__img"
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Lhasa-Apso.jpg"
                                                                                    width={400}
                                                                                    height={400}
                                                                                    alt="Lhasa Apso"
                                                                                    title="Lhasa Apso"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Lhasa Apso
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/newfoundland/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Newfoundland-300x300.jpg"
                                                                                    sizes="(max-width: 480px) 300w"
                                                                                    media="(max-width: 480px)"
                                                                                />
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Newfoundland.jpg"
                                                                                    sizes="(max-width: 1024px) 400w"
                                                                                    media="(max-width: 1024px)"
                                                                                />
                                                                                <img
                                                                                    decoding="async"
                                                                                    className="image__img"
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Newfoundland.jpg"
                                                                                    width={400}
                                                                                    height={400}
                                                                                    alt="Newfoundland"
                                                                                    title="Newfoundland"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Newfoundland
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/ngao-neapolitan/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <img
                                                                                    decoding="async"
                                                                                    width={300}
                                                                                    height={300}
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Neapolitan-Mastiff-300x300.jpg"
                                                                                    className="wp-post-image image__img"
                                                                                    alt="Neapolitan Mastiff"
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Neapolitan-Mastiff-300x300.jpg 300w, https://azpet.com.vn/wp-content/uploads/2021/06/Neapolitan-Mastiff-150x150.jpg 150w, https://azpet.com.vn/wp-content/uploads/2021/06/Neapolitan-Mastiff-20x20.jpg 20w, https://azpet.com.vn/wp-content/uploads/2021/06/Neapolitan-Mastiff-375x375.jpg 375w, https://azpet.com.vn/wp-content/uploads/2021/06/Neapolitan-Mastiff-100x100.jpg 100w, https://azpet.com.vn/wp-content/uploads/2021/06/Neapolitan-Mastiff-64x64.jpg 64w, https://azpet.com.vn/wp-content/uploads/2021/06/Neapolitan-Mastiff.jpg 400w"
                                                                                    sizes="(max-width: 300px) 100vw, 300px"
                                                                                    title="Neapolitan Mastiff"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Ngao Neapolitan
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/ngao-brazil/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <img
                                                                                    decoding="async"
                                                                                    width={300}
                                                                                    height={300}
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Ngao-Brazil-300x300.jpg"
                                                                                    className="wp-post-image image__img"
                                                                                    alt="Ngao Brazil"
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Ngao-Brazil-300x300.jpg 300w, https://azpet.com.vn/wp-content/uploads/2021/06/Ngao-Brazil-150x150.jpg 150w, https://azpet.com.vn/wp-content/uploads/2021/06/Ngao-Brazil-20x20.jpg 20w, https://azpet.com.vn/wp-content/uploads/2021/06/Ngao-Brazil-375x375.jpg 375w, https://azpet.com.vn/wp-content/uploads/2021/06/Ngao-Brazil-100x100.jpg 100w, https://azpet.com.vn/wp-content/uploads/2021/06/Ngao-Brazil-64x64.jpg 64w, https://azpet.com.vn/wp-content/uploads/2021/06/Ngao-Brazil.jpg 400w"
                                                                                    sizes="(max-width: 300px) 100vw, 300px"
                                                                                    title="Ngao Brazil"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Ngao Brazil
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/ngao-phap-bordeaux/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <img
                                                                                    decoding="async"
                                                                                    width={300}
                                                                                    height={300}
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Ngao-Phap-Bordeaux-300x300.jpg"
                                                                                    className="wp-post-image image__img"
                                                                                    alt="Ngao Pháp Bordeaux"
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Ngao-Phap-Bordeaux-300x300.jpg 300w, https://azpet.com.vn/wp-content/uploads/2021/06/Ngao-Phap-Bordeaux-150x150.jpg 150w, https://azpet.com.vn/wp-content/uploads/2021/06/Ngao-Phap-Bordeaux-20x20.jpg 20w, https://azpet.com.vn/wp-content/uploads/2021/06/Ngao-Phap-Bordeaux-375x375.jpg 375w, https://azpet.com.vn/wp-content/uploads/2021/06/Ngao-Phap-Bordeaux-100x100.jpg 100w, https://azpet.com.vn/wp-content/uploads/2021/06/Ngao-Phap-Bordeaux-64x64.jpg 64w, https://azpet.com.vn/wp-content/uploads/2021/06/Ngao-Phap-Bordeaux.jpg 400w"
                                                                                    sizes="(max-width: 300px) 100vw, 300px"
                                                                                    title="Ngao Phap Bordeaux"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Ngao Pháp Bordeaux
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/ngao-y-cane-corso/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <img
                                                                                    decoding="async"
                                                                                    width={300}
                                                                                    height={300}
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Ngao-Y-Cane-Corso-300x300.jpg"
                                                                                    className="wp-post-image image__img"
                                                                                    alt="Ngao ý Cane Corso"
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Ngao-Y-Cane-Corso-300x300.jpg 300w, https://azpet.com.vn/wp-content/uploads/2021/06/Ngao-Y-Cane-Corso-150x150.jpg 150w, https://azpet.com.vn/wp-content/uploads/2021/06/Ngao-Y-Cane-Corso-20x20.jpg 20w, https://azpet.com.vn/wp-content/uploads/2021/06/Ngao-Y-Cane-Corso-375x375.jpg 375w, https://azpet.com.vn/wp-content/uploads/2021/06/Ngao-Y-Cane-Corso-100x100.jpg 100w, https://azpet.com.vn/wp-content/uploads/2021/06/Ngao-Y-Cane-Corso-64x64.jpg 64w, https://azpet.com.vn/wp-content/uploads/2021/06/Ngao-Y-Cane-Corso.jpg 400w"
                                                                                    sizes="(max-width: 300px) 100vw, 300px"
                                                                                    title="Ngao Y Cane Corso"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Ngao Ý Cane Corso
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/nhat-long-xu/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <img
                                                                                    decoding="async"
                                                                                    width={300}
                                                                                    height={300}
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Nhat-Long-Xu-300x300.jpg"
                                                                                    className="wp-post-image image__img"
                                                                                    alt="Nhật Lông Xù"
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Nhat-Long-Xu-300x300.jpg 300w, https://azpet.com.vn/wp-content/uploads/2021/06/Nhat-Long-Xu-150x150.jpg 150w, https://azpet.com.vn/wp-content/uploads/2021/06/Nhat-Long-Xu-20x20.jpg 20w, https://azpet.com.vn/wp-content/uploads/2021/06/Nhat-Long-Xu-375x375.jpg 375w, https://azpet.com.vn/wp-content/uploads/2021/06/Nhat-Long-Xu-100x100.jpg 100w, https://azpet.com.vn/wp-content/uploads/2021/06/Nhat-Long-Xu-64x64.jpg 64w, https://azpet.com.vn/wp-content/uploads/2021/06/Nhat-Long-Xu.jpg 400w"
                                                                                    sizes="(max-width: 300px) 100vw, 300px"
                                                                                    title="Nhat Long Xu"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Nhật Lông Xù
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/nova-scotia/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <img
                                                                                    decoding="async"
                                                                                    width={300}
                                                                                    height={300}
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Nova-Scotia-300x300.jpg"
                                                                                    className="wp-post-image image__img"
                                                                                    alt="Nova Scotia"
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Nova-Scotia-300x300.jpg 300w, https://azpet.com.vn/wp-content/uploads/2021/06/Nova-Scotia-150x150.jpg 150w, https://azpet.com.vn/wp-content/uploads/2021/06/Nova-Scotia-20x20.jpg 20w, https://azpet.com.vn/wp-content/uploads/2021/06/Nova-Scotia-375x375.jpg 375w, https://azpet.com.vn/wp-content/uploads/2021/06/Nova-Scotia-100x100.jpg 100w, https://azpet.com.vn/wp-content/uploads/2021/06/Nova-Scotia-64x64.jpg 64w, https://azpet.com.vn/wp-content/uploads/2021/06/Nova-Scotia.jpg 400w"
                                                                                    sizes="(max-width: 300px) 100vw, 300px"
                                                                                    title="Nova Scotia"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Nova Scotia
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/pharaoh-hound/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <img
                                                                                    decoding="async"
                                                                                    width={300}
                                                                                    height={300}
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Pharaoh-Hound-300x300.jpg"
                                                                                    className="wp-post-image image__img"
                                                                                    alt="Pharaoh Hound"
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Pharaoh-Hound-300x300.jpg 300w, https://azpet.com.vn/wp-content/uploads/2021/06/Pharaoh-Hound-150x150.jpg 150w, https://azpet.com.vn/wp-content/uploads/2021/06/Pharaoh-Hound-20x20.jpg 20w, https://azpet.com.vn/wp-content/uploads/2021/06/Pharaoh-Hound-375x375.jpg 375w, https://azpet.com.vn/wp-content/uploads/2021/06/Pharaoh-Hound-100x100.jpg 100w, https://azpet.com.vn/wp-content/uploads/2021/06/Pharaoh-Hound-64x64.jpg 64w, https://azpet.com.vn/wp-content/uploads/2021/06/Pharaoh-Hound.jpg 400w"
                                                                                    sizes="(max-width: 300px) 100vw, 300px"
                                                                                    title="Pharaoh Hound"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Pharaoh Hound
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/saint-bernard/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <img
                                                                                    decoding="async"
                                                                                    width={300}
                                                                                    height={300}
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Saint-Bernard-300x300.jpg"
                                                                                    className="wp-post-image image__img"
                                                                                    alt="Saint Bernard"
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Saint-Bernard-300x300.jpg 300w, https://azpet.com.vn/wp-content/uploads/2021/06/Saint-Bernard-150x150.jpg 150w, https://azpet.com.vn/wp-content/uploads/2021/06/Saint-Bernard-20x20.jpg 20w, https://azpet.com.vn/wp-content/uploads/2021/06/Saint-Bernard-375x375.jpg 375w, https://azpet.com.vn/wp-content/uploads/2021/06/Saint-Bernard-100x100.jpg 100w, https://azpet.com.vn/wp-content/uploads/2021/06/Saint-Bernard-64x64.jpg 64w, https://azpet.com.vn/wp-content/uploads/2021/06/Saint-Bernard.jpg 400w"
                                                                                    sizes="(max-width: 300px) 100vw, 300px"
                                                                                    title="Saint Bernard"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Saint Bernard
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/xoay-nam-phi/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <img
                                                                                    decoding="async"
                                                                                    width={300}
                                                                                    height={300}
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Xoay-Nam-Phi-300x300.jpg"
                                                                                    className="wp-post-image image__img"
                                                                                    alt="chó xoáy nam phi"
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Xoay-Nam-Phi-300x300.jpg 300w, https://azpet.com.vn/wp-content/uploads/2021/06/Xoay-Nam-Phi-150x150.jpg 150w, https://azpet.com.vn/wp-content/uploads/2021/06/Xoay-Nam-Phi-20x20.jpg 20w, https://azpet.com.vn/wp-content/uploads/2021/06/Xoay-Nam-Phi-375x375.jpg 375w, https://azpet.com.vn/wp-content/uploads/2021/06/Xoay-Nam-Phi-100x100.jpg 100w, https://azpet.com.vn/wp-content/uploads/2021/06/Xoay-Nam-Phi-64x64.jpg 64w, https://azpet.com.vn/wp-content/uploads/2021/06/Xoay-Nam-Phi.jpg 400w"
                                                                                    sizes="(max-width: 300px) 100vw, 300px"
                                                                                    title="Xoay Nam Phi"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Xoáy Nam Phi
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/xoay-thai/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <img
                                                                                    decoding="async"
                                                                                    width={300}
                                                                                    height={300}
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Xoay-Thai-300x300.jpg"
                                                                                    className="wp-post-image image__img"
                                                                                    alt="Xoáy Thái"
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Xoay-Thai-300x300.jpg 300w, https://azpet.com.vn/wp-content/uploads/2021/06/Xoay-Thai-150x150.jpg 150w, https://azpet.com.vn/wp-content/uploads/2021/06/Xoay-Thai-20x20.jpg 20w, https://azpet.com.vn/wp-content/uploads/2021/06/Xoay-Thai-375x375.jpg 375w, https://azpet.com.vn/wp-content/uploads/2021/06/Xoay-Thai-100x100.jpg 100w, https://azpet.com.vn/wp-content/uploads/2021/06/Xoay-Thai-64x64.jpg 64w, https://azpet.com.vn/wp-content/uploads/2021/06/Xoay-Thai.jpg 400w"
                                                                                    sizes="(max-width: 300px) 100vw, 300px"
                                                                                    title="Xoay Thai"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Xoáy Thái
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/caucasian-shepherd/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <img
                                                                                    decoding="async"
                                                                                    width={300}
                                                                                    height={300}
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Caucasian-Shepherd-300x300.jpg"
                                                                                    className="wp-post-image image__img"
                                                                                    alt="Caucasian Shepherd"
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Caucasian-Shepherd-300x300.jpg 300w, https://azpet.com.vn/wp-content/uploads/2021/06/Caucasian-Shepherd-150x150.jpg 150w, https://azpet.com.vn/wp-content/uploads/2021/06/Caucasian-Shepherd-20x20.jpg 20w, https://azpet.com.vn/wp-content/uploads/2021/06/Caucasian-Shepherd-375x375.jpg 375w, https://azpet.com.vn/wp-content/uploads/2021/06/Caucasian-Shepherd-100x100.jpg 100w, https://azpet.com.vn/wp-content/uploads/2021/06/Caucasian-Shepherd-64x64.jpg 64w, https://azpet.com.vn/wp-content/uploads/2021/06/Caucasian-Shepherd.jpg 400w"
                                                                                    sizes="(max-width: 300px) 100vw, 300px"
                                                                                    title="Caucasian Shepherd"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Caucasian Shepherd
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/alabai/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <img
                                                                                    decoding="async"
                                                                                    width={300}
                                                                                    height={300}
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Alabai-300x300.jpg"
                                                                                    className="wp-post-image image__img"
                                                                                    alt="Alabai"
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Alabai-300x300.jpg 300w, https://azpet.com.vn/wp-content/uploads/2021/06/Alabai-150x150.jpg 150w, https://azpet.com.vn/wp-content/uploads/2021/06/Alabai-20x20.jpg 20w, https://azpet.com.vn/wp-content/uploads/2021/06/Alabai-375x375.jpg 375w, https://azpet.com.vn/wp-content/uploads/2021/06/Alabai-100x100.jpg 100w, https://azpet.com.vn/wp-content/uploads/2021/06/Alabai-64x64.jpg 64w, https://azpet.com.vn/wp-content/uploads/2021/06/Alabai.jpg 400w"
                                                                                    sizes="(max-width: 300px) 100vw, 300px"
                                                                                    title="Alabai"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Alabai
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/australian-shepherd/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <img
                                                                                    decoding="async"
                                                                                    width={300}
                                                                                    height={300}
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Australian-Shepherd-300x300.jpg"
                                                                                    className="wp-post-image image__img"
                                                                                    alt="Australian Shepherd"
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Australian-Shepherd-300x300.jpg 300w, https://azpet.com.vn/wp-content/uploads/2021/06/Australian-Shepherd-150x150.jpg 150w, https://azpet.com.vn/wp-content/uploads/2021/06/Australian-Shepherd-20x20.jpg 20w, https://azpet.com.vn/wp-content/uploads/2021/06/Australian-Shepherd-375x375.jpg 375w, https://azpet.com.vn/wp-content/uploads/2021/06/Australian-Shepherd-100x100.jpg 100w, https://azpet.com.vn/wp-content/uploads/2021/06/Australian-Shepherd-64x64.jpg 64w, https://azpet.com.vn/wp-content/uploads/2021/06/Australian-Shepherd.jpg 400w"
                                                                                    sizes="(max-width: 300px) 100vw, 300px"
                                                                                    title="Australian Shepherd"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Australian Shepherd
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/afghan-hound/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <img
                                                                                    decoding="async"
                                                                                    width={300}
                                                                                    height={300}
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Afghan-Hound-300x300.jpg"
                                                                                    className="wp-post-image image__img"
                                                                                    alt="Afghan Hound"
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Afghan-Hound-300x300.jpg 300w, https://azpet.com.vn/wp-content/uploads/2021/06/Afghan-Hound-150x150.jpg 150w, https://azpet.com.vn/wp-content/uploads/2021/06/Afghan-Hound-20x20.jpg 20w, https://azpet.com.vn/wp-content/uploads/2021/06/Afghan-Hound-375x375.jpg 375w, https://azpet.com.vn/wp-content/uploads/2021/06/Afghan-Hound-100x100.jpg 100w, https://azpet.com.vn/wp-content/uploads/2021/06/Afghan-Hound-64x64.jpg 64w, https://azpet.com.vn/wp-content/uploads/2021/06/Afghan-Hound.jpg 400w"
                                                                                    sizes="(max-width: 300px) 100vw, 300px"
                                                                                    title="Afghan Hound"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Afghan Hound
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                    <div
                                        className="parent-cat__tab-panel"
                                        role="tabpanel"
                                        aria-expanded="false"
                                    >
                                        <section className="default-section woo-categories parent-cat has-5-columns">
                                            <div className="wp-block-group default-section__main">
                                                <div className="wp-block-group__inner-container container default-section__container default-section__container--main">
                                                    <div className="wp-block-group default-section__inner default-section__inner--main">
                                                        <div className="wp-block-group__inner-content">
                                                            <div className="grid woo-categories__grid default-section__grid">
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/cho-bac-ha/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Bac-Ha-300x300.jpg"
                                                                                    sizes="(max-width: 480px) 300w"
                                                                                    media="(max-width: 480px)"
                                                                                />
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Bac-Ha.jpg"
                                                                                    sizes="(max-width: 1024px) 400w"
                                                                                    media="(max-width: 1024px)"
                                                                                />
                                                                                <img
                                                                                    decoding="async"
                                                                                    className="image__img"
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Bac-Ha.jpg"
                                                                                    width={400}
                                                                                    height={400}
                                                                                    alt="Bac Ha"
                                                                                    title="Bac Ha"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Bắc Hà
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/leonberger/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Leonberger-300x300.jpg"
                                                                                    sizes="(max-width: 480px) 300w"
                                                                                    media="(max-width: 480px)"
                                                                                />
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Leonberger.jpg"
                                                                                    sizes="(max-width: 1024px) 400w"
                                                                                    media="(max-width: 1024px)"
                                                                                />
                                                                                <img
                                                                                    decoding="async"
                                                                                    className="image__img"
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Leonberger.jpg"
                                                                                    width={400}
                                                                                    height={400}
                                                                                    alt="Leonberger"
                                                                                    title="Leonberger"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Leonberger
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/irish-wolfhound/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Irish-Wolfhound-300x300.jpg"
                                                                                    sizes="(max-width: 480px) 300w"
                                                                                    media="(max-width: 480px)"
                                                                                />
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Irish-Wolfhound.jpg"
                                                                                    sizes="(max-width: 1024px) 400w"
                                                                                    media="(max-width: 1024px)"
                                                                                />
                                                                                <img
                                                                                    decoding="async"
                                                                                    className="image__img"
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Irish-Wolfhound.jpg"
                                                                                    width={400}
                                                                                    height={400}
                                                                                    alt="Irish Wolfhound"
                                                                                    title="Irish Wolfhound"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Irish Wolfhound
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/cho-mong-coc/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Hmong-300x300.jpg"
                                                                                    sizes="(max-width: 480px) 300w"
                                                                                    media="(max-width: 480px)"
                                                                                />
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Hmong.jpg"
                                                                                    sizes="(max-width: 1024px) 400w"
                                                                                    media="(max-width: 1024px)"
                                                                                />
                                                                                <img
                                                                                    decoding="async"
                                                                                    className="image__img"
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Hmong.jpg"
                                                                                    width={400}
                                                                                    height={400}
                                                                                    alt="Hmong"
                                                                                    title="Hmong"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                H'mong Cộc
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/german-pinscher/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/German-Pinscher-300x300.jpg"
                                                                                    sizes="(max-width: 480px) 300w"
                                                                                    media="(max-width: 480px)"
                                                                                />
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/German-Pinscher.jpg"
                                                                                    sizes="(max-width: 1024px) 400w"
                                                                                    media="(max-width: 1024px)"
                                                                                />
                                                                                <img
                                                                                    decoding="async"
                                                                                    className="image__img"
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/German-Pinscher.jpg"
                                                                                    width={400}
                                                                                    height={400}
                                                                                    alt="German Pinscher"
                                                                                    title="German Pinscher"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                German Pinscher
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/cho-dom-dalmatian/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Dalmatian-300x300.jpg"
                                                                                    sizes="(max-width: 480px) 300w"
                                                                                    media="(max-width: 480px)"
                                                                                />
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Dalmatian.jpg"
                                                                                    sizes="(max-width: 1024px) 400w"
                                                                                    media="(max-width: 1024px)"
                                                                                />
                                                                                <img
                                                                                    decoding="async"
                                                                                    className="image__img"
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Dalmatian.jpg"
                                                                                    width={400}
                                                                                    height={400}
                                                                                    alt="Dalmatian"
                                                                                    title="Dalmatian"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Dalmatian
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/cho-doberman/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Doberman-300x300.jpg"
                                                                                    sizes="(max-width: 480px) 300w"
                                                                                    media="(max-width: 480px)"
                                                                                />
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Doberman.jpg"
                                                                                    sizes="(max-width: 1024px) 400w"
                                                                                    media="(max-width: 1024px)"
                                                                                />
                                                                                <img
                                                                                    decoding="async"
                                                                                    className="image__img"
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Doberman.jpg"
                                                                                    width={400}
                                                                                    height={400}
                                                                                    alt="Doberman"
                                                                                    title="Doberman"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Dobermann
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/cho-rottweiler/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Rottweiler-300x300.jpg"
                                                                                    sizes="(max-width: 480px) 300w"
                                                                                    media="(max-width: 480px)"
                                                                                />
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Rottweiler.jpg"
                                                                                    sizes="(max-width: 1024px) 400w"
                                                                                    media="(max-width: 1024px)"
                                                                                />
                                                                                <img
                                                                                    decoding="async"
                                                                                    className="image__img"
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Rottweiler.jpg"
                                                                                    width={400}
                                                                                    height={400}
                                                                                    alt="Rottweiler"
                                                                                    title="Rottweiler"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Rottweiler
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/newfoundland/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Newfoundland-300x300.jpg"
                                                                                    sizes="(max-width: 480px) 300w"
                                                                                    media="(max-width: 480px)"
                                                                                />
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Newfoundland.jpg"
                                                                                    sizes="(max-width: 1024px) 400w"
                                                                                    media="(max-width: 1024px)"
                                                                                />
                                                                                <img
                                                                                    decoding="async"
                                                                                    className="image__img"
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Newfoundland.jpg"
                                                                                    width={400}
                                                                                    height={400}
                                                                                    alt="Newfoundland"
                                                                                    title="Newfoundland"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Newfoundland
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/saint-bernard/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <img
                                                                                    decoding="async"
                                                                                    width={300}
                                                                                    height={300}
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Saint-Bernard-300x300.jpg"
                                                                                    className="wp-post-image image__img"
                                                                                    alt="Saint Bernard"
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Saint-Bernard-300x300.jpg 300w, https://azpet.com.vn/wp-content/uploads/2021/06/Saint-Bernard-150x150.jpg 150w, https://azpet.com.vn/wp-content/uploads/2021/06/Saint-Bernard-20x20.jpg 20w, https://azpet.com.vn/wp-content/uploads/2021/06/Saint-Bernard-375x375.jpg 375w, https://azpet.com.vn/wp-content/uploads/2021/06/Saint-Bernard-100x100.jpg 100w, https://azpet.com.vn/wp-content/uploads/2021/06/Saint-Bernard-64x64.jpg 64w, https://azpet.com.vn/wp-content/uploads/2021/06/Saint-Bernard.jpg 400w"
                                                                                    sizes="(max-width: 300px) 100vw, 300px"
                                                                                    title="Saint Bernard"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Saint Bernard
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/boston-terrier/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <img
                                                                                    decoding="async"
                                                                                    width={300}
                                                                                    height={300}
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Boston-Terrier-300x300.jpg"
                                                                                    className="wp-post-image image__img"
                                                                                    alt="Boston Terrier"
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Boston-Terrier-300x300.jpg 300w, https://azpet.com.vn/wp-content/uploads/2021/06/Boston-Terrier-150x150.jpg 150w, https://azpet.com.vn/wp-content/uploads/2021/06/Boston-Terrier-20x20.jpg 20w, https://azpet.com.vn/wp-content/uploads/2021/06/Boston-Terrier-375x375.jpg 375w, https://azpet.com.vn/wp-content/uploads/2021/06/Boston-Terrier-100x100.jpg 100w, https://azpet.com.vn/wp-content/uploads/2021/06/Boston-Terrier-64x64.jpg 64w, https://azpet.com.vn/wp-content/uploads/2021/06/Boston-Terrier.jpg 400w"
                                                                                    sizes="(max-width: 300px) 100vw, 300px"
                                                                                    title="Boston Terrier"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Boston Terrier
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/caucasian-shepherd/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <img
                                                                                    decoding="async"
                                                                                    width={300}
                                                                                    height={300}
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Caucasian-Shepherd-300x300.jpg"
                                                                                    className="wp-post-image image__img"
                                                                                    alt="Caucasian Shepherd"
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Caucasian-Shepherd-300x300.jpg 300w, https://azpet.com.vn/wp-content/uploads/2021/06/Caucasian-Shepherd-150x150.jpg 150w, https://azpet.com.vn/wp-content/uploads/2021/06/Caucasian-Shepherd-20x20.jpg 20w, https://azpet.com.vn/wp-content/uploads/2021/06/Caucasian-Shepherd-375x375.jpg 375w, https://azpet.com.vn/wp-content/uploads/2021/06/Caucasian-Shepherd-100x100.jpg 100w, https://azpet.com.vn/wp-content/uploads/2021/06/Caucasian-Shepherd-64x64.jpg 64w, https://azpet.com.vn/wp-content/uploads/2021/06/Caucasian-Shepherd.jpg 400w"
                                                                                    sizes="(max-width: 300px) 100vw, 300px"
                                                                                    title="Caucasian Shepherd"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Caucasian Shepherd
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/becgie-ha-lan/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <img
                                                                                    decoding="async"
                                                                                    width={300}
                                                                                    height={300}
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Becgie-Ha-Lan-300x300.jpg"
                                                                                    className="wp-post-image image__img"
                                                                                    alt="Becgie Hà Lan"
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Becgie-Ha-Lan-300x300.jpg 300w, https://azpet.com.vn/wp-content/uploads/2021/06/Becgie-Ha-Lan-150x150.jpg 150w, https://azpet.com.vn/wp-content/uploads/2021/06/Becgie-Ha-Lan-20x20.jpg 20w, https://azpet.com.vn/wp-content/uploads/2021/06/Becgie-Ha-Lan-375x375.jpg 375w, https://azpet.com.vn/wp-content/uploads/2021/06/Becgie-Ha-Lan-100x100.jpg 100w, https://azpet.com.vn/wp-content/uploads/2021/06/Becgie-Ha-Lan-64x64.jpg 64w, https://azpet.com.vn/wp-content/uploads/2021/06/Becgie-Ha-Lan.jpg 400w"
                                                                                    sizes="(max-width: 300px) 100vw, 300px"
                                                                                    title="Becgie Ha Lan"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Becgie Hà Lan
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/becgie-duc/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <img
                                                                                    decoding="async"
                                                                                    width={300}
                                                                                    height={300}
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Becgie-Duc-300x300.jpg"
                                                                                    className="wp-post-image image__img"
                                                                                    alt="Becgie Đức"
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Becgie-Duc-300x300.jpg 300w, https://azpet.com.vn/wp-content/uploads/2021/06/Becgie-Duc-150x150.jpg 150w, https://azpet.com.vn/wp-content/uploads/2021/06/Becgie-Duc-20x20.jpg 20w, https://azpet.com.vn/wp-content/uploads/2021/06/Becgie-Duc-375x375.jpg 375w, https://azpet.com.vn/wp-content/uploads/2021/06/Becgie-Duc-100x100.jpg 100w, https://azpet.com.vn/wp-content/uploads/2021/06/Becgie-Duc-64x64.jpg 64w, https://azpet.com.vn/wp-content/uploads/2021/06/Becgie-Duc.jpg 400w"
                                                                                    sizes="(max-width: 300px) 100vw, 300px"
                                                                                    title="Becgie Duc"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Becgie Đức
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/cho-bec-bi-malinois/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <img
                                                                                    decoding="async"
                                                                                    width={300}
                                                                                    height={300}
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Becgie-Bi-300x300.jpg"
                                                                                    className="wp-post-image image__img"
                                                                                    alt="Béc Bỉ"
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Becgie-Bi-300x300.jpg 300w, https://azpet.com.vn/wp-content/uploads/2021/06/Becgie-Bi-150x150.jpg 150w, https://azpet.com.vn/wp-content/uploads/2021/06/Becgie-Bi-20x20.jpg 20w, https://azpet.com.vn/wp-content/uploads/2021/06/Becgie-Bi-375x375.jpg 375w, https://azpet.com.vn/wp-content/uploads/2021/06/Becgie-Bi-100x100.jpg 100w, https://azpet.com.vn/wp-content/uploads/2021/06/Becgie-Bi-64x64.jpg 64w, https://azpet.com.vn/wp-content/uploads/2021/06/Becgie-Bi.jpg 400w"
                                                                                    sizes="(max-width: 300px) 100vw, 300px"
                                                                                    title="Becgie Bi"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Malinois
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/akita-inu/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <img
                                                                                    decoding="async"
                                                                                    width={300}
                                                                                    height={300}
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Akita-300x300.jpg"
                                                                                    className="wp-post-image image__img"
                                                                                    alt="Akita"
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Akita-300x300.jpg 300w, https://azpet.com.vn/wp-content/uploads/2021/06/Akita-150x150.jpg 150w, https://azpet.com.vn/wp-content/uploads/2021/06/Akita-20x20.jpg 20w, https://azpet.com.vn/wp-content/uploads/2021/06/Akita-375x375.jpg 375w, https://azpet.com.vn/wp-content/uploads/2021/06/Akita-100x100.jpg 100w, https://azpet.com.vn/wp-content/uploads/2021/06/Akita-64x64.jpg 64w, https://azpet.com.vn/wp-content/uploads/2021/06/Akita.jpg 400w"
                                                                                    sizes="(max-width: 300px) 100vw, 300px"
                                                                                    title="Akita"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Akita Inu
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/alabai/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <img
                                                                                    decoding="async"
                                                                                    width={300}
                                                                                    height={300}
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Alabai-300x300.jpg"
                                                                                    className="wp-post-image image__img"
                                                                                    alt="Alabai"
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Alabai-300x300.jpg 300w, https://azpet.com.vn/wp-content/uploads/2021/06/Alabai-150x150.jpg 150w, https://azpet.com.vn/wp-content/uploads/2021/06/Alabai-20x20.jpg 20w, https://azpet.com.vn/wp-content/uploads/2021/06/Alabai-375x375.jpg 375w, https://azpet.com.vn/wp-content/uploads/2021/06/Alabai-100x100.jpg 100w, https://azpet.com.vn/wp-content/uploads/2021/06/Alabai-64x64.jpg 64w, https://azpet.com.vn/wp-content/uploads/2021/06/Alabai.jpg 400w"
                                                                                    sizes="(max-width: 300px) 100vw, 300px"
                                                                                    title="Alabai"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Alabai
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                    <div
                                        className="parent-cat__tab-panel"
                                        role="tabpanel"
                                        aria-expanded="false"
                                    >
                                        <section className="default-section woo-categories parent-cat has-5-columns">
                                            <div className="wp-block-group default-section__main">
                                                <div className="wp-block-group__inner-container container default-section__container default-section__container--main">
                                                    <div className="wp-block-group default-section__inner default-section__inner--main">
                                                        <div className="wp-block-group__inner-content">
                                                            <div className="grid woo-categories__grid default-section__grid">
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/great-dane/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Great-Dane-300x300.jpg"
                                                                                    sizes="(max-width: 480px) 300w"
                                                                                    media="(max-width: 480px)"
                                                                                />
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Great-Dane.jpg"
                                                                                    sizes="(max-width: 1024px) 400w"
                                                                                    media="(max-width: 1024px)"
                                                                                />
                                                                                <img
                                                                                    decoding="async"
                                                                                    className="image__img"
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Great-Dane.jpg"
                                                                                    width={400}
                                                                                    height={400}
                                                                                    alt="Great Dane"
                                                                                    title="Great Dane"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Great Dane
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/cho-pug/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Pug-300x300.jpg"
                                                                                    sizes="(max-width: 480px) 300w"
                                                                                    media="(max-width: 480px)"
                                                                                />
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Pug.jpg"
                                                                                    sizes="(max-width: 1024px) 400w"
                                                                                    media="(max-width: 1024px)"
                                                                                />
                                                                                <img
                                                                                    decoding="async"
                                                                                    className="image__img"
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Pug.jpg"
                                                                                    width={400}
                                                                                    height={400}
                                                                                    alt="Pug"
                                                                                    title="Pug"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Pug
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/boxer/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Boxer-300x300.png"
                                                                                    sizes="(max-width: 480px) 300w"
                                                                                    media="(max-width: 480px)"
                                                                                />
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Boxer.png"
                                                                                    sizes="(max-width: 1024px) 400w"
                                                                                    media="(max-width: 1024px)"
                                                                                />
                                                                                <img
                                                                                    decoding="async"
                                                                                    className="image__img"
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Boxer.png"
                                                                                    width={400}
                                                                                    height={400}
                                                                                    alt=""
                                                                                    title=""
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Boxer
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                    <div
                                        className="parent-cat__tab-panel"
                                        role="tabpanel"
                                        aria-expanded="false"
                                    >
                                        <section className="default-section woo-categories parent-cat has-5-columns">
                                            <div className="wp-block-group default-section__main">
                                                <div className="wp-block-group__inner-container container default-section__container default-section__container--main">
                                                    <div className="wp-block-group default-section__inner default-section__inner--main">
                                                        <div className="wp-block-group__inner-content">
                                                            <div className="grid woo-categories__grid default-section__grid">
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/ngao-neapolitan/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Neapolitan-Mastiff-300x300.jpg"
                                                                                    sizes="(max-width: 480px) 300w"
                                                                                    media="(max-width: 480px)"
                                                                                />
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Neapolitan-Mastiff.jpg"
                                                                                    sizes="(max-width: 1024px) 400w"
                                                                                    media="(max-width: 1024px)"
                                                                                />
                                                                                <img
                                                                                    decoding="async"
                                                                                    className="image__img"
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Neapolitan-Mastiff.jpg"
                                                                                    width={400}
                                                                                    height={400}
                                                                                    alt="Neapolitan Mastiff"
                                                                                    title="Neapolitan Mastiff"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Ngao Neapolitan
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/ngao-brazil/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Ngao-Brazil-300x300.jpg"
                                                                                    sizes="(max-width: 480px) 300w"
                                                                                    media="(max-width: 480px)"
                                                                                />
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Ngao-Brazil.jpg"
                                                                                    sizes="(max-width: 1024px) 400w"
                                                                                    media="(max-width: 1024px)"
                                                                                />
                                                                                <img
                                                                                    decoding="async"
                                                                                    className="image__img"
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Ngao-Brazil.jpg"
                                                                                    width={400}
                                                                                    height={400}
                                                                                    alt="Ngao Brazil"
                                                                                    title="Ngao Brazil"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Ngao Brazil
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/ngao-dogo-argentino/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Ngao-Dogo-Argentino-300x300.jpg"
                                                                                    sizes="(max-width: 480px) 300w"
                                                                                    media="(max-width: 480px)"
                                                                                />
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Ngao-Dogo-Argentino.jpg"
                                                                                    sizes="(max-width: 1024px) 400w"
                                                                                    media="(max-width: 1024px)"
                                                                                />
                                                                                <img
                                                                                    decoding="async"
                                                                                    className="image__img"
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Ngao-Dogo-Argentino.jpg"
                                                                                    width={400}
                                                                                    height={400}
                                                                                    alt="Ngao Dogo Argentino"
                                                                                    title="Ngao Dogo Argentino"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Ngao Dogo Argentino
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/ngao-phap-bordeaux/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Ngao-Phap-Bordeaux-300x300.jpg"
                                                                                    sizes="(max-width: 480px) 300w"
                                                                                    media="(max-width: 480px)"
                                                                                />
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Ngao-Phap-Bordeaux.jpg"
                                                                                    sizes="(max-width: 1024px) 400w"
                                                                                    media="(max-width: 1024px)"
                                                                                />
                                                                                <img
                                                                                    decoding="async"
                                                                                    className="image__img"
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Ngao-Phap-Bordeaux.jpg"
                                                                                    width={400}
                                                                                    height={400}
                                                                                    alt="Ngao Phap"
                                                                                    title="Ngao Phap"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Ngao Pháp Bordeaux
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/ngao-tay-tang/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Ngao-Tay-Tang-300x300.jpg"
                                                                                    sizes="(max-width: 480px) 300w"
                                                                                    media="(max-width: 480px)"
                                                                                />
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Ngao-Tay-Tang.jpg"
                                                                                    sizes="(max-width: 1024px) 400w"
                                                                                    media="(max-width: 1024px)"
                                                                                />
                                                                                <img
                                                                                    decoding="async"
                                                                                    className="image__img"
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Ngao-Tay-Tang.jpg"
                                                                                    width={400}
                                                                                    height={400}
                                                                                    alt="Ngao Tay Tang"
                                                                                    title="Ngao Tay Tang"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Ngao Tây Tạng
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/ngao-y-cane-corso/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Ngao-Y-Cane-Corso-300x300.jpg"
                                                                                    sizes="(max-width: 480px) 300w"
                                                                                    media="(max-width: 480px)"
                                                                                />
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Ngao-Y-Cane-Corso.jpg"
                                                                                    sizes="(max-width: 1024px) 400w"
                                                                                    media="(max-width: 1024px)"
                                                                                />
                                                                                <img
                                                                                    decoding="async"
                                                                                    className="image__img"
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Ngao-Y-Cane-Corso.jpg"
                                                                                    width={400}
                                                                                    height={400}
                                                                                    alt="Ngao Y Cane Corso"
                                                                                    title="Ngao Y Cane Corso"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Ngao Ý Cane Corso
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                    <div
                                        className="parent-cat__tab-panel"
                                        role="tabpanel"
                                        aria-expanded="false"
                                    >
                                        <section className="default-section woo-categories parent-cat has-5-columns">
                                            <div className="wp-block-group default-section__main">
                                                <div className="wp-block-group__inner-container container default-section__container default-section__container--main">
                                                    <div className="wp-block-group default-section__inner default-section__inner--main">
                                                        <div className="wp-block-group__inner-content">
                                                            <div className="grid woo-categories__grid default-section__grid">
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/pitbull/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Pitbull-300x300.jpg"
                                                                                    sizes="(max-width: 480px) 300w"
                                                                                    media="(max-width: 480px)"
                                                                                />
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Pitbull.jpg"
                                                                                    sizes="(max-width: 1024px) 400w"
                                                                                    media="(max-width: 1024px)"
                                                                                />
                                                                                <img
                                                                                    decoding="async"
                                                                                    className="image__img"
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Pitbull.jpg"
                                                                                    width={400}
                                                                                    height={400}
                                                                                    alt="Pitbull"
                                                                                    title="Pitbull"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Pitbull
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/cho-bull-phap/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Bull-Phap-300x300.jpg"
                                                                                    sizes="(max-width: 480px) 300w"
                                                                                    media="(max-width: 480px)"
                                                                                />
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Bull-Phap.jpg"
                                                                                    sizes="(max-width: 1024px) 400w"
                                                                                    media="(max-width: 1024px)"
                                                                                />
                                                                                <img
                                                                                    decoding="async"
                                                                                    className="image__img"
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Bull-Phap.jpg"
                                                                                    width={400}
                                                                                    height={400}
                                                                                    alt="Bull Phap"
                                                                                    title="Bull Phap"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Bull Pháp
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/cho-bull-anh/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Bull-Anh-300x300.jpg"
                                                                                    sizes="(max-width: 480px) 300w"
                                                                                    media="(max-width: 480px)"
                                                                                />
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Bull-Anh.jpg"
                                                                                    sizes="(max-width: 1024px) 400w"
                                                                                    media="(max-width: 1024px)"
                                                                                />
                                                                                <img
                                                                                    decoding="async"
                                                                                    className="image__img"
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Bull-Anh.jpg"
                                                                                    width={400}
                                                                                    height={400}
                                                                                    alt="Bull Anh"
                                                                                    title="Bull Anh"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Bull Anh
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/bull-terrier/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Bull-Terrier-300x300.jpg"
                                                                                    sizes="(max-width: 480px) 300w"
                                                                                    media="(max-width: 480px)"
                                                                                />
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Bull-Terrier.jpg"
                                                                                    sizes="(max-width: 1024px) 400w"
                                                                                    media="(max-width: 1024px)"
                                                                                />
                                                                                <img
                                                                                    decoding="async"
                                                                                    className="image__img"
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Bull-Terrier.jpg"
                                                                                    width={400}
                                                                                    height={400}
                                                                                    alt="Bull Terrier"
                                                                                    title="Bull Terrier"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Bull Terrier
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/american-bully/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/American-Bully-300x300.jpg"
                                                                                    sizes="(max-width: 480px) 300w"
                                                                                    media="(max-width: 480px)"
                                                                                />
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/American-Bully.jpg"
                                                                                    sizes="(max-width: 1024px) 400w"
                                                                                    media="(max-width: 1024px)"
                                                                                />
                                                                                <img
                                                                                    decoding="async"
                                                                                    className="image__img"
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/American-Bully.jpg"
                                                                                    width={400}
                                                                                    height={400}
                                                                                    alt="American Bully"
                                                                                    title="American Bully"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                American Bully
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                    <div
                                        className="parent-cat__tab-panel"
                                        role="tabpanel"
                                        aria-expanded="false"
                                    >
                                        <section className="default-section woo-categories parent-cat has-5-columns">
                                            <div className="wp-block-group default-section__main">
                                                <div className="wp-block-group__inner-container container default-section__container default-section__container--main">
                                                    <div className="wp-block-group default-section__inner default-section__inner--main">
                                                        <div className="wp-block-group__inner-content">
                                                            <div className="grid woo-categories__grid default-section__grid">
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/basenji/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Basenji-300x300.jpg"
                                                                                    sizes="(max-width: 480px) 300w"
                                                                                    media="(max-width: 480px)"
                                                                                />
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Basenji.jpg"
                                                                                    sizes="(max-width: 1024px) 400w"
                                                                                    media="(max-width: 1024px)"
                                                                                />
                                                                                <img
                                                                                    decoding="async"
                                                                                    className="image__img"
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Basenji.jpg"
                                                                                    width={400}
                                                                                    height={400}
                                                                                    alt="Basenji"
                                                                                    title="Basenji"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Basenji
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/cho-lap-xuong/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Lap-Xuong-300x300.jpg"
                                                                                    sizes="(max-width: 480px) 300w"
                                                                                    media="(max-width: 480px)"
                                                                                />
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Lap-Xuong.jpg"
                                                                                    sizes="(max-width: 1024px) 400w"
                                                                                    media="(max-width: 1024px)"
                                                                                />
                                                                                <img
                                                                                    decoding="async"
                                                                                    className="image__img"
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Lap-Xuong.jpg"
                                                                                    width={400}
                                                                                    height={400}
                                                                                    alt="Lap Xuong"
                                                                                    title="Lap Xuong"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Lạp Xưởng
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/cho-labrador/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/labrador-300x300.jpg"
                                                                                    sizes="(max-width: 480px) 300w"
                                                                                    media="(max-width: 480px)"
                                                                                />
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/labrador.jpg"
                                                                                    sizes="(max-width: 1024px) 400w"
                                                                                    media="(max-width: 1024px)"
                                                                                />
                                                                                <img
                                                                                    decoding="async"
                                                                                    className="image__img"
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/labrador.jpg"
                                                                                    width={400}
                                                                                    height={400}
                                                                                    alt="labrador"
                                                                                    title="labrador"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Labrador
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/italian-greyhound/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Italian-Greyhound-300x300.jpg"
                                                                                    sizes="(max-width: 480px) 300w"
                                                                                    media="(max-width: 480px)"
                                                                                />
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Italian-Greyhound.jpg"
                                                                                    sizes="(max-width: 1024px) 400w"
                                                                                    media="(max-width: 1024px)"
                                                                                />
                                                                                <img
                                                                                    decoding="async"
                                                                                    className="image__img"
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Italian-Greyhound.jpg"
                                                                                    width={400}
                                                                                    height={400}
                                                                                    alt="Italian Greyhound"
                                                                                    title="Italian Greyhound"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Italian Greyhound
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/irish-setter/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Irish-Setter-300x300.jpg"
                                                                                    sizes="(max-width: 480px) 300w"
                                                                                    media="(max-width: 480px)"
                                                                                />
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Irish-Setter.jpg"
                                                                                    sizes="(max-width: 1024px) 400w"
                                                                                    media="(max-width: 1024px)"
                                                                                />
                                                                                <img
                                                                                    decoding="async"
                                                                                    className="image__img"
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Irish-Setter.jpg"
                                                                                    width={400}
                                                                                    height={400}
                                                                                    alt="Irish Setter"
                                                                                    title="Irish Setter"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Irish Setter
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/cho-golden/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Golden-Retriever-300x300.jpg"
                                                                                    sizes="(max-width: 480px) 300w"
                                                                                    media="(max-width: 480px)"
                                                                                />
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Golden-Retriever.jpg"
                                                                                    sizes="(max-width: 1024px) 400w"
                                                                                    media="(max-width: 1024px)"
                                                                                />
                                                                                <img
                                                                                    decoding="async"
                                                                                    className="image__img"
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Golden-Retriever.jpg"
                                                                                    width={400}
                                                                                    height={400}
                                                                                    alt="Golden Retriever"
                                                                                    title="Golden Retriever"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Golden
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/cocker-spaniel/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Cocker-Spaniel-300x300.jpg"
                                                                                    sizes="(max-width: 480px) 300w"
                                                                                    media="(max-width: 480px)"
                                                                                />
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Cocker-Spaniel.jpg"
                                                                                    sizes="(max-width: 1024px) 400w"
                                                                                    media="(max-width: 1024px)"
                                                                                />
                                                                                <img
                                                                                    decoding="async"
                                                                                    className="image__img"
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Cocker-Spaniel.jpg"
                                                                                    width={400}
                                                                                    height={400}
                                                                                    alt="Cocker Spaniel"
                                                                                    title="Cocker Spaniel"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Cocker Spaniel
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/nova-scotia/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Nova-Scotia-300x300.jpg"
                                                                                    sizes="(max-width: 480px) 300w"
                                                                                    media="(max-width: 480px)"
                                                                                />
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Nova-Scotia.jpg"
                                                                                    sizes="(max-width: 1024px) 400w"
                                                                                    media="(max-width: 1024px)"
                                                                                />
                                                                                <img
                                                                                    decoding="async"
                                                                                    className="image__img"
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Nova-Scotia.jpg"
                                                                                    width={400}
                                                                                    height={400}
                                                                                    alt="Nova Scotia"
                                                                                    title="Nova Scotia"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Nova Scotia
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/pharaoh-hound/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Pharaoh-Hound-300x300.jpg"
                                                                                    sizes="(max-width: 480px) 300w"
                                                                                    media="(max-width: 480px)"
                                                                                />
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Pharaoh-Hound.jpg"
                                                                                    sizes="(max-width: 1024px) 400w"
                                                                                    media="(max-width: 1024px)"
                                                                                />
                                                                                <img
                                                                                    decoding="async"
                                                                                    className="image__img"
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Pharaoh-Hound.jpg"
                                                                                    width={400}
                                                                                    height={400}
                                                                                    alt="Pharaoh Hound"
                                                                                    title="Pharaoh Hound"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Pharaoh Hound
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/cho-shiba-inu/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <img
                                                                                    decoding="async"
                                                                                    width={300}
                                                                                    height={300}
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Shiba-300x300.jpg"
                                                                                    className="wp-post-image image__img"
                                                                                    alt="Shiba"
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Shiba-300x300.jpg 300w, https://azpet.com.vn/wp-content/uploads/2021/06/Shiba-150x150.jpg 150w, https://azpet.com.vn/wp-content/uploads/2021/06/Shiba-20x20.jpg 20w, https://azpet.com.vn/wp-content/uploads/2021/06/Shiba-375x375.jpg 375w, https://azpet.com.vn/wp-content/uploads/2021/06/Shiba-100x100.jpg 100w, https://azpet.com.vn/wp-content/uploads/2021/06/Shiba-64x64.jpg 64w, https://azpet.com.vn/wp-content/uploads/2021/06/Shiba.jpg 400w"
                                                                                    sizes="(max-width: 300px) 100vw, 300px"
                                                                                    title="Shiba"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Shiba
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/zwergschnauzer/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <img
                                                                                    decoding="async"
                                                                                    width={300}
                                                                                    height={300}
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Zwergschnauzer-300x300.jpg"
                                                                                    className="wp-post-image image__img"
                                                                                    alt="Chó Zwergschnauzer"
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Zwergschnauzer-300x300.jpg 300w, https://azpet.com.vn/wp-content/uploads/2021/06/Zwergschnauzer-150x150.jpg 150w, https://azpet.com.vn/wp-content/uploads/2021/06/Zwergschnauzer-20x20.jpg 20w, https://azpet.com.vn/wp-content/uploads/2021/06/Zwergschnauzer-375x375.jpg 375w, https://azpet.com.vn/wp-content/uploads/2021/06/Zwergschnauzer-100x100.jpg 100w, https://azpet.com.vn/wp-content/uploads/2021/06/Zwergschnauzer-64x64.jpg 64w, https://azpet.com.vn/wp-content/uploads/2021/06/Zwergschnauzer.jpg 400w"
                                                                                    sizes="(max-width: 300px) 100vw, 300px"
                                                                                    title="Zwergschnauzer"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Zwergschnauzer
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/basset-hound/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <img
                                                                                    decoding="async"
                                                                                    width={300}
                                                                                    height={300}
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Basset-Hound-300x300.jpg"
                                                                                    className="wp-post-image image__img"
                                                                                    alt="Basset Hound"
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Basset-Hound-300x300.jpg 300w, https://azpet.com.vn/wp-content/uploads/2021/06/Basset-Hound-150x150.jpg 150w, https://azpet.com.vn/wp-content/uploads/2021/06/Basset-Hound-20x20.jpg 20w, https://azpet.com.vn/wp-content/uploads/2021/06/Basset-Hound-375x375.jpg 375w, https://azpet.com.vn/wp-content/uploads/2021/06/Basset-Hound-100x100.jpg 100w, https://azpet.com.vn/wp-content/uploads/2021/06/Basset-Hound-64x64.jpg 64w, https://azpet.com.vn/wp-content/uploads/2021/06/Basset-Hound.jpg 400w"
                                                                                    sizes="(max-width: 300px) 100vw, 300px"
                                                                                    title="Basset Hound"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Basset Hound
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/cho-beagle/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <img
                                                                                    decoding="async"
                                                                                    width={300}
                                                                                    height={300}
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Beagle-300x300.jpg"
                                                                                    className="wp-post-image image__img"
                                                                                    alt="Beagle"
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Beagle-300x300.jpg 300w, https://azpet.com.vn/wp-content/uploads/2021/06/Beagle-150x150.jpg 150w, https://azpet.com.vn/wp-content/uploads/2021/06/Beagle-20x20.jpg 20w, https://azpet.com.vn/wp-content/uploads/2021/06/Beagle-375x375.jpg 375w, https://azpet.com.vn/wp-content/uploads/2021/06/Beagle-100x100.jpg 100w, https://azpet.com.vn/wp-content/uploads/2021/06/Beagle-64x64.jpg 64w, https://azpet.com.vn/wp-content/uploads/2021/06/Beagle.jpg 400w"
                                                                                    sizes="(max-width: 300px) 100vw, 300px"
                                                                                    title="Beagle"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Beagle
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/afghan-hound/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <img
                                                                                    decoding="async"
                                                                                    width={300}
                                                                                    height={300}
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Afghan-Hound-300x300.jpg"
                                                                                    className="wp-post-image image__img"
                                                                                    alt="Afghan Hound"
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Afghan-Hound-300x300.jpg 300w, https://azpet.com.vn/wp-content/uploads/2021/06/Afghan-Hound-150x150.jpg 150w, https://azpet.com.vn/wp-content/uploads/2021/06/Afghan-Hound-20x20.jpg 20w, https://azpet.com.vn/wp-content/uploads/2021/06/Afghan-Hound-375x375.jpg 375w, https://azpet.com.vn/wp-content/uploads/2021/06/Afghan-Hound-100x100.jpg 100w, https://azpet.com.vn/wp-content/uploads/2021/06/Afghan-Hound-64x64.jpg 64w, https://azpet.com.vn/wp-content/uploads/2021/06/Afghan-Hound.jpg 400w"
                                                                                    sizes="(max-width: 300px) 100vw, 300px"
                                                                                    title="Afghan Hound"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Afghan Hound
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                    <div
                                        className="parent-cat__tab-panel"
                                        role="tabpanel"
                                        aria-expanded="false"
                                    >
                                        <section className="default-section woo-categories parent-cat has-5-columns">
                                            <div className="wp-block-group default-section__main">
                                                <div className="wp-block-group__inner-container container default-section__container default-section__container--main">
                                                    <div className="wp-block-group default-section__inner default-section__inner--main">
                                                        <div className="wp-block-group__inner-content">
                                                            <div className="grid woo-categories__grid default-section__grid">
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/cho-husky/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Husky-300x300.jpg"
                                                                                    sizes="(max-width: 480px) 300w"
                                                                                    media="(max-width: 480px)"
                                                                                />
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Husky.jpg"
                                                                                    sizes="(max-width: 1024px) 400w"
                                                                                    media="(max-width: 1024px)"
                                                                                />
                                                                                <img
                                                                                    decoding="async"
                                                                                    className="image__img"
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Husky.jpg"
                                                                                    width={400}
                                                                                    height={400}
                                                                                    alt="Husky"
                                                                                    title="Husky"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Husky
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/chow-chow/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Chow-Chow-300x300.jpg"
                                                                                    sizes="(max-width: 480px) 300w"
                                                                                    media="(max-width: 480px)"
                                                                                />
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Chow-Chow.jpg"
                                                                                    sizes="(max-width: 1024px) 400w"
                                                                                    media="(max-width: 1024px)"
                                                                                />
                                                                                <img
                                                                                    decoding="async"
                                                                                    className="image__img"
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Chow-Chow.jpg"
                                                                                    width={400}
                                                                                    height={400}
                                                                                    alt="Chow Chow"
                                                                                    title="Chow Chow"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Chow Chow
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/cho-samoyed/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Samoyed-300x300.jpg"
                                                                                    sizes="(max-width: 480px) 300w"
                                                                                    media="(max-width: 480px)"
                                                                                />
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Samoyed.jpg"
                                                                                    sizes="(max-width: 1024px) 400w"
                                                                                    media="(max-width: 1024px)"
                                                                                />
                                                                                <img
                                                                                    decoding="async"
                                                                                    className="image__img"
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Samoyed.jpg"
                                                                                    width={400}
                                                                                    height={400}
                                                                                    alt="Samoyed"
                                                                                    title="Samoyed"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Samoyed
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/cho-alaska/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Alaska-300x300.jpg"
                                                                                    sizes="(max-width: 480px) 300w"
                                                                                    media="(max-width: 480px)"
                                                                                />
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Alaska.jpg"
                                                                                    sizes="(max-width: 1024px) 400w"
                                                                                    media="(max-width: 1024px)"
                                                                                />
                                                                                <img
                                                                                    decoding="async"
                                                                                    className="image__img"
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Alaska.jpg"
                                                                                    width={400}
                                                                                    height={400}
                                                                                    alt="Alaska"
                                                                                    title="Alaska"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Alaska
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                    <div
                                        className="parent-cat__tab-panel"
                                        role="tabpanel"
                                        aria-expanded="false"
                                    >
                                        <section className="default-section woo-categories parent-cat has-5-columns">
                                            <div className="wp-block-group default-section__main">
                                                <div className="wp-block-group__inner-container container default-section__container default-section__container--main">
                                                    <div className="wp-block-group default-section__inner default-section__inner--main">
                                                        <div className="wp-block-group__inner-content">
                                                            <div className="grid woo-categories__grid default-section__grid">
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/cho-phu-quoc/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Phu-Quoc-300x300.jpg"
                                                                                    sizes="(max-width: 480px) 300w"
                                                                                    media="(max-width: 480px)"
                                                                                />
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Phu-Quoc.jpg"
                                                                                    sizes="(max-width: 1024px) 400w"
                                                                                    media="(max-width: 1024px)"
                                                                                />
                                                                                <img
                                                                                    decoding="async"
                                                                                    className="image__img"
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Phu-Quoc.jpg"
                                                                                    width={400}
                                                                                    height={400}
                                                                                    alt="Phu Quoc"
                                                                                    title="Phu Quoc"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Phú Quốc
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/xoay-nam-phi/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Xoay-Nam-Phi-300x300.jpg"
                                                                                    sizes="(max-width: 480px) 300w"
                                                                                    media="(max-width: 480px)"
                                                                                />
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Xoay-Nam-Phi.jpg"
                                                                                    sizes="(max-width: 1024px) 400w"
                                                                                    media="(max-width: 1024px)"
                                                                                />
                                                                                <img
                                                                                    decoding="async"
                                                                                    className="image__img"
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Xoay-Nam-Phi.jpg"
                                                                                    width={400}
                                                                                    height={400}
                                                                                    alt="Xoay Nam Phi"
                                                                                    title="Xoay Nam Phi"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Xoáy Nam Phi
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="grid__col woo-categories__col default-section__col">
                                                                    <a
                                                                        className="align-c woo-category-card"
                                                                        href="https://azpet.com.vn/xoay-thai/"
                                                                    >
                                                                        <div className="rel w100 woo-category-card__image-wrapper">
                                                                            <picture className="image image--contain woo-category-card__image">
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Xoay-Thai-300x300.jpg"
                                                                                    sizes="(max-width: 480px) 300w"
                                                                                    media="(max-width: 480px)"
                                                                                />
                                                                                <source
                                                                                    srcSet="https://azpet.com.vn/wp-content/uploads/2021/06/Xoay-Thai.jpg"
                                                                                    sizes="(max-width: 1024px) 400w"
                                                                                    media="(max-width: 1024px)"
                                                                                />
                                                                                <img
                                                                                    decoding="async"
                                                                                    className="image__img"
                                                                                    src="https://azpet.com.vn/wp-content/uploads/2021/06/Xoay-Thai.jpg"
                                                                                    width={400}
                                                                                    height={400}
                                                                                    alt="Xoay Thai"
                                                                                    title="Xoay Thai"
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                        <div className="woo-category-card__content">
                                                                            <h3 className="woo-category-card__title">
                                                                                Xoáy Thái
                                                                            </h3>{" "}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default ProductList;
