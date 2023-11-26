import React from "react";
import { Container } from "@/components/ui/Container";
import { Billboard } from "@/components/Billboard";
import { getBillboard } from "@/actions/getBillboard";
import { getProducts } from "@/actions/getProducts";
import { ProductList } from "@/components/ProductList";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("a6e90057-f3bc-454c-9ec6-0181c37e81e8");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />

        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" products={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
