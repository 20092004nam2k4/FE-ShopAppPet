import React from 'react';
import './Banner.css'; // Đảm bảo đường dẫn đúng
import 'bootstrap/dist/css/bootstrap.min.css'; // Thêm Bootstrap CSS

function Banner() {
  return (
    <div className="container">
      <div className="row align-items-start">
        {/* Cột các icon */}
        <div className="col-md-4 d-flex flex-column">
        <div class="hero-banner__nav-list">
      <ul id="menu-hero-banner" class="hero-banner__menu"><li id="menu-item-685" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item--icon menu-item--icon-image menu-item-685"><a href="https://azpet.com.vn/cho-canh/"><span class="menu-item__icon"><img decoding="async" class="menu-item__image" src="https://azpet.com.vn/wp-content/uploads/2021/06/cho-canh-1.png" alt="cho canh 1" title="cho canh 1"></span><span class="menu-item__title">Giống Chó Cảnh</span></a></li>
<li id="menu-item-45" class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item--icon menu-item--icon-image menu-item-45"><a href="https://azpet.com.vn/meo-canh/"><span class="menu-item__icon"><img decoding="async" class="menu-item__image" src="https://azpet.com.vn/wp-content/uploads/2021/06/meo-canh-1.png" alt="meo canh 1" title="meo canh 1"></span><span class="menu-item__title">Giống Mèo Cảnh</span></a></li>
<li id="menu-item-14313" class="menu-item menu-item-type-custom menu-item-object-custom menu-item--icon menu-item--icon-image menu-item-14313"><a href="https://hoptac.azpet.com.vn/"><span class="menu-item__icon"><img decoding="async" class="menu-item__image" src="https://azpet.com.vn/wp-content/uploads/2021/06/hop-tac-nhan-giong-cho-canh-1.png" alt="hop tac nhan giong cho canh 1" title="hop tac nhan giong cho canh 1"></span><span class="menu-item__title">Hợp Tác Nhân Giống</span></a></li>
<li id="menu-item-9132" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-21 current_page_item menu-item--icon menu-item--icon-image menu-item-9132"><a href="https://azpet.com.vn/" aria-current="page"><span class="menu-item__icon"><img decoding="async" class="menu-item__image" src="https://azpet.com.vn/wp-content/uploads/2021/07/phu-kien-cho-meo-1.png" alt="phu kien cho meo 1" title="phu kien cho meo 1"></span><span class="menu-item__title">Phụ Kiện Chó Mèo</span></a></li>
<li id="menu-item-8752" class="menu-item menu-item-type-post_type menu-item-object-page menu-item--icon menu-item--icon-image menu-item-8752"><a href="https://azpet.com.vn/spa/"><span class="menu-item__icon"><img decoding="async" class="menu-item__image" src="https://azpet.com.vn/wp-content/uploads/2021/06/spa-cho-meo-1.png" alt="spa cho meo 1" title="spa cho meo 1"></span><span class="menu-item__title">Spa &amp; Grooming</span></a></li>
</ul>    </div>
        </div>

        {/* Cột ảnh lớn và ảnh nhỏ */}
        <div className="col-md-8 d-flex flex-column">
          <div className="banner-images flex-fill">
            <div className="banner-large-image">
              <img src="https://via.placeholder.com/600x400" alt="Large Banner" className="img-fluid" />
            </div>
            <div className="banner-small-images">
              <div className="banner-small-image">
                <img src="https://via.placeholder.com/300x200" alt="Small Image 1" className="img-fluid" />
              </div>
              <div className="banner-small-image">
                <img src="https://via.placeholder.com/300x200" alt="Small Image 2" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
