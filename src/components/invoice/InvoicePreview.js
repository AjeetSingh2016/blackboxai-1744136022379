import React from 'react';
import { motion } from 'framer-motion';

const InvoicePreview = ({ invoice }) => {
  const formatCurrency = (amount) => {
    const symbols = {
      USD: '$',
      EUR: '€',
      INR: '₹'
    };
    return `${symbols[invoice.currency]}${amount.toFixed(2)}`;
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white rounded-lg shadow-sm p-8 min-h-[29.7cm] w-full max-w-[21cm] mx-auto"
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-12">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-1">INVOICE</h1>
          <p className="text-gray-600">{invoice.invoiceNumber}</p>
        </div>
        <div className="text-right">
          <p className="text-gray-600 mb-1">Issue Date: {formatDate(invoice.invoiceDate)}</p>
          <p className="text-gray-600">Due Date: {formatDate(invoice.dueDate)}</p>
        </div>
      </div>

      {/* Addresses */}
      <div className="grid grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-gray-600 font-medium mb-2">From:</h2>
          <div className="text-gray-800">
            <p className="font-semibold">{invoice.freelancerDetails.name}</p>
            <p className="whitespace-pre-line">{invoice.freelancerDetails.address}</p>
            <p>{invoice.freelancerDetails.email}</p>
          </div>
        </div>
        <div>
          <h2 className="text-gray-600 font-medium mb-2">To:</h2>
          <div className="text-gray-800">
            <p className="font-semibold">{invoice.clientDetails.name}</p>
            <p className="whitespace-pre-line">{invoice.clientDetails.address}</p>
            <p>{invoice.clientDetails.email}</p>
          </div>
        </div>
      </div>

      {/* Items Table */}
      <table className="w-full mb-8">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="py-3 text-left text-gray-600">Description</th>
            <th className="py-3 text-right text-gray-600">Quantity</th>
            <th className="py-3 text-right text-gray-600">Unit Price</th>
            <th className="py-3 text-right text-gray-600">Amount</th>
          </tr>
        </thead>
        <tbody>
          {invoice.items.map((item, index) => (
            <tr key={index} className="border-b border-gray-100">
              <td className="py-4 text-gray-800">{item.description}</td>
              <td className="py-4 text-right text-gray-800">{item.quantity}</td>
              <td className="py-4 text-right text-gray-800">{formatCurrency(item.unitPrice)}</td>
              <td className="py-4 text-right text-gray-800">
                {formatCurrency(item.quantity * item.unitPrice)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Totals */}
      <div className="border-t border-gray-200 pt-4 space-y-2">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal:</span>
          <span className="text-gray-800">{formatCurrency(invoice.subtotal)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Tax ({invoice.taxPercentage}%):</span>
          <span className="text-gray-800">{formatCurrency(invoice.taxAmount)}</span>
        </div>
        <div className="flex justify-between font-semibold text-lg pt-2 border-t border-gray-200">
          <span>Total:</span>
          <span>{formatCurrency(invoice.total)}</span>
        </div>
      </div>

      {/* Notes */}
      {invoice.notes && (
        <div className="mt-12">
          <h3 className="text-gray-600 font-medium mb-2">Notes:</h3>
          <p className="text-gray-800 whitespace-pre-line">{invoice.notes}</p>
        </div>
      )}
    </motion.div>
  );
};

export default InvoicePreview;
