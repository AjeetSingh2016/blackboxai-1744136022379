import React, { useState } from 'react';
import { motion } from 'framer-motion';

const NDAForm = ({ onUpdateNDA }) => {
  const [formData, setFormData] = useState({
    disclosingParty: {
      name: '',
      address: '',
      representative: ''
    },
    receivingParty: {
      name: '',
      address: '',
      representative: ''
    },
    agreementDate: new Date().toISOString().split('T')[0],
    confidentialityPeriod: '2',
    jurisdiction: '',
    selectedClauses: {
      definition: true,
      obligations: true,
      exceptions: true,
      return: true,
      termination: true,
      survival: true
    },
    customClauses: ''
  });

  const handleInputChange = (section, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: typeof prev[section] === 'object'
        ? { ...prev[section], [field]: value }
        : value
    }));
  };

  const handleClauseToggle = (clause) => {
    setFormData(prev => ({
      ...prev,
      selectedClauses: {
        ...prev.selectedClauses,
        [clause]: !prev.selectedClauses[clause]
      }
    }));
  };

  // Update parent component whenever form data changes
  React.useEffect(() => {
    onUpdateNDA(formData);
  }, [formData, onUpdateNDA]);

  return (
    <div className="space-y-8">
      {/* Disclosing Party Details */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-6 rounded-lg shadow-sm"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Disclosing Party</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Company/Individual Name</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              value={formData.disclosingParty.name}
              onChange={(e) => handleInputChange('disclosingParty', 'name', e.target.value)}
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <textarea
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              rows="2"
              value={formData.disclosingParty.address}
              onChange={(e) => handleInputChange('disclosingParty', 'address', e.target.value)}
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Authorized Representative</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              value={formData.disclosingParty.representative}
              onChange={(e) => handleInputChange('disclosingParty', 'representative', e.target.value)}
            />
          </div>
        </div>
      </motion.div>

      {/* Receiving Party Details */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white p-6 rounded-lg shadow-sm"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Receiving Party</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Company/Individual Name</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              value={formData.receivingParty.name}
              onChange={(e) => handleInputChange('receivingParty', 'name', e.target.value)}
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <textarea
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              rows="2"
              value={formData.receivingParty.address}
              onChange={(e) => handleInputChange('receivingParty', 'address', e.target.value)}
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Authorized Representative</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              value={formData.receivingParty.representative}
              onChange={(e) => handleInputChange('receivingParty', 'representative', e.target.value)}
            />
          </div>
        </div>
      </motion.div>

      {/* Agreement Details */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white p-6 rounded-lg shadow-sm"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Agreement Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Agreement Date</label>
            <input
              type="date"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              value={formData.agreementDate}
              onChange={(e) => handleInputChange('agreementDate', null, e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Confidentiality Period (Years)</label>
            <select
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              value={formData.confidentialityPeriod}
              onChange={(e) => handleInputChange('confidentialityPeriod', null, e.target.value)}
            >
              <option value="1">1 Year</option>
              <option value="2">2 Years</option>
              <option value="3">3 Years</option>
              <option value="5">5 Years</option>
              <option value="10">10 Years</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Jurisdiction</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
              placeholder="e.g., State of California, United States"
              value={formData.jurisdiction}
              onChange={(e) => handleInputChange('jurisdiction', null, e.target.value)}
            />
          </div>
        </div>
      </motion.div>

      {/* Clauses */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white p-6 rounded-lg shadow-sm"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Standard Clauses</h3>
        <div className="space-y-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
              checked={formData.selectedClauses.definition}
              onChange={() => handleClauseToggle('definition')}
            />
            <label className="ml-2 block text-sm text-gray-700">
              Definition of Confidential Information
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
              checked={formData.selectedClauses.obligations}
              onChange={() => handleClauseToggle('obligations')}
            />
            <label className="ml-2 block text-sm text-gray-700">
              Obligations of Receiving Party
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
              checked={formData.selectedClauses.exceptions}
              onChange={() => handleClauseToggle('exceptions')}
            />
            <label className="ml-2 block text-sm text-gray-700">
              Exceptions to Confidential Information
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
              checked={formData.selectedClauses.return}
              onChange={() => handleClauseToggle('return')}
            />
            <label className="ml-2 block text-sm text-gray-700">
              Return of Confidential Information
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
              checked={formData.selectedClauses.termination}
              onChange={() => handleClauseToggle('termination')}
            />
            <label className="ml-2 block text-sm text-gray-700">
              Termination
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
              checked={formData.selectedClauses.survival}
              onChange={() => handleClauseToggle('survival')}
            />
            <label className="ml-2 block text-sm text-gray-700">
              Survival of Obligations
            </label>
          </div>
        </div>
      </motion.div>

      {/* Custom Clauses */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white p-6 rounded-lg shadow-sm"
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Custom Clauses</h3>
        <div>
          <label className="block text-sm font-medium text-gray-700">Additional Terms (Optional)</label>
          <textarea
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
            rows="4"
            placeholder="Enter any additional terms or clauses..."
            value={formData.customClauses}
            onChange={(e) => handleInputChange('customClauses', null, e.target.value)}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default NDAForm;
