"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

export default function App() {
    return (
        <>
            <div className='bg-slate-950'>
                <Swiper
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide><section className="bg-slate-950 pt-48">
                        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                            <figure className="max-w-screen-md mx-auto">
                                <svg className="h-12 mx-auto mb-3 text-white " viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
                                </svg>
                                <blockquote>
                                    <p className="text-2xl font-medium text-white ">"The advanced technology solutions have significantly enhanced our academy's efficiency and educational quality. Their impact is truly transformative."</p>
                                </blockquote>
                                <figcaption className="flex items-center justify-center mt-6 space-x-3">
                                    <div className="flex items-center divide-x-2 divide-gray-500 ">
                                        <div className="pr-3 font-medium text-white ">Col Praneet Dangwal</div>
                                        <div className="pl-3 text-sm font-light text-white ">Founder @Rantraacademy</div>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    </section></SwiperSlide>
                    <SwiperSlide><section className="bg-slate-950 pt-48">
                        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                            <figure className="max-w-screen-md mx-auto">
                                <svg className="h-12 mx-auto mb-3 text-white " viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
                                </svg>
                                <blockquote>
                                    <p className="text-2xl font-medium text-white ">"Working with Glassfrog Technologies has been an absolute pleasure. Their attention to detail, professionalism, and commitment to delivering high-quality results have exceeded our expectations. We really appreciate Glassfrog Technologies for their outstanding work and looking forward to future collaborations."</p>
                                </blockquote>
                                <figcaption className="flex items-center justify-center mt-6 space-x-3">
                                    <div className="flex items-center divide-x-2 divide-gray-500 ">
                                        <div className="pr-3 font-medium text-white ">Khalil Kothlani</div>
                                        <div className="pl-3 text-sm font-light text-white ">Founder @moaiconsulting</div>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    </section></SwiperSlide>
                    <SwiperSlide><section className="bg-slate-950 pt-48">
                        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                            <figure className="max-w-screen-md mx-auto">
                                <svg className="h-12 mx-auto mb-3 text-white " viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
                                </svg>
                                <blockquote>
                                    <p className="text-2xl font-medium text-white ">"The CRM system you built for us is fantastic! It's streamlined our customer interactions and made our processes much more efficient. We love how intuitive and effective it is. Thank you for transforming our business operations."</p>
                                </blockquote>
                                <figcaption className="flex items-center justify-center mt-6 space-x-3">
                                    <div className="flex items-center divide-x-2 divide-gray-500 ">
                                        <div className="pr-3 font-medium text-white ">Carmari</div>
                                        <div className="pl-3 text-sm font-light text-white ">Core Member @thefieldsports</div>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    </section></SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}
