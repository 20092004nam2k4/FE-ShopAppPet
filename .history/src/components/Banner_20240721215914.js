import React from 'react';
import './Banner.css'; // Đảm bảo đường dẫn đúng
import 'bootstrap/dist/css/bootstrap.min.css'; // Thêm Bootstrap CSS

function Banner() {
  return (
    <div className="container">
      <div className="row align-items-start">
        {/* Cột các icon */}
        <div className="col-md-4 d-flex flex-column">
          <div className="banner-icons flex-fill">
            <ul className="list-unstyled">
              <li className="banner-icon-item">
                <a href="https://azpet.com.vn/cho-canh/">
                  <img src="https://azpet.com.vn/wp-content/uploads/2021/06/cho-canh-1.png" alt="Icon 1" className="banner-icon" />
                  <span className="banner-icon-title">Giống Chó Cảnh</span>
                </a>
              </li>
              <li className="banner-icon-item">
                <a href="https://azpet.com.vn/meo-canh/">
                  <img src="https://azpet.com.vn/wp-content/uploads/2021/06/meo-canh-1.png" alt="Icon 2" className="banner-icon" />
                  <span className="banner-icon-title">Mèo Cảnh</span>
                </a>
              </li>
              <li className="banner-icon-item">
                <a href="https://hoptac.azpet.com.vn/">
                  <img src="https://azpet.com.vn/wp-content/uploads/2021/06/hop-tac-nhan-giong-cho-canh-1.png" alt="Icon 3" className="banner-icon" />
                  <span className="banner-icon-title">Hợp Tác Nhân Giống</span>
                </a>
              </li>
              <li className="banner-icon-item">
                <a href="https://azpet.com.vn/">
                <div className="icon-pet">
                <img src="https://azpet.com.vn/wp-content/uploads/2021/07/phu-kien-cho-meo-1.png" alt="Icon 4" className="banner-icon" />
                </div>
                  <span className="banner-icon-title">Phụ Kiện Chó Mèo</span>
                </a>
              </li>
              <li className="banner-icon-item">
                <a href="https://azpet.com.vn/spa/">
                <div className="icon-pet">
                <img src="https://azpet.com.vn/wp-content/uploads/2021/06/spa-cho-meo-1.png" alt="Icon 4" className="banner-icon" />
                </div>
                  <span className="banner-icon-title">Spa & Grooming</span>
                </a>
              </li>
            </ul>
          </div>
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
