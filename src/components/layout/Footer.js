import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'About', href: '#' },
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
    { label: 'Contact', href: '#' },
  ];

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-50 border-t border-gray-200"
    >
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <motion.h3 
              whileHover={{ scale: 1.05 }}
              className="text-xl font-semibold text-blue-600"
            >
              SaaS Tools
            </motion.h3>
            <p className="mt-4 text-gray-500 max-w-md">
              Professional tools for freelancers and businesses. Generate proposals and sign contracts with ease.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Quick Links
              </h3>
              <ul className="mt-4 space-y-4">
                {footerLinks.map((link) => (
                  <motion.li 
                    key={link.label}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <a href={link.href} className="text-gray-500 hover:text-blue-600">
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Connect
              </h3>
              <div className="mt-4 flex space-x-6">
                {/* Social Media Icons */}
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  href="#"
                  className="text-gray-400 hover:text-blue-600"
                >
                  <span className="sr-only">Twitter</span>
                  <i className="fab fa-twitter text-xl"></i>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  href="#"
                  className="text-gray-400 hover:text-blue-600"
                >
                  <span className="sr-only">LinkedIn</span>
                  <i className="fab fa-linkedin text-xl"></i>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  href="#"
                  className="text-gray-400 hover:text-blue-600"
                >
                  <span className="sr-only">GitHub</span>
                  <i className="fab fa-github text-xl"></i>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-400">
            © {currentYear} SaaS Tools. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
