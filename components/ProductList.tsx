import { Product } from "@/types";
import { NoResult } from "@/components/ui/NoResult";
import { ProductCard } from "@/components/ui/ProductCard";

interface Props {
  title: string;
  products: Product[];
}

export const ProductList = ({ title, products }: Props) => {
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-3xl">{title}</h3>

      {products.length === 0 ? <NoResult /> : null}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};
