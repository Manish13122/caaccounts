import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [formSuccess, setFormSuccess] = useState(false);
  const [loading, setLoading] = useState(false); // To show loading spinner

  useEffect(() => {
    AOS.init();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = "Name is required.";
    if (!formData.email) errors.email = "Email is required.";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      errors.email = "Please enter a valid email.";
    if (!formData.message) errors.message = "Message is required.";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      setFormErrors({});
      setFormSuccess(false);
      setLoading(true);

      // Mock backend API call
      setTimeout(() => {
        setFormSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        setLoading(false);
      }, 2000);
    } else {
      setFormErrors(errors);
      setFormSuccess(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center h-[40vh] bg-cover bg-center text-white mx-auto mt-3 transform hover:scale-105 transition duration-500"
        style={{
          backgroundImage: `url('/contact.jpg')`,
          width: "80%",
          borderRadius: "50px",
        }}
      >
        <div className="absolute inset-0 bg-opacity-50"></div>
        <div className="relative z-10 text-black text-center px-4 max-w-md mx-auto">
          <h1 className="text-4xl font-bold mb-4" data-aos="fade-up">
            Contact Us
          </h1>
          <p className="text-lg" data-aos="fade-up" data-aos-delay="200">
            We would love to hear from you. Please fill out the form below to
            get in touch with us.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12" data-aos="fade-up">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-center text-3xl font-bold mb-6">Get in Touch</h2>
          <form
            onSubmit={handleSubmit}
            className="p-8 rounded-lg shadow-lg border border-gray-400 transform hover:scale-105 transition duration-300"
          >
            <div className="mb-4">
              <label
                className="block text-white-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className={`w-full px-3 py-2 border text-black ${
                  formErrors.name ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:outline-none focus:border-blue-500 transition duration-300`}
                value={formData.name}
                onChange={handleChange}
                aria-invalid={formErrors.name ? "true" : "false"}
                aria-describedby="name-error"
                required
              />
              {formErrors.name && (
                <p id="name-error" className="text-red-500 text-xs mt-1">
                  {formErrors.name}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-white-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={`w-full px-3 py-2 text-black border ${
                  formErrors.email ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:outline-none focus:border-blue-500 transition duration-300`}
                value={formData.email}
                onChange={handleChange}
                aria-invalid={formErrors.email ? "true" : "false"}
                aria-describedby="email-error"
                required
              />
              {formErrors.email && (
                <p id="email-error" className="text-red-500 text-xs mt-1">
                  {formErrors.email}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-white-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className={`w-full px-3 py-2 text-black border ${
                  formErrors.message ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:outline-none focus:border-blue-500 transition duration-300`}
                rows="5"
                value={formData.message}
                onChange={handleChange}
                aria-invalid={formErrors.message ? "true" : "false"}
                aria-describedby="message-error"
                required
              ></textarea>
              {formErrors.message && (
                <p id="message-error" className="text-red-500 text-xs mt-1">
                  {formErrors.message}
                </p>
              )}
            </div>
            <div className="text-center mt-6">
              <button
                type="submit"
                className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-700 transition-all transform hover:scale-110"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
          {formSuccess && (
            <p className="text-green-500 text-center mt-4">
              Message sent successfully!
            </p>
          )}
        </div>
      </section>

      {/* Follow Us Section */}
      <section className="py-12" data-aos="fade-up">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Follow Us</h2>
          <p className="text-lg mb-6">Stay connected with us through social media.</p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transform hover:scale-110 hover:rotate-6 transition duration-300"
            >
              <FaFacebookF size={30} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600 transform hover:scale-110 hover:-rotate-6 transition duration-300"
            >
              <FaTwitter size={30} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:text-pink-800 transform hover:scale-110 hover:rotate-6 transition duration-300"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900 transform hover:scale-110 hover:-rotate-6 transition duration-300"
            >
              <FaLinkedinIn size={30} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
