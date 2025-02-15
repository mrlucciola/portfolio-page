import { type FC, type PropsWithChildren } from "react";
import { Link, StyleSheet, Text, View, type LinkProps, type TextProps } from "@react-pdf/renderer";
// config
import { pdfDefaultStyles } from "./config";

const styles = StyleSheet.create({
  section: {
    ...pdfDefaultStyles.section,
    //
    alignItems: "center",
  },
  name: {
    fontSize: 16,
  },
  detail: {
    fontSize: 10,
    flexDirection: "row",
    columnGap: 4,
  },

  link: {
    textDecoration: "underline",
  },
});

/** Convenience wrapper which defaults to `href` if no text or child element is provided */
const PdfLink: FC<PropsWithChildren<LinkProps> & { text?: string }> = ({
  text,
  children,
  ...props
}) => <Link {...props}>{text ?? children ?? props.href}</Link>;

type HorizDividerProps = PropsWithChildren<TextProps> & { char?: string };
const HorizDivider: FC<HorizDividerProps> = ({ char = "-", ...props }) => (
  <Text {...props}>{char}</Text>
);

const PersonalInfoSection: FC = () => (
  <View style={styles.detail}>
    <Text>New York, NY 10014</Text>
    <HorizDivider />
    <Text>(973) 444-4025</Text>
    <HorizDivider />
    <Text>mrl@mrlucciola.com</Text>
  </View>
);

/** Horizontal-oriented section displaying resources */
const LinksSection: FC = () => (
  <View style={styles.detail}>
    <PdfLink href="https://linkedin.com/in/mrlucciola" />
    <HorizDivider />
    <PdfLink href="https://github.com/mrlucciola" />
  </View>
);

/** ### Layout of the header section */
const HeaderSection: FC = () => (
  <View style={styles.section}>
    <Text style={styles.name}>Rocco Lucciola</Text>
    <PersonalInfoSection />
    <LinksSection />
  </View>
);

export default HeaderSection;
