import React, { useEffect } from 'react';
import './Banner.css'; // Đảm bảo đường dẫn đúng
import 'bootstrap/dist/css/bootstrap.min.css'; // Thêm CSS của Bootstrap

function Banner() {
  useEffect(() => {
    const banner = document.querySelector('.banner-small-images');
    if (banner) {
      const scrollAmount = banner.scrollWidth - banner.clientWidth;
      const scrollStep = 1;
      let scrollPos = 0;

      const scrollInterval = setInterval(() => {
        if (scrollPos >= scrollAmount) {
          scrollPos = 0;
        }
        banner.scrollLeft = scrollPos;
        scrollPos += scrollStep;
      }, 10);

      return () => clearInterval(scrollInterval);
    }
  }, []);

  return (
    <div className="container">
      <div className="row align-items-start">
        {/* Icon Column */}
        <div className="col-md-3 d-flex flex-column">
          <div className="button-container">
            <a href="https://azpet.com.vn/cho-canh/" className="banner-button">
              <span className="icon-pet">
                <img src="https://azpet.com.vn/wp-content/uploads/2021/06/cho-canh-1.png" alt="Icon 1" className="banner-icon" />
              </span>
              <span className="banner-icon-title">Giống Chó Cảnh</span>
            </a>
            <a href="https://azpet.com.vn/meo-canh/" className="banner-button">
              <span className="icon-pet">
                <img src="https://azpet.com.vn/wp-content/uploads/2021/06/meo-canh-1.png" alt="Icon 2" className="banner-icon" />
              </span>
              <span className="banner-icon-title">Giống Mèo Cảnh</span>
            </a>
            <a href="https://azpet.com.vn/phu-kien/" className="banner-button">
              <span className="icon-pet">
                <img src="https://azpet.com.vn/wp-content/uploads/2021/06/phu-kien-1.png" alt="Icon 3" className="banner-icon" />
              </span>
              <span className="banner-icon-title">Phụ Kiện</span>
            </a>
          </div>
        </div>

        {/* Banner Images Column */}
        <div className="col-md-9 banner-images">
          <div className="banner-large-image">
            <img src="https://azpet.com.vn/wp-content/uploads/2021/06/banner-1.png" alt="Large Banner" />
          </div>
          <div className="banner-small-images">
            <div className="banner-small-image">
              <img src="https://azpet.com.vn/wp-content/uploads/2021/06/small-banner-1.png" alt="Small Banner 1" />
            </div>
            <div className="banner-small-image">
              <img src="https://azpet.com.vn/wp-content/uploads/2021/06/small-banner-2.png" alt="Small Banner 2" />
            </div>
            <div className="banner-small-image">
              <img src="https://azpet.com.vn/wp-content/uploads/2021/06/small-banner-3.png" alt="Small Banner 3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
