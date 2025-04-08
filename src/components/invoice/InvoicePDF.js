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
    fontSize: 12,
    fontFamily: 'Inter',
    color: '#1F2937'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40
  },
  headerLeft: {
    flexDirection: 'column'
  },
  headerRight: {
    flexDirection: 'column',
    alignItems: 'flex-end'
  },
  title: {
    fontSize: 24,
    fontWeight: 600,
    marginBottom: 4
  },
  invoiceNumber: {
    color: '#4B5563'
  },
  date: {
    color: '#4B5563',
    marginBottom: 2
  },
  addresses: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40
  },
  addressBlock: {
    width: '45%'
  },
  addressTitle: {
    color: '#4B5563',
    fontWeight: 600,
    marginBottom: 8
  },
  addressText: {
    marginBottom: 4
  },
  table: {
    flexDirection: 'column',
    marginBottom: 20
  },
  tableHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    paddingBottom: 8,
    marginBottom: 8
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
    paddingVertical: 8
  },
  description: {
    flex: 3
  },
  quantity: {
    flex: 1,
    textAlign: 'right'
  },
  unitPrice: {
    flex: 1,
    textAlign: 'right'
  },
  amount: {
    flex: 1,
    textAlign: 'right'
  },
  totals: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginTop: 20,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB'
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 4
  },
  totalLabel: {
    width: 100,
    textAlign: 'right',
    marginRight: 20,
    color: '#4B5563'
  },
  totalAmount: {
    width: 100,
    textAlign: 'right'
  },
  grandTotal: {
    fontWeight: 600,
    fontSize: 14,
    marginTop: 8,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB'
  },
  notes: {
    marginTop: 40,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB'
  },
  notesTitle: {
    color: '#4B5563',
    fontWeight: 600,
    marginBottom: 8
  }
});

const InvoicePDF = ({ invoice }) => {
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
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text style={styles.title}>INVOICE</Text>
            <Text style={styles.invoiceNumber}>{invoice.invoiceNumber}</Text>
          </View>
          <View style={styles.headerRight}>
            <Text style={styles.date}>Issue Date: {formatDate(invoice.invoiceDate)}</Text>
            <Text style={styles.date}>Due Date: {formatDate(invoice.dueDate)}</Text>
          </View>
        </View>

        {/* Addresses */}
        <View style={styles.addresses}>
          <View style={styles.addressBlock}>
            <Text style={styles.addressTitle}>From:</Text>
            <Text style={styles.addressText}>{invoice.freelancerDetails.name}</Text>
            <Text style={styles.addressText}>{invoice.freelancerDetails.address}</Text>
            <Text style={styles.addressText}>{invoice.freelancerDetails.email}</Text>
          </View>
          <View style={styles.addressBlock}>
            <Text style={styles.addressTitle}>To:</Text>
            <Text style={styles.addressText}>{invoice.clientDetails.name}</Text>
            <Text style={styles.addressText}>{invoice.clientDetails.address}</Text>
            <Text style={styles.addressText}>{invoice.clientDetails.email}</Text>
          </View>
        </View>

        {/* Items Table */}
        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <Text style={styles.description}>Description</Text>
            <Text style={styles.quantity}>Quantity</Text>
            <Text style={styles.unitPrice}>Unit Price</Text>
            <Text style={styles.amount}>Amount</Text>
          </View>
          {invoice.items.map((item, index) => (
            <View key={index} style={styles.tableRow}>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={styles.quantity}>{item.quantity}</Text>
              <Text style={styles.unitPrice}>{formatCurrency(item.unitPrice)}</Text>
              <Text style={styles.amount}>
                {formatCurrency(item.quantity * item.unitPrice)}
              </Text>
            </View>
          ))}
        </View>

        {/* Totals */}
        <View style={styles.totals}>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Subtotal:</Text>
            <Text style={styles.totalAmount}>{formatCurrency(invoice.subtotal)}</Text>
          </View>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Tax ({invoice.taxPercentage}%):</Text>
            <Text style={styles.totalAmount}>{formatCurrency(invoice.taxAmount)}</Text>
          </View>
          <View style={[styles.totalRow, styles.grandTotal]}>
            <Text style={styles.totalLabel}>Total:</Text>
            <Text style={styles.totalAmount}>{formatCurrency(invoice.total)}</Text>
          </View>
        </View>

        {/* Notes */}
        {invoice.notes && (
          <View style={styles.notes}>
            <Text style={styles.notesTitle}>Notes:</Text>
            <Text>{invoice.notes}</Text>
          </View>
        )}
      </Page>
    </Document>
  );
};

export default InvoicePDF;
