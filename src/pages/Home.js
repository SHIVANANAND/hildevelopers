import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ArrowRightIcon, 
  CheckCircleIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  LightBulbIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

const Home = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [industriesRef, industriesInView] = useInView({ triggerOnce: true, threshold: 0.1 });

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

  const keyFeatures = [
    {
      icon: ChartBarIcon,
      title: 'Strategic Modernization',
      description: 'Transform legacy systems with modern, scalable solutions that drive business growth.'
    },
    {
      icon: ClockIcon,
      title: 'Process Automation',
      description: 'Streamline operations and reduce costs through intelligent automation workflows.'
    },
    {
      icon: GlobeAltIcon,
      title: 'System Integration',
      description: 'Connect disparate systems seamlessly for unified data flow and improved efficiency.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Enterprise Security',
      description: 'Maintain strict security standards with our CMMI Level 3 certified processes.'
    },
    {
      icon: LightBulbIcon,
      title: 'Innovation Focus',
      description: 'Leverage AI, data analytics, and emerging technologies to stay ahead of the competition.'
    },
    {
      icon: CheckCircleIcon,
      title: '24/7 Global Support',
      description: 'Round-the-clock coverage through our delivery centers across three continents.'
    }
  ];

  const industries = [
    'Banking & Financial Services',
    'Life Sciences & Healthcare',
    'Insurance & Risk Management',
    'Legal & Professional Services'
  ];

  const stats = [
    { number: '25+', label: 'Years of Experience' },
    { number: '500+', label: 'Successful Projects' },
    { number: '3', label: 'Global Delivery Centers' },
    { number: '24/7', label: 'Support Coverage' }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 container-custom text-center">
          <motion.div
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Strategic Technology Solutions for{' '}
              <span className="text-gradient bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Mid-Market Enterprises
              </span>
            </motion.h1>
            
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed"
            >
              We combine Ivy-League-level strategic thinking with enterprise-grade execution to solve your most complex modernization, automation, and integration challenges.
            </motion.p>
            
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link to="/case-studies" className="btn-primary group">
                Explore Case Studies
                <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-gray-900">
                Contact Us
              </Link>
            </motion.div>
            
            <motion.div
              variants={fadeInUp}
              className="mt-12 flex flex-wrap justify-center gap-8 text-gray-300"
            >
              <div className="flex items-center">
                <CheckCircleIcon className="h-5 w-5 mr-2 text-green-400" />
                <span>CMMI Level 3 Certified</span>
              </div>
              <div className="flex items-center">
                <CheckCircleIcon className="h-5 w-5 mr-2 text-green-400" />
                <span>Enterprise-Grade Security</span>
              </div>
              <div className="flex items-center">
                <CheckCircleIcon className="h-5 w-5 mr-2 text-green-400" />
                <span>25+ Years Experience</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Key Features Section */}
      <section ref={featuresRef} className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            animate={featuresInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            >
              Why Choose Horizon International?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              We deliver measurable impact across complex industries through strategic technology solutions that drive real business outcomes.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={featuresInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={fadeInUp}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 card-hover"
              >
                <feature.icon className="h-12 w-12 text-blue-600 mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="section-padding bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Our Track Record
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-lg">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industries Section */}
      <section ref={industriesRef} className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            animate={industriesInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            >
              Industries We Serve
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Deep expertise across regulated industries requiring high security, compliance, and reliability standards.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={industriesInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                variants={fadeInUp}
                className="flex items-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <CheckCircleIcon className="h-6 w-6 text-green-500 mr-4 flex-shrink-0" />
                <span className="text-lg font-medium text-gray-900">{industry}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-gray-800 to-blue-800">
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
            <p className="text-xl text-gray-200 mb-8">
              Let's discuss how our strategic technology solutions can address your specific challenges and drive measurable business outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Start Your Project
              </Link>
              <Link to="/case-studies" className="btn-outline border-white text-white hover:bg-white hover:text-gray-900">
                View Success Stories
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;