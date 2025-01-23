import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="w-full bg-gray-800 bg-opacity-90 font-Parkinsans text-white py-6">
        <div className="container mx-auto px-4">
          {/* Footer Top Section: Navigation Links */}
          <div className="flex justify-center space-x-8 mb-4">
            <a href="/" className="hover:text-blue-400 transition-colors">Home</a>
            <a href="/about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="/profile" className="hover:text-blue-400 transition-colors">Profiles</a>
            <a href="/contact" className="hover:text-blue-400 transition-colors">Contact Us</a>
          </div>

          {/* Footer Middle Section: Social Media Links */}
          <div className="flex justify-center space-x-6 mb-4">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              <i className="fab fa-linkedin fa-lg"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              <i className="fab fa-twitter fa-lg"></i>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              <i className="fab fa-facebook fa-lg"></i>
            </a>
            <a href="mailto:info@eliteca.com" className="text-blue-600 hover:text-blue-800">
              <i className="fas fa-envelope fa-lg"></i>
            </a>
          </div>

          {/* Footer Bottom Section: Copyright and Additional Info */}
          <div className="text-center mt-4">
            <p>&copy; 2025 EliteCA. All rights reserved.</p>
            <p className="text-sm mt-2">
              Designed with <span className="text-red-500">&hearts;</span> by EliteCA Team
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer;
