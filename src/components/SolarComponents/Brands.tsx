import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Keyboard } from "swiper";

import brand1 from '../../assets/Marcas/weg.png'
import brand2 from '../../assets/Marcas/Fronius.png'
import brand3 from '../../assets/Marcas/Growatt.png'
import brand4 from '../../assets/Marcas/canadian.png'
import brand5 from '../../assets/Marcas/risen.png'
import brand6 from '../../assets/Marcas/Schneider.png'
import brand7 from '../../assets/Marcas/abb.png'
import brand8 from '../../assets/Marcas/clamper.png'
import brand9 from '../../assets/Marcas/sofar.png'
import brand10 from '../../assets/Marcas/Deye.png'
import brand11 from '../../assets/Marcas/apsystem.png'

import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/effect-fade";

import './Brands.css';

export function Brands(){
   return (
      <section id="Brands">
         <div className="content">
            <h2>Marcas conceituadas</h2>

               <Swiper
                  slidesPerView={5}
                  spaceBetween={30}
                  pagination={{
                     clickable: true,
                     dynamicBullets: true
                  }}
                  breakpoints={{
                     0:{
                       slidesPerView: 2,
                     },
                     640: {
                       slidesPerView: 3,
                     },
                     768: {
                       slidesPerView: 4,                    
                     },
                     1024: {
                       slidesPerView: 5,                    
                     },
                   }}
                  loop={true}
                  keyboard={true}
                  autoplay={{
                     delay: 2000,
                     disableOnInteraction: false
                   }}
                  modules={[Keyboard, Pagination, Autoplay]}                 
               >
                  <SwiperSlide><img src={brand1}></img></SwiperSlide>
                  <SwiperSlide><img src={brand2}></img></SwiperSlide>
                  <SwiperSlide><img src={brand3}></img></SwiperSlide>
                  <SwiperSlide><img src={brand4}></img></SwiperSlide>
                  <SwiperSlide><img src={brand5}></img></SwiperSlide>
                  <SwiperSlide><img src={brand6}></img></SwiperSlide>
                  <SwiperSlide><img src={brand7}></img></SwiperSlide>
                  <SwiperSlide><img src={brand8}></img></SwiperSlide>
                  <SwiperSlide><img src={brand9}></img></SwiperSlide>
                  <SwiperSlide><img src={brand10}></img></SwiperSlide>
                  <SwiperSlide><img src={brand11}></img></SwiperSlide>
               </Swiper>  
         </div>
      </section>
   )
}