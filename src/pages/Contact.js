import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  BuildingOfficeIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const Contact = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formRef, formInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [infoRef, infoInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    timeline: '',
    message: '',
    preferredContact: 'email'
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
        staggerChildren: 0.1
      }
    }
  };

  const contactMethods = [
    {
      icon: EnvelopeIcon,
      title: 'Email Us',
      description: 'Get in touch via email for detailed discussions',
      contact: 'info@horizon-international.com',
      action: 'mailto:info@horizon-international.com',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: PhoneIcon,
      title: 'Call Us',
      description: 'Speak directly with our consultants',
      contact: '+1 (555) 123-4567',
      action: 'tel:+15551234567',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'Live Chat',
      description: 'Chat with our team for quick questions',
      contact: 'Available 24/7',
      action: '#chat',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const offices = [
    {
      country: 'India',
      city: 'Mumbai & Bangalore',
      address: 'Tech Park, Bandra Kurla Complex, Mumbai 400051',
      phone: '+91 22 6789 0123',
      email: 'india@horizon-international.com',
      timezone: 'Mon-Fri, 9:00 AM - 6:00 PM IST',
      color: 'from-orange-500 to-orange-600'
    },
    {
      country: 'United Kingdom',
      city: 'London',
      address: 'Canary Wharf Financial District, London E14 5AB',
      phone: '+44 20 1234 5678',
      email: 'uk@horizon-international.com',
      timezone: 'Mon-Fri, 9:00 AM - 5:30 PM GMT',
      color: 'from-red-500 to-red-600'
    },
    {
      country: 'Romania',
      city: 'Bucharest',
      address: 'Business District, Floreasca, Bucharest 014461',
      phone: '+40 21 123 4567',
      email: 'romania@horizon-international.com',
      timezone: 'Mon-Fri, 9:00 AM - 6:00 PM EET',
      color: 'from-blue-500 to-blue-600'
    }
  ];

  const services = [
    'Appian Platform Implementation',
    'Python Development',
    'Process Automation',
    'System Integration',
    'Data Analytics & AI/ML',
    'Strategic Consulting',
    'Quality Engineering',
    'DevOps & Cloud',
    'Other'
  ];

  const budgetRanges = [
    'Under $50,000',
    '$50,000 - $100,000',
    '$100,000 - $250,000',
    '$250,000 - $500,000',
    '$500,000 - $1,000,000',
    'Over $1,000,000'
  ];

  const timelines = [
    'ASAP (Urgent)',
    'Within 1 month',
    '1-3 months',
    '3-6 months',
    '6-12 months',
    'Beyond 12 months'
  ];

  const faqs = [
    {
      question: 'How quickly can you start a new project?',
      answer: 'Depending on project complexity and resource availability, we can typically initiate projects within 2-4 weeks. Urgent projects may be accelerated through our rapid response team.'
    },
    {
      question: 'Do you work with companies outside your target industries?',
      answer: 'While we specialize in banking, life sciences, insurance, and legal sectors, we do consider projects in other industries that align with our expertise and strategic approach.'
    },
    {
      question: 'What is your typical project engagement model?',
      answer: 'We offer flexible engagement models including fixed-price projects, time & materials, and dedicated team arrangements, depending on project requirements and client preferences.'
    },
    {
      question: 'How do you ensure project quality and delivery?',
      answer: 'Our CMMI Level 3 certification, rigorous quality processes, regular client communications, and experienced project management ensure consistent delivery excellence.'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Contact form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      budget: '',
      timeline: '',
      message: '',
      preferredContact: 'email'
    });
    alert('Thank you for your inquiry! Our team will contact you within 24 hours.');
  };

  return (
    <div>
      {/* Hero Section */}
      <section ref={heroRef} className="section-padding bg-gradient-to-br from-navy-900 to-blue-900">
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
              Let's Start Your Transformation
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-silver-200 mb-8"
            >
              Ready to solve your complex technology challenges? Connect with our global team of experts for a strategic consultation tailored to your enterprise needs.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding bg-silver-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-navy-800 mb-6">
              How Can We Help You?
            </h2>
            <p className="text-xl text-silver-600 max-w-3xl mx-auto">
              Choose the communication method that works best for you. Our team is ready to discuss your strategic technology requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.title}
                href={method.action}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center card-hover group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <method.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-poppins font-bold text-navy-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {method.title}
                </h3>
                <p className="text-silver-600 mb-4">
                  {method.description}
                </p>
                <div className="text-navy-800 font-medium">
                  {method.contact}
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section ref={formRef} className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              animate={formInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="text-center mb-12"
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-4xl font-poppins font-bold text-navy-800 mb-6"
              >
                Project Inquiry Form
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-xl text-silver-600"
              >
                Tell us about your project requirements, and we'll connect you with the right expert within 24 hours.
              </motion.p>
            </motion.div>

            <motion.form
              variants={fadeInUp}
              onSubmit={handleSubmit}
              className="bg-silver-50 rounded-2xl p-8 lg:p-12"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-navy-800 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-silver-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-navy-800 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-silver-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-navy-800 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-silver-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-navy-800 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-silver-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-navy-800 mb-2">
                    Service of Interest *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-silver-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-navy-800 mb-2">
                    Project Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-silver-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-navy-800 mb-2">
                    Project Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-silver-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select timeline</option>
                    {timelines.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="preferredContact" className="block text-sm font-medium text-navy-800 mb-2">
                    Preferred Contact Method
                  </label>
                  <select
                    id="preferredContact"
                    name="preferredContact"
                    value={formData.preferredContact}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-silver-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                    <option value="either">Either</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-navy-800 mb-2">
                    Project Description *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-silver-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Please describe your project requirements, current challenges, expected outcomes, and any specific technologies or methodologies you'd like us to consider..."
                  />
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="btn-primary group"
                >
                  Submit Inquiry
                  <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-sm text-silver-500 mt-4">
                  We respect your privacy and will only use your information to contact you about your inquiry.
                </p>
              </div>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Global Office Information */}
      <section ref={infoRef} className="section-padding bg-silver-50">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            animate={infoInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-poppins font-bold text-navy-800 mb-6"
            >
              Global Office Locations
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-silver-600 max-w-3xl mx-auto"
            >
              Connect with our offices worldwide for local expertise with global standards.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={office.country}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-white p-8 rounded-xl shadow-lg card-hover"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${office.color} rounded-lg flex items-center justify-center mb-6`}>
                  <BuildingOfficeIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-poppins font-bold text-navy-800 mb-2">
                  {office.country}
                </h3>
                <div className="text-silver-600 mb-4 font-medium">
                  {office.city}
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <MapPinIcon className="h-5 w-5 text-silver-500 mr-3 mt-0.5" />
                    <span className="text-silver-600 text-sm">{office.address}</span>
                  </div>
                  <div className="flex items-center">
                    <PhoneIcon className="h-5 w-5 text-silver-500 mr-3" />
                    <a href={`tel:${office.phone}`} className="text-silver-600 hover:text-blue-600">
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <EnvelopeIcon className="h-5 w-5 text-silver-500 mr-3" />
                    <a href={`mailto:${office.email}`} className="text-silver-600 hover:text-blue-600">
                      {office.email}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <ClockIcon className="h-5 w-5 text-silver-500 mr-3" />
                    <span className="text-silver-600 text-sm">{office.timezone}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-navy-800 mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-silver-600">
                Quick answers to common questions about working with Horizon International.
              </p>
            </div>

            <div className="space-y-8">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="bg-silver-50 p-8 rounded-xl"
                >
                  <h3 className="text-xl font-poppins font-semibold text-navy-800 mb-4">
                    {faq.question}
                  </h3>
                  <p className="text-silver-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-navy-900">
        <div className="container-custom text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
              Ready to Begin Your Digital Transformation?
            </h2>
            <p className="text-xl text-silver-200 mb-8">
              Our team of experts is standing by to help you navigate complex technology challenges and drive measurable business outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@horizon-international.com"
                className="btn-primary"
              >
                Start Your Project
              </a>
              <a
                href="/global-presence"
                className="btn-outline border-white text-white hover:bg-white hover:text-navy-900"
              >
                View Global Offices
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;