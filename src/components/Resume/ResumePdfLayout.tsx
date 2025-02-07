import { type FC } from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
// utils
import { PdfPageSize } from "./config";
import HeaderSection from "./HeaderSection";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#E4E4E4",
    aspectRatio: PdfPageSize.aspectRatio,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

/** ### Resume-PDF document layout component */
const ResumePdfLayout: FC = () => (
  <Document pageMode="fullScreen" pageLayout="singlePage">
    <Page size={PdfPageSize.label} orientation="portrait" style={styles.page}>
      {/* Sections */}
      <HeaderSection />

      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);

export default ResumePdfLayout;
