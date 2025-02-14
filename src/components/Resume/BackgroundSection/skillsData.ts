import { z } from "zod";
import { SkillOrTool } from "./types";

// This var determines the order in which the items are displayed
export const SkillsToolsKey = z.enum([
  "General",
  "Fullstack",
  "Frontend",
  "Backend & Systems",
  "Databases",
  "DevOps",
]);
export type SkillsToolsKey = z.infer<typeof SkillsToolsKey>;

export const skills: { [key in SkillsToolsKey]: SkillOrTool["items"] } = {
  General: [
    "Engineering & architecture",
    "Webapp & web3 development",
    // "Webapp development", "web3 development",
    "Distributed systems",
  ],

  Fullstack: ["Typescript/Javascript", "Remix.run", "Next.js"],

  Frontend: ["React.js", "MobX", "Redux.js", "MaterialUI", "D3.js"],

  "Backend & Systems": [
    "REST + GraphQL APIs",
    "Node.js - Express.js, Nest.js",
    // "Node.js", "Express.js", "Nest.js",
    "Rust",
    "Python",
    "Solidity",
  ],

  Databases: ["MongoDB", "PostgreSQL", "Redis"],

  DevOps: [
    "Git",
    "Github Actions",
    "Docker + K8s",
    "Terraform",
    "AWS",
    "DigitalOcean",
    "Azure",
    "Institutional key management",
  ],
};

// `skills` in array form
export const skillsArr: SkillOrTool[] = SkillsToolsKey.options.map((s) => ({
  title: s,
  items: skills[s],
}));
