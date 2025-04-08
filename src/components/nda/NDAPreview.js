import React from 'react';
import { motion } from 'framer-motion';

const NDAPreview = ({ nda }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const renderClause = (title, content) => (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 whitespace-pre-line">{content}</p>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white rounded-lg shadow-sm p-8 min-h-[29.7cm] w-full max-w-[21cm] mx-auto"
    >
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">NON-DISCLOSURE AGREEMENT</h1>
        <p className="text-gray-600">Date: {formatDate(nda.agreementDate)}</p>
      </div>

      {/* Parties */}
      <div className="mb-8">
        <p className="mb-4">This Non-Disclosure Agreement (the "Agreement") is entered into by and between:</p>
        
        <div className="mb-4">
          <p className="font-semibold">{nda.disclosingParty.name}</p>
          <p className="whitespace-pre-line">{nda.disclosingParty.address}</p>
          {nda.disclosingParty.representative && (
            <p>Represented by: {nda.disclosingParty.representative}</p>
          )}
          <p className="mt-2 italic">(hereinafter referred to as the "Disclosing Party")</p>
        </div>

        <p className="text-center mb-4">and</p>

        <div className="mb-4">
          <p className="font-semibold">{nda.receivingParty.name}</p>
          <p className="whitespace-pre-line">{nda.receivingParty.address}</p>
          {nda.receivingParty.representative && (
            <p>Represented by: {nda.receivingParty.representative}</p>
          )}
          <p className="mt-2 italic">(hereinafter referred to as the "Receiving Party")</p>
        </div>
      </div>

      {/* Standard Clauses */}
      {nda.selectedClauses.definition && renderClause(
        "1. Definition of Confidential Information",
        `"Confidential Information" means any and all non-public information, including but not limited to, trade secrets, technical data, business methods, customer lists, marketing plans, product information, and any other proprietary information disclosed by the Disclosing Party to the Receiving Party, either directly or indirectly, in writing, orally, or by inspection of tangible objects.`
      )}

      {nda.selectedClauses.obligations && renderClause(
        "2. Obligations of Receiving Party",
        `The Receiving Party agrees to:
a) Keep and maintain all Confidential Information in strict confidence;
b) Not disclose Confidential Information to any third party without prior written consent from the Disclosing Party;
c) Use Confidential Information solely for the purpose of evaluating potential business opportunities between the parties;
d) Take all reasonable precautions to prevent unauthorized disclosure of Confidential Information.`
      )}

      {nda.selectedClauses.exceptions && renderClause(
        "3. Exceptions to Confidential Information",
        `The obligations under this Agreement do not apply to information that:
a) Was publicly known at the time of disclosure;
b) Becomes publicly known through no fault of the Receiving Party;
c) Was rightfully in Receiving Party's possession prior to disclosure;
d) Is required to be disclosed by law or governmental order.`
      )}

      {nda.selectedClauses.return && renderClause(
        "4. Return of Confidential Information",
        `Upon written request by the Disclosing Party, the Receiving Party shall promptly return all Confidential Information, including all copies, notes, and derivatives thereof, or certify its destruction.`
      )}

      {nda.selectedClauses.termination && renderClause(
        "5. Term and Termination",
        `This Agreement shall remain in effect for a period of ${nda.confidentialityPeriod} years from the date of execution. The obligations of confidentiality shall survive the termination of this Agreement.`
      )}

      {nda.selectedClauses.survival && renderClause(
        "6. Survival",
        `The obligations contained in this Agreement shall survive the termination of this Agreement for the period specified herein.`
      )}

      {/* Custom Clauses */}
      {nda.customClauses && renderClause(
        "7. Additional Terms",
        nda.customClauses
      )}

      {/* Jurisdiction */}
      {nda.jurisdiction && renderClause(
        "8. Governing Law",
        `This Agreement shall be governed by and construed in accordance with the laws of ${nda.jurisdiction}.`
      )}

      {/* Signature Block */}
      <div className="mt-12 grid grid-cols-2 gap-8">
        <div>
          <p className="font-semibold mb-8">DISCLOSING PARTY:</p>
          <div className="border-t border-gray-300 pt-2">
            <p>{nda.disclosingParty.name}</p>
            {nda.disclosingParty.representative && (
              <p className="text-sm text-gray-600">By: {nda.disclosingParty.representative}</p>
            )}
          </div>
        </div>
        <div>
          <p className="font-semibold mb-8">RECEIVING PARTY:</p>
          <div className="border-t border-gray-300 pt-2">
            <p>{nda.receivingParty.name}</p>
            {nda.receivingParty.representative && (
              <p className="text-sm text-gray-600">By: {nda.receivingParty.representative}</p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default NDAPreview;
