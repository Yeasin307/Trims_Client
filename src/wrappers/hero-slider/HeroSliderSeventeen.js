import React from "react";
import Swiper from "react-id-swiper";
import HeroSliderSeventeenSingle from "../../components/hero-slider/HeroSliderSeventeenSingle.js";

const HeroSliderSeventeen = ({ banner }) => {

  const params = {
    effect: "fade",
    shouldSwiperUpdate: true,
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    watchSlidesVisibility: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    renderPrevButton: () => (
      <button className="swiper-button-prev ht-swiper-button-nav">
        <i className="pe-7s-angle-left" />
      </button>
    ),
    renderNextButton: () => (
      <button className="swiper-button-next ht-swiper-button-nav">
        <i className="pe-7s-angle-right" />
      </button>
    )
  };

  return (
    <div className="slider-area">
      <div className="slider-active nav-style-1">
        <Swiper {...params}>
          {banner &&
            banner.map((single, key) => {
              return (
                <HeroSliderSeventeenSingle
                  key={key}
                  data={single}
                  sliderClass="swiper-slide"
                />
              );
            })}
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSliderSeventeen;
