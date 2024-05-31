"use client"
import Image from 'next/image';
import React from 'react';

const Marquee = () => {
    return (
        <>


            <div className="slider bg-slate-950">
                <div className="slide-track">
                    <div className="slide "><Image src="/cw1.png" width={100} height={100} /></div>
                    <div className="slide "><Image src="/cw2.png" width={100} height={100} /></div>
                    <div className="slide "><Image src="/cw3.png" width={100} height={100} /></div>
                    <div className="slide "><Image src="/cw4.png" width={100} height={100} /></div>
                    <div className="slide "><Image src="/cw5.png" width={100} height={100} /></div>
                    <div className="slide "><Image src="/cw6.png" width={100} height={100} /></div>
                    <div className="slide "><Image src="/cw7.png" width={100} height={100} /></div>
                    <div className="slide "><Image src="/cw8.png" width={100} height={100} /></div>
                    <div className="slide  "><Image src="/cw9.png" width={100} height={100} /></div>
                    <div className="slide "><Image src="/cw1.png" width={100} height={100} /></div>
                    <div className="slide "><Image src="/cw2.png" width={100} height={100} /></div>
                    <div className="slide "><Image src="/cw3.png" width={100} height={100} /></div>
                    <div className="slide "><Image src="/cw4.png" width={100} height={100} /></div>
                    <div className="slide "><Image src="/cw5.png" width={100} height={100} /></div>
                    <div className="slide "><Image src="/cw6.png" width={100} height={100} /></div>
                    <div className="slide "><Image src="/cw7.png" width={100} height={100} /></div>
                    <div className="slide "><Image src="/cw8.png" width={100} height={100} /></div>
                    <div className="slide "><Image src="/cw9.png" width={100} height={100} /></div>
                    <div className="slide "><Image src="/cw1.png" width={100} height={100} /></div>
                    <div className="slide "><Image src="/cw2.png" width={100} height={100} /></div>
                </div>
            </div>



        </>
    );
};

export default Marquee;
