import { z } from "zod";

export const SkillOrTool = z.object({
  title: z.string(),
  items: z.array(z.string().min(1)),
});
export type SkillOrTool = z.infer<typeof SkillOrTool>;
