import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-red">
      <a className="navbar-brand" href="#">
        <img src="https://azpet.com.vn/wp-content/uploads/2021/07/azpet.png.webp" alt="AzPet Logo" className="navbar-logo" />
      </a>
      import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-red">
      <a className="navbar-brand" href="#">
        <img src="https://azpet.com.vn/wp-content/uploads/2021/07/azpet.png.webp" alt="AzPet Logo" className="navbar-logo" />
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
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
