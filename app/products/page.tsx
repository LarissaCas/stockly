import { DataTable } from "../_components/ui/data-table";
import { productTableColumns } from "./_components/table-columns";
import { getProducts } from "../_data-access/products/get-products";
import { AddProductButton } from "./_components/add-product-button";

const ProductsPage = async () => {
  const products = await getProducts();
  return (
    <div className="space-y8 w-full p-8">
      <div className="mb-5 flex w-full items-center justify-between">
        <div className="space-y-1">
          <span className="text-xs font-semibold">Gestão de Produtos</span>
          <h2 className="mb-2 text-xl font-semibold">Produtos</h2>
        </div>
        <AddProductButton />
      </div>
      <DataTable
        columns={productTableColumns}
        data={JSON.parse(JSON.stringify(products))}
      />
    </div>
  );
};

export default ProductsPage;
