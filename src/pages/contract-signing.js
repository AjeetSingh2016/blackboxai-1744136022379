import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import { DocumentTextIcon, ArrowUpTrayIcon, TrashIcon } from '@heroicons/react/24/outline';

const ContractSigning = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const signatureRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      setPdfFile(URL.createObjectURL(file));
    }
  };

  const handleClearSignature = () => {
    if (signatureRef.current) {
      signatureRef.current.clear();
    }
  };

  const handleDownload = () => {
    // Logic to download the signed contract as PDF
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center p-3 bg-green-100 rounded-full mb-4"
            >
              <DocumentTextIcon className="h-8 w-8 text-green-600" />
            </motion.div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Contract E-Signing</h1>
            <p className="text-lg text-gray-600">Sign your documents securely and professionally</p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Upload Section */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Upload Contract</h2>
              
              {/* File Upload Area */}
              <div className="mb-8">
                <div className="flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-xl hover:border-green-500 transition-colors duration-200">
                  <div className="space-y-2 text-center">
                    <div className="mx-auto h-12 w-12 text-gray-400">
                      <ArrowUpTrayIcon className="h-12 w-12" />
                    </div>
                    <div className="flex text-sm text-gray-600">
                      <label className="relative cursor-pointer rounded-md font-medium text-green-600 hover:text-green-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-green-500">
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                          accept="application/pdf"
                          onChange={handleFileChange}
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PDF up to 10MB</p>
                  </div>
                </div>
                {fileName && (
                  <p className="mt-2 text-sm text-gray-600">
                    Selected file: {fileName}
                  </p>
                )}
              </div>

              {/* Signature Area */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Your Signature</h3>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleClearSignature}
                    className="text-gray-500 hover:text-red-500 transition-colors duration-200"
                  >
                    <TrashIcon className="h-5 w-5" />
                  </motion.button>
                </div>
                <div className="border-2 border-gray-200 rounded-xl p-4">
                  <div className="bg-gray-50 h-40 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">Click or touch to sign</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Preview Section */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contract Preview</h2>
              
              {/* PDF Preview */}
              <div className="bg-gray-50 rounded-xl h-[500px] flex items-center justify-center mb-8">
                {pdfFile ? (
                  <iframe
                    src={pdfFile}
                    className="w-full h-full rounded-xl"
                    title="Contract Preview"
                  />
                ) : (
                  <p className="text-gray-500">Upload a contract to preview</p>
                )}
              </div>

              {/* Download Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleDownload}
                disabled={!pdfFile}
                className={`w-full py-3 px-6 rounded-lg font-medium transition-colors duration-200 ${
                  pdfFile
                    ? 'bg-green-600 text-white hover:bg-green-700'
                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                }`}
              >
                Download Signed Contract
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContractSigning;
