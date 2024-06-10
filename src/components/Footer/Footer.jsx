"use client"
import React, { useState } from 'react'
import { FaFacebookF, FaLinkedinIn, FaInstagram,FaSpinner } from 'react-icons/fa';
import axios from 'axios';



const Footer = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Set loading state to true when the form is submitted

    try {
      const response = await axios.post('https://sea-turtle-app-sm5l4.ondigitalocean.app/api/sendMail/glassfrog', { email });

      if (response.status === 200) {
        setSuccess('Subscription successful!');
        setEmail('');
        setError('');
      } else {
        setError('Subscription failed. Please try again.');
      }
    } catch (error) {
      setError('Subscription failed. Please try again.');
    }

    setLoading(false); // Set loading state to false after the request is completed
  };

    return (
        <>



            <footer className="bg-white pt-16 pb-16">
                <div className=" w-full max-w-7xl mx-auto px-4">
                    <div className="md:flex md:justify-between">
                        <div className="mb-6 md:mb-0 w-full md:w-2/4 sm:w-2/4">
                         
                            
                             <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-1 ">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl ">SUBSCRIBE NOW!</h2>
            <p className="mt-4 text-lg leading-8 text-slate-950">
             Subscribe to our newsletter to stay in touch with the latest.
            </p>
              <form onSubmit={handleSubmit} className="mt-6 flex max-w-md gap-x-4">
        <label htmlFor="email-address" className="sr-only">
          Email address
        </label>
        <input
          id="email-address"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="min-w-0 flex-auto rounded-md border-0  px-3.5 py-2 text-slate-950 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-slate-950 sm:text-sm sm:leading-6"
          placeholder="Enter your email"
        />
        <button
          type="submit"
          className="flex-none rounded-md bg-slate-950 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-950"
        >
           {loading ? (
            <FaSpinner className="animate-spin mr-2" />
          ) : (
            'Subscribe'
          )}
        </button>
      </form>
      {error && <p className="mt-4 text-red-500">{error}</p>}
      {success && <p className="mt-4 text-green-500">{success}</p>}
                                </div>
                                </div>
                            <img src="/logo.svg" className="h-32 me-3 overflow-hidden" alt="Glassfrog Logo" style={{marginLeft:"-30px !important"}}/>
                        </div>
                        <div className="flex w-full md:w-2/4 sm:w-2/4">
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