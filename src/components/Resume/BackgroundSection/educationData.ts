import { z } from "zod";
// types
import { Education } from "./types";

// This var determines the order in which the items are displayed
export const EducationKey = z.enum([
  "Bucknell University",
  "General Assembly",
  "The Pingry School",
]);
export type EducationKey = z.infer<typeof EducationKey>;

export const education: { [key in EducationKey]: Omit<Education, "title"> } = {
  [EducationKey.enum["Bucknell University"]]: {
    subtitle: "(Lewisburg, PA)",
    items: ["B.S. Neuroscience (Pre-Med), Class of 2017", "T.A. Chemistry"],
  },
  [EducationKey.enum["General Assembly"]]: {
    subtitle: "(New York, NY)",
    items: ["Full-stack Software Engineer Certificate, 2019"],
  },
  [EducationKey.enum["The Pingry School"]]: {
    subtitle: "(Basking Ridge, NJ)",
    items: [],
  },
};

// `education` in array form
export const educationArr: Education[] = EducationKey.options.map((s) => ({
  title: s,
  subtitle: education[s].subtitle,
  items: education[s].items,
}));
