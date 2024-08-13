// src/components/ProductList.js
import React from 'react';
import './ProductList.css'; // Import các kiểu CSS riêng cho ProductList

const products = [
    {
        id: 1,
        name: 'Dog Food',
        price: '50,000 VND',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 2,
        name: 'Cat Toy',
        price: '30,000 VND',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 3,
        name: 'Bird Cage',
        price: '200,000 VND',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 4,
        name: 'Fish Tank',
        price: '500,000 VND',
        image: 'https://via.placeholder.com/150',
    },
];

const ProductList = () => {
    return (
        <div className="list-col-item list-4-item post-90596 product type-product status-publish has-post-thumbnail product_cat-alaska-malamute product_tag-alaska first outofstock shipping-taxable purchasable product-type-simple">
            <div className="item-product item-product-grid">
                <div className="product-thumb">
                    {/* s7upf_woocommerce_thumbnail_loop have $size and $animation */}
                    <a
                        href="https://matpetfamily.com/san-pham/alaska-nau-do-xinh-2/"
                        className="product-thumb-link zoom-thumb"
                    >
                        <img
                            width={270}
                            height={270}
                            src="https://matpetfamily.com/wp-content/uploads/2024/07/photo_2024-07-10_18-14-08-270x270.jpg"
                            className="attachment-270x270 size-270x270 wp-post-image"
                            alt=""
                            srcSet="https://matpetfamily.com/wp-content/uploads/2024/07/photo_2024-07-10_18-14-08-270x270.jpg 270w, https://matpetfamily.com/wp-content/uploads/2024/07/photo_2024-07-10_18-14-08-150x150.jpg 150w, https://matpetfamily.com/wp-content/uploads/2024/07/photo_2024-07-10_18-14-08-300x300.jpg 300w, https://matpetfamily.com/wp-content/uploads/2024/07/photo_2024-07-10_18-14-08-266x266.jpg 266w, https://matpetfamily.com/wp-content/uploads/2024/07/photo_2024-07-10_18-14-08-90x90.jpg 90w, https://matpetfamily.com/wp-content/uploads/2024/07/photo_2024-07-10_18-14-08-50x50.jpg 50w"
                            sizes="(max-width: 270px) 100vw, 270px"
                        />
                    </a>{" "}
                    <div className="product-label">
                        <span className="new">new</span>
                    </div>{" "}
                    <div className="product-extra-link text-center">
                        <ul className="list-product-extra-link list-inline-block">
                            <li>
                                <a
                                    href="/?add_to_wishlist=90596"
                                    className="add_to_wishlist wishlist-link"
                                    rel="nofollow"
                                    data-product-id={90596}
                                    data-product-title="ALASKA NÂU ĐỎ XINH"
                                >
                                    <i
                                        className="icon ion-android-favorite-outline"
                                        aria-hidden="true"
                                    />
                                    <span>Yêu thích</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    title="Xem nhanh"
                                    data-product-id={90596}
                                    href="https://matpetfamily.com/san-pham/alaska-nau-do-xinh-2/"
                                    className="product-quick-view quickview-link "
                                >
                                    <i className="icon ion-search" />
                                    <span>Xem nhanh</span>
                                </a>
                            </li>
                            <li />
                        </ul>
                        <a
                            href="https://matpetfamily.com/san-pham/alaska-nau-do-xinh-2/"
                            rel="nofollow"
                            data-product_id={90596}
                            data-product_sku="SP00631"
                            data-quantity={1}
                            className="button addcart-link shop-button bg-color product_type_simple s7upf_ajax_add_to_cart product_type_simple"
                            data-title="ALASKA NÂU ĐỎ XINH"
                        >
                            <span>Đọc tiếp</span>
                        </a>{" "}
                    </div>
                </div>
                <div className="product-info">
                    <span className="title12 text-uppercase color font-bold">ID:SP00631</span>
                    <h3 className="title18 text-uppercase product-title dosis-font font-bold">
                        <a
                            title="ALASKA NÂU ĐỎ XINH"
                            href="https://matpetfamily.com/san-pham/alaska-nau-do-xinh-2/"
                            className="black"
                        >
                            ALASKA NÂU ĐỎ XINH
                        </a>
                    </h3>
                    <div className="product-price simple">
                        <span className="woocommerce-Price-amount amount">
                            18.000.000<span className="woocommerce-Price-currencySymbol">₫</span>
                        </span>
                    </div>{" "}
                    <ul className="wrap-rating list-inline-block">
                        <li>
                            <div className="product-rate">
                                <div className="product-rating" style={{ width: "0%" }} />
                            </div>
                        </li>
                    </ul>{" "}
                </div>
            </div>
        </div>

    );
};

export default ProductList;
