import { z } from "zod";

export const deleteProductSchema = z.object({
  id: z.string(),
});

export type DeleteProductSchema = z.infer<typeof deleteProductSchema>;
