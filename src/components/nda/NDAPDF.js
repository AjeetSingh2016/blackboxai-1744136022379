import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';

// Register fonts
Font.register({
  family: 'Inter',
  fonts: [
    { src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2', fontWeight: 400 },
    { src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYAZ9hiA.woff2', fontWeight: 600 }
  ]
});

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 11,
    fontFamily: 'Inter',
    color: '#1F2937'
  },
  header: {
    textAlign: 'center',
    marginBottom: 20
  },
  title: {
    fontSize: 18,
    fontWeight: 600,
    marginBottom: 8
  },
  date: {
    fontSize: 11,
    color: '#4B5563',
    marginBottom: 20
  },
  section: {
    marginBottom: 20
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 600,
    marginBottom: 8
  },
  paragraph: {
    marginBottom: 8,
    lineHeight: 1.6
  },
  partyInfo: {
    marginBottom: 16
  },
  partyName: {
    fontWeight: 600,
    marginBottom: 4
  },
  partyDetails: {
    color: '#4B5563'
  },
  clause: {
    marginBottom: 16
  },
  clauseTitle: {
    fontWeight: 600,
    marginBottom: 6
  },
  clauseContent: {
    lineHeight: 1.6
  },
  signatures: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  signatureBlock: {
    width: '45%'
  },
  signatureLine: {
    borderTopWidth: 1,
    borderColor: '#9CA3AF',
    marginTop: 40,
    paddingTop: 8
  }
});

const NDAPDF = ({ nda }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>NON-DISCLOSURE AGREEMENT</Text>
          <Text style={styles.date}>Date: {formatDate(nda.agreementDate)}</Text>
        </View>

        {/* Parties */}
        <View style={styles.section}>
          <Text style={styles.paragraph}>
            This Non-Disclosure Agreement (the "Agreement") is entered into by and between:
          </Text>

          <View style={styles.partyInfo}>
            <Text style={styles.partyName}>{nda.disclosingParty.name}</Text>
            <Text style={styles.partyDetails}>{nda.disclosingParty.address}</Text>
            {nda.disclosingParty.representative && (
              <Text style={styles.partyDetails}>
                Represented by: {nda.disclosingParty.representative}
              </Text>
            )}
            <Text style={[styles.partyDetails, { fontStyle: 'italic', marginTop: 4 }]}>
              (hereinafter referred to as the "Disclosing Party")
            </Text>
          </View>

          <Text style={{ textAlign: 'center', marginVertical: 8 }}>and</Text>

          <View style={styles.partyInfo}>
            <Text style={styles.partyName}>{nda.receivingParty.name}</Text>
            <Text style={styles.partyDetails}>{nda.receivingParty.address}</Text>
            {nda.receivingParty.representative && (
              <Text style={styles.partyDetails}>
                Represented by: {nda.receivingParty.representative}
              </Text>
            )}
            <Text style={[styles.partyDetails, { fontStyle: 'italic', marginTop: 4 }]}>
              (hereinafter referred to as the "Receiving Party")
            </Text>
          </View>
        </View>

        {/* Clauses */}
        {nda.selectedClauses.definition && (
          <View style={styles.clause}>
            <Text style={styles.clauseTitle}>1. Definition of Confidential Information</Text>
            <Text style={styles.clauseContent}>
              "Confidential Information" means any and all non-public information, including but not limited to, trade secrets, technical data, business methods, customer lists, marketing plans, product information, and any other proprietary information disclosed by the Disclosing Party to the Receiving Party, either directly or indirectly, in writing, orally, or by inspection of tangible objects.
            </Text>
          </View>
        )}

        {nda.selectedClauses.obligations && (
          <View style={styles.clause}>
            <Text style={styles.clauseTitle}>2. Obligations of Receiving Party</Text>
            <Text style={styles.clauseContent}>
              The Receiving Party agrees to:{'\n'}
              a) Keep and maintain all Confidential Information in strict confidence;{'\n'}
              b) Not disclose Confidential Information to any third party without prior written consent from the Disclosing Party;{'\n'}
              c) Use Confidential Information solely for the purpose of evaluating potential business opportunities between the parties;{'\n'}
              d) Take all reasonable precautions to prevent unauthorized disclosure of Confidential Information.
            </Text>
          </View>
        )}

        {nda.selectedClauses.exceptions && (
          <View style={styles.clause}>
            <Text style={styles.clauseTitle}>3. Exceptions to Confidential Information</Text>
            <Text style={styles.clauseContent}>
              The obligations under this Agreement do not apply to information that:{'\n'}
              a) Was publicly known at the time of disclosure;{'\n'}
              b) Becomes publicly known through no fault of the Receiving Party;{'\n'}
              c) Was rightfully in Receiving Party's possession prior to disclosure;{'\n'}
              d) Is required to be disclosed by law or governmental order.
            </Text>
          </View>
        )}

        {nda.selectedClauses.return && (
          <View style={styles.clause}>
            <Text style={styles.clauseTitle}>4. Return of Confidential Information</Text>
            <Text style={styles.clauseContent}>
              Upon written request by the Disclosing Party, the Receiving Party shall promptly return all Confidential Information, including all copies, notes, and derivatives thereof, or certify its destruction.
            </Text>
          </View>
        )}

        {nda.selectedClauses.termination && (
          <View style={styles.clause}>
            <Text style={styles.clauseTitle}>5. Term and Termination</Text>
            <Text style={styles.clauseContent}>
              This Agreement shall remain in effect for a period of {nda.confidentialityPeriod} years from the date of execution. The obligations of confidentiality shall survive the termination of this Agreement.
            </Text>
          </View>
        )}

        {nda.selectedClauses.survival && (
          <View style={styles.clause}>
            <Text style={styles.clauseTitle}>6. Survival</Text>
            <Text style={styles.clauseContent}>
              The obligations contained in this Agreement shall survive the termination of this Agreement for the period specified herein.
            </Text>
          </View>
        )}

        {/* Custom Clauses */}
        {nda.customClauses && (
          <View style={styles.clause}>
            <Text style={styles.clauseTitle}>7. Additional Terms</Text>
            <Text style={styles.clauseContent}>{nda.customClauses}</Text>
          </View>
        )}

        {/* Jurisdiction */}
        {nda.jurisdiction && (
          <View style={styles.clause}>
            <Text style={styles.clauseTitle}>8. Governing Law</Text>
            <Text style={styles.clauseContent}>
              This Agreement shall be governed by and construed in accordance with the laws of {nda.jurisdiction}.
            </Text>
          </View>
        )}

        {/* Signatures */}
        <View style={styles.signatures}>
          <View style={styles.signatureBlock}>
            <Text style={styles.clauseTitle}>DISCLOSING PARTY:</Text>
            <View style={styles.signatureLine}>
              <Text>{nda.disclosingParty.name}</Text>
              {nda.disclosingParty.representative && (
                <Text style={{ fontSize: 10, color: '#4B5563' }}>
                  By: {nda.disclosingParty.representative}
                </Text>
              )}
            </View>
          </View>

          <View style={styles.signatureBlock}>
            <Text style={styles.clauseTitle}>RECEIVING PARTY:</Text>
            <View style={styles.signatureLine}>
              <Text>{nda.receivingParty.name}</Text>
              {nda.receivingParty.representative && (
                <Text style={{ fontSize: 10, color: '#4B5563' }}>
                  By: {nda.receivingParty.representative}
                </Text>
              )}
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default NDAPDF;
