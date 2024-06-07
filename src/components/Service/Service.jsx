import React from 'react'


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
                          <ul className='flex flex-col gap-5'>
                              <li className=' serli' ><a href=''>Social Media</a></li>
                              <li className=' serli'><a href=''>Creative Studio</a></li>
                              <li className=' serli'><a href=''>Paid Social</a></li>
                              <li className=' serli'><a href=''>Paid Search</a></li>
                              <li className=' serli'><a href=''>Influencer</a></li>
                              <li className=' serli'><a href=''>Community Management</a></li>
                                                           


                      </ul>
                      
                      </div>
                

            </div>

            </div>
             <div className='flex flex-row justify-center py-20 items-center bg-slate-950 pt-10'>
            <div className=" flex flex-col md:flex-row sm:flex-row justify-center items-center container gap-10">
                <div className="relative w-full md:w-1/2 sm:w-1/2 h-full md:h-1/2 sm:h-1/2" style={{height:'43rem'}}>
                    <video autoPlay loop muted className="w-full" style={{height:'90%'}}>
                        <source src="/Website.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                   
                </div>
                <div className="flex flex-col w-full md:w-1/2 sm:w-1/2">
                            <h2 className="about font-extrabold text-white mb-4">
                             TECHNOLOGY
                          </h2>
                          <ul className='flex flex-col gap-5'>
                              <li className=' serli' ><a href=''>Websites</a></li>
                              <li className=' serli'><a href=''>Full stack development</a></li>
                              <li className=' serli'><a href=''>AI Services</a></li>
                              <li className=' serli'><a href=''>System integrations</a></li>
                              <li className=' serli'><a href=''>Automated & manual QA</a></li>
                              <li className=' serli'><a href=''>Solution & hosting architecture</a></li>
                                                            <li className=' serli'><a href=''>Cloud hosting</a></li>
                              <li className=' serli'><a href=''>CRM</a></li>
                              <li className=' serli'><a href=''>Analytics</a></li>


                      </ul>
                      
                      </div>
                

            </div>

        </div>
            </>
    )
}

export default Service

