import { PlusIcon } from "lucide-react";
import { Button } from "../_components/ui/button";
import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { productTableColumns } from "./_components/table-columns";

const ProductsPage = async () => {
  const products = await db.product.findMany({});
  return (
    <div className="space-y8 w-full p-8">
      <div className="mb-5 flex w-full items-center justify-between">
        <div className="space-y-1">
          <span className="text-xs font-semibold">Gestão de Produtos</span>
          <h2 className="mb-2 text-xl font-semibold">Produtos</h2>
        </div>
        <Button className="gap-2">
          <PlusIcon size={20} />
          Novo produto
        </Button>
      </div>
      <DataTable columns={productTableColumns} data={products} />
    </div>
  );
};

export default ProductsPage;
