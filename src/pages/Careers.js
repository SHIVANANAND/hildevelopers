import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  BriefcaseIcon,
  GlobeAltIcon,
  AcademicCapIcon,
  ClockIcon,
  CurrencyDollarIcon,
  HeartIcon,
  UsersIcon,
  ChartBarIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const Careers = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [cultureRef, cultureInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [rolesRef, rolesInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const [selectedCategory, setSelectedCategory] = useState('all');

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

  const benefits = [
    {
      icon: GlobeAltIcon,
      title: 'Global Opportunities',
      description: 'Work across our offices in India, UK, and Romania with 24/7 collaboration.'
    },
    {
      icon: AcademicCapIcon,
      title: 'Continuous Learning',
      description: 'Access to training programs, certifications, and cutting-edge technology training.'
    },
    {
      icon: CurrencyDollarIcon,
      title: 'Competitive Compensation',
      description: 'Attractive salary packages, performance bonuses, and comprehensive benefits.'
    },
    {
      icon: HeartIcon,
      title: 'Work-Life Balance',
      description: 'Flexible working arrangements, remote options, and generous leave policies.'
    },
    {
      icon: UsersIcon,
      title: 'Collaborative Culture',
      description: 'Work with diverse, talented teams across multiple time zones and cultures.'
    },
    {
      icon: ChartBarIcon,
      title: 'Career Growth',
      description: 'Clear advancement paths, mentorship programs, and leadership development.'
    }
  ];

  const values = [
    {
      icon: LightBulbIcon,
      title: 'Innovation',
      description: 'We constantly push boundaries to deliver cutting-edge solutions that transform businesses.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Excellence',
      description: 'CMMI Level 3 certification reflects our commitment to quality and process excellence.'
    },
    {
      icon: UsersIcon,
      title: 'Collaboration',
      description: 'Global teamwork across diverse cultures and expertise areas drives our success.'
    },
    {
      icon: HeartIcon,
      title: 'Integrity',
      description: 'Trust, transparency, and ethical practices form the foundation of all our relationships.'
    }
  ];

  const jobCategories = [
    { id: 'all', name: 'All Positions' },
    { id: 'development', name: 'Development' },
    { id: 'consulting', name: 'Consulting' },
    { id: 'management', name: 'Management' },
    { id: 'quality', name: 'Quality Assurance' }
  ];

  const openPositions = [
    {
      id: 1,
      title: 'Senior Python Developer',
      department: 'Development',
      location: 'Mumbai, India / Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead development of enterprise-level applications using Python, cloud platforms, and modern frameworks.',
      requirements: [
        '5+ years Python development experience',
        'Experience with cloud platforms (AWS/Azure/GCP)',
        'Knowledge of microservices architecture',
        'Experience with database systems'
      ],
      category: 'development'
    },
    {
      id: 2,
      title: 'Appian Business Analyst',
      department: 'Consulting',
      location: 'London, UK / Hybrid',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Work with clients to analyze business processes and design Appian solutions that drive transformation.',
      requirements: [
        '3+ years Appian platform experience',
        'Strong business analysis skills',
        'Experience in financial services or insurance',
        'Excellent communication skills'
      ],
      category: 'consulting'
    },
    {
      id: 3,
      title: 'Quality Engineering Lead',
      department: 'Quality Assurance',
      location: 'Bucharest, Romania / Remote',
      type: 'Full-time',
      experience: '6+ years',
      description: 'Lead quality engineering initiatives and ensure the delivery of high-quality enterprise solutions.',
      requirements: [
        '6+ years QA/Testing experience',
        'Experience with automation testing tools',
        'Knowledge of DevOps practices',
        'Leadership experience preferred'
      ],
      category: 'quality'
    },
    {
      id: 4,
      title: 'Technical Project Manager',
      department: 'Management',
      location: 'Multiple Locations / Remote',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Manage complex technology projects across global teams, ensuring delivery excellence and client satisfaction.',
      requirements: [
        '7+ years project management experience',
        'PMP or equivalent certification',
        'Experience with enterprise software projects',
        'Global team management experience'
      ],
      category: 'management'
    },
    {
      id: 5,
      title: 'DevOps Engineer',
      department: 'Development',
      location: 'Mumbai, India / London, UK',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Implement and maintain CI/CD pipelines, infrastructure automation, and cloud deployments.',
      requirements: [
        '4+ years DevOps experience',
        'Experience with Kubernetes and Docker',
        'Knowledge of infrastructure as code',
        'Experience with monitoring and logging'
      ],
      category: 'development'
    },
    {
      id: 6,
      title: 'Data Analytics Consultant',
      department: 'Consulting',
      location: 'London, UK / Remote',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Help clients leverage data analytics for business insights and strategic decision-making.',
      requirements: [
        '4+ years data analytics experience',
        'Experience with Python/R and SQL',
        'Knowledge of BI tools (Tableau, Power BI)',
        'Strong client-facing skills'
      ],
      category: 'consulting'
    }
  ];

  const filteredPositions = selectedCategory === 'all' 
    ? openPositions 
    : openPositions.filter(position => position.category === selectedCategory);

  const hiringProcess = [
    { step: 1, title: 'Application', description: 'Submit your resume and cover letter through our careers portal.' },
    { step: 2, title: 'Initial Screening', description: 'Phone/video call with our recruitment team to discuss your background.' },
    { step: 3, title: 'Technical Assessment', description: 'Role-specific technical evaluation or case study presentation.' },
    { step: 4, title: 'Team Interview', description: 'Meet with potential team members and project leads.' },
    { step: 5, title: 'Final Interview', description: 'Meeting with senior leadership and offer discussion.' },
    { step: 6, title: 'Welcome', description: 'Onboarding program and integration into our global team.' }
  ];

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
              Join Our Global Team
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-silver-200 mb-8"
            >
              Build your career with Horizon International - where strategic thinking meets enterprise execution, and global collaboration drives innovation.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="#open-positions"
                className="btn-primary"
              >
                View Open Positions
              </a>
              <a
                href="#why-join"
                className="btn-outline border-white text-white hover:bg-white hover:text-navy-900"
              >
                Why Join Us
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="section-padding bg-silver-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-navy-800 mb-6">
              Work Across Three Continents
            </h2>
            <p className="text-xl text-silver-600 max-w-3xl mx-auto">
              Our global delivery model means you can work with diverse teams, across different time zones, bringing together the best talent from around the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                country: 'India',
                city: 'Mumbai & Bangalore',
                timezone: 'IST (UTC+5:30)',
                specialties: ['Development Centers', 'Quality Engineering', 'DevOps'],
                color: 'from-orange-500 to-orange-600'
              },
              {
                country: 'United Kingdom',
                city: 'London',
                timezone: 'GMT (UTC+0)',
                specialties: ['Client Consulting', 'Business Analysis', 'Project Management'],
                color: 'from-red-500 to-red-600'
              },
              {
                country: 'Romania',
                city: 'Bucharest',
                timezone: 'EET (UTC+2)',
                specialties: ['Software Development', 'Data Analytics', 'AI/ML'],
                color: 'from-blue-500 to-blue-600'
              }
            ].map((location, index) => (
              <motion.div
                key={location.country}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-white p-8 rounded-xl shadow-lg card-hover"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${location.color} rounded-lg flex items-center justify-center mb-6`}>
                  <GlobeAltIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-poppins font-bold text-navy-800 mb-2">
                  {location.country}
                </h3>
                <div className="text-silver-600 mb-4">
                  <div className="font-medium">{location.city}</div>
                  <div className="text-sm">{location.timezone}</div>
                </div>
                <div className="space-y-2">
                  {location.specialties.map((specialty, specIndex) => (
                    <div key={specIndex} className="flex items-center text-sm text-silver-600">
                      <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2" />
                      {specialty}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section id="why-join" ref={cultureRef} className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            animate={cultureInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-poppins font-bold text-navy-800 mb-6"
            >
              Why Choose Horizon International?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-silver-600 max-w-3xl mx-auto"
            >
              Join a company where your professional growth is supported, your ideas are valued, and your work makes a real impact on enterprise transformation.
            </motion.p>
          </motion.div>

          {/* Our Values */}
          <motion.div
            initial="hidden"
            animate={cultureInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="mb-20"
          >
            <h3 className="text-2xl font-poppins font-bold text-navy-800 text-center mb-12">Our Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  variants={fadeInUp}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-poppins font-semibold text-navy-800 mb-3">
                    {value.title}
                  </h4>
                  <p className="text-silver-600">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial="hidden"
            animate={cultureInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <h3 className="text-2xl font-poppins font-bold text-navy-800 text-center mb-12">Employee Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  variants={fadeInUp}
                  className="bg-silver-50 p-6 rounded-lg hover:bg-silver-100 transition-colors duration-200"
                >
                  <benefit.icon className="h-10 w-10 text-blue-600 mb-4" />
                  <h4 className="text-lg font-poppins font-semibold text-navy-800 mb-3">
                    {benefit.title}
                  </h4>
                  <p className="text-silver-600">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="open-positions" ref={rolesRef} className="section-padding bg-silver-50">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            animate={rolesInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-poppins font-bold text-navy-800 mb-6"
            >
              Current Openings
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-silver-600 max-w-3xl mx-auto"
            >
              Explore opportunities across our global offices and remote positions. Find your perfect role in our growing team.
            </motion.p>
          </motion.div>

          {/* Job Category Filter */}
          <motion.div
            initial="hidden"
            animate={rolesInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {jobCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-silver-600 hover:bg-silver-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>

          {/* Job Listings */}
          <motion.div
            initial="hidden"
            animate={rolesInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {filteredPositions.map((position) => (
              <motion.div
                key={position.id}
                variants={fadeInUp}
                className="bg-white p-8 rounded-xl shadow-lg card-hover"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-poppins font-bold text-navy-800 mb-2">
                      {position.title}
                    </h3>
                    <div className="text-silver-600">
                      <div className="font-medium">{position.department}</div>
                      <div className="text-sm">{position.location}</div>
                    </div>
                  </div>
                  <BriefcaseIcon className="h-8 w-8 text-blue-600" />
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-silver-500 mb-6">
                  <div className="flex items-center">
                    <ClockIcon className="h-4 w-4 mr-1" />
                    {position.type}
                  </div>
                  <div className="flex items-center">
                    <AcademicCapIcon className="h-4 w-4 mr-1" />
                    {position.experience}
                  </div>
                </div>

                <p className="text-silver-600 mb-6 leading-relaxed">
                  {position.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-medium text-navy-800 mb-3">Key Requirements</h4>
                  <ul className="space-y-2">
                    {position.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-start text-sm text-silver-600">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="btn-primary w-full group">
                  Apply Now
                  <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Hiring Process Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-navy-800 mb-6">
              Our Hiring Process
            </h2>
            <p className="text-xl text-silver-600 max-w-3xl mx-auto">
              We believe in a transparent, thorough process that allows us to get to know you and ensures the role is the right fit for both parties.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {hiringProcess.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="flex items-start"
                >
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-6 flex-shrink-0">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-poppins font-semibold text-navy-800 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-silver-600">
                      {step.description}
                    </p>
                  </div>
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
              Ready to Start Your Journey with Us?
            </h2>
            <p className="text-xl text-silver-200 mb-8">
              Join Horizon International and be part of a global team that's transforming enterprises through strategic technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:careers@horizon-international.com"
                className="btn-primary"
              >
                Send Your Resume
              </a>
              <a
                href="/contact"
                className="btn-outline border-white text-white hover:bg-white hover:text-navy-900"
              >
                Contact HR
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;