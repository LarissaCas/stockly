import z from "zod";

export const createProductSchema = z.object({
  name: z.string().trim().min(1, {
    message: "O nome do produto é obrigatório.",
  }),
  price: z.number().min(0.01, {
    message: "O preço do preço é obrigatório.",
  }),
  stock: z.coerce
    .number()
    .positive({
      message: "A quantidade em estoque deve ser positiva.",
    })
    .int()
    .min(0, {
      message: "A quantidade em estoque é obrigatória.",
    }),
});

export type CreateProductSchema = z.infer<typeof createProductSchema>;
