import { z } from "zod";

export const SkillOrTool = z.object({
  title: z.string(),
  items: z.array(z.string().min(1)),
});
export type SkillOrTool = z.infer<typeof SkillOrTool>;

export const Education = z.object({
  title: z.string(),
  subtitle: z.string(),
  items: z.array(z.string()),
});
export type Education = z.infer<typeof Education>;
