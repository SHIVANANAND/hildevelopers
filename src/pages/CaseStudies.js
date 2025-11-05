import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  ClockIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const CaseStudies = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [casesRef, casesInView] = useInView({ triggerOnce: true, threshold: 0.1 });

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

  const caseStudies = [
    {
      id: 1,
      title: 'Banking System Unification',
      client: 'Regional Financial Institution',
      industry: 'Banking & Financial Services',
      challenge: 'A mid-sized bank with 15+ legacy systems struggled with data silos, compliance risks, and operational inefficiencies. Manual processes were slowing down customer service and regulatory reporting.',
      solution: 'Implemented a comprehensive system integration strategy using modern APIs, cloud-based microservices, and automated workflows. Created a unified data platform with real-time analytics and compliance monitoring.',
      technologies: ['Appian', 'Python', 'Cloud Infrastructure', 'Data Analytics'],
      results: [
        { metric: 'Process Time Reduction', value: '75%' },
        { metric: 'Cost Savings', value: '$2.5M annually' },
        { metric: 'Compliance Score', value: '98%' },
        { metric: 'Customer Satisfaction', value: '+40%' }
      ],
      icon: ChartBarIcon,
      color: 'from-blue-500 to-blue-600',
      timeline: '18 months',
      team: '12 specialists across 3 locations'
    },
    {
      id: 2,
      title: 'Investment Portfolio Modernization',
      client: 'Asset Management Firm',
      industry: 'Financial Services',
      challenge: 'Investment firm managing $5B+ in assets relied on spreadsheet-based portfolio management, leading to delayed decision-making and increased operational risk.',
      solution: 'Deployed AI-powered portfolio management platform with automated rebalancing, risk assessment, and regulatory reporting. Integrated real-time market data feeds and customer portals.',
      technologies: ['Python', 'AI/ML', 'Cloud Platform', 'Data Integration'],
      results: [
        { metric: 'Decision Speed', value: '3x faster' },
        { metric: 'Risk Reduction', value: '35%' },
        { metric: 'Portfolio Performance', value: '+15%' },
        { metric: 'Regulatory Efficiency', value: '90% faster' }
      ],
      icon: CurrencyDollarIcon,
      color: 'from-green-500 to-green-600',
      timeline: '12 months',
      team: '8 specialists across 2 locations'
    },
    {
      id: 3,
      title: 'Pension System Transformation',
      client: 'Government Pension Fund',
      industry: 'Public Sector',
      challenge: 'National pension system serving 2M+ members faced outdated technology, manual benefit calculations, and poor member experience. System downtime during peak periods was critical.',
      solution: 'Modernized entire pension management system with cloud-native architecture, automated calculations, self-service portals, and AI-driven member support. Implemented DevOps practices for continuous delivery.',
      technologies: ['Appian', 'Cloud Platform', 'DevOps', 'AI Support'],
      results: [
        { metric: 'System Uptime', value: '99.9%' },
        { metric: 'Processing Speed', value: '10x faster' },
        { metric: 'Member Satisfaction', value: '+65%' },
        { metric: 'Operational Costs', value: '-45%' }
      ],
      icon: ClockIcon,
      color: 'from-purple-500 to-purple-600',
      timeline: '24 months',
      team: '15 specialists across 3 locations'
    },
    {
      id: 4,
      title: 'Compliance Automation Platform',
      client: 'Multi-National Insurance Company',
      industry: 'Insurance & Risk Management',
      challenge: 'Insurance provider operating across 5 countries struggled with complex regulatory requirements, manual compliance processes, and audit preparation taking 6+ months.',
      solution: 'Built comprehensive compliance automation platform with intelligent document processing, automated regulatory monitoring, and predictive risk assessment. Integrated with existing core systems.',
      technologies: ['Neota Logic', 'AI/ML', 'Process Automation', 'Risk Analytics'],
      results: [
        { metric: 'Audit Preparation', value: '2 weeks' },
        { metric: 'Compliance Accuracy', value: '99.5%' },
        { metric: 'Manual Work Reduction', value: '80%' },
        { metric: 'Risk Detection', value: '5x better' }
      ],
      icon: ShieldCheckIcon,
      color: 'from-red-500 to-red-600',
      timeline: '15 months',
      team: '10 specialists across 2 locations'
    }
  ];

  const stats = [
    { number: '500+', label: 'Successful Projects Delivered' },
    { number: '95%', label: 'Client Satisfaction Rate' },
    { number: '$50M+', label: 'Total Client Savings Generated' },
    { number: '24/7', label: 'Continuous Support Coverage' }
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
              Case Studies: Transforming Enterprises
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-silver-200 mb-8"
            >
              Real-world examples of how we've helped mid-market enterprises solve complex technology challenges and achieve measurable business outcomes.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-silver-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-poppins font-bold text-navy-800 mb-2">
                  {stat.number}
                </div>
                <div className="text-silver-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section ref={casesRef} className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            animate={casesInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="space-y-16"
          >
            {caseStudies.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                variants={fadeInUp}
                className="bg-white rounded-2xl shadow-xl overflow-hidden card-hover"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Content */}
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center mb-6">
                      <div className={`w-12 h-12 bg-gradient-to-r ${caseStudy.color} rounded-lg flex items-center justify-center mr-4`}>
                        <caseStudy.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-silver-500 uppercase tracking-wide">
                          {caseStudy.industry}
                        </div>
                        <h3 className="text-2xl font-poppins font-bold text-navy-800">
                          {caseStudy.title}
                        </h3>
                      </div>
                    </div>

                    <div className="text-silver-600 text-sm mb-4">
                      <span className="font-medium">Client:</span> {caseStudy.client}
                    </div>

                    <div className="mb-6">
                      <h4 className="font-poppins font-semibold text-navy-800 mb-2">Challenge</h4>
                      <p className="text-silver-600 leading-relaxed">
                        {caseStudy.challenge}
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-poppins font-semibold text-navy-800 mb-2">Solution</h4>
                      <p className="text-silver-600 leading-relaxed">
                        {caseStudy.solution}
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-poppins font-semibold text-navy-800 mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {caseStudy.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-silver-100 text-silver-700 text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-silver-500">Timeline:</span>
                        <div className="font-medium text-navy-800">{caseStudy.timeline}</div>
                      </div>
                      <div>
                        <span className="text-silver-500">Team:</span>
                        <div className="font-medium text-navy-800">{caseStudy.team}</div>
                      </div>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="bg-silver-50 p-8 lg:p-12">
                    <h4 className="font-poppins font-semibold text-navy-800 mb-6 text-lg">
                      Key Results & Impact
                    </h4>
                    <div className="space-y-4 mb-8">
                      {caseStudy.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center justify-between">
                          <span className="text-silver-600">{result.metric}</span>
                          <div className="text-xl font-bold text-blue-600">
                            {result.value}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="bg-white p-6 rounded-lg border-l-4 border-blue-600">
                      <div className="text-sm text-silver-500 mb-1">Strategic Impact</div>
                      <div className="text-navy-800 font-medium">
                        {caseStudy.id === 1 && "Transformed fragmented banking operations into a unified, compliant, and efficient ecosystem serving 2M+ customers."}
                        {caseStudy.id === 2 && "Modernized portfolio management enabling faster, data-driven investment decisions and improved risk management."}
                        {caseStudy.id === 3 && "Revolutionized pension administration, improving member experience and operational resilience for a national institution."}
                        {caseStudy.id === 4 && "Automated complex compliance processes, reducing regulatory burden while improving accuracy and audit readiness."}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
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
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-silver-200 mb-8">
              Let's discuss how our proven methodology and enterprise-grade solutions can address your specific challenges and deliver measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="btn-primary group"
              >
                Start Your Project
                <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/global-presence"
                className="btn-outline border-white text-white hover:bg-white hover:text-navy-900"
              >
                Our Global Reach
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;