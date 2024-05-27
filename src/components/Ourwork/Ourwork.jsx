"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function App() {
    const [swiperRef, setSwiperRef] = useState(null);

    let appendNumber = 4;
    let prependNumber = 1;

    const prepend2 = () => {
        swiperRef.prependSlide([
            '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
            '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
        ]);
    };

    const prepend = () => {
        swiperRef.prependSlide(
            '<div class="swiper-slide">Slide ' + --prependNumber + '</div>'
        );
    };

    const append = () => {
        swiperRef.appendSlide(
            '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>'
        );
    };

    const append2 = () => {
        swiperRef.appendSlide([
            '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
            '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
        ]);
    };

    return (
        <>
            <Swiper
                onSwiper={setSwiperRef}
                slidesPerView={3}
                centeredSlides={true}
                spaceBetween={30}
                // pagination={{
                //     type: 'fraction',
                // }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper bg-slate-950"
            >

                <SwiperSlide><Image src="/client1.jpg" width={600} height={600} className='ourwork' /></SwiperSlide>
                <SwiperSlide><Image src="/client2.png" width={600} height={600} className='ourwork' /></SwiperSlide>
                <SwiperSlide><Image src="/client3.jpg" width={600} height={600} className='ourwork' /></SwiperSlide>
                <SwiperSlide><Image src="/client4.jpg" width={600} height={600} className='ourwork' /></SwiperSlide>
                <SwiperSlide><Image src="/client5.webp" width={600} height={600} className='ourwork' /></SwiperSlide>
                <SwiperSlide><Image src="/client6.jpg" width={600} height={600} className='ourwork' /></SwiperSlide>
                <SwiperSlide><Image src="/client7.jpg" width={600} height={600} className='ourwork' /></SwiperSlide>


            </Swiper>


        </>
    );
}
