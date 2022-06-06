import React from "react";
import "../assets/css/header.css";
import logo from "../assets/images/logo.png";

class Header extends React.Component {
  render() {
    return (
      <>
        <div class="header-top">
          <div class="search" id="search">
            <input type="text" placeholder="Tìm sản phẩm" />
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <a href="google.com.vn">
            <img src={logo} alt="" />
          </a>
          <div class="contact">
            <div class="contact-me">
              <div class="phone-icon">
                <i class="fa-solid fa-phone"></i>
              </div>
              <div class="support">
                <p>Hỗ trợ</p>
                <h2>1900 6750</h2>
              </div>
            </div>
            <div class="cart">
              <i class="bx bx-cart-alt" id="cart"></i>
            </div>
            <div class="users">
              <i class="bx bx-user" id="user-login"></i>
              <ul class="logIn-logOut " id="form-LogIn-Register">
                <li>
                  <span id="login">Đăng nhập</span>
                </li>
                <li>
                  <span id="register">Đăng ký</span>
                </li>
              </ul>
              <ul class="logIn-logOut hide" id="form-LogOut">
                <li id="txtNameUser"></li>
                <li>
                  <span id="">Danh sách yêu thích</span>
                </li>
                <li>
                  <span id="settingUser">Cài đặt tài khoản</span>
                </li>
                <li>
                  <span id="logOut">Đăng xuất</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="menu">
            <div class="nav">
                <ul id="main-menu">
                    <li><a href="">Trang chủ</a></li>
                    <li><a href="">Giới thiệu</a></li>
                    <li class="hash-child">
                        <a href="">Sản phẩm </a>
                        <ul class="sub-menu">
                            <li class="hash-child">
                                <a href="">Củ quả các loại </a>
                                <ul class="sub-menu">
                                    <li><a href="">Mướp</a></li>
                                    <li><a href="">Đu đủ</a></li>
                                    <li><a href="">Bông cải xanh</a></li>
                                    <li><a href="">Các loại củ</a></li>
                                </ul>
                            </li>
                            <li><a href="">Rau các loại</a></li>
                            <li class="hash-child">
                                <a href="">Thực phẩm</a>
                                <ul class="sub-menu">
                                    <li><a href="">Mướp</a></li>
                                    <li><a href="">Đu đủ</a></li>
                                    <li><a href="">Bông cải xanh</a></li>
                                    <li><a href="">Các loại củ</a></li>
                                </ul>
                            </li>
                            <li><a href="">Trái cây</a></li>
                        </ul>
                    </li>
                    <li><a href="">Đặt hàng</a></li>
                    <li><a href="">Tin tức</a></li>
                    <li><a href="">Liên hệ</a></li>
                </ul>
            </div>
        </div>
      </>
    );
  }
}

export default Header;
