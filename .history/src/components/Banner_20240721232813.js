import React from 'react';
import './Banner.css'; // Ensure the path is correct
import 'bootstrap/dist/css/bootstrap.min.css'; // Add Bootstrap CSS

function Banner() {
  return (
    <div className="container">
      <div className="row align-items-start">
        {/* Icon Column */}
        <div className="col-md-4 d-flex flex-column">
          <div className="banner-icons flex-fill">
            <ul className="list-unstyled">
              <li className="banner-icon-item">
                <a href="https://azpet.com.vn/cho-canh/">
                  <span className="icon-pet">
                    <img src="https://azpet.com.vn/wp-content/uploads/2021/06/cho-canh-1.png" alt="Icon 1" className="banner-icon" />
                  </span>
                  <span className="banner-icon-title">Giống Chó Cảnh</span>
                </a>
              </li>
              {/* Other icons */}
            </ul>
          </div>
        </div>

        {/* Images Column */}
        <div className="col-md-8 d-flex">
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
