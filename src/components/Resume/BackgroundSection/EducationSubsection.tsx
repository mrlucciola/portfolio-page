import { type FC } from "react";
import { StyleSheet, Text, View } from "@react-pdf/renderer";
// config
import { pdfDefaultStyles } from "../config";

const styles = StyleSheet.create({
  section: {
    ...pdfDefaultStyles.section,
    //
  },
  text: { fontSize: 10 },
});

/** ###  */
const EducationSubsection: FC = () => {
  return (
    <View style={styles.section}>
      <Text>Section #2</Text>
    </View>
  );
};

export default EducationSubsection;
