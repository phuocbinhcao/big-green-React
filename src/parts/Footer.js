import React from "react";
import '../assets/css/footer.css';
import logo from '../assets/images/logo.png'

class Footer extends React.Component {
  render() {
    return (
      <div class="footer">
        <div class="footer-support">
          <div class="footer-support1 footer-support2">
            <a>
              <img src={logo} alt="" />
            </a>
            <p>
              Cửa hàng <a href="">Nông sản sạch</a> là một website cũng cấp thực
              phẩm an toàn, nông sản sạch cho người dân.
            </p>
            <div class="call-me">
              <i class="fa-solid fa-phone"></i>
              <h2>1900 6750</h2>
            </div>
          </div>
          <div class="footer-support1 support1">
            <p>
              <b>Về chúng tôi</b>
            </p>
            <div class="list-support">
              <div class="list-support1">
                <a href="">Trang chủ</a>
                <a href="">Giới thiệu</a>
                <a href="">Sản phẩm</a>
              </div>
              <div class="list-support1">
                <a href="">Đặt hàng</a>
                <a href="">Tin tức</a>
                <a href="">Liên hệ</a>
              </div>
            </div>
            <div class="register ">
              <i class="fa-solid fa-envelope"></i>
              <div class="registerMail">
                <h1>Đăng ký</h1>
                <p>nhận thông tin khuyến mãi</p>
              </div>
            </div>
          </div>
          <div class="footer-support1 support1">
            <p>
              <b>Hỗ trợ khách hàng</b>
            </p>
            <div class="list-support1">
              <a href="">Trang chủ</a>
              <a href="">Giới thiệu</a>
              <a href="">Sản phẩm</a>
            </div>
            <div class="sigUp">
              <input type="mail" name="mail" id="mail" placeholder="Email" />
              <input type="button" id="submit" value="Đăng ký" />
            </div>
          </div>
        </div>
        <div class="footer-copyright">&copy;Copyright, Da Nang 14-05-2022</div>
      </div>
    );
  }
}

export default Footer;
