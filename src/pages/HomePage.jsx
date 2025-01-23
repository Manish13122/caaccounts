import React from "react";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center h-[60vh] bg-contain rounded-3xl bg-center text-white animate-zoomOut mx-auto mt-2 overflow-hidden"
        style={{
          backgroundImage: `url('main.png')`,
          width: "90%", // Ensure the path is correct
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-5xl font-bold animate-slideIn">
            Welcome to EliteCA
          </h1>
          <p className="mt-4 text-base sm:text-xl animate-slideIn delay-500">
            Your trusted platform for connecting with the best Chartered Accountants worldwide.
          </p>
          <NavLink
            to="/about"
            className="inline-block mt-6 px-6 py-3 sm:px-8 sm:py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all animate-bounceIn delay-1000"
          >
            Learn More
          </NavLink>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-8" style={{ width: "85%" }}>
          <h2 className="text-center text-2xl sm:text-3xl font-bold mb-6">Our Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[{
              title: "Certified Professionals",
              text: "We ensure that all our listed CAs are certified and highly qualified to handle your financial needs.",
              icon: "✅",
            },
            {
              title: "Personalized Matches",
              text: "Get matched with a Chartered Accountant that suits your specific requirements and preferences.",
              icon: "🔍",
            },
            {
              title: "Secure Platform",
              text: "Your data is safe with us. We prioritize security and confidentiality in all our interactions.",
              icon: "🔒",
            }].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-gray-100 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300 hover:bg-gray-200 animate-slideIn"
                style={{
                  animation: `zoomOut 0.5s ease-out ${index * 0.2}s`,
                }}
              >
                <div className="text-4xl text-blue-500 mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-black text-lg mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-8" style={{ width: "85%" }}>
          <h2 className="text-center text-2xl sm:text-3xl font-bold mb-6">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[{
              title: "Tax Consulting",
              text: "Expert advice on tax planning and compliance to help you minimize your tax liabilities.",
              image: "/m1.jpg", 
            },
            {
              title: "Audit & Assurance",
              text: "Comprehensive audit and assurance services to ensure your financial statements are accurate.",
              image: "/m2.jpg", 
            },
            {
              title: "Financial Planning",
              text: "Personalized financial planning services to help you achieve your financial goals.",
              image: "/m3.jpg", 
            }].map((service, index) => (
              <div
                key={index}
                className="p-6 bg-gray-100 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300 hover:bg-gray-200 animate-slideIn"
                style={{
                  animation: `zoomOut 0.5s ease-out ${index * 0.2}s`,
                }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-lg mb-4 w-full h-40 object-cover"
                />
                <h3 className="font-bold text-black text-lg mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-8" style={{ width: "85%" }}>
          <h2 className="text-center text-2xl sm:text-3xl font-bold mb-6">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[{
              name: "John Doe",
              feedback: "EliteCA connected me with an amazing CA who helped me sort out my taxes seamlessly. Highly recommend!",
            },
            {
              name: "Jane Smith",
              feedback: "The platform is easy to use, and the CAs I’ve worked with were very professional and knowledgeable.",
            },
            {
              name: "Rahul Mehta",
              feedback: "A reliable service that made finding a trustworthy CA a hassle-free experience for my small business.",
            }].map((testimonial, index) => (
              <div
                key={index}
                className="p-6 bg-gray-100 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300 hover:bg-gray-200 animate-slideIn"
                style={{
                  animation: `zoomOut 0.5s ease-out ${index * 0.2}s`,
                }}
              >
                <p className="italic text-gray-700 mb-4">
                  "{testimonial.feedback}"
                </p>
                <h4 className="font-bold text-lg text-blue-500">
                  {testimonial.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 rounded-lg mx-4 my-2">
        <div className="container mx-auto px-4 sm:px-8" style={{ width: "85%" }}>
          <h2 className="text-center text-white text-2xl sm:text-3xl font-bold mb-6 animate-fadeInUp">
            Our Leadership Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[{
              name: "Sophia Bennett",
              role: "Founder & Visionary",
              image: "/p1.jpg", // Ensure the path is correct
              description: "Driven leader with a passion for innovation and growth.",
            },
            {
              name: "Ethan Carter",
              role: "Head of Technology",
              image: "/p2.jpg", // Ensure the path is correct
              description: "Technology strategist with expertise in AI and systems.",
            },
            {
              name: "Olivia Thompson",
              role: "Chief Operations Officer",
              image: "/p3.jpg", // Ensure the path is correct
              description: "Operational expert ensuring efficiency and success.",
            }].map((teamMember, index) => (
              <div
                key={index}
                className="relative p-4 bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl animate-fadeIn"
                style={{
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                <div className="relative overflow-hidden rounded-full w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-4 group">
                  <img
                    src={teamMember.image}
                    alt={teamMember.name}
                    className="w-full h-full object-cover rounded-full transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white text-center text-sm px-4">
                      {teamMember.description}
                    </p>
                  </div>
                </div>

                <h3 className="font-bold text-lg mb-2 text-center text-gray-800">
                  {teamMember.name}
                </h3>
                <p className="text-gray-600 text-center">{teamMember.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-8" style={{ width: "85%" }}>
          <h2 className="text-center text-2xl sm:text-3xl font-bold mb-6">
            Insights & Articles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[{
              title: "How to Choose the Right Chartered Accountant",
              image: "/t1.jpg", 
              description: "Choosing the right CA is crucial. Here’s how to make the best decision for your financial needs.",
              hoverInfo: "Learn about different CA specialties and how to choose based on your specific needs.",
            },
            {
              title: "Tax Planning Tips for Small Businesses",
              image: "/t2.jpg", 
              description: "Small businesses need tailored tax planning to maximize savings. Learn the best strategies.",
              hoverInfo: "Get expert tips on tax deductions, credits, and how to minimize liabilities.",
            },
            {
              title: "Understanding Audit Reports",
              image: "/t3.jpg",
              description: "Audit reports can seem complicated, but understanding them is key. This guide will help you.",
              hoverInfo: "Learn how to interpret financial audit reports and understand their impact on your business.",
            }].map((article, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300 hover:bg-gray-200 animate-slideIn"
                style={{
                  animation: `zoomOut 0.5s ease-out ${index * 0.2}s`,
                }}
              >
                {/* Image Container with Consistent Size and Hover Effect */}
                <div className="relative mb-4 w-full h-48 sm:h-56 group">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="object-cover w-full h-full rounded-lg transition-all duration-300"
                  />
                  {/* Hover Info (hidden until hover) */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white text-center text-sm p-4">
                      {article.hoverInfo}
                    </p>
                  </div>
                </div>

                {/* Article Title */}
                <h3 className="font-bold text-lg mb-3 text-black">
                  {article.title}
                </h3>

                {/* Article Description */}
                <p className="text-gray-600 text-base mb-4" style={{ height: '4.5rem', overflow: 'hidden' }}>
                  {article.description}
                </p>

                {/* Read More Link */}
                <NavLink
                  to="/articles"
                  className="inline-block mt-4 text-blue-600 hover:text-blue-800"
                >
                  Read More
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
<section className="py-12 mx-5 my-4 rounded-xl">
  <div className="container mx-auto px-4 text-center" style={{ width: "65%" }}>
    <h2 className="text-2xl sm:text-3xl text-white font-bold mb-6">Stay Updated</h2>
    <p className="text-gray-600 mb-6">
      Subscribe to our newsletter for the latest updates and tips.
    </p>
    <form className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
      <input
        type="email"
        placeholder="Enter your email"
        className="p-4 rounded-lg border text-black border-gray-300 w-full sm:w-80"
      />
      <button
        type="submit"
        className="px-6 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all"
      >
        Subscribe
      </button>
    </form>
  </div>
</section>

    </>
  );
};

export default HomePage;
