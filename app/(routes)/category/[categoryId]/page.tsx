import { getCategory } from "@/actions/getCategory";
import { getColors } from "@/actions/getColors";
import { getProducts } from "@/actions/getProducts";
import { getSizes } from "@/actions/getSizes";
import { Billboard } from "@/components/Billboard";
import { Filter } from "@/app/(routes)/category/[categoryId]/_components/Filter";
import { Container } from "@/components/ui/Container";
import { NoResult } from "@/components/ui/NoResult";
import { ProductCard } from "@/components/ui/ProductCard";
import { MobileFilters } from "./_components/MobileFilters";

export const revalidate = 0;

interface Props {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId: string;
    sizeId: string;
  };
}

const CategoryPage: React.FC<Props> = async ({ params, searchParams }) => {
  const products = await getProducts({
    categoryId: params.categoryId,
    sizeId: searchParams.sizeId,
    colorId: searchParams.colorId,
  });

  const sizes = await getSizes();
  const colors = await getColors();
  const category = await getCategory(params.categoryId);

  return (
    <div className="bg-white">
      <Container>
        <Billboard data={category.billboard} />

        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilters sizes={sizes} colors={colors} />
            
            <div className="hidden lg:block">
              <Filter name="Sizes" valueKey="sizeId" data={sizes} />
              <Filter name="Colors" valueKey="colorId" data={colors} />
            </div>

            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 ? <NoResult /> : null}

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((product) => (
                  <ProductCard key={product.id} data={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
