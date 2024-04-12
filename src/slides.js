import React from 'react';
import {Swiper,SwiperSlide } from 'swiper/react'
import 'swiper/css';

function slides() {
  return (
    <Swiper
    spaceBetween={50}
    slidesPerView={3}
    
  >
    <SwiperSlide>
        <img src ="/images/hotel1.jpg" alt=""/>
        </SwiperSlide>
    <SwiperSlide>
        <img src ="/images/hotel6.jpg" alt=""/>
        </SwiperSlide>
        <SwiperSlide>
        <img src ="/images/hotel3.jpg" alt=""/>
    </SwiperSlide>
    <SwiperSlide>
        <img src ="/images/hotel4.jpg" alt=""/>
    </SwiperSlide>
   
    
  </Swiper>
  )
}

export default slides;
