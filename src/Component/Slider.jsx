import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination,Autoplay  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
// Import Swiper styles
import 'swiper/css';
import slide1 from '/assets/slide1.jpg'
import slide2 from '/assets/slide2.jpg'
import slide3 from '/assets/slide3.jpg'
const Slider = () => {

        return (
            <div className=''>  
                 <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                      rotate: 50,
                      stretch: 0,
                      depth: 100,
                      modifier: 1,
                      slideShadows: true,
                     
                    }}
                    pagination={{ clickable: true }}
            
                    autoplay={{
                        delay: 4000, // Delay between slides in milliseconds (3 seconds here)
                        disableOnInteraction: false, // Keeps autoplay running even after interaction
                      }}
            
                    modules={[EffectCoverflow, Pagination,Autoplay ]}
                    style={{ height: "400px",  }} 
                    >
                    <SwiperSlide>
                      <img className='w-full h-full' src={slide1} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img className='w-full h-full' src={slide2} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img className='w-full h-full' src={slide3} />
                    </SwiperSlide>
               
               
                  </Swiper></div>
                );
            };
   


export default Slider;