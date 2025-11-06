import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  GlobeAltIcon 
} from '@heroicons/react/24/outline';
import logo from '../../assets/HIIL LOGO.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const offices = [
    {
      country: 'India',
      city: 'Mumbai',
      address: 'Tech Park, Bandra Kurla Complex',
      phone: '+91 22 6789 0123'
    },
    {
      country: 'United Kingdom',
      city: 'London',
      address: 'Canary Wharf Financial District',
      phone: '+44 20 1234 5678'
    },
    {
      country: 'Romania',
      city: 'Bucharest',
      address: 'Business District, Floreasca',
      phone: '+40 21 123 4567'
    }
  ];

  const legalLinks = [
    { name: 'Carbon Reduction Plan', href: '/carbon-reduction' },
    { name: 'Modern Slavery Statement', href: '/modern-slavery' },
    { name: 'Social Value Statement', href: '/social-value' },
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Industries', href: '/industries' },
    { name: 'Insights', href: '/insights' },
    { name: 'About', href: '/about' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="bg-emerald-gradient text-white">
      <div className="container-custom section-padding">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <img src={logo} alt="Logo" className="w-auto h-12" />
              <div className="flex flex-col">
                <span className="font-bold text-xl">Horizon International</span>
                <span className="text-sm text-emerald-100">Strategic Technology Solutions</span>
              </div>
            </div>
            <p className="text-emerald-100 mb-6 leading-relaxed">
              Helping mid-market enterprises solve complex modernization, automation, and integration challenges with enterprise-grade execution.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center text-sm text-emerald-100">
                <GlobeAltIcon className="h-4 w-4 mr-2" />
                <span>CMMI Level 3 Certified</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-emerald-100 hover:text-gold-200 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Global Offices */}
          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-lg mb-6">Global Offices</h3>
            <div className="space-y-4">
              {offices.map((office) => (
                <div key={office.country} className="text-sm">
                  <div className="font-medium text-white mb-1">
                    {office.city}, {office.country}
                  </div>
                  <div className="text-emerald-200 text-xs leading-relaxed">
                    {office.address}
                  </div>
                  <div className="text-gold-200 text-xs mt-1 flex items-center">
                    <PhoneIcon className="h-3 w-3 mr-1" />
                    {office.phone}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-lg mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-white mb-2">General Inquiries</h4>
                <div className="text-emerald-100 text-sm flex items-center">
                  <EnvelopeIcon className="h-4 w-4 mr-2" />
                  info@horizon-international.com
                </div>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2">Partnership Opportunities</h4>
                <div className="text-emerald-100 text-sm flex items-center">
                  <EnvelopeIcon className="h-4 w-4 mr-2" />
                  partnerships@horizon-international.com
                </div>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2">Careers</h4>
                <div className="text-emerald-100 text-sm flex items-center">
                  <EnvelopeIcon className="h-4 w-4 mr-2" />
                  careers@horizon-international.com
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <Link
                to="/contact"
                className="btn-gold text-sm px-6 py-2"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          className="border-t border-emerald-400 mt-12 pt-8"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-emerald-100 text-sm">
              © {currentYear} Horizon Industries International Limited. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-emerald-100 hover:text-gold-200 transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;