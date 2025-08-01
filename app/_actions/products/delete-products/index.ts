"use server";

import { db } from "@/app/_lib/prisma";
import { DeleteProductSchema, deleteProductSchema } from "./schema";
import { revalidatePath } from "next/cache";

export const DeleteProduct = async ({ id }: DeleteProductSchema) => {
  deleteProductSchema.parse({ id });
  await db.product.delete({
    where: {
      id,
    },
  });
  revalidatePath("/products");
};
