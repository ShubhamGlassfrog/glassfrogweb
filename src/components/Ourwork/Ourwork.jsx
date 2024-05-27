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
                slidesPerView={5}
                centeredSlides={true}
                spaceBetween={30}
                // pagination={{
                //     type: 'fraction',
                // }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper bg-slate-950"
            >

                <SwiperSlide>
                    <div className="relative group w-full h-full">
                        <Image src="/client1.jpg" width={600} height={600} className='w-full h-full object-cover' />

                        <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="mb-2">
                                <Image src="/ser1.svg" width={50} height={50} alt="Logo" />
                            </div>
                            <p className="text-white text-center">this is description.</p>
                            <button className="mt-2 px-4 py-2 bg-white text-black rounded-full">
                                hello
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative group w-full h-full">
                        <Image src="/client2.png" width={600} height={600} className='w-full h-full object-cover' />

                        <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="mb-2">
                                <Image src="/ser1.svg" width={50} height={50} alt="Logo" />
                            </div>
                            <p className="text-white text-center">this is description.</p>
                            <button className="mt-2 px-4 py-2 bg-white text-black rounded-full">
                                hello
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative group w-full h-full">
                        <Image src="/client3.jpg" width={600} height={600} className='w-full h-full object-cover' />

                        <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="mb-2">
                                <Image src="/ser1.svg" width={50} height={50} alt="Logo" />
                            </div>
                            <p className="text-white text-center">this is description.</p>
                            <button className="mt-2 px-4 py-2 bg-white text-black rounded-full">
                                hello
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative group w-full h-full">
                        <Image src="/client4.jpg" width={600} height={600} className='w-full h-full object-cover' />

                        <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="mb-2">
                                <Image src="/ser1.svg" width={50} height={50} alt="Logo" />
                            </div>
                            <p className="text-white text-center">this is description.</p>
                            <button className="mt-2 px-4 py-2 bg-white text-black rounded-full">
                                hello
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative group w-full h-full">
                        <Image src="/client5.webp" width={600} height={600} className='w-full h-full object-cover' />

                        <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="mb-2">
                                <Image src="/ser1.svg" width={50} height={50} alt="Logo" />
                            </div>
                            <p className="text-white text-center">this is description.</p>
                            <button className="mt-2 px-4 py-2 bg-white text-black rounded-full">
                                hello
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative group w-full h-full">
                        <Image src="/client1.jpg" width={600} height={600} className='w-full h-full object-cover' />

                        <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="mb-2">
                                <Image src="/client6.jpg" width={50} height={50} alt="Logo" />
                            </div>
                            <p className="text-white text-center">this is description.</p>
                            <button className="mt-2 px-4 py-2 bg-white text-black rounded-full">
                                hello
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative group w-full h-full">
                        <Image src="/client7.jpg" width={600} height={600} className='w-full h-full object-cover' />

                        <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="mb-2">
                                <Image src="/ser1.svg" width={50} height={50} alt="Logo" />
                            </div>
                            <p className="text-white text-center">this is description.</p>
                            <button className="mt-2 px-4 py-2 bg-white text-black rounded-full">
                                hello
                            </button>
                        </div>
                    </div>
                </SwiperSlide>








            </Swiper>


        </>
    );
}
