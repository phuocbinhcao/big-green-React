import React, { Component } from 'react';
import '../assets/css/mainInfo.css';
import banner_intro from '../assets/images/banner_intro.jpg';
import banner_intro1 from '../assets/images/img_intro_1.jpg';
import banner_intro2 from '../assets/images/img_intro_2.jpg';
import banner_intro3 from '../assets/images/img_intro_3.jpg';


class MainInfo extends Component {
    render() {
        return (
            <div>
                <div class="main-info">
        <div class="main-info-banner">
            <div class="info-banner">
                <div class="banner-img">
                    <img src={banner_intro} alt="" />
                </div>
                <div class="banner-info">
                    <h2>Chúng tôi cung cấp</h2>
                    <h1>Các sản phẩm nông sản tươi - sạch</h1>
                    <p>
                        Cửa hàng <b><a href="">Nông sản sạch</a></b> là một website cung
                        cấp thực phẩm an toàn, nông sản sạch cho người dân. Với mong muốn
                        mang tới mọi gia đình những thực phẩm an toàn nhất trước mối lo
                        ngại về thực phẩm bẩn tại Việt Nam.
                    </p>
                    <p>
                        Với mục đích là <b>"Mang thiên nhiên về với căn nhà của bạn"</b>
                    </p>
                </div>
            </div>

            <div class="img-intro">
                <img src={banner_intro1} alt="" />
                <img src={banner_intro2} alt="" />
                <img src={banner_intro3} alt="" />
            </div>
        </div>
    </div>
            </div>
        );
    }
}

export default MainInfo;