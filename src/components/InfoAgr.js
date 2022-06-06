import React, { Component } from "react";
import '../assets/css/infoAgr.css';
import banner_infoAgr from '../assets/images/banner-4.jpg'

class InfoAgr extends Component {
  render() {
    return (
      <div class="info">
        <h1>Tin tức nông nghiệp</h1>
        <div class="list-info">
          <div class="card-list">
            <div class="card-info">
              <img src={banner_infoAgr} alt="" />
              <h3>
                Rau xanh tăng giá mạnh vì trời mưa, người dân nội thành lao đao
              </h3>
              <div class="card-date">
                <p>cafein team</p>
                <p>Ngày 20/02/2022</p>
              </div>
              <div class="card-info-main">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus ut illo eos. Reprehenderit nihil consectetur tenetur
                  provident quos, dolores delectus et neque adipisci est
                  officia...
                </p>
              </div>
            </div>
          </div>
          <div class="card-list">
            <div class="card-info">
              <img src={banner_infoAgr} alt="" />
              <h3>
                Rau xanh tăng giá mạnh vì trời mưa, người dân nội thành lao đao
              </h3>
              <div class="card-date">
                <p>cafein team</p>
                <p>Ngày 20/02/2022</p>
              </div>
              <div class="card-info-main">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus ut illo eos. Reprehenderit nihil consectetur tenetur
                  provident quos, dolores delectus et neque adipisci est
                  officia...
                </p>
              </div>
            </div>
          </div>
          <div class="card-list">
            <div class="card-info">
              <img src={banner_infoAgr} alt="" />
              <h3>
                Rau xanh tăng giá mạnh vì trời mưa, người dân nội thành lao đao
              </h3>
              <div class="card-date">
                <p>cafein team</p>
                <p>Ngày 20/02/2022</p>
              </div>
              <div class="card-info-main">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus ut illo eos. Reprehenderit nihil consectetur tenetur
                  provident quos, dolores delectus et neque adipisci est
                  officia...
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="support-footer">
          <div class="support-info">
            <div class="support-info-me">
              <h3>Hỗ trợ 24/7</h3>
              <p>Liên hệ chúng tôi 24h</p>
            </div>
            <i class="fa-solid fa-phone-volume"></i>
          </div>
          <div class="support-info">
            <div class="support-info-me">
              <h3>Hỗ trợ 24/7</h3>
              <p>Liên hệ chúng tôi 24h</p>
            </div>
            <i class="fa-solid fa-phone-volume"></i>
          </div>
          <div class="support-info">
            <div class="support-info-me">
              <h3>Hỗ trợ 24/7</h3>
              <p>Liên hệ chúng tôi 24h</p>
            </div>
            <i class="fa-solid fa-phone-volume"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default InfoAgr;
