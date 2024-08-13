/* eslint-disable jsx-a11y/anchor-is-valid */
// src/components/Navbar.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
     <div class="header__sticky js-sticky-header">  
<div class="header__inner">
        <div class="header__wrapper">
      <div class="container header__container">
        <div class="grid header__grid">
          <div class="grid__col header__col header__col--left-mobile">
            <img src="https://azpet.com.vn/wp-content/themes/azpet/assets/img/header-free-ship.png" alt="Free ship" width="100" height="20"/>
          </div>
          <div class="grid__col header__col header__col--logo-menu">
            <div class="f fw header__logo-menu js-header-logo">
      <div class="header__logo"> <span class="screen-reader-text">AZPET – An Tâm Mua Pet</span><a href="https://azpet.com.vn/" class="custom-logo-link" rel="home" aria-current="page"><img width="300" height="163" src="https://azpet.com.vn/wp-content/uploads/2021/07/azpet.png.webp" class="custom-logo" alt="logo azpet" decoding="async" srcset="https://azpet.com.vn/wp-content/uploads/2021/07/azpet.png.webp 300w, https://azpet.com.vn/wp-content/uploads/2021/07/azpet-20x11.png 20w, https://azpet.com.vn/wp-content/uploads/2021/07/azpet-64x35.png 64w" sizes="(max-width: 300px) 100vw, 300px"/></a></div>        <div class="header__vertical js-header-vertical">
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
          </div>
          <div class="grid__col header__col header__col--mobile-menu-buttons">
            <div class="f aic header__mobile-menu-buttons">
                            <button class="header__mobile-button js-open-mobile-menu" aria-label="Mở menu mobile">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64"><path d="M60,35H4a2,2,0,0,1-2-2V31a2,2,0,0,1,2-2H60a2,2,0,0,1,2,2v2A2,2,0,0,1,60,35Zm0-22H4a2,2,0,0,1-2-2V9A2,2,0,0,1,4,7H60a2,2,0,0,1,2,2v2A2,2,0,0,1,60,13Zm0,44H4a2,2,0,0,1-2-2V53a2,2,0,0,1,2-2H60a2,2,0,0,1,2,2v2A2,2,0,0,1,60,57Z"></path></svg>
</button>
            </div>
          </div>
          <div class="grid__col header__col header__col--hot button">
            <!-- <div class="ring-container">
              <div class="ringring"></div>
              <div class="circle"></div>
            </div> -->
                      </div>
          <div class="grid__col header__col header__col--search-form">
            <div class="header__widget header__widget--form header__widget--form-product">
                <div class="dgwt-wcas-search-wrapp dgwt-wcas-has-submit woocommerce dgwt-wcas-style-solaris js-dgwt-wcas-layout-classic dgwt-wcas-layout-classic js-dgwt-wcas-mobile-overlay-enabled">
		<form class="dgwt-wcas-search-form" role="search" action="https://azpet.com.vn/" method="get">
		<div class="dgwt-wcas-sf-wrapp">
						<label class="screen-reader-text" for="dgwt-wcas-search-input-1">Tìm kiếm sản phẩm</label>

			<input id="dgwt-wcas-search-input-1" type="search" class="dgwt-wcas-search-input" name="s" value="" placeholder="Tìm thú cưng của bạn" autocomplete="off">
			<div class="dgwt-wcas-preloader" style="right: 50px;"></div>

			<div class="dgwt-wcas-voice-search"></div>

							<button type="submit" aria-label="Tìm kiếm" class="dgwt-wcas-search-submit">				<svg class="dgwt-wcas-ico-magnifier" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 51.539 51.361" xml:space="preserve">
		             <path d="M51.539,49.356L37.247,35.065c3.273-3.74,5.272-8.623,5.272-13.983c0-11.742-9.518-21.26-21.26-21.26 S0,9.339,0,21.082s9.518,21.26,21.26,21.26c5.361,0,10.244-1.999,13.983-5.272l14.292,14.292L51.539,49.356z M2.835,21.082 c0-10.176,8.249-18.425,18.425-18.425s18.425,8.249,18.425,18.425S31.436,39.507,21.26,39.507S2.835,31.258,2.835,21.082z"></path>
				</svg>
				</button>
			
			<input type="hidden" name="post_type" value="product">
			<input type="hidden" name="dgwt_wcas" value="1">

			
					</div>
	</form>
</div>
            </div>
          </div>
                    <div class="grid__col header__col header__col--button" aria-expanded="false" role="dialog">
            <div class="wp-block-button button-icon text-center is-style-fill header__button"><a class="wp-block-button__link has-secondary-background-color has-white-color has-text-color has-background" href="https://zalo.me/1468374330755950828" target="_blank"><span class="button__text wp-block-button__text">Tư Vấn Trả Góp</span></a></div>  <div class="header__avatar">
      <picture class="image image--cover header__image">
	<img width="300" height="300" src="https://azpet.com.vn/wp-content/uploads/2021/05/be-20210103161057-300x300.png" class="wp-post-image image__img" alt="nhân viên tư vấn" decoding="async" fetchpriority="high" srcset="https://azpet.com.vn/wp-content/uploads/2021/05/be-20210103161057-300x300.png 300w, https://azpet.com.vn/wp-content/uploads/2021/05/be-20210103161057-150x150.png 150w, https://azpet.com.vn/wp-content/uploads/2021/05/be-20210103161057-20x20.png 20w, https://azpet.com.vn/wp-content/uploads/2021/05/be-20210103161057-375x375.png 375w, https://azpet.com.vn/wp-content/uploads/2021/05/be-20210103161057-e1628069721132.png 100w, https://azpet.com.vn/wp-content/uploads/2021/05/be-20210103161057-64x64.png 64w" sizes="(max-width: 300px) 100vw, 300px">  </picture>
  <picture class="image image--cover header__image">
	<img width="300" height="300" src="https://azpet.com.vn/wp-content/uploads/2021/05/mai-20210103161058-300x300.png" class="wp-post-image image__img" alt="nhân viên tư vấn" decoding="async" srcset="https://azpet.com.vn/wp-content/uploads/2021/05/mai-20210103161058-300x300.png 300w, https://azpet.com.vn/wp-content/uploads/2021/05/mai-20210103161058-150x150.png 150w, https://azpet.com.vn/wp-content/uploads/2021/05/mai-20210103161058-20x20.png 20w, https://azpet.com.vn/wp-content/uploads/2021/05/mai-20210103161058-375x375.png 375w, https://azpet.com.vn/wp-content/uploads/2021/05/mai-20210103161058-e1628069810489.png 100w, https://azpet.com.vn/wp-content/uploads/2021/05/mai-20210103161058-64x64.png 64w" sizes="(max-width: 300px) 100vw, 300px">  </picture>
  <picture class="image image--cover header__image">
	<img width="300" height="300" src="https://azpet.com.vn/wp-content/uploads/2021/05/the-20210103161058-300x300.png" class="wp-post-image image__img" alt="nhân viên tư vấn" decoding="async" srcset="https://azpet.com.vn/wp-content/uploads/2021/05/the-20210103161058-300x300.png 300w, https://azpet.com.vn/wp-content/uploads/2021/05/the-20210103161058-150x150.png 150w, https://azpet.com.vn/wp-content/uploads/2021/05/the-20210103161058-20x20.png 20w, https://azpet.com.vn/wp-content/uploads/2021/05/the-20210103161058-375x375.png 375w, https://azpet.com.vn/wp-content/uploads/2021/05/the-20210103161058-e1628069885179.png 100w, https://azpet.com.vn/wp-content/uploads/2021/05/the-20210103161058-64x64.png 64w" sizes="(max-width: 300px) 100vw, 300px">  </picture>
  </div>
          </div>
          <div class="grid__col header__col header__col--right-mobile">
            <img src="https://azpet.com.vn/wp-content/themes/azpet/assets/img/header-bh-365.png" alt="Guarantee 365 days" width="100" height="20">
          </div>
        </div>
      </div>
    </div>
  </div>

  </div>
    </nav>
  );
};

export default Navbar;
