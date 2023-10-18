import React from 'react';
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#efefef'
  },
  section: {
    width: '500px',
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
export const DocumentView = () => (
  <Document >
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
        <Text>Section #2</Text>
        <Text>Section #2</Text>
        <Text>Section #2</Text>
        <Text>Section #2</Text>
        <Text>Section #2</Text>
        <Text>Section #2</Text>
        <Text>Section #2</Text>
        <Text>Section #2</Text>
        <Text>Section #2</Text>
        <Text>Section #2</Text>
        <Text>Section #2</Text>
        <Text>Section #2</Text>
        <Text>Section #2</Text>
        <Text>Section #2</Text>
        <Text>Section #2</Text>
        <Text>Section #2</Text>
        <Text>Section #2</Text>
        <Text>Section #2</Text>
        <Text>Section #2</Text>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);