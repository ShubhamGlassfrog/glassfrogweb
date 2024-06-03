"use client"
import React, { useState } from 'react';

const Need = () => {
     const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = 'Name is required';
    if (!formData.email) tempErrors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = 'Email is invalid';
    if (!formData.phone) tempErrors.phone = 'Phone number is required';
    if (!formData.company) tempErrors.company = 'Company name is required';
    if (!formData.subject) tempErrors.subject = 'Subject is required';
    if (!formData.message) tempErrors.message = 'Message is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Form is valid, submit the data
      console.log('Form submitted:', formData);
    }
  };
  return (
     <section className="bg-slate-950 py-16 pt-32">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row sm:flex-col gap-10">
                        {/* First Column */}
                        <div className="   w-full md:w-1/2 sm:w-1/2">
                            <h1 className="   we">Need Help? 
                            </h1><br></br>
                            <h1 className='glassfrog'>LET'S GO</h1>
                            <p className="text-white mb-6">
                                Let’s discuss your goals and challenges over a quick email or call. Enter your details and we’ll be in touch!</p>

                        </div>

                        {/* Second Column */}
                        <div className="flex space-y-8 justify-center gap-16 pt-14 items-center w-full md:w-1/2 sm:w-1/2">


                           <form onSubmit={handleSubmit} className="space-y-8 w-full">
      <div>
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">Your Name</label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={handleChange}
          className="shadow-sm bg-white border border-white text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
          placeholder="John Doe"
          required
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your Email</label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          className="shadow-sm bg-white border border-white text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
          placeholder="name@flowbite.com"
          required
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-white">Phone Number</label>
        <input
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={handleChange}
          className="shadow-sm bg-white border border-white text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
          placeholder="+1234567890"
          required
        />
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
      </div>
      <div>
        <label htmlFor="company" className="block mb-2 text-sm font-medium text-white">Company Name</label>
        <input
          type="text"
          id="company"
          value={formData.company}
          onChange={handleChange}
          className="shadow-sm bg-white border border-white text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
          placeholder="Company Inc."
          required
        />
        {errors.company && <p className="text-red-500 text-sm">{errors.company}</p>}
      </div>
      <div>
        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-white">Subject</label>
        <input
          type="text"
          id="subject"
          value={formData.subject}
          onChange={handleChange}
          className="block p-3 w-full text-sm text-black bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
          placeholder="Let us know how we can help you"
          required
        />
        {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">Your Message</label>
        <textarea
          id="message"
          rows="6"
          value={formData.message}
          onChange={handleChange}
          className="block p-2.5 w-full text-sm text-black bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
          placeholder="Leave a comment..."
          required
        />
        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
      </div>
      <button type="submit" className="enquire ">Send Message</button>
    </form>


                        </div>
                    </div>
                </div>
            </section>
  )
}

export default Need