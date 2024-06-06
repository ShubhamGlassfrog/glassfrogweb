import React from 'react'
import Link from 'next/link';
import services from '../../app/services.js';
import webservices from '../../app/webservices.json';


const Service = () => {
    return (
        <>
        <div className='flex flex-row justify-center py-20 items-center bg-slate-950'>
            <div className=" flex flex-col md:flex-row sm:flex-row justify-center items-center container gap-10">
                <div className="relative w-full md:w-1/2 sm:w-1/2 h-full md:h-1/2 sm:h-1/2" style={{height:'43rem'}}>
                    <video autoPlay loop muted className="w-full" style={{height:'90%'}}>
                        <source src="/Marketing.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    
                </div>
                <div className="flex flex-col w-full md:w-1/2 sm:w-1/2">
                            <h2 className="about font-extrabold text-white mb-4">
                             MARKETING
                          </h2>
                          {services.map(service => (
          <li key={service.name} className="serli mb-2 list-none">
            <Link href={`/singleservice/${service.name}`}>
              {service.title}
            </Link>
          </li>
        ))}
                      
                      </div>
                

            </div>

            </div>
             <div className='flex flex-row justify-center py-20 items-center bg-slate-950 pt-10'>
            <div className=" flex flex-col md:flex-row sm:flex-row justify-center items-center container gap-10">
                <div className="relative w-full  md:w-1/2 sm:w-1/2 h-full md:h-1/2 sm:h-1/2" style={{height:'43rem'}}>
                    <video autoPlay loop muted className="w-full" style={{height:'90%'}}>
                        <source src="/Website.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                   
                </div>
                <div className="flex flex-col w-full md:w-1/2 sm:w-1/2">
                            <h2 className="about font-extrabold text-white mb-4">
                             TECHNOLOGY
                          </h2>
                          {webservices.map(service => (
          <li key={service.name} className="serli mb-2 list-none">
            <Link href={`/Singleservice/${service.name}`}>
              {service.title}
            </Link>
          </li>
        ))}
                      
                      </div>
                

            </div>

        </div>
            </>
    )
}

export default Service

