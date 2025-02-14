import { type FC } from "react";
import { StyleSheet, View } from "@react-pdf/renderer";
// layout components
import EducationItem from "./EducationItem";
// config
import { pdfDefaultStyles } from "../config";
import { educationArr } from "./educationData";

const styles = StyleSheet.create({
  section: {
    ...pdfDefaultStyles.section,
    //
  },
  text: { fontSize: 10 },
});

/** ###
 * Bucknell University (Lewisburg, PA)
 * - B.S. Neuroscience (Pre-Med), Class of 2017
 * - T.A. Chemistry
 * General Assembly (New York, NY)
 * - Full-stack Software Engineer Certificate, 2019
 * The Pingry School (Basking Ridge, NJ)
 */
const EducationSubsection: FC = () => {
  const educationElems = educationArr.map((e) => <EducationItem {...e} />);

  return <View style={styles.section}>{educationElems}</View>;
};

export default EducationSubsection;
