import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PDFDownloadLink } from '@react-pdf/renderer';
import Layout from '../components/layout/Layout';
import InvoiceForm from '../components/invoice/InvoiceForm';
import InvoicePreview from '../components/invoice/InvoicePreview';
import InvoicePDF from '../components/invoice/InvoicePDF';
import { DocumentArrowDownIcon } from '@heroicons/react/24/outline';

export default function InvoiceGenerator() {
  const [invoice, setInvoice] = useState(null);
  const [view, setView] = useState('form'); // 'form' or 'preview'

  const handleUpdateInvoice = (data) => {
    setInvoice(data);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold text-gray-900"
            >
              Invoice Generator
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-2 text-gray-600"
            >
              Create professional invoices with automatic calculations and tax support
            </motion.p>
          </div>

          {/* View Toggle */}
          <div className="mb-6">
            <div className="flex space-x-4">
              <button
                onClick={() => setView('form')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  view === 'form'
                    ? 'bg-purple-100 text-purple-700'
                    : 'text-gray-500 hover:text-purple-700'
                }`}
              >
                Edit
              </button>
              <button
                onClick={() => setView('preview')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  view === 'preview'
                    ? 'bg-purple-100 text-purple-700'
                    : 'text-gray-500 hover:text-purple-700'
                }`}
              >
                Preview
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className={view === 'form' ? 'lg:col-span-2' : 'hidden lg:block'}
            >
              <InvoiceForm onUpdateInvoice={handleUpdateInvoice} />
            </motion.div>

            {/* Preview Section */}
            {invoice && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className={view === 'preview' ? 'lg:col-span-2' : 'hidden lg:block'}
              >
                <div className="sticky top-8">
                  {/* Download Button */}
                  <div className="mb-4 flex justify-end">
                    <PDFDownloadLink
                      document={<InvoicePDF invoice={invoice} />}
                      fileName={`${invoice.invoiceNumber}.pdf`}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                    >
                      {({ loading }) => (
                        <>
                          <DocumentArrowDownIcon className="h-5 w-5 mr-2" />
                          {loading ? 'Preparing PDF...' : 'Download PDF'}
                        </>
                      )}
                    </PDFDownloadLink>
                  </div>
                  
                  {/* Preview */}
                  <div className="bg-gray-100 rounded-lg p-4 overflow-auto max-h-[calc(100vh-200px)]">
                    <InvoicePreview invoice={invoice} />
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
