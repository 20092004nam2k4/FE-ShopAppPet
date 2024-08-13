import React from 'react';
import '../CSS/Banner.css'; // Ensure the path is correct
import 'bootstrap/dist/css/bootstrap.min.css'; // Add Bootstrap CSS
import imagePet1 f

function Banner() {
  return (
    <div className="container">
      <div className="row">
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
              <span className="banner-icon-title">Mèo Cảnh</span>
            </a>
            <a href="https://hoptac.azpet.com.vn/" className="banner-button">
              <span className="icon-pet">
                <img src="https://azpet.com.vn/wp-content/uploads/2021/06/hop-tac-nhan-giong-cho-canh-1.png" alt="Icon 3" className="banner-icon" />
              </span>
              <span className="banner-icon-title">Hợp Tác Nhân Giống</span>
            </a>
            <a href="https://azpet.com.vn/" className="banner-button">
              <span className="icon-pet">
                <img src="https://azpet.com.vn/wp-content/uploads/2021/07/phu-kien-cho-meo-1.png" alt="Icon 4" className="banner-icon" />
              </span>
              <span className="banner-icon-title">Phụ Kiện Chó Mèo</span>
            </a>
            <a href="https://azpet.com.vn/spa/" className="banner-button">
              <span className="icon-pet">
                <img src="https://azpet.com.vn/wp-content/uploads/2021/06/spa-cho-meo-1.png" alt="Icon 5" className="banner-icon" />
              </span>
              <span className="banner-icon-title">Spa & Grooming</span>
            </a>
          </div>
        </div>

        {/* Images Column */}
        <div className="col-md-9 d-flex">
          <div className="banner-images flex-fill">
            <div className="banner-large-image">
              <img src={require('../assets/images/pet1.jpg')} alt="Large Banner" className="img-fluid" />
            </div>
            <div className="banner-small-images">
              <div className="banner-small-image">
                <img src={require('../assets/images/pet2.jpg')} alt="Small Image 1" className="img-fluid" />
              </div>
              <div className="banner-small-image">
                <img src={require('../assets/images/pet3.jpg')} alt="Small Image 2" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
