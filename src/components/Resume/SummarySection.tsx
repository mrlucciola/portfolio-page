import { type FC } from "react";
import { StyleSheet, Text, View } from "@react-pdf/renderer";
// config
import { pdfDefaultStyles } from "./config";

const styles = StyleSheet.create({
  section: {
    ...pdfDefaultStyles.section,
    //
  },
  text: { fontSize: 10 },
});

/** Breaking the sentences up to be easier to edit. */
const textContent = `
Full stack software developer with extensive experience in
  designing, implementing, and maintaining robust software solutions,
  coupled with extensive client-facing experience.

Successful history in both contract and direct hire roles.

Eager to apply technical skills in a full-time development role within
the financial industry.`
  // Convert various and duplicate white space to "single space"
  .replaceAll(/\s+/g, " ")
  // Add a double-space after each sentence/period
  .replaceAll(/\.\s+/g, ".  ")
  .trim();

/** ### Paragraph - Text body */
const SummarySection: FC = () => (
  <View style={styles.section}>
    <Text style={styles.text}>{textContent}</Text>
  </View>
);

export default SummarySection;
