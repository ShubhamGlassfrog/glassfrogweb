"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

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

  useEffect(() => {
    // Load Razorpay script
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.email) tempErrors.email = "Email is required";
    if (!formData.phone) tempErrors.phone = "Phone number is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleRazorpay = async (order) => {
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Public key from Razorpay
      amount: order.amount,
      currency: order.currency,
      name: "Glassfrog Technologies",
      description: "Audit Site",
      order_id: order.id,
      handler: function (response) {
        setSuccessMessage(
          "Payment is successful, our team will send a report to your registered email ID."
        );
        setErrorMessage("");
      },
      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.phone,
      },
      theme: {
        color: "#F37254",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      setIsSubmitting(true);
      try {
        // Create the order via API route
        const orderResponse = await axios.post("/api/razorpay", {
          amount: 100, // amount in INR
          currency: "INR",
        });

        const order = orderResponse.data;

        // Open Razorpay payment gateway
        await handleRazorpay(order);

        setFormData({
          name: "",
          email: "",
          phone: "",
          website: "",
        });
        setIsSubmitting(false);
      } catch (error) {
        console.error("Error creating Razorpay order:", error);
        setErrorMessage("Failed to create order. Please try again.");
        setIsSubmitting(false);
      }
    }
  };

  return (
    <>
     
      <head>
         <title>Site Audit - Glassfrog Technologies</title>
<meta name="description" content=" Best search engine optimization agency and digital marketing ad agency in London, Glassfrog Technologies for Site Audit and get a comprehensive analysis."/>
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
        {/* Background Image */}
        <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/siteaudit.png"
          alt="Site Audit"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-70 px-4 pt-10">
          <div className="container relative flex flex-col md:flex-row items-center justify-center h-full gap-8">
            <div className="w-full md:w-1/2">
              <h1 className="text-white text-3xl md:text-4xl font-bold mb-10">
                THRIVING BUSINESSES WITH TECHNICAL EXCELLENCE
              </h1>
              <h3 className="text-[#ed2998] text-2xl md:text-3xl font-bold mb-2">
                How are your websites really performing?
              </h3>
              <p className="text-white mb-4">
              Get an extensive audit finished within a few minutes for <br /> <span className="font-bold">Rs. 100</span>. No hidden charges. The audit report will be delivered to your registered email. Enjoy a complimentary consultation at no extra cost.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <form onSubmit={handleSubmit} className="space-y-6 w-full">
                {/* Form Fields */}
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
