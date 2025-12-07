import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import i1 from '../assets/img/1.jpg'
import i2 from '../assets/img/2.jpg'
import i3 from '../assets/img/3.jpg'

const Slider = () => {
    return (
        <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide><img className='w-full h-[600px] object-cover' src={i2} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full h-[600px] object-cover' src={i1} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full h-[600px] object-cover' src={i3} alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;