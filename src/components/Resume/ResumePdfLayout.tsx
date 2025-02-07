import { type FC } from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { PdfPageSize } from "./config";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#E4E4E4",
    aspectRatio: PdfPageSize.ratio,
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
    <Page size={PdfPageSize.label} orientation="portrait" wrap={false} style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);

export default ResumePdfLayout;
