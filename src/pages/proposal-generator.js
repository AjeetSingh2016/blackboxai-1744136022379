import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import { DocumentTextIcon } from '@heroicons/react/24/outline';

const ProposalGenerator = () => {
  const [formData, setFormData] = useState({
    freelancerName: '',
    clientName: '',
    projectTitle: '',
    projectDescription: '',
    timeline: '',
    pricing: '',
    terms: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-4"
            >
              <DocumentTextIcon className="h-8 w-8 text-blue-600" />
            </motion.div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Proposal Generator</h1>
            <p className="text-lg text-gray-600">Create professional proposals in minutes</p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form Section */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <label className="block">
                    <span className="text-gray-700 font-medium">Freelancer Name</span>
                    <input
                      type="text"
                      name="freelancerName"
                      value={formData.freelancerName}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Your name"
                    />
                  </label>

                  <label className="block">
                    <span className="text-gray-700 font-medium">Client Name</span>
                    <input
                      type="text"
                      name="clientName"
                      value={formData.clientName}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Client's name"
                    />
                  </label>

                  <label className="block">
                    <span className="text-gray-700 font-medium">Project Title</span>
                    <input
                      type="text"
                      name="projectTitle"
                      value={formData.projectTitle}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Enter project title"
                    />
                  </label>

                  <label className="block">
                    <span className="text-gray-700 font-medium">Project Description</span>
                    <textarea
                      name="projectDescription"
                      value={formData.projectDescription}
                      onChange={handleChange}
                      rows="4"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Describe the project scope and deliverables"
                    />
                  </label>

                  <label className="block">
                    <span className="text-gray-700 font-medium">Timeline</span>
                    <input
                      type="text"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="e.g., 2 weeks, 1 month"
                    />
                  </label>

                  <label className="block">
                    <span className="text-gray-700 font-medium">Pricing</span>
                    <input
                      type="text"
                      name="pricing"
                      value={formData.pricing}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Enter project cost"
                    />
                  </label>

                  <label className="block">
                    <span className="text-gray-700 font-medium">Terms & Conditions</span>
                    <textarea
                      name="terms"
                      value={formData.terms}
                      onChange={handleChange}
                      rows="4"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      placeholder="Add your terms and conditions"
                    />
                  </label>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
                >
                  Generate Proposal
                </motion.button>
              </form>
            </motion.div>

            {/* Preview Section */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Preview</h2>
              <div className="prose max-w-none">
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {formData.projectTitle || 'Project Title'}
                  </h3>
                  <div className="mt-4 space-y-2">
                    <p><strong>From:</strong> {formData.freelancerName || 'Your Name'}</p>
                    <p><strong>To:</strong> {formData.clientName || 'Client Name'}</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900">Project Description</h4>
                  <p className="mt-2 text-gray-600">
                    {formData.projectDescription || 'Project description will appear here...'}
                  </p>
                </div>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900">Timeline & Pricing</h4>
                  <div className="mt-2 space-y-2">
                    <p><strong>Timeline:</strong> {formData.timeline || 'Timeline details'}</p>
                    <p><strong>Pricing:</strong> {formData.pricing || 'Pricing details'}</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Terms & Conditions</h4>
                  <p className="mt-2 text-gray-600">
                    {formData.terms || 'Terms and conditions will appear here...'}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProposalGenerator;
