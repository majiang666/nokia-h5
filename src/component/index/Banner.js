import React, { Component } from 'react';
import ReactSwiper from 'reactjs-swiper';

class Banner extends Component {
  render() {
    const items = [{
      image: 'https://uxresources.baozun.com/prod/88000027/jpg/20181227/cd436cd298bf45f7bea4a6c543ea4c14.jpg',
      title: '图片1',
      link: 'http://jd.com'
    }, {
      image: 'https://uxresources.baozun.com/prod/88000027/jpg/20181112/61249e6ef3c94fff88ecaca1fc354875.jpg',
      title: '图片2',
    }, {
      image: 'https://uxresources.baozun.com/default/88000027/jpg/20181228/6b21fc18a6794abba1d1c7dd05d4e2a5.jpg',
      title: '图片3',
      link: 'http://jd.com'
    }, {
      image: 'https://uxresources.baozun.com/prod/88000027/jpg/20181203/6c6a47e9e5f5472d9d572c98638ee091.jpg',
      title: '图片4',
    }];
    const swiperOptions = {
      preloadImages: true,
      autoplay: 4000,
      autoplayDisableOnInteraction: false,
      spaceBetween : 0
    };
    return (
      <div className="banner">
      	<ReactSwiper options={swiperOptions} showPagination items={items} className="swiper-example" />
      </div>
    );
  }
}

export default Banner;
