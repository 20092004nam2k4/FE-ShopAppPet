<!-- src/components/Banner.js -->
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
                <a href="#">
                  <img src="https://via.placeholder.com/100" alt="Icon 1" className="banner-icon" />
                  <span className="banner-icon-title">Icon 1</span>
                </a>
              </li>
              <li className="banner-icon-item">
                <a href="#">
                  <img src="https://via.placeholder.com/100" alt="Icon 2" className="banner-icon" />
                  <span className="banner-icon-title">Icon 2</span>
                </a>
              </li>
              <li className="banner-icon-item">
                <a href="#">
                  <img src="https://via.placeholder.com/100" alt="Icon 3" className="banner-icon" />
                  <span className="banner-icon-title">Icon 3</span>
                </a>
              </li>
              <li className="banner-icon-item">
                <a href="#">
                  <img src="https://via.placeholder.com/100" alt="Icon 4" className="banner-icon" />
                  <span className="banner-icon-title">Icon 4</span>
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
