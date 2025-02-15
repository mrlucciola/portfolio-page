import { type FC } from "react";
import { StyleSheet, View } from "@react-pdf/renderer";
// layout components
import EducationSubsection from "./EducationSubsection";
import SkillsSubsection from "./SkillsSubsection";
// config
import { pdfDefaultStyles } from "../config";

const styles = StyleSheet.create({
  section: {
    ...pdfDefaultStyles.section,
    //
    flexDirection: "row",
  },
});

/** ###  */
const BackgroundSection: FC = () => (
  <View style={styles.section}>
    <EducationSubsection />
    <SkillsSubsection />
  </View>
);

export default BackgroundSection;
