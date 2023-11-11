import React from 'react'
import "../slider/slider.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Slider({slides}) {
  return (
    <div className='container'>
      <Swiper 
      style={{
        "--swiper-pagination-color": "white",
        "--swiper-navigation-color": "white"}}
      className='swiper_slider'
       modules={[Navigation, Pagination,A11y]}
      spaceBetween={10}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      
    >
        {slides.map((slide)=>(
        <SwiperSlide key={slide.image} className='swiperSlider'>
        <img src={slide.image} alt={slide.title} className='slider_image'/>
        </SwiperSlide> 
        ))}
    </Swiper>
    </div>
  );
};

export default Slider
