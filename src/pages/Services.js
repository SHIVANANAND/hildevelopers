import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ArrowRightIcon, 
  CheckCircleIcon,
  PuzzlePieceIcon,
  CogIcon,
  LightBulbIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';

const Services = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [approachRef, approachInView] = useInView({ triggerOnce: true, threshold: 0.1 });

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

  const coreServices = [
    {
      icon: PuzzlePieceIcon,
      title: 'AI-Driven Process Orchestration',
      description: 'Intelligent workflow automation that adapts and scales with your business complexity.',
      details: [
        'End-to-end process mapping and optimization',
        'AI-powered decision engines and smart routing',
        'Real-time process monitoring and analytics',
        'Continuous learning and improvement loops'
      ],
      benefits: [
        '80% reduction in manual process time',
        '95% accuracy in automated decisions',
        'Real-time visibility across all processes'
      ],
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: CogIcon,
      title: 'Low-Code Platform Development',
      description: 'Rapid application development with enterprise-grade security and scalability.',
      details: [
        'Appian platform implementation and customization',
        'Business user-friendly interface development',
        'Rapid prototyping and iterative deployment',
        'Integration with existing enterprise systems'
      ],
      benefits: [
        '50% faster application development',
        '70% reduction in development costs',
        'Business-user empowerment'
      ],
      color: 'from-forest-600 to-forest-700'
    },
    {
      icon: LightBulbIcon,
      title: 'Cognitive Automation',
      description: 'Advanced document and data processing with AI-powered insights.',
      details: [
        'Intelligent document processing and extraction',
        'Natural language processing for unstructured data',
        'Machine learning for pattern recognition',
        'Automated quality assurance and validation'
      ],
      benefits: [
        '95% accuracy in data extraction',
        '24/7 processing capability',
        '90% reduction in manual data entry'
      ],
      color: 'from-emerald-600 to-forest-500'
    },
    {
      icon: GlobeAltIcon,
      title: 'Enterprise Integration & Scaling',
      description: 'Seamless connectivity across legacy systems and modern cloud architectures.',
      details: [
        'API-first architecture and microservices',
        'Cloud-native platform deployment',
        'Legacy system modernization strategies',
        'Scalable infrastructure design'
      ],
      benefits: [
        'Unified data landscape',
        'Future-proof architecture',
        'Seamless system connectivity'
      ],
      color: 'from-emerald-400 to-emerald-500'
    }
  ];

  const deliveryApproach = [
    {
      phase: 'Strategy & Discovery',
      description: 'Comprehensive analysis of current processes, challenges, and opportunities for automation.',
      activities: ['Process mapping and analysis', 'ROI assessment', 'Technology selection', 'Roadmap development']
    },
    {
      phase: 'Design & Development',
      description: 'Collaborative design and development of automation solutions with iterative validation.',
      activities: ['Solution architecture', 'Agile development', 'User experience design', 'Quality assurance']
    },
    {
      phase: 'Deployment & Training',
      description: 'Phased rollout with comprehensive training and change management support.',
      activities: ['Pilot deployment', 'User training', 'Change management', 'Performance monitoring']
    },
    {
      phase: 'Support & Optimization',
      description: 'Ongoing support with continuous optimization and enhancement of automation solutions.',
      activities: ['24/7 support coverage', 'Performance optimization', 'Feature enhancements', 'Technology updates']
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
              Enterprise Automation &{' '}
              <span className="text-gradient-golden">
                Process Orchestration Services
              </span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-emerald-100 mb-8"
            >
              Transform your enterprise operations with our full lifecycle automation solutions — from strategy and design to delivery and support.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/contact" className="btn-gold group">
                Discuss Your Requirements
                <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/case-studies" className="btn-outline border-white text-white hover:bg-white hover:text-emerald-800">
                View Success Stories
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Services Section */}
      <section ref={servicesRef} className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-emerald-900 mb-6"
            >
              Our Core Capabilities
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-emerald-700 max-w-3xl mx-auto"
            >
              Four key service areas that drive enterprise transformation through intelligent automation and orchestration.
            </motion.p>
          </motion.div>

          <div className="space-y-16">
            {coreServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <motion.div variants={fadeInUp} className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 shadow-gold`}>
                    <service.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-emerald-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-lg text-emerald-700 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-emerald-800">Key Activities:</h4>
                    <ul className="space-y-2">
                      {service.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start text-emerald-600">
                          <CheckCircleIcon className="h-5 w-5 text-emerald-500 mr-3 mt-0.5" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-8 rounded-xl">
                    <h4 className="font-semibold text-emerald-800 mb-6">Business Benefits:</h4>
                    <div className="space-y-4">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center">
                          <div className="w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center mr-4">
                            <CheckCircleIcon className="h-5 w-5 text-white" />
                          </div>
                          <span className="text-emerald-700 font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Approach Section */}
      <section ref={approachRef} className="section-padding bg-emerald-50">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            animate={approachInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-emerald-900 mb-6"
            >
              Our Full Lifecycle Delivery Approach
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-emerald-700 max-w-3xl mx-auto"
            >
              A proven methodology that ensures successful automation implementations with measurable ROI.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {deliveryApproach.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-white p-6 rounded-xl shadow-emerald hover:shadow-emerald-lg transition-all duration-300 border border-emerald-100"
              >
                <div className="w-12 h-12 bg-emerald-gradient text-white rounded-lg flex items-center justify-center font-bold text-lg mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-emerald-900 mb-3">
                  {phase.phase}
                </h3>
                <p className="text-emerald-600 mb-4 text-sm leading-relaxed">
                  {phase.description}
                </p>
                <div className="space-y-2">
                  {phase.activities.map((activity, activityIndex) => (
                    <div key={activityIndex} className="flex items-center text-sm text-emerald-600">
                      <CheckCircleIcon className="h-4 w-4 text-emerald-500 mr-2" />
                      {activity}
                    </div>
                  ))}
                </div>
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
              Ready to Transform Your Enterprise Operations?
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Let's discuss how our automation and orchestration services can drive measurable business outcomes for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-gold group">
                Schedule a Consultation
                <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/industries" className="btn-outline border-emerald-200 text-white hover:bg-white hover:text-emerald-700 hover:border-white">
                Explore Industry Solutions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;