import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';


const Footer = () => {
    return (
        <>



            <footer className="bg-white pt-16 pb-16">
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="md:flex md:justify-between">
                        <div className="mb-6 md:mb-0 w-2/4">
                            <img src="/logo.svg" class="h-32 me-3" alt="Glassfrog Logo" />
                            
                        </div>
                        <div className="flex w-2/4">
                            <div>
                                <h2 className="mb-3 text-sm font-semibold text-gray-900 uppercase ">Location</h2>
                                <ul className="text-gray-500  font-medium">
                                    <li className="mb-4">
                                        <a ><b>India:-</b> ​​Jumpstart Tower, 2nd floor, Haridwar Bypass Rd, opp. Nilaya Hills, Saraswati Vihar, Ajabpur Kalan, Dehradun, Uttarakhand 248001.</a>
                                    </li>
                                    <li className="mb-4">
                                        <a ><b>United Kingdon :-</b> ​27 OLD Gloucester Street, London, United Kingdon WC1N 3AX</a>
                                    </li>
                                    <h2 className="mb-3 mt-6 text-sm font-semibold text-gray-900 uppercase ">Phone</h2>

                                    <li>
                                        <a >+91 9084712335, +91 9084712325</a>
                                    </li>
                                </ul>
                            </div>


                        </div>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="text-sm text-gray-500 sm:text-center ">© 2024 <a href="https://glassfrogtech.com" className="hover:underline">Glassfrog Technology</a>. All Rights Reserved.
                        </span>
                        <div className="flex mt-4 sm:justify-center sm:mt-0 gap-10">
                            

 <a href="https://www.facebook.com/GlassfrogTechnologies" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-500 transition duration-300">
              <FaFacebookF size={24} />
            </a>
            <a href="https://www.linkedin.com/company/glassfrog-technologies/mycompany/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-700 transition duration-300">
              <FaLinkedinIn size={24} />
            </a>
            <a href="https://www.instagram.com/glassfrog_technologies/" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-500 transition duration-300">
              <FaInstagram size={24} />
            </a>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer