import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-red">
    <div class="f fw header__logo-menu js-header-logo">
      <div class="header__logo"> <span class="screen-reader-text">AZPET – An Tâm Mua Pet</span><a href="https://azpet.com.vn/" class="custom-logo-link" rel="home" aria-current="page"><img width="300" height="163" src="https://azpet.com.vn/wp-content/uploads/2021/07/azpet.png.webp" class="custom-logo" alt="logo azpet" decoding="async" srcset="https://azpet.com.vn/wp-content/uploads/2021/07/azpet.png.webp 300w, https://azpet.com.vn/wp-content/uploads/2021/07/azpet-20x11.png 20w, https://azpet.com.vn/wp-content/uploads/2021/07/azpet-64x35.png 64w" sizes="(max-width: 300px) 100vw, 300px"/></a></div>
              <div class="header__vertical js-header-vertical">
      <button class="f header__vertical-header js-header-vertical-button">
        <span class="header__icon header__icon--vertical header__icon--icon-menu"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64"><path d="M60,35H4a2,2,0,0,1-2-2V31a2,2,0,0,1,2-2H60a2,2,0,0,1,2,2v2A2,2,0,0,1,60,35Zm0-22H4a2,2,0,0,1-2-2V9A2,2,0,0,1,4,7H60a2,2,0,0,1,2,2v2A2,2,0,0,1,60,13Zm0,44H4a2,2,0,0,1-2-2V53a2,2,0,0,1,2-2H60a2,2,0,0,1,2,2v2A2,2,0,0,1,60,57Z"></path></svg>
</span>
        <span class="header__icon header__icon--vertical header__icon--icon-close"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64"><path d="M36.2,32,56,12.2a1.93,1.93,0,0,0,0-2.8L54.6,8a1.93,1.93,0,0,0-2.8,0L32,27.8,12.2,8A1.93,1.93,0,0,0,9.4,8L8,9.4a1.93,1.93,0,0,0,0,2.8L27.8,32,8,51.8a1.93,1.93,0,0,0,0,2.8L9.4,56a1.93,1.93,0,0,0,2.8,0L32,36.2,51.8,56a1.93,1.93,0,0,0,2.8,0L56,54.6a1.93,1.93,0,0,0,0-2.8Z"></path></svg>
</span>
        <span class="header__vertical-title">Danh mục sản phẩm</span>
      </button>
      <div class="header__vertical-list js-header-vertical-content is-not-loaded">
        <noscript>
        <ul id="menu-danh-muc-san-pham" class="header__vertical_menu"><li id="menu-item-687" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item--icon menu-item--icon-image menu-item-687"><a href="https://azpet.com.vn/cho-canh/"><span class="menu-item__icon"><img class="menu-item__image" src="https://azpet.com.vn/wp-content/uploads/2021/06/cho-canh-1.png" alt=""></span><span class="menu-item__title">Giống Chó Cảnh</span></a></li>
<li id="menu-item-18" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item--icon menu-item--icon-image menu-item-18"><a href="https://azpet.com.vn/meo-canh/"><span class="menu-item__icon"><img class="menu-item__image" src="https://azpet.com.vn/wp-content/uploads/2021/06/meo-canh-1.png" alt=""></span><span class="menu-item__title">Giống Mèo Cảnh</span></a></li>
<li id="menu-item-9131" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-21 current_page_item menu-item--icon menu-item--icon-image menu-item-9131"><a href="https://azpet.com.vn/" aria-current="page"><span class="menu-item__icon"><img class="menu-item__image" src="https://azpet.com.vn/wp-content/uploads/2021/07/phu-kien-cho-meo-1.png" alt=""></span><span class="menu-item__title">Phụ Kiện Chó Mèo</span></a></li>
<li id="menu-item-8751" class="menu-item menu-item-type-post_type menu-item-object-page menu-item--icon menu-item--icon-image menu-item-8751"><a href="https://azpet.com.vn/spa/"><span class="menu-item__icon"><img class="menu-item__image" src="https://azpet.com.vn/wp-content/uploads/2021/06/spa-cho-meo-1.png" alt=""></span><span class="menu-item__title">Spa &#038; Grooming</span></a></li>
<li id="menu-item-14312" class="menu-item menu-item-type-custom menu-item-object-custom menu-item--icon menu-item--icon-image menu-item-14312"><a target="_blank" rel="noopener" href="https://hoptac.azpet.com.vn/"><span class="menu-item__icon"><img class="menu-item__image" src="https://azpet.com.vn/wp-content/uploads/2021/06/hop-tac-nhan-giong-cho-canh-1.png" alt=""></span><span class="menu-item__title">Hợp tác nhân giống</span></a></li>
</ul>      </noscript>
      </div>
    </div>
  </div>
      <div className="collapse navbar-collapse" id="navbarNav">
        <div className="navbar-content">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <img src="category-icon.png" alt="Product Categories" className="category-icon" />
              </a>
            </li>
            <li className="nav-item">
              <form className="form-inline">
                <input className="form-control search-input" type="search" placeholder="Search" aria-label="Search" />
              </form>
            </li>
            <li className="nav-item">
              <button className="btn consult-btn">Consultation</button>
              <div className="image-container">
                <img src="image1.jpg" alt="Advisor" className="circle-img" />
                <img src="image2.jpg" alt="Advisor" className="circle-img" />
                <img src="image3.jpg" alt="Advisor" className="circle-img" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
