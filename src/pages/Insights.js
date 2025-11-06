import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ArrowRightIcon, 
  CheckCircleIcon,
  DocumentTextIcon,
  LightBulbIcon,
  ChartBarIcon,
  UserGroupIcon,
  CalendarIcon,
  TagIcon
} from '@heroicons/react/24/outline';

const Insights = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [articlesRef, articlesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [thoughtRef, thoughtInView] = useInView({ triggerOnce: true, threshold: 0.1 });
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
        staggerChildren: 0.2
      }
    }
  };

  const categories = [
    { id: 'all', name: 'All Insights' },
    { id: 'ai-automation', name: 'AI & Automation' },
    { id: 'low-code', name: 'Low-Code Platforms' },
    { id: 'industry-trends', name: 'Industry Trends' },
    { id: 'digital-transformation', name: 'Digital Transformation' }
  ];

  const featuredInsights = [
    {
      id: 1,
      title: 'Why AI-Enabled Low-Code Platforms Are Reshaping Enterprise Operations',
      category: 'AI & Automation',
      excerpt: 'Exploring how the convergence of AI and low-code platforms is transforming enterprise automation strategies and delivering unprecedented business value.',
      readTime: '8 min read',
      date: '2025-01-15',
      author: 'Dr. Sarah Chen',
      position: 'Chief Technology Officer',
      image: '/api/placeholder/600/400',
      tags: ['AI', 'Low-Code', 'Enterprise Automation', 'Digital Transformation'],
      categoryId: 'ai-automation'
    },
    {
      id: 2,
      title: 'The Future of Process Orchestration: From Manual to Intelligent',
      category: 'Digital Transformation',
      excerpt: 'A comprehensive analysis of how intelligent process orchestration is revolutionizing enterprise operations across regulated industries.',
      readTime: '12 min read',
      date: '2025-01-10',
      author: 'Michael Rodriguez',
      position: 'VP of Strategy',
      image: '/api/placeholder/600/400',
      tags: ['Process Orchestration', 'Intelligent Automation', 'Enterprise Strategy'],
      categoryId: 'digital-transformation'
    },
    {
      id: 3,
      title: 'BFSI Automation: Navigating Compliance While Driving Innovation',
      category: 'Industry Trends',
      excerpt: 'How leading financial institutions are balancing strict regulatory requirements with innovative automation solutions.',
      readTime: '10 min read',
      date: '2025-01-05',
      author: 'Jennifer Walsh',
      position: 'Industry Practice Lead',
      image: '/api/placeholder/600/400',
      tags: ['BFSI', 'Compliance', 'Financial Services', 'RegTech'],
      categoryId: 'industry-trends'
    }
  ];

  const allInsights = [
    ...featuredInsights,
    {
      id: 4,
      title: 'Building Scalable Automation: Lessons from the Frontlines',
      category: 'Low-Code Platforms',
      excerpt: 'Key insights from implementing enterprise-grade automation solutions across multiple industries and scales.',
      readTime: '6 min read',
      date: '2024-12-28',
      author: 'David Kim',
      position: 'Senior Solutions Architect',
      image: '/api/placeholder/600/400',
      tags: ['Scalability', 'Architecture', 'Best Practices'],
      categoryId: 'low-code'
    },
    {
      id: 5,
      title: 'The ROI of Cognitive Automation: Measuring Business Impact',
      category: 'AI & Automation',
      excerpt: 'A data-driven approach to measuring the return on investment from cognitive automation initiatives.',
      readTime: '9 min read',
      date: '2024-12-20',
      author: 'Lisa Thompson',
      position: 'Analytics Director',
      image: '/api/placeholder/600/400',
      tags: ['ROI', 'Cognitive Automation', 'Business Metrics'],
      categoryId: 'ai-automation'
    },
    {
      id: 6,
      title: 'Legal Tech Revolution: Document Processing at Scale',
      category: 'Industry Trends',
      excerpt: 'How AI-powered document processing is transforming legal workflows and compliance management.',
      readTime: '7 min read',
      date: '2024-12-15',
      author: 'Robert Chang',
      position: 'Legal Tech Specialist',
      image: '/api/placeholder/600/400',
      tags: ['Legal Tech', 'Document Processing', 'Compliance'],
      categoryId: 'industry-trends'
    }
  ];

  const filteredInsights = selectedCategory === 'all' 
    ? allInsights 
    : allInsights.filter(insight => insight.categoryId === selectedCategory);

  const thoughtLeadershipAreas = [
    {
      icon: LightBulbIcon,
      title: 'Innovation Research',
      description: 'Cutting-edge research on emerging technologies and their enterprise applications.',
      topics: ['AI/ML in Enterprise', 'Next-Gen Automation', 'Emerging Tech Trends']
    },
    {
      icon: ChartBarIcon,
      title: 'Market Intelligence',
      description: 'Deep analysis of industry trends, market dynamics, and competitive landscapes.',
      topics: ['Industry Reports', 'Market Analysis', 'Competitive Intelligence']
    },
    {
      icon: UserGroupIcon,
      title: 'Best Practices',
      description: 'Proven methodologies and frameworks for successful enterprise transformation.',
      topics: ['Implementation Frameworks', 'Success Patterns', 'Lessons Learned']
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
              Industry Insights &{' '}
              <span className="text-gradient-golden">
                Thought Leadership
              </span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-emerald-100 mb-8"
            >
              Stay ahead with expert insights on AI-led enterprise automation, low-code platforms, and digital transformation trends shaping the future of business.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/contact" className="btn-gold group">
                Subscribe to Insights
                <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/case-studies" className="btn-outline border-white text-white hover:bg-white hover:text-emerald-800">
                View Case Studies
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Insights */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            animate={articlesInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-emerald-900 mb-6"
            >
              Featured Insights
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-emerald-700 max-w-3xl mx-auto"
            >
              Explore our latest thought leadership content on enterprise automation, AI, and digital transformation.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {featuredInsights.map((insight, index) => (
              <motion.article
                key={insight.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-white rounded-xl shadow-emerald hover:shadow-emerald-lg transition-all duration-300 overflow-hidden card-hover border border-emerald-100"
              >
                <div className="h-48 bg-gradient-to-br from-emerald-100 to-emerald-200 flex items-center justify-center">
                  <DocumentTextIcon className="h-16 w-16 text-emerald-600" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">
                      {insight.category}
                    </span>
                    <div className="flex items-center text-emerald-500 text-sm">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      {insight.date}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-emerald-900 mb-3 line-clamp-2">
                    {insight.title}
                  </h3>
                  <p className="text-emerald-600 mb-4 leading-relaxed line-clamp-3">
                    {insight.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-emerald-200 rounded-full flex items-center justify-center mr-3">
                        <span className="text-emerald-700 font-medium text-xs">
                          {insight.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="text-emerald-800 font-medium text-sm">{insight.author}</div>
                        <div className="text-emerald-500 text-xs">{insight.position}</div>
                      </div>
                    </div>
                    <span className="text-emerald-500 text-sm">{insight.readTime}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* All Insights with Filter */}
      <section className="section-padding bg-emerald-50">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            animate={articlesInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-emerald-900 mb-6"
            >
              All Insights
            </motion.h2>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial="hidden"
            animate={articlesInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-emerald-600 text-white'
                    : 'bg-white text-emerald-600 hover:bg-emerald-100 border border-emerald-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>

          {/* Insights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredInsights.map((insight, index) => (
              <motion.article
                key={insight.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-white rounded-xl shadow-emerald hover:shadow-emerald-lg transition-all duration-300 overflow-hidden card-hover border border-emerald-100"
              >
                <div className="h-40 bg-gradient-to-br from-emerald-100 to-emerald-200 flex items-center justify-center">
                  <DocumentTextIcon className="h-12 w-12 text-emerald-600" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded">
                      {insight.category}
                    </span>
                    <span className="text-emerald-500 text-sm">{insight.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-emerald-900 mb-3 line-clamp-2">
                    {insight.title}
                  </h3>
                  <p className="text-emerald-600 mb-4 text-sm leading-relaxed line-clamp-2">
                    {insight.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {insight.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-1 bg-emerald-50 text-emerald-600 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-emerald-700 text-sm font-medium">{insight.author}</div>
                    <button className="text-emerald-600 hover:text-emerald-700 text-sm font-medium flex items-center">
                      Read More
                      <ArrowRightIcon className="h-3 w-3 ml-1" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Thought Leadership Areas */}
      <section ref={thoughtRef} className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            animate={thoughtInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-emerald-900 mb-6"
            >
              Our Thought Leadership Focus Areas
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-emerald-700 max-w-3xl mx-auto"
            >
              Strategic research and insights across key domains that drive enterprise transformation.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {thoughtLeadershipAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-8 rounded-xl hover:from-emerald-100 hover:to-emerald-200 transition-all duration-300 border border-emerald-200"
              >
                <area.icon className="h-12 w-12 text-emerald-600 mb-6" />
                <h3 className="text-xl font-bold text-emerald-900 mb-4">
                  {area.title}
                </h3>
                <p className="text-emerald-700 mb-6 leading-relaxed">
                  {area.description}
                </p>
                <div className="space-y-2">
                  <h4 className="font-medium text-emerald-800 text-sm">Key Topics:</h4>
                  {area.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="flex items-center text-emerald-600 text-sm">
                      <CheckCircleIcon className="h-4 w-4 text-emerald-500 mr-2" />
                      {topic}
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
              Stay Ahead of the Automation Curve
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Get exclusive insights, industry reports, and thought leadership content delivered to your inbox. Join thousands of enterprise leaders who trust our expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-gold group">
                Subscribe to Insights
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

export default Insights;