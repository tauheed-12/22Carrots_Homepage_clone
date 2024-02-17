import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.css';
import imgs1 from "./media/imgs1.jpg";
import imgs2 from "./media/imgs2.jpg";
import imgs3 from "./media/imgs3.png";
import imgs4 from "./media/imgs4.jpg";
import imgs5 from "./media/imgs5.jpg";
import imgs6 from "./media/imgs6.jpg";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

export function HorizontalSwiper(){
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img src={imgs1} alt="Slide 1" id='swiper-img' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={imgs2} alt="Slide 2" id='swiper-img' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={imgs3} alt="Slide 3" id='swiper-img' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={imgs4} alt="Slide 4" id='swiper-img' />
      </SwiperSlide>
      {/* Add more slides with images as needed */}
    </Swiper>
  );
};
