import React from 'react'
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <footer className="w-full bg-gray-800 bg-opacity-90 font-Parkinsans text-white py-6">
        <div className="container mx-auto px-4">
          {/* Footer Top Section: Navigation Links */}
          <div className="flex justify-center space-x-8 mb-4">
            <NavLink to="/" className="hover:text-blue-400 transition-colors">Home</NavLink>
            <NavLink to="/about" className="hover:text-blue-400 transition-colors">About</NavLink>
            <NavLink to="/profile" className="hover:text-blue-400 transition-colors">Profiles</NavLink>
            <NavLink to="/contact" className="hover:text-blue-400 transition-colors">Contact Us</NavLink>
          </div>

          {/* Footer Middle Section: Social MediNavLink Links */}
          <div className="flex justify-center space-x-6 mb-4">
            <NavLink to="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              <i className="fab fa-linkedin fa-lg"></i>
            </NavLink>
            <NavLink to="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              <i className="fab fa-twitter fa-lg"></i>
            </NavLink>
            <NavLink to="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              <i className="fab fa-facebook fa-lg"></i>
            </NavLink>
            <NavLink to="mailto:info@eliteca.com" className="text-blue-600 hover:text-blue-800">
              <i className="fas fa-envelope fa-lg"></i>
            </NavLink>
          </div>

          {/* Footer Bottom Section: Copyright and Additional Info */}
          <div className="text-center mt-4">
            <p>&copy; 2025 EliteCA. All rights reserved.</p>
            <p className="text-sm mt-2">
              Designed with <span className="text-red-500">&hearts;</span> by EliteCNavLink Team
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer;
