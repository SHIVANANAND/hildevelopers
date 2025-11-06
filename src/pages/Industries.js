import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ArrowRightIcon,
  CheckCircleIcon,
  BuildingOfficeIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  SignalIcon,
  HeartIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const Industries = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [industriesRef, industriesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [expansionRef, expansionInView] = useInView({ triggerOnce: true, threshold: 0.1 });

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

  const industryVerticals = [
    {
      name: 'BFSI (Banking, Financial Services & Insurance)',
      icon: BuildingOfficeIcon,
      description: 'Comprehensive automation solutions for regulated financial services with focus on compliance, risk management, and customer experience.',
      challenges: [
        'Complex regulatory compliance requirements',
        'Legacy system integration challenges',
        'Real-time risk assessment needs',
        'Customer onboarding inefficiencies'
      ],
      solutions: [
        'Regulatory compliance automation',
        'Anti-money laundering (AML) systems',
        'Digital customer onboarding platforms',
        'Risk assessment and management tools',
        'Loan processing automation',
        'Claims processing optimization'
      ],
      outcomes: [
        '90% reduction in compliance processing time',
        '75% faster customer onboarding',
        '50% improvement in risk detection accuracy',
        '$2M+ average annual cost savings'
      ],
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-50'
    },
    {
      name: 'Legal & Professional Services',
      icon: DocumentTextIcon,
      description: 'Streamline legal workflows with intelligent document processing, case management, and compliance automation.',
      challenges: [
        'Manual document review processes',
        'Complex case management systems',
        'Regulatory compliance tracking',
        'Time tracking and billing inefficiencies'
      ],
      solutions: [
        'Intelligent document processing',
        'Contract analysis and management',
        'Case management automation',
        'Legal research automation',
        'Compliance monitoring systems',
        'Time tracking and billing optimization'
      ],
      outcomes: [
        '85% reduction in document processing time',
        '70% improvement in case resolution speed',
        '60% reduction in compliance violations',
        '40% increase in billable hour accuracy'
      ],
      color: 'from-forest-600 to-forest-700',
      bgColor: 'bg-emerald-100'
    },
    {
      name: 'Telecom & Technology',
      icon: SignalIcon,
      description: 'Transform telecommunications operations with network automation, customer experience optimization, and service orchestration.',
      challenges: [
        'Complex network infrastructure management',
        'Customer service optimization',
        'Service provisioning delays',
        'Network security and monitoring'
      ],
      solutions: [
        'Network orchestration and automation',
        'Service provisioning automation',
        'Customer experience management',
        'Network performance monitoring',
        'Billing and revenue management',
        'Cybersecurity automation'
      ],
      outcomes: [
        '80% reduction in service provisioning time',
        '65% improvement in network uptime',
        '50% faster incident resolution',
        '35% increase in customer satisfaction'
      ],
      color: 'from-emerald-600 to-forest-500',
      bgColor: 'bg-emerald-50'
    },
    {
      name: 'Healthcare & Life Sciences',
      icon: HeartIcon,
      description: 'Enhance patient care and operational efficiency with healthcare automation, clinical trial management, and regulatory compliance.',
      challenges: [
        'Patient data management complexity',
        'Clinical trial coordination',
        'Regulatory compliance requirements',
        'Healthcare workflow inefficiencies'
      ],
      solutions: [
        'Patient journey management',
        'Clinical trial automation',
        'Electronic health record (EHR) optimization',
        'Regulatory reporting automation',
        'Healthcare workflow optimization',
        'Medical data analytics'
      ],
      outcomes: [
        '75% reduction in patient onboarding time',
        '60% faster clinical trial processing',
        '90% improvement in regulatory compliance',
        '45% increase in operational efficiency'
      ],
      color: 'from-emerald-400 to-emerald-500',
      bgColor: 'bg-emerald-100'
    }
  ];

  const expansionOpportunities = [
    {
      sector: 'SaaS & Technology Companies',
      opportunity: 'Leverage BFSI automation use-cases for subscription management, customer onboarding, and compliance in SaaS platforms.',
      potential: 'High',
      timeline: '6-12 months'
    },
    {
      sector: 'D2C (Direct-to-Consumer) Brands',
      opportunity: 'Apply legal document automation and telecom customer experience solutions to streamline D2C operations.',
      potential: 'Medium-High',
      timeline: '9-15 months'
    },
    {
      sector: 'Real Estate & PropTech',
      opportunity: 'Adapt BFSI loan processing and legal contract automation for property transactions and management.',
      potential: 'Medium',
      timeline: '12-18 months'
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
              Industry-Specific{' '}
              <span className="text-gradient-golden">
                Automation Solutions
              </span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-emerald-100 mb-8"
            >
              Deep expertise across regulated industries with specialized automation solutions tailored to sector-specific challenges and compliance requirements.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/contact" className="btn-gold group">
                Explore Industry Solutions
                <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/case-studies" className="btn-outline border-white text-white hover:bg-white hover:text-emerald-800">
                View Industry Case Studies
              </Link>
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
              Our Core Industry Verticals
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-emerald-700 max-w-3xl mx-auto"
            >
              Specialized automation solutions for regulated industries with proven track record of compliance and operational excellence.
            </motion.p>
          </motion.div>

          <div className="space-y-20">
            {industryVerticals.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12"
              >
                {/* Industry Overview */}
                <motion.div variants={fadeInUp} className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`w-20 h-20 bg-gradient-to-r ${industry.color} rounded-xl flex items-center justify-center mb-6 shadow-gold`}>
                    <industry.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-emerald-900 mb-4">
                    {industry.name}
                  </h3>
                  <p className="text-lg text-emerald-700 mb-6 leading-relaxed">
                    {industry.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-emerald-800 mb-3">Key Challenges:</h4>
                    <ul className="space-y-2">
                      {industry.challenges.map((challenge, challengeIndex) => (
                        <li key={challengeIndex} className="flex items-start text-emerald-600">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3 mt-2"></div>
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                {/* Solutions & Outcomes */}
                <motion.div variants={fadeInUp} className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className={`${industry.bgColor} p-8 rounded-xl`}>
                    <h4 className="font-semibold text-emerald-800 mb-4">Our Solutions:</h4>
                    <div className="grid grid-cols-1 gap-3 mb-8">
                      {industry.solutions.map((solution, solutionIndex) => (
                        <div key={solutionIndex} className="flex items-center text-emerald-700">
                          <CheckCircleIcon className="h-5 w-5 text-emerald-500 mr-3" />
                          <span className="text-sm">{solution}</span>
                        </div>
                      ))}
                    </div>
                    
                    <h4 className="font-semibold text-emerald-800 mb-4">Proven Outcomes:</h4>
                    <div className="space-y-3">
                      {industry.outcomes.map((outcome, outcomeIndex) => (
                        <div key={outcomeIndex} className="flex items-center">
                          <div className="w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center mr-3">
                            <CheckCircleIcon className="h-4 w-4 text-white" />
                          </div>
                          <span className="text-emerald-700 font-medium text-sm">{outcome}</span>
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

      {/* Market Expansion Section */}
      <section ref={expansionRef} className="section-padding bg-emerald-50">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            animate={expansionInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-emerald-900 mb-6"
            >
              Market Expansion Opportunities
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-emerald-700 max-w-3xl mx-auto"
            >
              Strategic expansion into adjacent verticals using proven automation use-cases from our core industries.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expansionOpportunities.map((opportunity, index) => (
              <motion.div
                key={opportunity.sector}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-white p-8 rounded-xl shadow-emerald hover:shadow-emerald-lg transition-all duration-300 border border-emerald-100"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-emerald-900">
                    {opportunity.sector}
                  </h3>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    opportunity.potential === 'High' ? 'bg-emerald-100 text-emerald-700' :
                    opportunity.potential === 'Medium-High' ? 'bg-gold-100 text-gold-700' :
                    'bg-emerald-200 text-emerald-800'
                  }`}>
                    {opportunity.potential} Potential
                  </div>
                </div>
                
                <p className="text-emerald-600 mb-6 leading-relaxed">
                  {opportunity.opportunity}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-emerald-500 text-sm">
                    <GlobeAltIcon className="h-4 w-4 mr-2" />
                    <span>Timeline: {opportunity.timeline}</span>
                  </div>
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
              Ready to Transform Your Industry Operations?
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Let's discuss how our industry-specific automation solutions can address your unique challenges and drive measurable business outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-gold group">
                Schedule Industry Consultation
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

export default Industries;