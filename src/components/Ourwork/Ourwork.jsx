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
import { Pagination, Navigation,Autoplay } from 'swiper/modules';

export default function App() {
    const [swiperRef, setSwiperRef] = useState(null);

    let appendNumber = 4;
    let prependNumber = 1;

    const prepend2 = () => {
        swiperRef.prependSlide([
            '<div className="swiper-slide">Slide ' + --prependNumber + '</div>',
            '<div className="swiper-slide">Slide ' + --prependNumber + '</div>',
        ]);
    };

    const prepend = () => {
        swiperRef.prependSlide(
            '<div className="swiper-slide">Slide ' + --prependNumber + '</div>'
        );
    };

    const append = () => {
        swiperRef.appendSlide(
            '<div className="swiper-slide">Slide ' + ++appendNumber + '</div>'
        );
    };

    const append2 = () => {
        swiperRef.appendSlide([
            '<div className="swiper-slide">Slide ' + ++appendNumber + '</div>',
            '<div className="swiper-slide">Slide ' + ++appendNumber + '</div>',
        ]);
    };

    return (
        <>
            <div className="  w-full h-full flex flex-col items-center justify-center bg-slate-950 ">
                <div className="container relative flex flex-col  justify-center h-full bg-slate-950">
                    <h5 className="text-white owhead font-bold mb-4">
                        OUR PORTFOLIO
                    </h5>
                    <p className="text-white  pb-5">
                        Bridging the Gap between Audiences and Brands in the most innovative way!
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
                autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                modules={[Pagination, Navigation,Autoplay]}
                className="mySwiper bg-slate-950"
                breakpoints={{
                    320: { // Mobile
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    640: { // Tablets
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: { // Desktop
                        slidesPerView: 5,
                        spaceBetween: 30,
                    },
                }}
            ><SwiperSlide>
                    <div className="relative group w-full h-full">
                        <Image src="/client8.png" width={600} height={600} className='w-full h-full object-cover' />

                        <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="mb-2">
                                <Image src="/clogo8.png" width={150} height={150} alt="Logo" />
                            </div>
                            
                            {/* <button className="mt-2 px-4 py-2 bg-white text-black rounded-full">
                                hello
                            </button> */}
                        </div>
                    </div>
                </SwiperSlide>
<SwiperSlide>
                    <div className="relative group w-full h-full">
                        <Image src="/client9.png" width={600} height={600} className='w-full h-full object-cover' />

                        <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="mb-2">
                                <Image src="/clogo9.png" width={150} height={150} alt="Logo" />
                            </div>
                            
                            {/* <button className="mt-2 px-4 py-2 bg-white text-black rounded-full">
                                hello
                            </button> */}
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative group w-full h-full">
                        <Image src="/client10.png" width={600} height={600} className='w-full h-full object-cover' />

                        <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="mb-2">
                                <Image src="/clogo10.png" width={150} height={150} alt="Logo" />
                            </div>
                            
                            {/* <button className="mt-2 px-4 py-2 bg-white text-black rounded-full">
                                hello
                            </button> */}
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="relative group w-full h-full">
                        <Image src="/client1.png" width={600} height={600} className='w-full h-full object-cover' />

                        <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="mb-2">
                                <Image src="/clogo1.png" width={150} height={150} alt="Logo" />
                            </div>
                            
                            {/* <button className="mt-2 px-4 py-2 bg-white text-black rounded-full">
                                hello
                            </button> */}
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative group w-full h-full">
                        <Image src="/client2.png" width={600} height={600} className='w-full h-full object-cover' />

                        <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="mb-2">
                                <Image src="/clogo2.png" width={150} height={150} alt="Logo" />
                            </div>
                            
                            {/* <button className="mt-2 px-4 py-2 bg-white text-black rounded-full">
                                hello
                            </button> */}
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative group w-full h-full">
                        <Image src="/client3.png" width={600} height={600} className='w-full h-full object-cover' />

                        <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="mb-2">
                                <Image src="/clogo3.png" width={150} height={150} alt="Logo" />
                            </div>
                            
                            {/* <button className="mt-2 px-4 py-2 bg-white text-black rounded-full">
                                hello
                            </button> */}
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative group w-full h-full">
                        <Image src="/client4.png" width={600} height={600} className='w-full h-full object-cover' />

                        <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="mb-2">
                                <Image src="/clogo4.png" width={150} height={150} alt="Logo" />
                            </div>
                            
                            {/* <button className="mt-2 px-4 py-2 bg-white text-black rounded-full">
                                hello
                            </button> */}
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative group w-full h-full">
                        <Image src="/client5.png" width={600} height={600} className='w-full h-full object-cover' />

                        <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="mb-2">
                                <Image src="/clogo5.png" width={150} height={150} alt="Logo" />
                            </div>
                            
                            {/* <button className="mt-2 px-4 py-2 bg-white text-black rounded-full">
                                hello
                            </button> */}
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative group w-full h-full">
                        <Image src="/client6.png" width={600} height={600} className='w-full h-full object-cover' />

                        <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="mb-2">
                                <Image src="/clogo6.png" width={150} height={150} alt="Logo" />
                            </div>
                            
                            {/* <button className="mt-2 px-4 py-2 bg-white text-black rounded-full">
                                hello
                            </button> */}
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative group w-full h-full">
                        <Image src="/client7.png" width={600} height={600} className='w-full h-full object-cover' />

                        <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="mb-2">
                                <Image src="/clogo7.png" width={150} height={150} alt="Logo" />
                            </div>
                            
                            {/* <button className="mt-2 px-4 py-2 bg-white text-black rounded-full">
                                hello
                            </button> */}
                        </div>
                    </div>
                </SwiperSlide>









            </Swiper>


        </>
    );
}
