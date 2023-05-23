import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination } from "swiper";

import img1 from '../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/slide2.jpg'
import img3 from '../../../assets/home/slide3.jpg'

const Section1 = () => {
    return (
        <section className='my-3'>
            <SectionTitle
                heading={'Order Online'}
                subheading={'---From 11:00am to 10:00pm---'}
            />

            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>

                    <img src={img1} alt="" />
                    <h3 className='text-3xl -mt-16 font-semibold text-white'>Salad</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" />
                    <h3 className='text-3xl -mt-16 font-semibold text-white'>Tomato</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" />
                    <h3 className='text-3xl -mt-16 font-semibold text-white'>Other</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" />
                    <h3 className='text-3xl -mt-16 font-semibold text-white'>Tomato</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" />
                </SwiperSlide>

            </Swiper>
        </section>
    );
}

export default Section1;
