"use client"
import Footer from '@/components/Footer/Footer'
import React, { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/Header/Header';
import axios from "axios";

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;

    if (id === "name") {
      if (/^[a-zA-Z\s]*$/.test(value)) {
        setFormData({ ...formData, [id]: value });
      }
    } else if (id === "phone") {
      if (/^\d*$/.test(value)) {
        setFormData({ ...formData, [id]: value });
      }
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) {
      tempErrors.name = "Name is required";
    } else if (!/^[a-zA-Z\s]*$/.test(formData.name)) {
      tempErrors.name = "Name can only contain alphabets";
    }

    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }

    if (!formData.phone) {
      tempErrors.phone = "Phone number is required";
    } else if (!/^\d+$/.test(formData.phone)) {
      tempErrors.phone = "Phone number can only contain numbers";
    }

    if (!formData.website) {
      tempErrors.website = "Website URL is required";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      try {
        const response = await axios.post(
          "https://sea-turtle-app-sm5l4.ondigitalocean.app/api/sendMail/glassfrog",
          formData
        );
        if (response.status === 200) {
          setSuccessMessage("Message sent successfully!");
          setErrorMessage("");
          setFormData({
            name: "",
            email: "",
            phone: "",
            website: "",
          });
        }
      } catch (error) {
        setErrorMessage("Failed to send message. Please try again later.");
        setSuccessMessage("");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
      <>
          <head>
              <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=AW-16525280496"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'AW-16525280496');
              `,
            }}
          ></script>
          </head>
      <Header />
      <div className="relative w-full min-h-screen overflow-hidden pt-20">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/siteaudit.png"
          alt="Site Audit"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-70 px-4 pt-10">
          <div className="container relative flex flex-col md:flex-row items-center justify-center h-full gap-8">
            <div className='w-full md:w-1/2'>
              <h1 className="text-white text-3xl md:text-4xl font-bold mb-4">
                THRIVING BUSINESSES WITH TECHNICAL EXCELLENCE
              </h1>
            </div>
            <div className='w-full md:w-1/2'>
              <h3 className='text-white text-2xl md:text-3xl font-bold mb-2'>
                How are your websites really performing?
              </h3>
              <p className='text-white mb-4'>
  Get an extensive audit finished within a few minutes for free. No strings attached.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6 w-full">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="shadow-sm bg-white border border-white text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                    placeholder="John Doe"
                    required
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="shadow-sm bg-white border border-white text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                    placeholder="name@example.com"
                    required
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="shadow-sm bg-white border border-white text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                    placeholder="+1234567890"
                    required
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm">{errors.phone}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="website"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Website URL
                  </label>
                  <input
                    type="text"
                    id="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="shadow-sm bg-white border border-white text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                    placeholder="www.example.com"
                    required
                  />
                  {errors.website && (
                    <p className="text-red-500 text-sm">{errors.website}</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="audit text-white p-3 rounded-lg flex items-center justify-center w-full md:w-auto"
                >
                  {isSubmitting ? (
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.963 7.963 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  ) : (
                    "Audit Site"
                  )}
                </button>
                {successMessage && (
                  <p className="text-green-500 text-sm mt-2">{successMessage}</p>
                )}
                {errorMessage && (
                  <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
