import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ArrowRightIcon, 
  CheckCircleIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  TrophyIcon,
  LightBulbIcon,
  HeartIcon
} from '@heroicons/react/24/outline';

const About = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [missionRef, missionInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [valuesRef, valuesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [credentialsRef, credentialsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

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

  const companyStats = [
    { number: '25+', label: 'Years of Excellence' },
    { number: '500+', label: 'Successful Projects' },
    { number: '350+', label: 'Global Team Members' },
    { number: '4', label: 'Continents Served' }
  ];

  const coreValues = [
    {
      icon: LightBulbIcon,
      title: 'Innovation Excellence',
      description: 'We constantly push boundaries to deliver cutting-edge solutions that transform businesses and drive measurable ROI.',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Quality & Compliance',
      description: 'CMMI Level 3 certification reflects our unwavering commitment to quality processes, security, and regulatory compliance.',
      color: 'from-forest-600 to-forest-700'
    },
    {
      icon: UserGroupIcon,
      title: 'Collaborative Partnership',
      description: 'Global teamwork across diverse cultures and expertise areas drives our success and client satisfaction.',
      color: 'from-emerald-600 to-forest-500'
    },
    {
      icon: HeartIcon,
      title: 'Integrity & Trust',
      description: 'Trust, transparency, and ethical practices form the foundation of all our client relationships and business decisions.',
      color: 'from-emerald-400 to-emerald-500'
    }
  ];

  const leadership = [
    {
      name: 'Dr. Sarah Chen',
      position: 'Chief Executive Officer',
      bio: 'Visionary leader with 20+ years in enterprise technology and digital transformation. PhD in Computer Science from MIT.',
      expertise: ['Strategic Leadership', 'AI & Automation', 'Digital Transformation']
    },
    {
      name: 'Michael Rodriguez',
      position: 'Chief Technology Officer',
      bio: 'Expert in enterprise architecture and automation platforms. Former VP of Engineering at Fortune 500 technology companies.',
      expertise: ['Enterprise Architecture', 'Platform Engineering', 'Cloud Native']
    },
    {
      name: 'Jennifer Walsh',
      position: 'Chief Operating Officer',
      bio: 'Operations excellence leader with expertise in global delivery and process optimization across regulated industries.',
      expertise: ['Global Operations', 'Process Excellence', 'Industry Compliance']
    }
  ];

  const certifications = [
    {
      name: 'CMMI Level 3',
      description: 'Capability Maturity Model Integration Level 3 certification for process and quality excellence',
      icon: '🏆'
    },
    {
      name: 'ISO 27001',
      description: 'Information Security Management System certification for enterprise-grade security',
      icon: '🔒'
    },
    {
      name: 'SOC 2 Type II',
      description: 'Service Organization Control certification for security, availability, and confidentiality',
      icon: '✅'
    },
    {
      name: 'Great Place to Work',
      description: 'Certified as a great workplace in India, recognizing our exceptional employee culture',
      icon: '🌟'
    }
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
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Transforming Enterprises Through{' '}
              <span className="text-gradient-golden">
                Intelligent Automation
              </span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-emerald-100 mb-8"
            >
              We are Horizon International — a global strategic technology consultancy that combines Ivy-League-level strategic thinking with enterprise-grade execution to solve your most complex automation challenges.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/contact" className="btn-gold group">
                Partner With Us
                <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/case-studies" className="btn-outline border-white text-white hover:bg-white hover:text-emerald-800">
                Our Success Stories
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-4xl font-bold text-emerald-900 mb-6"
              >
                Who We Are
              </motion.h2>
              <motion.div variants={fadeInUp} className="space-y-6 text-emerald-700">
                <p className="text-lg leading-relaxed">
                  Horizon International is a premier global strategic technology consultancy specializing in AI-led enterprise process orchestration and knowledge work automation. We help mid-market enterprises solve complex modernization, automation, and integration challenges.
                </p>
                <p className="text-lg leading-relaxed">
                  With over 25 years of experience and CMMI Level 3 certification, we deliver measurable impact across banking, life sciences, insurance, and legal industries through our global delivery centers in India, the UK, and Romania.
                </p>
                <p className="text-lg leading-relaxed">
                  Our expertise spans Appian, Python, VBA, Quality Engineering, Neota Logic, AI, DevOps, and Data Analytics, ensuring 24/7 coverage, cultural alignment, and strict enterprise-grade security.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-2 gap-6"
            >
              {companyStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 rounded-xl text-center border border-emerald-200"
                >
                  <div className="text-3xl md:text-4xl font-bold text-emerald-700 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-emerald-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section ref={missionRef} className="section-padding bg-emerald-50">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            animate={missionInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-emerald-900 mb-6"
            >
              Our Mission & Vision
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white p-8 rounded-xl shadow-emerald border border-emerald-100"
            >
              <div className="w-16 h-16 bg-emerald-gradient rounded-xl flex items-center justify-center mb-6">
                <LightBulbIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">Our Mission</h3>
              <p className="text-emerald-700 leading-relaxed">
                To orchestrate, automate, and transform enterprise operations by delivering AI-led process orchestration and knowledge work automation that drives measurable business outcomes, operational excellence, and sustainable competitive advantage for our clients.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white p-8 rounded-xl shadow-emerald border border-emerald-100"
            >
              <div className="w-16 h-16 bg-forest-gradient rounded-xl flex items-center justify-center mb-6">
                <GlobeAltIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">Our Vision</h3>
              <p className="text-emerald-700 leading-relaxed">
                To be the global leader in enterprise process orchestration, recognized for transforming how organizations operate through intelligent automation, setting the standard for quality, innovation, and client success across all industries we serve.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section ref={valuesRef} className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            animate={valuesInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-emerald-900 mb-6"
            >
              Our Core Values
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-emerald-700 max-w-3xl mx-auto"
            >
              The principles that guide our decisions, shape our culture, and define our commitment to excellence.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-8 rounded-xl hover:from-emerald-100 hover:to-emerald-200 transition-all duration-300 border border-emerald-200"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center mb-6 shadow-gold`}>
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-emerald-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-emerald-700 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding bg-emerald-50">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-emerald-900 mb-6"
            >
              Leadership Team
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-emerald-700 max-w-3xl mx-auto"
            >
              Experienced leaders driving our vision of enterprise transformation through intelligent automation.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-white p-8 rounded-xl shadow-emerald hover:shadow-emerald-lg transition-all duration-300 border border-emerald-100 text-center"
              >
                <div className="w-20 h-20 bg-emerald-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">
                    {leader.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-emerald-900 mb-2">
                  {leader.name}
                </h3>
                <p className="text-emerald-600 font-medium mb-4">
                  {leader.position}
                </p>
                <p className="text-emerald-700 text-sm leading-relaxed mb-4">
                  {leader.bio}
                </p>
                <div className="space-y-1">
                  {leader.expertise.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full mr-1 mb-1"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials & Certifications */}
      <section ref={credentialsRef} className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            animate={credentialsInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-emerald-900 mb-6"
            >
              Credentials & Certifications
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-emerald-700 max-w-3xl mx-auto"
            >
              Our certifications and credentials demonstrate our commitment to quality, security, and excellence in enterprise delivery.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 rounded-xl hover:from-emerald-100 hover:to-emerald-200 transition-all duration-300 border border-emerald-200 text-center"
              >
                <div className="text-4xl mb-4">{cert.icon}</div>
                <h3 className="text-lg font-bold text-emerald-900 mb-3">
                  {cert.name}
                </h3>
                <p className="text-emerald-600 text-sm leading-relaxed">
                  {cert.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-emerald-gradient mb-16">
        <div className="container-custom text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Enterprise?
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Partner with a global leader in enterprise process orchestration. Let's discuss how our proven methodology and expertise can drive your digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-gold group">
                Start Your Transformation
                <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/services" className="btn-outline border-emerald-200 text-white hover:bg-white hover:text-emerald-700 hover:border-white">
                Explore Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;