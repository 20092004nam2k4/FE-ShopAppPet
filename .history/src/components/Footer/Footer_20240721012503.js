import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <footer className="bg-dark text-white pt-4 pb-4">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5>LIÊN HỆ AZPET</h5>
            <ul className="list-unstyled">
              <li>Trụ Sở: 59 Văn Cao, Liễu Giai, Ba Đình, Hà Nội</li>
              <li>Trại Giống: Quỳnh Hội, Quỳnh Phụ, Thái Bình</li>
              <li>Hotline: 0888 08 3388</li>
              <li>
                Website: <a href="https://azpet.com.vn" className="text-white">https://azpet.com.vn</a>
              </li>
              <li>Email: contact@azpet.com.vn</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>VỀ AZPET</h5>
            <ul className="list-unstyled">
              <li>Giới Thiệu Công Ty</li>
              <li>Cơ Hội Nghề Nghiệp</li>
              <li>Hợp Tác Nhân Giống</li>
              <li>Cửa Hàng Phụ Kiện</li>
              <li>Truyền Thông Nói Về AZPET</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>CHÍNH SÁCH MUA HÀNG</h5>
            <ul className="list-unstyled">
              <li>Mua Trả Góp</li>
              <li>Chính Sách Bảo Hành</li>
              <li>Giao Nhận, Thanh toán</li>
              <li>Chính Sách Bảo Mật</li>
              <li>Điều Khoản Dịch Vụ</li>
            </ul>
          </div>
          <div className="row md-3">
            <h5>KẾT NỐI, THANH TOÁN</h5>
           
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
