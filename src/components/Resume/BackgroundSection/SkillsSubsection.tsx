import { type FC } from "react";
import { StyleSheet, View } from "@react-pdf/renderer";
// layout components
import SkillCategory from "./SkillCategory";
// config
import { pdfDefaultStyles } from "../config";
import { skillsArr } from "./data";

const styles = StyleSheet.create({
  section: {
    ...pdfDefaultStyles.section,
    //
  },
});

/** ###
 * 1. <Header />
 * 2. <Category />
 *
 * ## Info:
 * - General: Engineering & architecture; Webapp & web3 development; Distributed systems
 * - Full stack: Typescript/Javascript, Remix.run, Next.js
 * - Frontend: React.js; MobX, Redux.js; MaterialUI; D3.js
 * - Backend & Systems: REST + GraphQL APIs; Node.js – Express.js, Nest.js; Rust; Python; Solidity
 * - Databases: MongoDB; PostgreSQL; Redis
 * - DevOps: Git; Github Actions; Docker + K8s; Terraform; AWS, DigitalOcean, Azure; Institutional key management
 */
const SkillsSubsection: FC = () => {
  // Build components
  const skillElems = skillsArr.map((s) => <SkillCategory {...s} />);

  return <View style={styles.section}>{skillElems}</View>;
};

export default SkillsSubsection;
