import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  UsersIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const GlobalPresence = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [officesRef, officesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formRef, formInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const [selectedOffice, setSelectedOffice] = useState('india');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    office: 'india',
    projectType: '',
    message: ''
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const offices = [
    {
      id: 'india',
      country: 'India',
      city: 'Mumbai & Bangalore',
      address: {
        mumbai: 'Tech Park, Bandra Kurla Complex, Mumbai, Maharashtra 400051',
        bangalore: 'Technology Hub, Electronic City, Bangalore, Karnataka 560100'
      },
      phone: '+91 22 6789 0123',
      email: 'india@horizon-international.com',
      timezone: 'IST (UTC+5:30)',
      specialties: [
        'Software Development & Engineering',
        'Quality Engineering & Testing',
        'DevOps & Cloud Infrastructure',
        'Data Analytics & AI/ML Development',
        'Project Management & Delivery'
      ],
      headcount: '150+ professionals',
      established: '2005',
      certifications: ['CMMI Level 3', 'ISO 27001', 'SOC 2'],
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-50',
      icon: '🇮🇳'
    },
    {
      id: 'uk',
      country: 'United Kingdom',
      city: 'London',
      address: {
        main: 'Canary Wharf Financial District, London E14 5AB'
      },
      phone: '+44 20 1234 5678',
      email: 'uk@horizon-international.com',
      timezone: 'GMT/BST (UTC+0/+1)',
      specialties: [
        'Strategic Consulting & Business Analysis',
        'Client Relationship Management',
        'Appian Platform Implementation',
        'Regulatory Compliance & Risk Management',
        'Financial Services Domain Expertise'
      ],
      headcount: '80+ professionals',
      established: '2008',
      certifications: ['CMMI Level 3', 'GDPR Compliant', 'Financial Services Certified'],
      color: 'from-forest-600 to-forest-700',
      bgColor: 'bg-emerald-100',
      icon: '🇬🇧'
    },
    {
      id: 'romania',
      country: 'Romania',
      city: 'Bucharest',
      address: {
        main: 'Business District, Floreasca, Bucharest 014461'
      },
      phone: '+40 21 123 4567',
      email: 'romania@horizon-international.com',
      timezone: 'EET (UTC+2)',
      specialties: [
        'Advanced Software Development',
        'Data Science & Machine Learning',
        'AI/ML Model Development',
        'Cybersecurity & Risk Assessment',
        'Research & Development'
      ],
      headcount: '120+ professionals',
      established: '2012',
      certifications: ['CMMI Level 3', 'ISO 27001', 'AI Ethics Certified'],
      color: 'from-emerald-600 to-forest-500',
      bgColor: 'bg-emerald-50',
      icon: '🇷🇴'
    }
  ];

  const currentOffice = offices.find(office => office.id === selectedOffice);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleOfficeSelect = (officeId) => {
    setSelectedOffice(officeId);
    setFormData(prev => ({
      ...prev,
      office: officeId
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      office: selectedOffice,
      projectType: '',
      message: ''
    });
    alert('Thank you for your inquiry! We will contact you within 24 hours.');
  };

  const globalStats = [
    { number: '3', label: 'Global Offices' },
    { number: '350+', label: 'Total Team Members' },
    { number: '25+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Coverage' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section ref={heroRef} className="section-padding bg-emerald-gradient">
        <div className="pt-20 container-custom text-center">
          <motion.div
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-white mb-6"
            >
              Global Presence, Local Excellence
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-emerald-100 mb-8"
            >
              Strategically located across three continents to provide 24/7 coverage, cultural alignment, and enterprise-grade security for our clients worldwide.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Global Stats */}
      <section className="section-padding bg-gradient-to-br from-emerald-50 to-emerald-100">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {globalStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-poppins font-bold text-emerald-700 mb-2">
                  {stat.number}
                </div>
                <div className="text-emerald-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Offices Section */}
      <section ref={officesRef} className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            animate={officesInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-poppins font-bold text-emerald-700 mb-6"
            >
              Our Global Offices
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-emerald-600 max-w-3xl mx-auto"
            >
              Each location offers unique expertise and cultural insights, enabling us to deliver solutions that understand local business needs while maintaining global standards.
            </motion.p>
          </motion.div>

          {/* Office Selection */}
          <motion.div
            initial="hidden"
            animate={officesInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="flex flex-col lg:flex-row gap-8"
          >
            {/* Office Tabs */}
            <div className="lg:w-1/3">
              <div className="space-y-4">
                {offices.map((office) => (
                  <motion.button
                    key={office.id}
                    variants={fadeInUp}
                    onClick={() => handleOfficeSelect(office.id)}
                    className={`w-full text-left p-6 rounded-xl transition-all duration-200 ${
                      selectedOffice === office.id
                        ? `${office.bgColor} border-2 border-emerald-500 shadow-lg`
                        : 'bg-gradient-to-br from-emerald-50 to-emerald-100 hover:from-emerald-100 hover:to-emerald-200 border border-emerald-200'
                    }`}
                  >
                    <div className="flex items-center mb-3">
                      <span className="text-2xl mr-3">{office.icon}</span>
                      <div>
                        <h3 className="font-poppins font-bold text-emerald-700 text-lg">
                          {office.country}
                        </h3>
                        <p className="text-emerald-600 text-sm">{office.city}</p>
                      </div>
                    </div>
                    <div className="flex items-center text-emerald-500 text-sm">
                      <ClockIcon className="h-4 w-4 mr-2" />
                      {office.timezone}
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Office Details */}
            <div className="lg:w-2/3">
              {currentOffice && (
                <motion.div
                  key={currentOffice.id}
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                  className="bg-white rounded-2xl shadow-xl p-8 border border-emerald-100"
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${currentOffice.color} rounded-xl flex items-center justify-center mr-4 shadow-gold`}>
                      <span className="text-2xl">{currentOffice.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-poppins font-bold text-emerald-700">
                        {currentOffice.country}
                      </h3>
                      <p className="text-emerald-600">{currentOffice.city}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="font-poppins font-semibold text-emerald-700 mb-3">Contact Information</h4>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <MapPinIcon className="h-5 w-5 text-emerald-500 mr-3 mt-0.5" />
                          <div className="text-emerald-600 text-sm">
                            {currentOffice.address.mumbai && (
                              <div className="mb-2">
                                <strong>Mumbai:</strong><br />
                                {currentOffice.address.mumbai}
                              </div>
                            )}
                            {currentOffice.address.bangalore && (
                              <div className="mb-2">
                                <strong>Bangalore:</strong><br />
                                {currentOffice.address.bangalore}
                              </div>
                            )}
                            {currentOffice.address.main && (
                              <div>
                                <strong>Main Office:</strong><br />
                                {currentOffice.address.main}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center text-emerald-600">
                          <PhoneIcon className="h-5 w-5 text-emerald-500 mr-3" />
                          {currentOffice.phone}
                        </div>
                        <div className="flex items-center text-emerald-600">
                          <EnvelopeIcon className="h-5 w-5 text-emerald-500 mr-3" />
                          {currentOffice.email}
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-poppins font-semibold text-emerald-700 mb-3">Office Details</h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center">
                          <UsersIcon className="h-5 w-5 text-emerald-500 mr-3" />
                          <span className="text-emerald-600">{currentOffice.headcount}</span>
                        </div>
                        <div className="flex items-center">
                          <ClockIcon className="h-5 w-5 text-emerald-500 mr-3" />
                          <span className="text-emerald-600">Established {currentOffice.established}</span>
                        </div>
                        <div className="flex items-start">
                          <CheckCircleIcon className="h-5 w-5 text-emerald-500 mr-3 mt-0.5" />
                          <div>
                            <div className="text-emerald-600">Certifications:</div>
                            {currentOffice.certifications.map((cert, index) => (
                              <span key={index} className="inline-block bg-emerald-100 text-emerald-700 text-xs px-2 py-1 rounded mr-1 mt-1">
                                {cert}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-poppins font-semibold text-emerald-700 mb-4">Specialties & Expertise</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {currentOffice.specialties.map((specialty, index) => (
                        <div key={index} className="flex items-center text-emerald-600">
                          <CheckCircleIcon className="h-5 w-5 text-emerald-500 mr-3" />
                          {specialty}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Inquiry Form */}
      <section ref={formRef} className="section-padding bg-gradient-to-br from-emerald-50 to-emerald-100">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            animate={formInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-emerald-700 mb-6">
                Start Your Project
              </h2>
              <p className="text-xl text-emerald-600">
                Ready to discuss your strategic technology needs? Connect with our global team for a consultation.
              </p>
            </motion.div>

            <motion.form
              variants={fadeInUp}
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 border border-emerald-100"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-emerald-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-emerald-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-emerald-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-emerald-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="your.email@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-emerald-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-emerald-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="office" className="block text-sm font-medium text-emerald-700 mb-2">
                    Preferred Office *
                  </label>
                  <select
                    id="office"
                    name="office"
                    required
                    value={formData.office}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-emerald-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  >
                    {offices.map((office) => (
                      <option key={office.id} value={office.id}>
                        {office.country} - {office.city}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="projectType" className="block text-sm font-medium text-emerald-700 mb-2">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-emerald-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  >
                    <option value="">Select project type</option>
                    <option value="appian">Appian Implementation</option>
                    <option value="python">Python Development</option>
                    <option value="automation">Process Automation</option>
                    <option value="integration">System Integration</option>
                    <option value="data">Data Analytics</option>
                    <option value="ai">AI/ML Solutions</option>
                    <option value="consulting">Strategic Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-emerald-700 mb-2">
                    Project Description *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-emerald-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Please describe your project requirements, timeline, and any specific challenges you're facing..."
                  />
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="btn-gold group"
                >
                  Send Inquiry
                  <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-sm text-emerald-500 mt-4">
                  We typically respond within 24 hours. For urgent matters, please call your nearest office directly.
                </p>
              </div>
            </motion.form>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-emerald-gradient">
        <div className="container-custom text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
              Experience Global Excellence
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Our global presence ensures you always have access to the right expertise, at the right time, with the cultural understanding your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="btn-gold"
              >
                Contact Us Today
              </a>
              <a
                href="/case-studies"
                className="btn-outline border-emerald-200 text-white hover:bg-white hover:text-emerald-700 hover:border-white"
              >
                View Success Stories
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GlobalPresence;