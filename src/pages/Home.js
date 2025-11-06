import React, { useState } from 'react';
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
  ClockIcon,
  CogIcon,
  RocketLaunchIcon,
  UserGroupIcon,
  PuzzlePieceIcon
} from '@heroicons/react/24/outline';

const Home = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [sectorsRef, sectorsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [positioningRef, positioningInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [industriesRef, industriesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [resultsRef, resultsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [currentImage, setCurrentImage] = useState('');
  const [currentColor, setCurrentColor] = useState('');
  const [currentSector, setCurrentSector] = useState(null);

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
      benefits: ['Reduce manual effort by 80%', 'Increase process accuracy', 'Enable real-time optimization']
    },
    {
      icon: CogIcon,
      title: 'Low-Code Platform Development',
      description: 'Rapid application development with enterprise-grade security and scalability.',
      benefits: ['50% faster deployment', 'Reduced development costs', 'Business-user friendly interfaces']
    },
    {
      icon: LightBulbIcon,
      title: 'Cognitive Automation',
      description: 'Advanced document and data processing with AI-powered insights and decision-making.',
      benefits: ['95% accuracy in data extraction', '24/7 processing capability', 'Intelligent error handling']
    },
    {
      icon: GlobeAltIcon,
      title: 'Enterprise Integration & Scaling',
      description: 'Seamless connectivity across legacy systems and modern cloud architectures.',
      benefits: ['Unified data landscape', 'API-first approach', 'Future-proof architecture']
    }
  ];

  const flagshipTechnologies = [
    {
      title: 'Appian Development',
      description: 'Complex business process automation and legacy integration.',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzhB_5cQxte3KlAC-sqM6DMNeqvDQDBVS1CQmpgkRNZt2XD8DoFwkoaOG_0dWEdXS5yjM&usqp=CAU'
    },
    {
      title: 'Python Development',
      description: 'Custom AI and machine learning solutions for enterprise needs.',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg'
    },
    {
      title: 'DevOps & Infrastructure',
      description: 'Cloud-native deployment and continuous integration pipelines.',
      logo: 'https://cdn-icons-png.flaticon.com/512/919/919853.png'
    },
    {
      title: 'AI/ML Solutions',
      description: 'Intelligent automation and predictive analytics platforms.',
      logo: 'https://cdn-icons-png.flaticon.com/512/2103/2103652.png'
    },
    {
      title: 'Low-Code Platforms',
      description: 'Rapid application development with enterprise scalability.',
      logo: 'https://cdn-icons-png.flaticon.com/512/4248/4248443.png'
    }
  ];

  const extendedCapabilities = [
    {
      title: 'Cloud Integration',
      description: 'Seamless connectivity across AWS, Azure, and GCP environments.',
      logo: 'https://cdn-icons-png.flaticon.com/512/2504/2504923.png'
    },
    {
      title: 'Data Analytics',
      description: 'Advanced data processing and business intelligence solutions.',
      logo: 'https://cdn-icons-png.flaticon.com/512/4248/4248444.png'
    },
    {
      title: 'Robotic Process Automation',
      description: 'Automated workflow execution for repetitive business tasks.',
      logo: 'https://cdn-icons-png.flaticon.com/512/2103/2103653.png'
    },
    {
      title: 'API Development',
      description: 'RESTful and GraphQL APIs for system interoperability.',
      logo: 'https://cdn-icons-png.flaticon.com/512/4248/4248445.png'
    },
    {
      title: 'Cybersecurity',
      description: 'Enterprise-grade security and compliance frameworks.',
      logo: 'https://cdn-icons-png.flaticon.com/512/2716/2716651.png'
    },
    {
      title: 'Database Management',
      description: 'Optimized data storage and retrieval for high-performance applications.',
      logo: 'https://cdn-icons-png.flaticon.com/512/4248/4248446.png'
    }
  ];

  const industryVerticals = [
    {
      name: 'BFSI (Banking, Financial Services & Insurance)',
      icon: '🏦',
      solutions: ['Risk Management Systems', 'Regulatory Compliance', 'Customer Onboarding', 'Claims Processing'],
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      name: 'Legal & Professional Services',
      icon: '⚖️',
      solutions: ['Document Automation', 'Case Management', 'Contract Analysis', 'Legal Research'],
      color: 'from-forest-600 to-forest-700'
    },
    {
      name: 'Telecom & Technology',
      icon: '📡',
      solutions: ['Service Orchestration', 'Network Automation', 'Customer Experience', 'Billing Systems'],
      color: 'from-emerald-600 to-forest-500'
    },
    {
      name: 'Healthcare & Life Sciences',
      icon: '🏥',
      solutions: ['Patient Journey Management', 'Clinical Trial Automation', 'Regulatory Reporting', 'Data Analytics'],
      color: 'from-emerald-400 to-emerald-500'
    }
  ];

  const results = [
    { number: '80%', label: 'Process Efficiency Improvement' },
    { number: '$2.5M', label: 'Average Annual Cost Savings' },
    { number: '95%', label: 'Client Satisfaction Rate' },
    { number: '12x', label: 'Faster Time-to-Market' }
  ];

  return (

    <div className="overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center bg-emerald-gradient">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-400/20 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 container-custom text-center">
          <motion.div
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="max-w-5xl mx-auto"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              <span className="text-gradient-golden">
                AI-Led Enterprise Process Orchestration
              </span>{' '}
              & Knowledge Work Automation
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-emerald-100 mb-8 leading-relaxed"
            >
              <strong>Orchestrate, Automate, and Transform Enterprise Operations</strong><br/>
              Specializing in intelligent automation that combines AI + low-code platforms — delivering measurable ROI across BFSI, Legal, and Telecom sectors.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <Link to="/contact" className="btn-gold group text-lg px-10 py-4">
                Let's Talk Transformation
                <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/case-studies" className="btn-outline border-white text-white hover:bg-white hover:text-emerald-800 text-lg px-10 py-4">
                View Success Stories
              </Link>
            </motion.div>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-emerald-100 mt-6 mb-6 max-w-3xl mx-auto"
            >
              Specialist in intelligent automation combining <span className="font-semibold">AI + low-code platforms</span> — core to digital transformation narratives.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 text-emerald-100"
            >
              <div className="flex items-center justify-center">
                <CheckCircleIcon className="h-6 w-6 mr-3 text-gold-300" />
                <span>15+ Plug-and-Play AI Solutions</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircleIcon className="h-6 w-6 mr-3 text-gold-300" />
                <span>CMMI Level 3 Certified</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircleIcon className="h-6 w-6 mr-3 text-gold-300" />
                <span>Full Lifecycle Delivery</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Sectors Served Section */}
      <section ref={sectorsRef} className="py-24 px-12 bg-emerald-50">
        <div className="container-custom max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate={sectorsInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-emerald-900 mb-8"
            >
              Industries We Serve
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-emerald-700 max-w-4xl mx-auto leading-relaxed"
            >
              Deep expertise across key sectors with specialized automation solutions tailored to industry-specific challenges.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={sectorsInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-start"
          >
            <motion.div variants={fadeInUp} className="lg:col-span-3">
              {/* Preview / image area - changes on hover of the right-side buttons */}
              <motion.div
                className="sector-preview relative rounded-xl overflow-hidden min-h-[500px]"
                style={{
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundImage: currentImage ? `url(${currentImage})` : 'none',
                  backgroundColor: currentColor || '#f0fdf4'
                }}
                animate={{
                  opacity: currentImage ? 1 : 0.8
                }}
                transition={{ duration: 0.5 }}
                id="sector-preview"
              >
                <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
                <div className="relative z-10 p-12 h-full flex items-center">
                  {currentSector ? (
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ duration: 0.4 }}
                      className="max-w-lg bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl"
                    >
                      <h4 className="text-2xl font-bold text-white mb-6 leading-tight">{currentSector.strategicImpact}</h4>
                      <div className="mb-6">
                        <h5 className="text-lg font-semibold text-white mb-4">Key Metrics:</h5>
                        <div className="flex items-start">
                          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                            <CheckCircleIcon className="h-7 w-7 text-white" aria-label="Check icon" />
                          </div>
                          <span className="text-white font-medium text-lg leading-relaxed" dangerouslySetInnerHTML={{__html: currentSector.keyMetrics}}></span>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <div className="text-white bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl max-w-md">
                      <h4 className="text-xl font-semibold mb-2">Hover over a sector to explore</h4>
                      <p className="text-white/80">Discover our specialized automation solutions</p>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeInUp} className="lg:col-span-1 space-y-6">
              {/* Sector buttons - on hover they'll change the preview on the left. Using inline handlers so image can change on hover. */}
              {[
                { key: 'banking', label: 'Banking System Unification', color: 'bg-emerald-600', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80', strategicSolution: 'Unified banking platforms with AI-driven compliance and risk management', strategicImpact: 'Seamless customer experience with 40% reduction in operational costs', keyMetrics: '95% compliance accuracy <br> 60% faster processing' },
                { key: 'financial', label: 'Investment Portfolio Modernization', color: 'bg-emerald-700', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80', strategicSolution: 'AI-powered portfolio analytics and automated trading systems', strategicImpact: 'Enhanced investment returns with real-time market insights', keyMetrics: '30% higher returns <br> 50% faster trade execution' },
                { key: 'insurance', label: 'Pension System Digital Transformation', color: 'bg-gold-600', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80', strategicSolution: 'Digital pension management with automated claims processing', strategicImpact: 'Improved pensioner satisfaction with streamlined administration', keyMetrics: '80% faster claims <br> 25% cost reduction' },
                { key: 'pharma', label: 'Enterprise Compliance Automation', color: 'bg-emerald-500', image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80', strategicSolution: 'Regulatory compliance automation with AI document processing', strategicImpact: 'Accelerated drug development with compliant data management', keyMetrics: '90% compliance rate <br> 70% faster approvals' },
                // { key: 'utilities', label: 'Utilities', color: 'bg-forest-600' }
              ].map((s) => (
                <button
                  key={s.key}
                  onMouseEnter={() => {
                    setCurrentImage(s.image);
                    setCurrentColor(s.color.replace('bg-', ''));
                    setCurrentSector(s);
                  }}
                  onMouseLeave={() => {
                    setCurrentImage('');
                    setCurrentColor('');
                    setCurrentSector(null);
                  }}
                  className="sector-button w-full text-left p-4 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300 border border-transparent hover:border-emerald-200"
                >
                  <span className="text-sm font-medium text-emerald-900">{s.label}</span>
                  <span className="w-3 h-3 bg-gold-400 rounded-sm ml-4 inline-block" />
                </button>
              ))}
            </motion.div>
          </motion.div>
          <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-10 rounded-xl text-center mt-16 shadow-sm">
            <p className="font-semibold text-emerald-800 text-lg leading-relaxed">ROI-focused. Data-backed. Every initiative delivers measurable results that drive real business impact.</p>
          </div>
        </div>
      </section>

      {/* Company Positioning Section */}
      <section ref={positioningRef} className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            animate={positioningInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-emerald-900 mb-6"
            >
              Scalable, Measurable, and Outcome-Based Enterprise Automation
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-emerald-700 max-w-4xl mx-auto"
            >
              We deliver end-to-end transformation from strategy & design to delivery & support. Our AI-enabled automation solutions provide quick deployment with faster GTM cycles for mid-market enterprises seeking measurable ROI.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Core Services Section */}
      <section ref={servicesRef} className="section-padding bg-emerald-50">
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
              Four key areas where we drive enterprise transformation through intelligent automation and orchestration.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {coreServices.map((service, index) => (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                className="bg-white p-8 rounded-xl shadow-emerald hover:shadow-emerald-lg hover:shadow-xl transition-all duration-300 card-hover border border-emerald-100"
              >
                <service.icon className="h-12 w-12 text-emerald-600 mb-6" />
                <h3 className="text-xl font-semibold text-emerald-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-emerald-700 leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-sm text-emerald-600">
                      <CheckCircleIcon className="h-4 w-4 text-emerald-500 mr-2" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* Core Tech-Stack Section */}
      <section ref={servicesRef} className="section-padding bg-emerald-50">
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
              Our Technologies
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            {/* Flagship Technologies Column */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <h3 className="text-2xl font-bold text-emerald-900 mb-8">
                Flagship Technologies
              </h3>
              {flagshipTechnologies.map((tech, index) => (
                <motion.div
                  key={tech.title}
                  variants={fadeInUp}
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl border border-emerald-100 flex items-center justify-between transition-all duration-300"
                >
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-emerald-900 mb-2">
                      {tech.title}
                    </h4>
                    <p className="text-emerald-700 text-sm leading-relaxed">
                      {tech.description}
                    </p>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <img src={tech.logo} alt={`${tech.title} logo`} className="w-12 h-12 object-contain" />
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Extended Capabilities Column */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <h3 className="text-2xl font-bold text-emerald-900 mb-8">
                Extended Capabilities
              </h3>
              {extendedCapabilities.map((tech, index) => (
                <motion.div
                  key={tech.title}
                  variants={fadeInUp}
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl border border-emerald-100 flex items-center justify-between transition-all duration-300"
                >
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-emerald-900 mb-2">
                      {tech.title}
                    </h4>
                    <p className="text-emerald-700 text-sm leading-relaxed">
                      {tech.description}
                    </p>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <img src={tech.logo} alt={`${tech.title} logo`} className="w-12 h-12 object-contain" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Industry Verticals Section */}
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
              className="text-3xl md:text-4xl font-bold text-emerald-900 mb-6"
            >
              Industry Verticals We Serve
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-emerald-700 max-w-3xl mx-auto"
            >
              Deep expertise across regulated industries with specialized automation solutions tailored to sector-specific challenges.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={industriesInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {industryVerticals.map((vertical, index) => (
              <motion.div
                key={vertical.name}
                variants={fadeInUp}
                className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-8 rounded-xl hover:from-emerald-100 hover:to-emerald-200 transition-all duration-300 card-hover border border-emerald-200"
              >
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{vertical.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-emerald-900">
                      {vertical.name}
                    </h3>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-medium text-emerald-700">Key Solutions:</h4>
                  {vertical.solutions.map((solution, solutionIndex) => (
                    <div key={solutionIndex} className="flex items-center text-emerald-600">
                      <CheckCircleIcon className="h-4 w-4 text-emerald-500 mr-2" />
                      {solution}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Results & Impact Section */}
      <section ref={resultsRef} className="section-padding bg-emerald-gradient mb-16">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            animate={resultsInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Measurable Business Impact
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-emerald-100 max-w-3xl mx-auto"
            >
              Our automation solutions deliver quantifiable results that drive ROI and operational excellence.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={resultsInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {results.map((result, index) => (
              <motion.div
                key={result.label}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-gold-300 mb-2">
                  {result.number}
                </div>
                <div className="text-emerald-100 text-lg">
                  {result.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-forest-gradient mb-16">
        <div className="container-custom text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Orchestrate Your Enterprise Transformation?
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Let's explore how our AI-led process orchestration can transform your operations, reduce costs, and accelerate your time-to-market. Book a consultation with our experts today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-gold group text-lg px-10 py-4">
                Book a Consultation
                <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/case-studies" className="btn-outline border-white text-white hover:bg-white hover:text-emerald-800 text-lg px-10 py-4">
                Explore Our Solutions
              </Link>
            </div>
            <p className="text-emerald-200 text-sm mt-6">
              Trusted by enterprises across 4 continents • CMMI Level 3 Certified • 25+ years of experience
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;