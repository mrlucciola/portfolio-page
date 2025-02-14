import { type FC } from "react";
import { StyleSheet, Text, View } from "@react-pdf/renderer";
// types
import type { Education } from "./types";

const styles = StyleSheet.create({
  // Category-item layout
  education: { flexDirection: "column", flexWrap: "nowrap", gap: 2, fontSize: 9 },

  // Title + subtitle
  titleGroup: { flexDirection: "row", flexWrap: "nowrap", gap: 2 },
  // Title of education
  title: { fontWeight: 700 },
  // Subtitle of education
  subtitle: { fontWeight: 400 },

  // Group of items
  itemGroup: { flexDirection: "column", flexWrap: "nowrap" },
  // Individual item
  item: {},
});

const EducationSubItem: FC<{ item: Education["items"][number] }> = ({ item }) => (
  <Text style={styles.item}>{item}</Text>
);

/** ###
 * 1. Title:
 *   - Name of institution
 *   - Location
 * 2. List of items within the category
 */
const EducationItem: FC<Education> = ({ title, items, subtitle }) => {
  const educationSubItemElems = items.map((item) => <EducationSubItem item={item} />);

  return (
    <View style={styles.education}>
      <View style={styles.titleGroup}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <View style={styles.itemGroup}>{educationSubItemElems}</View>
    </View>
  );
};

export default EducationItem;
