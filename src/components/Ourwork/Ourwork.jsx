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
            <div className="  w-full h-full flex flex-col items-center justify-center bg-slate-950 ">
                <div className="container relative flex flex-col  justify-center h-full bg-slate-950">
                    <h5 className="text-white owhead font-bold mb-4">
                        OUR LATEST WORK                    </h5>
                    <p className="text-white pt-5 pb-5">
                        Pioneering change across technology, marketing and social.
                    </p>

                </div>
            </div>
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
