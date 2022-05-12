
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import {Container} from 'react-bootstrap';


// import required modules
import { Autoplay,Pagination } from "swiper";

const Entreprises =()=> {
  return (
    <Container fluid className="clients">
        <h1 className="text-center p-3">Ils recrutent nos <strong>Développeurs</strong></h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
       
 <SwiperSlide><img src="assets/img/entreprises/atos1.png"className="img-fluid" alt=""/></SwiperSlide>
 <SwiperSlide><img src="assets/img/entreprises/capgemini1.png" className="img-fluid" alt=""/></SwiperSlide>
 <SwiperSlide><img src="assets/img/entreprises/cgi1.png" className="img-fluid" alt=""/></SwiperSlide>
 <SwiperSlide><img src="assets/img/entreprises/gfi1.png" className="img-fluid" alt=""/></SwiperSlide>
 <SwiperSlide><img src="assets/img/entreprises/lafactory.png" className="img-fluid" alt=""/></SwiperSlide>
 <SwiperSlide><img src="assets/img/entreprises/sofercom.png" className="img-fluid" alt=""/></SwiperSlide>
      </Swiper> 
      
    </Container>
  );
}
export default Entreprises;