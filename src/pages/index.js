import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import Link from 'next/link';
import { DocumentTextIcon, PencilSquareIcon, CalculatorIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const features = [
  {
    icon: DocumentTextIcon,
    title: 'Proposal Generator',
    description: 'Create professional proposals in minutes with our easy-to-use generator.',
    href: '/proposal-generator',
    color: 'blue',
    gradient: 'from-blue-50 to-white'
  },
  {
    icon: PencilSquareIcon,
    title: 'Contract Signing',
    description: 'Securely sign and manage contracts with our digital signing tool.',
    href: '/contract-signing',
    color: 'green',
    gradient: 'from-green-50 to-white'
  },
  {
    icon: CalculatorIcon,
    title: 'Invoice Generator',
    description: 'Generate professional invoices with automatic tax calculations and multiple currency support.',
    href: '/invoice-generator',
    color: 'purple',
    gradient: 'from-purple-50 to-white'
  },
  {
    icon: ShieldCheckIcon,
    title: 'NDA Generator',
    description: 'Create customized Non-Disclosure Agreements with predefined legal clauses.',
    href: '/nda-generator',
    color: 'orange',
    gradient: 'from-orange-50 to-white'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export default function Home() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl font-bold text-gray-900"
          >
            <span className="block">Professional Tools for</span>
            <span className="block mt-2 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Modern Freelancers
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Streamline your workflow with our comprehensive suite of tools designed for freelancers and businesses.
          </motion.p>
        </div>

        {/* Features Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="relative group"
              >
                <Link href={feature.href}>
                  <div className={`
                    p-8 rounded-2xl bg-gradient-to-b ${feature.gradient}
                    shadow-lg hover:shadow-xl transition-all duration-300
                    border border-gray-100
                  `}>
                    <div className={`
                      inline-flex p-3 rounded-lg
                      ${feature.color === 'blue' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'}
                    `}>
                      <feature.icon className="h-8 w-8" />
                    </div>
                    <h3 className="mt-6 text-2xl font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="mt-4 text-gray-600">
                      {feature.description}
                    </p>
                    <div className={`
                      mt-6 inline-flex items-center text-sm font-medium
                      ${feature.color === 'blue' ? 'text-blue-600' : 'text-green-600'}
                    `}>
                      Get Started
                      <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900">
            Ready to streamline your workflow?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Start using our tools today and experience the difference.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/proposal-generator" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                Create a Proposal
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/contract-signing" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700">
                Sign a Contract
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
