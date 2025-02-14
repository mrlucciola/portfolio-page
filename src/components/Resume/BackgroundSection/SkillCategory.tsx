import { type FC } from "react";
import { StyleSheet, Text, View } from "@react-pdf/renderer";
// types
import type { SkillOrTool } from "./types";

const styles = StyleSheet.create({
  // Category-item layout
  category: { flexDirection: "row", flexWrap: "nowrap", gap: 2, fontSize: 9 },
  // Title of category
  title: { fontWeight: 700 },
  // Group of items
  itemGroup: { flexDirection: "row", flexWrap: "wrap" },
  // Individual item
  item: {},
});

const CategoryItem: FC<{ item: SkillOrTool["items"][number] }> = ({ item }) => (
  <Text style={styles.item}>{item}</Text>
);

/** ###
 * 1. Title of category
 * 2. List of items within the category
 */
const SkillCategory: FC<SkillOrTool> = ({ title, items }) => {
  const categoryItemElems = items.map((item) => <CategoryItem item={item} />);

  return (
    <View style={styles.category}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.itemGroup}>{categoryItemElems}</View>
    </View>
  );
};

export default SkillCategory;
