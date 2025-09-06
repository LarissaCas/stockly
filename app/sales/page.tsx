import { ComboboxOption } from "../_components/ui/combobox";
import { getProducts } from "../_data-access/products/get-products";
import CreateSaleButton from "./_components/create-sale-button";

const SalesPage = async () => {
  const products = await getProducts();
  const productOptions: ComboboxOption[] = products.map((product) => ({
    label: product.name,
    value: product.id,
  }));
  return (
    <div className="space-y8 w-full p-8">
      <div className="mb-5 flex w-full items-center justify-between">
        <div className="space-y-1">
          <span className="text-xs font-semibold">Gestão de Vendas</span>
          <h2 className="mb-2 text-xl font-semibold">Vendas</h2>
        </div>
        <CreateSaleButton products={products} productOptions={productOptions} />
      </div>
      {/* <DataTable
        columns={productTableColumns}
        data={JSON.parse(JSON.stringify(products))}
      /> */}
    </div>
  );
};

export default SalesPage;
